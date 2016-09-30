(function() {
  'use strict';
  var url = 'https://graph.facebook.com/v2.7/picassol/photos?limit=20&fields=images,name,link&type=uploaded&access_token=335193203496689|xhM9yugkBpN8KBuibdZBsVm0vdY';
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
    var html = photos.map(function(photo) {
      var url = photo.images[photo.images.length - 1].source;
      return '<div class="photo-container"><a href="' + photo.link + '"><img class="photo-image" src="' + url + '"></a><p class="photo-caption">' + (photo.name || '') + '</p></div>';
    }).join('');
    container.innerHTML = html;
  }

  function displayError() {
    container.innerHTML = '<p>Error loading photos, sorry!</p>';
  }
})();
