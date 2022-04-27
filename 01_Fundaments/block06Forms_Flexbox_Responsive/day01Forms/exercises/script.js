const btnSubmit = document.querySelector('#submit-form');
const trybeForm = document.querySelector('#trybe-trip');

function submitForm() {
  trybeForm.addEventListener('submit', (e) => {
    const fullName = document.querySelector('#full-name');
    const email = document.querySelector('#email');
    const textArea = document.querySelector('#text-area');
    e.preventDefault();
    if (fullName.value.length < 10 || fullName.value.length > 40) {
      return alert('Board Inválido');
    }
    if (email.value.length < 10 || email.value.length > 50) {
      return alert('Board Inválido');
    }
    if (textArea.value === '' || textArea.value.length > 500) {
      return alert('Board Inválido');
    }

    return alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  });
}

function toggleSubmitBtn() {
  const imagesCheck = document.querySelector('#terms-of-use');
  imagesCheck.addEventListener('change', () => {
    if (imagesCheck.checked === true) {
      return btnSubmit.disabled = false;
    }
    btnSubmit.disabled = true;
  });
}

toggleSubmitBtn();
submitForm()

