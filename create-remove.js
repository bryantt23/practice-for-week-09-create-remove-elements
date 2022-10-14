/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById('add');
add.addEventListener('click', async () => {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();

    const url = data.message; // URL of new dog image

    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here
    const breed = url.split('/')[4];

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    // <ul>
    //   <li>
    //     <figure>
    //       <img src='https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg' />
    //       <figcaption>hound-afghan</figcaption>
    //     </figure>
    //   </li>
    // </ul>;
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = url;
    const figCaption = document.createElement('figcaption');
    figCaption.innerText = breed;
    figure.appendChild(img);
    figure.appendChild(figCaption);
    li.appendChild(figure);
    li.appendChild(figure);
    ul.appendChild(li);

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById('remove-first');
removeFirst.addEventListener('click', () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  const firstDog = document.querySelector('ul').firstChild;
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
  document.querySelector('ul').removeChild(firstDog);
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById('remove-last');
removeLast.addEventListener('click', () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
});
