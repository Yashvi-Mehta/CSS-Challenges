const btn = document.querySelector('#submit_values');
const form = document.querySelector('.form');
const bill_amt = document.getElementById('bill_amt');
const person = document.getElementById('person');
const service = document.getElementById('service');
const tip_amt = document.querySelector('#tip_amt');
const tip_value = document.querySelector('#amt');

// validate inputs
const checkRequired = (input) => {
   if (input.value.trim() == '' || +input.value <= 0) {
      showError(input, `Please enter a value greater than 0`);
   } else {
      showSuccess(input);
   }
};

//Input error message functions
function showError(input, message) {
   const formControl = input.parentElement;
   formControl.classList.add('error');
   const error_message = formControl.querySelector('small');
   error_message.innerText = message;
}

function showSuccess(input) {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
}

const calculateTip = (bill, people, service) => {
   var total = (bill * service) / people / 100;
   console.log(total);
   tip_amt.classList.add('calculated');
   tip_value.innerText = total;
};

form.addEventListener('submit', (e) => {
   e.preventDefault();
   checkRequired(bill_amt);
   checkRequired(person);
   checkRequired(service);
   calculateTip(bill_amt.value, person.value, service.value);
});
