import 'leaflet'

function contactView() {
    console.log('contact entered')
    let subContainer = document.getElementById('belowTheNavbar')
    subContainer.innerHTML = ''
    let title = document.createElement('h2')
    title.innerHTML = 'Contact Us'

    subContainer.appendChild(title)

    let address = document.createElement('p')
    address.id = 'address'
    address.innerHTML = '53 A, Kazi Sayed Street, Chinch Bunder <br> Mumbai, Maharashtra 400009 <br> Ph number: 02223445579'
    subContainer.appendChild(address)

    let mapSection = document.createElement('div')
    mapSection.id = 'mapid'
    subContainer.appendChild(mapSection)
    var mymap = L.map('mapid').setView([19.0760, 72.8777], 13);
    var customDefault = L.icon({
        iconUrl: './images/marker-icon.png',
        shadowUrl: './images/marker-shadow.png',
    });
    var marker = L.marker([19.0760, 72.8777], {icon:customDefault}).addTo(mymap);
    marker.bindPopup("<b>Hi! Come visit us here!</b>")
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmVhbGFraGlsYmFidSIsImEiOiJja2s5a2JqYmgweWg1MnZwYjJjMnNxdHF1In0.kyzeyOOquFHWrW-f2B9pCw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmVhbGFraGlsYmFidSIsImEiOiJja2s5a2JqYmgweWg1MnZwYjJjMnNxdHF1In0.kyzeyOOquFHWrW-f2B9pCw'
    }).addTo(mymap);


}

export {contactView}