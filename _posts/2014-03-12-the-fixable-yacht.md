---
layout: text
date: '2014-03-12T10:05:56+01:00'
tags:
- auto pilot
- open source
- sailing
- yacht
- electronics
- marine
title: The fixable yacht
slug: the-fixable-yacht
---
As a regular reader of segelreporter.com, last week I [stumbled upon this post](http://segelreporter.com/panorama/bootsbau-entwicklung-eines-kleinkreuzers/) (German) about a bunch of people having started to design their own boat. The plan is to make it around 25ft long, fast, fun and ocean going; and the design is going to be open source, which means anyone will be able to use it to either build their own boat, as a basis for a modified design etc.

Now there's a bit of a controversy in the comments about whether it actually makes sense to start yet another boat design project. As a developer who works with a ton of open source tech every day, I can only welcome these efforts though. The marine industry is largely stuck in the pre internet age (no I'm not talking about on-board wifi) and IMHO could really use some innovation, and that is surely not going to come from the big manufacturers.

After thinking about the whole project for a few days my mind started to connect a few dots that had gotten me thinking about before: In the past year I've been reading and watching quite a few [stories of solo sailors and their adventures](http://picassol.co/post/67297627040/reading-corner-vendee-globe) - and problems. Problems can be of various kinds, for example crew problems, (nearly) colliding with other vessels, seasickness, mechanical failure, and (drumroll) problems with electronics. And in all the stories the pattern was always the same: if there was a problem with anything but the electronics someone somehow managed to fix it, be it with tape, pills or a drill - if there was a problem with an electronic part the boat always had to go back to land and find someone who could fix or replace it. In a lot of cases the failing piece of electronics was the auto pilot, which made it even worse, especially for solo sailors.

Which brings me back to the connected dots: boat electronics and open source. One of the reasons why most of these electronics problems are not fixable is that electronic gear comes in [black boxes](http://en.wikipedia.org/wiki/Black_box) (literally). When you buy an auto pilot you get a few locked up boxes full of electronics (and the mechanical parts). You install them and trust the manufacturer that they will work forever (ha ha). Maybe you buy two of them, so that when one fails you can switch over to the other. But then, that's all you can do.

Wouldn't it be cool if you were able to fix your auto pilot almost like you can fix a tear in a sail or a broken spinnaker pole? Or if you could improve its performance (or hire someone to do it). If we had more open electronics we could. Now there's obviously a hardware and a software part to it. Ideally both of them would be open and accessible, but even just open software and the ability to connect different hardware modules would be a big step forward. First of all you would be able to set up a system that matches your needs, i.e. if you are going to sail the Vendée Globe you probably want three sets of sensors. If one gives you funny data the pilot can take the data from the two remaining. After the second fails you still have one left, and after that is gone, too, heck you want to be able to hook it up to your smartphone's giros. While all that is happening you can look into every part of the system (or have someone on land do it) in order to figure out what's wrong. Instead of switching to a second pilot you could actually see what's wrong and reconfigure your system - or it could do that on its own. Wouldn't that be cool?

Now I realize what I'm describing doesn't necessarily depend on an open source system. If a commercial manufacturer was to build a kick-ass auto pilot that would let you get access to all its data, let you combine any modules you want, configure it in any way you want and hook it up to your 5-year-old phone and let you do all the other weird things you want then that would totally solve the problem. But they haven't (and maybe they shouldn't for warranty or insurance reasons).

So it's up to us to help ourselves. I know building an auto pilot isn't the kind of project you can whip up on an afternoon, but hey, Linux wasn't made in a day either. Neither will be that boat project.
