const btn = document.querySelector('#submit_values');
const form = document.getElementById('form');
const bill_amt = document.getElementById('bill_amt');
const bill_amt_error = document.getElementById('bill_amt_error');
const person = document.getElementById('person');
const service = document.getElementById('service');

// validate inputs
const checkRequired = (input) => {
   if (input.value.trim() == '' || +input.value <= 0) {
      bill_amt.classList.add('error');
      bill_amt_error.style.display = 'flex';
      bill_amt_error.innerHTML = 'Please enter amount greater than 0';
   } else {
      bill_amt.classList.remove('error');
      bill_amt_error.style.display = 'none';
   }
};

form.addEventListener('submit', (e) => {
   e.preventDefault();
   checkRequired(bill_amt);
});
