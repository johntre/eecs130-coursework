const myAPIEndpoint = 'https://johntre.herokuapp.com/photos';

const getData = () => {
    fetch(myAPIEndpoint)
        .then(response => response.json())
        .then(data => {
            // 3. print the results to the screen
            const container = document.querySelector('.results');
            container.innerHTML = '';
            for (item of data) {
                container.innerHTML += generateEntryHTML(item)
            }
            attachDeleteEventHandlers();
        });
};

const generateEntryHTML = (photo) => {
    return `
        <div class="card">
          <img src= "${photo.url}"/>
            <p>${photo.caption}</p>
            <p>
                <a data-id="${photo.id}" href="#" class="delete">delete</a>
            </p>
        </div>`;
};

const attachDeleteEventHandlers = () => {
    for (link of document.querySelectorAll('.delete')) {
        link.onclick = deleteEntry;
    }
};

const deleteEntry = (ev) => {
    const id = ev.target.getAttribute('data-id');
    fetch(myAPIEndpoint + '/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        getData();
    });
    return ev.preventDefault();
}

getData();
