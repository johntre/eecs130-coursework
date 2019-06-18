const getservicerequests = () => {
  fetch('https://helpinghandfinal.herokuapp.com/user')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const container = document.querySelector('#output');
        container.innerHTML = '';
        for (service of data) {
          const marker = L.marker([service.lat, service.long]).addTo(mymap);
          marker.bindPopup(getbubbletemplate(service)).openPopup();
        }
        for (service of data) {
          container.innerHTML += displayRequests(service);
        }
    });
}
const getbubbletemplate= (sr) => {
  return `<strong>${sr.name}, (${sr.service_type}),(${sr.time_created})</strong><br>
        <p> Hello, ${sr.name} wants ${sr.service_type} for $${sr.price}! </p>
        Address: ${sr.address}`;

};
const mymap = L.map('mapid').setView([42.06111015, -87.6778000436384], 11);

L.tileLayer.provider('Stamen.Terrain').addTo(mymap);

const displayRequests = (sr) => {
  return `
  <p>${sr.name} wants ${sr.service_type} for $${sr.price}</p>
  `;
};


getservicerequests();
