const myAPIEndpoint = 'https://johntre.herokuapp.com/posts';

const getData = () => {
    fetch(myAPIEndpoint)
        .then(response => response.json())
        .then(data => {
            // 3. print the results to the screen
            const container = document.querySelector('.results');
            container.innerHTML = '';
            for (item of data) {
                container.innerHTML += generateEntryHTML(item);
            }
            attachDeleteEventHandlers();
        });
};

const generateEntryHTML = (post) => {
    return `
    <div class="card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <p>
            <a data-id="${post.id}" href="#" class="delete">delete</a>
        </p>
    </div>
    `;
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
