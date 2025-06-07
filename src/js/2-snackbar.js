import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/2-snackbar.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { delay, state } = event.target.elements;
  const delayValue = +delay.value;
  const stateValue = state.value;

  setTimeout(() => {
    new Promise((resolve, reject) => {
      if (stateValue === 'fulfilled') {
        resolve(delayValue);
      } else {
        reject(delayValue);
      }
    })
      .then(data =>
        iziToast.success({
          title: 'OK',
          message: `✅ Fulfilled promise in ${data}ms`,
          position: 'topRight',
        })
      )
      .catch(data =>
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise in ${data}ms`,
          position: 'topRight',
        })
      );
    form.reset();
  }, delayValue);
}
