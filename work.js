$(document).ready(function() {
  var key = "AIzaSyASP1mnpE7kEr61nps5HENH7sf5hRISbGo";
  var playlistId = "PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB";
  var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

  var options = {
    part: "snippet",
    key: key,
    maxResults: 20,
    playlistId: playlistId
  };

  loadVids();

  function loadVids() {
    $.getJSON(URL, options, function(data) {
      var id = data.items[0].snippet.resourceId.videoId;
      mainVid(id);
      resultsLoop(data);
    });
  }

  function mainVid(id) {
    $("#video").html(`
					<iframe width="900" height="400" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
  }
  function resultsLoop() {
    $("main").html(`
      <article>
      <img src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg" alt=""            class="thumb">
      <div class="description">
      <h4>Title</h4>
      <p>This is the description</p>
      </div>
      </article>
   `);
  }

  function resultsLoop(data) {
    $.each(data.items, function(i, item) {
      var thumb = item.snippet.thumbnails.medium.url;
      var title = item.snippet.title;
      var desc = item.snippet.description.substring(0, 100);
      var vid = item.snippet.resourceId.videoId;

      $("main").append(`
							<article class="item" data-key="${vid}">

								<img src="${thumb}" alt="" class="thumb">
								<div class="details">
									<h4>${title}</h4>
									<p>${desc}</p>
								</div>

							</article>
						`);
    });
  }

  // CLICK EVENT
  $("main").on("click", "article", function() {
    var id = $(this).attr("data-key");
    mainVid(id);
  });
});

$(document).ready(function() {
  var key = "AIzaSyASP1mnpE7kEr61nps5HENH7sf5hRISbGo";
  var playlistId = "PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB";
  var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

  var options = {
    part: "snippet",
    key: key,
    maxResults: 20,
    playlistId: playlistId
  };

  loadVids();

  function loadVids() {
    $.getJSON(URL, options, function(data) {
      var id = data.items[0].snippet.resourceId.videoId;
      mainVid(id);
      resultsLoop(data);
    });
  }

  function mainVid(id) {
    $("#video").html(`
					<iframe width="900" height="400" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
  }
  function resultsLoop() {
    $("main").html(`
      <article>
      <img src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg" alt=""            class="thumb">
      <div class="description">
      <h4>Title</h4>
      <p>This is the description</p>
      </div>
      </article>
   `);
  }

  function resultsLoop(data) {
    $.each(data.items, function(i, item) {
      var thumb = item.snippet.thumbnails.medium.url;
      var title = item.snippet.title;
      var desc = item.snippet.description.substring(0, 100);
      var vid = item.snippet.resourceId.videoId;

      $("main").append(`
							<article class="item" data-key="${vid}">

								<img src="${thumb}" alt="" class="thumb">
								<div class="details">
									<h4>${title}</h4>
									<p>${desc}</p>
								</div>

							</article>
						`);
    });
  }

  // CLICK EVENT
  $("main").on("click", "article", function() {
    var id = $(this).attr("data-key");
    mainVid(id);
  });
});
