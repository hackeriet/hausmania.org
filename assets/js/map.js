$(function () {
  // Leaflet
  var mymap = L.map('map').setView([59.919231, 10.752149], 16);
  var logo = L.icon({
    iconUrl: 'assets/img/logo.svg',
    iconSize: [48, 48],
    popupAnchor:[0, -25],
    shadowUrl:'assets/img/shadow.svg',
    shadowSize:[80, 80],
    shadowAnchor:[35, 35]
  });
  var marker = L.marker([59.919219,10.752117], {icon: logo}).addTo(mymap);

  mymap.scrollWheelZoom.disable();
  marker.bindPopup("<b>Hausmania</b><br>Hausmannsgate 34");
  L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
    maxZoom: 18,
  }).addTo(mymap);
})
