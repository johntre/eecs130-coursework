const myAPIEndpoint = 'https://zurilafinal.herokuapp.com/users';

const addNewUser = () => {
  document.querySelector('.success').className = 'successactive';

  const fullname = document.querySelector('#full_name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  fetch(myAPIEndpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "fullname": fullname,
      "email": email,
      "password": password,
    })
  })
  .then(response => console.log(response))
  .then(data => {
    console.log(data);
  });
  document.getElementById('my_form').reset();

};

// const success = () => {
//   document.querySelector('.success').className = 'successactive';
// };

document.querySelector('button').onclick = addNewUser;
// document.querySelector('button').onclick = success;
// document.getElementById('my_form').reset();
