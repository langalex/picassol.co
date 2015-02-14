require 'json'
require 'date'
require 'time'
require 'fileutils'
require 'open-uri'
require 'nokogiri'
require 'yaml'

def fetch_photo(post)
  url = post[:alt_sizes][0][:url]
  save_photo(url)
end

def save_photo(url)
  path = "tumblr_files/#{url.split('/').last}"
  FileUtils.mkdir_p "tumblr_files"

  # Don't fetch if we've already cached this file
  unless File.size? path
    puts "Fetching photo #{url}"
    File.open(path, "w") { |f| f.write(open(url).read) }
  end
  url = "/" + path
end

FileUtils.mkdir_p "photos"
posts = Dir['./posts_json/*'].map{|f| JSON.parse(File.read(f), symbolize_names: true)}

posts.each do |post|
  header = {}
  case post[:type]
  when "text"
    title = post[:title]
    content = post[:body]
  when "link"
    title = post[:title]
    header[:url] = post[:url]
    header[:description] = post[:description]
  when "photo"
    title = post[:caption].gsub(/\[([^\]]+)\]\([^\)]+\)/, '\1')
    header[:caption] = post[:caption]
    post[:photos].each do |post_photo|
      photo = fetch_photo post_photo
      header[:photos] ||= []
      header[:photos] << {url: photo, caption: post_photo[:caption]}
    end
    if photo=  post[:photos][0]
      header[:photo] = fetch_photo(photo)
    end
  when "quote"
    title = post[:text]
    content = post[:text].gsub(/^/, '> ')
    unless post[:source].nil?
      content << "&#8212; " + post[:source]
    end
  when "video"
    title = post[:caption]
    header[:caption] = post[:caption]
    header[:player] = post[:player].last[:embed_code]
    header[:url] = post[:permalink_url]
  else
    raise "unknown post type #{post[:type]}"
  end

  header.merge!(
    layout: post[:type],
    date: Time.parse(post[:date]).xmlschema,
    tags: (post[:tags] || [])
  )
  date = Date.parse(post[:date]).to_s
  header[:title] = title = Nokogiri::HTML(title).text
  header[:slug] = slug = if post[:slug] && post[:slug].strip != ""
    post[:slug]
  else
    slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
    slug.length > 200 ? slug.slice(0..200) : slug
  end
  filename = "_posts/#{date}-#{slug}.md"
  File.open filename, 'w' do |f|
    f.puts JSON.parse(header.to_json).to_yaml + "---\n" + content.to_s
  end
end
