// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .

function makeGmap(id, prop) {
  return new google.maps.Map(document.getElementById(id), prop);
}

function makeGmapMarker(map, option) {
  new google.maps.Marker(option).setMap(map);
}

function makeGmapLatlng(lat, lng) {
  return new google.maps.LatLng(lat, lng);
}

function initMapsShowGmap() {
  const prop = {
    center: makeGmapLatlng(35.729503, 139.710900),
    zoom: 16,
  };
  const map = makeGmap('gmap', prop);
  makeGmapMarker(map, { position: prop.center });
}
