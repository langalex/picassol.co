(function() {
  'use strict';
  var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLHjKtS809N7cAypvX7Y4JNHkx9MlQ6w0J&key=AIzaSyAjPrsBABbjRqo5BGRkHnBP9px2Pgfo7MA';
  var container = document.getElementById('boat-building-videos-container');
  loadVideos();

  function loadVideos() {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        displayVideos(this.response);
      } else {
        displayError();
      }
    };

    request.onerror = function() {
      displayError();
    };

    request.send();
  }

  function displayVideos(response) {
    var photos = JSON.parse(response).items;
    var html = photos.map(videoHtml).join('');
    container.innerHTML = html;
  }

  function videoHtml(video) {
    return '<div class="video-container video-16-9">' +
      '<iframe src="https://www.youtube.com/embed/' + video.snippet.resourceId.videoId + '" frameborder="0" allowfullscreen>' +
      '</iframe>' +
    '</div>' +
    '<p>' + video.snippet.description + '</p>';
  }

  function displayError() {
    container.innerHTML = '<p>Error loading videos, sorry!</p>';
  }
})();
