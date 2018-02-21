var map = L.map('contact-map', { zoomControl: false, attributionControl: false }).setView([-37.796407, 175.277832], 15);

L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: '<a href="http://stamen.com"></a>, <a href="http://creativecommons.org/licenses/by/3.0"></a> <a href="http://www.openstreetmap.org/copyright"></a>',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'png'
}).addTo(map);

L.control.attribution({position: 'bottomleft'}).addTo(map);

map.panBy([106, 0], { animate: false });
