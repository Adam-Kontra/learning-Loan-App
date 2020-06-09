const monney = document.getElementById('amount');
const urok = document.getElementById('interest');
const years = document.getElementById('years');

const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

document.getElementById('loan-form').addEventListener('submit', calculate);

function calculate(e) {
  e.preventDefault();

  //values of UI variables
  const resultCard = document.querySelector('#results')
  resultCard.style.display = 'block';

  const lendedMonney = parseFloat(monney.value);
  const urokovaSadzba = parseFloat(urok.value);
  const timeOfLoan = parseFloat(years.value);
  
  if(isNaN(lendedMonney) || isNaN(urokovaSadzba) || isNaN(timeOfLoan)) {
    showError('Please Fillup All Fields');
  } else {
  
    const urokycelkom = lendedMonney / 100 * urokovaSadzba * timeOfLoan;
    totalInterest.value = urokycelkom.toFixed(2);

    const celkom = lendedMonney + urokycelkom;
    totalPayment.value = celkom.toFixed(2);

    const zaMesiac = celkom / 12 / timeOfLoan;
    monthlyPayment.value = zaMesiac.toFixed(2);
  }
}


function showError(error) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  

  const mainCard = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  mainCard.insertBefore(errorDiv, heading);

  setTimeout(clearError, 3000);

}

function clearError() {
  document.querySelector('.alert').remove();
}