const myAPIEndpoint = 'https://helpinghandfinal.herokuapp.com/user';
// const geocode = (address) => {
//
//   const url = 'https://nominatim.openstreetmap.org/search.php?q=' + address + ' &format=jsonv2';
//    fetch(url)
//       .then(resp => resp.json())
//       .then(data => {
//          const coords = {
//             lat: data[0].lat, lng: data[0].lon
//            }
//            console.log(coords);
//           });
//
// };
// geocode('2400 Sheridan Rd, Evanston, IL');
const geocode_thenadduser = ()=> {
  const address = document.querySelector('#address').value;
  const url = 'https://nominatim.openstreetmap.org/search.php?q=' + address + ' &format=jsonv2';
  fetch(url)
     .then(resp => resp.json())
     .then(data => {
        const coords = {
           lat: data[0].lat, long: data[0].lon
          }
          console.log(coords);
          addNewUser(coords.lat,coords.long)
        });


};
const addNewUser = (lat,long) => {
    // 1. get user-generated data:
    const name = document.querySelector('#name').value;
    const stype = document.querySelector('#service_type').value;
    const price = document.querySelector('#price').value;
    const email = document.querySelector('#email').value;
    const address = document.querySelector('#address').value;
    console.log('name',name,'stype',stype,'price',price,'email',email,'addreses',address)
    // 2. post it to the endpoint:
    fetch(myAPIEndpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "service_type": stype,
            "email": email,
            "price": price,
            "address": address,
            "lat": lat,
            "long": long,
            "time_created":new Date()
        })
    })
    .then(response => console.log(response))
    .then(data => {
        // 3. print the results to the screen
        console.log(data);
    });
};

// 4. attach function to button:
document.querySelector('button').onclick = geocode_thenadduser;
