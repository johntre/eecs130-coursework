const showPhoto = (e) => {
    // figure out which element the user clicked from the event object:
    const clickedElement = e.target;
    // figure out what its background image is:
    const imgURL = clickedElement.style.backgroundImage;

  document.querySelector('.featured_image').style.backgroundImage= imgURL;
  // console.log(imgURL)
  document.querySelector('.preview_box').className = 'preview_box active';
    // PART 1:
    // 1. set the featured_image element's backgroundImage property
    //    to the imgURL associated with the image the user just clicked
    //    the photo the user just clicked on.
    // 2. add the active class to the preview_box element so that the card
    //    becomes visible to the user.
};

// PART 2: Replace this code with what's commented below.
//         Instead of just applying the event handler to
//         the first .card element, you want to apply it to
//         all of the card elements
// document.querySelector('.card').onclick = showPhoto;
const cards = document.querySelectorAll('.card');
  for (card of cards) {
  card.onclick = showPhoto;
};



// PART 3: Close functionality

const closePhoto = (e) => {

const clickedElement = e.target;
  document.querySelector('.preview_box').className = 'preview_box';

};
document.querySelector('.close').onclick = closePhoto;
// a. Create a “close” function that removes the “active” class
//    from the “.preview_box” element.
// b. Attach your newly created “close” function to the onclick
//    event handler of the close button (in the upper right-hand corner).



// PART 4: Next functionality:
const nextPhoto = (e) => {
    const featuredImageElement = document.querySelector('.featured_image');
    const cardImageElements = document.querySelectorAll('.image');

    // the job of this loop is to figure out which card the featured image
    // belongs to, so that we can store its index (i.e. position in the elements list):
    let currentIndex = 0;
    for (cardImageElement of cardImageElements) {
        if (featuredImageElement.style.backgroundImage == cardImageElement.style.backgroundImage) {
            // this means that the the featured image matches the
            // image in the card. So let's store that index and then break:
            break;
        }
        ++currentIndex;
    }
    console.log('Position of current card being displayed:', currentIndex);

    // now, let's get the image of the next card:
    // if the new index overshoots the length of the cards, make it 0:
    ++currentIndex;
    if (currentIndex == cardImageElements.length) {
        currentIndex = 0;
    }
    console.log('Position of the next card to be displayed:', currentIndex);

    //finally, let's set the featured
    featuredImageElement.style.backgroundImage = cardImageElements[currentIndex].style.backgroundImage;
};

// attach event handler:
document.querySelector('.next').onclick = nextPhoto;





const clickPhoto = (e) => {
    const featuredImageElement = document.querySelector('.featured_image');
    const cardImageElements = document.querySelectorAll('.image');

    // the job of this loop is to figure out which card the featured image
    // belongs to, so that we can store its index (i.e. position in the elements list):
    let currentIndex = 0;
    for (cardImageElement of cardImageElements) {
        if (featuredImageElement.style.backgroundImage == cardImageElement.style.backgroundImage) {
            // this means that the the featured image matches the
            // image in the card. So let's store that index and then break:
            break;
        }
        ++currentIndex;
    }
    console.log('Position of current card being displayed:', currentIndex);

    // now, let's get the image of the next card:
    // if the new index overshoots the length of the cards, make it 0:
    ++currentIndex;
    if (currentIndex == cardImageElements.length) {
        currentIndex = 0;
    }
    console.log('Position of the next card to be displayed:', currentIndex);

    //finally, let's set the featured
    featuredImageElement.style.backgroundImage = cardImageElements[currentIndex].style.backgroundImage;
};

document.querySelector('.featured_image').onclick = clickPhoto;





// a. Create a “next” function that switches out the “.featured_image”
//    background image to the next image in the list.
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.

const prevPhoto = (e) => {
    const featuredImageElement = document.querySelector('.featured_image');
    const cardImageElements = document.querySelectorAll('.image');

    // the job of this loop is to figure out which card the featured image
    // belongs to, so that we can store its index (i.e. position in the elements list):
    let currentIndex = 0;
    for (cardImageElement of cardImageElements) {
        if (featuredImageElement.style.backgroundImage == cardImageElement.style.backgroundImage) {
            // this means that the the featured image matches the
            // image in the card. So let's store that index and then break:
            break;
        }
        ++currentIndex;
    }
    console.log('Position of current card being displayed:', currentIndex);

    // now, let's get the image of the next card:
    // if the new index overshoots the length of the cards, make it 0:
    currentIndex -= 1;
    if (currentIndex == -1) {
        currentIndex = cardImageElements.length - 1;
    }
    console.log('Position of the next card to be displayed:', currentIndex);

    //finally, let's set the featured
    featuredImageElement.style.backgroundImage = cardImageElements[currentIndex].style.backgroundImage;
};

// attach event handler:
document.querySelector('.prev').onclick = prevPhoto;




// PART 5: Previous functionality:
// a. Create a “previous” function that switches out the
//    “.featured_image” background image to the previous image
//    in the list.
// b. Attach your newly created “previous” function to the onclick
//    event handler of the “.prev” button (in the upper right-hand corner).


/*
// Prior Solution:
const nextPhoto = (e) => {
  const clickedElement = e.target;
  var urls = ["images/field1.jpg","images/purple.jpg","images/jar.jpg","images/green.jpg","images/green1.jpg","images/purple1.jpg","images/magnolias.jpg'","images/daisy1.jpg","images/poppies.jpg","images/dogwoods.jpg","images/blossom.jpg","images/field3.jpg'","images/field4.jpg","images/branch.jpg","images/red.jpg","images/purple2.jpg"]

  // var url = urls.indexOf(document.querySelector('.featured_image').style.backgroundImage);

  var counter=0
  var index = 0
  var tracker = 0
  for (url of urls) {
    if(tracker == 0){
      console.log(url)
      console.log(document.querySelector('.featured_image').style.backgroundImage)
      console.log(document.querySelector('.featured_image').style.backgroundImage.includes(url))
      if (document.querySelector('.featured_image').style.backgroundImage.includes(url))
        {index = counter;
        console.log("if condition", index)
        tracker = 1;
        break
        }
      else {
        counter+=1;
        console.log("else condition", counter)
        }
  }}
  document.querySelector('.featured_image').style.backgroundImage = "url(" + urls[index+1] + ")";
};
document.querySelector('.next').onclick = nextPhoto;


*/
