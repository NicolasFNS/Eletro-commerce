// configurção do mapa
var map = L.map('map').setView([-3.732468, -38.519695], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
    var marker = L.marker([-3.732468, -38.519695]).addTo(map).bindPopup('<b>Moldsoft Tecnologia</b><br>Eficência operacional.').openPopup();

