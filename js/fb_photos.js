(function() {
  'use strict';
  var url = 'https://graph.facebook.com/v2.7/picassol/photos?limit=20&fields=created_time,images,name,link&type=uploaded&access_token=335193203496689|xhM9yugkBpN8KBuibdZBsVm0vdY';
  var container = document.getElementById('fb-photos');

  loadPhotos();

  function loadPhotos() {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        displayPhotos(this.response);
      } else {
        displayError();
      }
    };

    request.onerror = function() {
      displayError();
    };

    request.send();
  }

  function displayPhotos(response) {
    var photos = JSON.parse(response).data;
    var groups = groupPhotos(photos);
    var html = groups.map(groupHtml).join('');
    container.innerHTML = html;
  }

  function groupHtml(photos) {
    return '<div class="photo-group">' +
      '<h3 class="photo-group-title">' + photos[0].created_time.substr(0, 10) + '</h3>' +
      '<div class="photos-container">' + photos.reverse().map(photoHtml).join('') + '</div>' + // reverse: to that oldest comes first, facebook returns oldest last
      '</div>';
  }

  function photoHtml(photo) {
    var url = photo.images[photo.images.length - 1].source;
    return '<div class="photo-container">' +
      '<a href="' + photo.link + '">' +
      '<img class="photo-image" src="' + url + '">' +
      '</a><p class="photo-caption">' + (photo.name || '') + '</p></div>';
  }

  function groupPhotos(photos) {
    var groups = [], photo;
    photos.forEach(function(photo) {
      var group = findGroup(groups, photo.created_time);
      if(!group) {
        group = [];
        groups.push(group);
      }
      group.push(photo);
    });
    return groups;
  }

  function findGroup(groups, time) {
    if(groups.length === 0) { return; }
    var FIVE_MINUTES = 5 * 60 * 1000, i;
    for(i in groups) {
      if(Math.abs(new Date(groups[i][0].created_time) - new Date(time)) < FIVE_MINUTES) {
        return groups[i];
      }
    }
  }

  function displayError() {
    container.innerHTML = '<p>Error loading photos, sorry!</p>';
  }
})();
