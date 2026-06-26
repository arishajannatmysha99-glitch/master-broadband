document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#packages').scrollIntoView({ behavior: 'smooth' });
});
