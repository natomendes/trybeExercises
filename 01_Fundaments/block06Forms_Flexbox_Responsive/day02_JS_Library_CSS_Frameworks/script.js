const trybeForm = document.querySelector('#trybe-trip');

// function submitForm() {
//   trybeForm.addEventListener('submit', (e) => {
//   //   const fullName = document.querySelector('#full-name');
//   //   const email = document.querySelector('#email');
//   //   const textArea = document.querySelector('#text-area');
//     e.preventDefault();
//   //   if (fullName.value.length < 10 || fullName.value.length > 40) {
//   //     return alert('Board Inválido');
//   //   }
//   //   if (email.value.length < 10 || email.value.length > 50) {
//   //     return alert('Board Inválido');
//   //   }
//   //   if (textArea.value === '' || textArea.value.length > 500) {
//   //     return alert('Board Inválido');
//   //   }

//   //   return alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
//   });
// }

function toggleSubmitBtn() {
  const btnSubmit = document.querySelector('#submit-form');
  const imagesCheck = document.querySelector('#terms-of-use');
  imagesCheck.addEventListener('change', () => {
    if (imagesCheck.checked === true) {
      return btnSubmit.disabled = false;
    }
    btnSubmit.disabled = true;
  });
}

function datePicker() {
  $(document).ready(function () {
    $('.datepicker').datepicker({
      format: 'dd mmm yyyy'
    });
  });
}

function formValidation() {
  const validate = new window.JustValidate('#trybe-trip');
  validate.addField('#full-name', [
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Esse campo precisa ter no minimo 10 caracteres',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'Esse campo precisa ter no maximo 40 caracteres',
    },
    {
      rule: 'required',
      errorMessage: 'Preencha o Nome',
    }
  ]);

  validate.addField('#email', [
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Esse campo precisa ter no minimo 10 caracteres',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'Esse campo precisa ter no maximo 50 caracteres',
    },
    {
      rule: 'required',
      errorMessage: 'Preencha o E-mail',
    }
  ]);

  validate.addField('#text-area', [
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'Esse campo precisa ter no maximo 500 caracteres',
    },
    {
      rule: 'required',
      errorMessage: 'Preencha este campo',
    }
  ]);

  validate.addField('#trip-date', [
    {
      rule: 'required',
      errorMessage: 'Preencha este campo',
    }
  ]);

  validate.addField('#text-area', [
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'Esse campo precisa ter no maximo 500 caracteres',
    },
    {
      rule: 'required',
      errorMessage: 'Preencha este campo',
    }
  ]);

  validate.addField('#trip-date', [
    {
      rule: 'required',
      errorMessage: 'Preencha este campo',
    }
  ]);

  validate.addRequiredGroup('#destinations', 'Selecione uma opção');
}

formValidation();
datePicker();
toggleSubmitBtn();
// submitForm()

