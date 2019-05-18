const search = (ev) => {
    let artist = document.querySelector('input').value;
    let url = `https://www.apitutor.org/spotify/simple/v1/search?q=${artist}&type=track`;
    // input=(document.querySelector('input').value)






    // data=spotify.get_artists(search_term)
    // let url = 'https://www.apitutor.org/spotify/simple/v1/search?q='
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {

    // for (item of data) {
    //
    //   let template= `<p>${item.name}`;\
    //   document.querySelector('#container').innerHTML
    // }
    console.log(data);
    document.querySelector('#output').innerHTML = "";

    for (item of data){
      console.log(item.preview_url)
      if(item.preview_url==null){
        const template= `
            <div class="card">
            <p>${item.name} </p>
            <img class='photo' src = '${item.album.image_url}' />

        </div>
        `;
        document.querySelector('#output').innerHTML += template;
      } else {
        const template= `
            <div class="card">
            <p>${item.name} </p>
            <img class='photo' src='${item.album.image_url}' />
            <audio controls src="${item.preview_url}" ></audio>

        </div>
        `;
        document.querySelector('#output').innerHTML += template;
      }

    // const template= `
    //
    //     <div class="card">
    //     <img src = '${item.album.image_url}' />
    //     <audio controls src = "${item.preview_url}" ></audio>
    //
    //
    //
    // <p>${item.name} </p>
    // </div>
    //
    // `;
    // console.log(template);

  }

};


document.querySelector('#search').onclick = search;
