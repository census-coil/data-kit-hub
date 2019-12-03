console.log('executing');
const toggleModal = () => {
  document.querySelector('.modal')
    .classList.toggle('modal--hidden');
};

document.querySelector('#show-modal')
  .addEventListener('click', toggleModal);

document.querySelector('#modal-close')
  .addEventListener('click', toggleModal);
