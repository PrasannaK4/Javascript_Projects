// const img = document.querySelector('#image');

// img.addEventListener('click', () => {
//   img.src = 'images/kaddi.png';
// });

document.querySelector('.container').addEventListener('click', (event) => {
    if (event.target.matches('.image')) {
      event.target.src = 'images/kaddi.png';
    }
  });