const buttonCalculate = document.querySelector('#btn');
buttonCalculate.addEventListener('click', CalculateSalary);

function CalculateSalary(e) {
    e.preventDefault();
    const hours = document.querySelector('.hours').value;
    const rate = document.querySelector('.rate').value;
    // const fullSalary =document.querySelector('#fullSalary');
    const tax = document.querySelector('#tax');

    const salary = hours * rate;
    document.querySelector('#fullSalary').textContent = salary.toFixed(2);

    if (salary <  6790 ) {
        tax.textContent = (salary * 0.10).toFixed(2);
    }
    else if ( 6791 <= salary < 9730) {
        tax.textContent = (salary * 0.14).toFixed(2);
    }
    else if ( 9731 <= salary < 15620) {
        tax.textContent = (salary * 0.20).toFixed(2);
    }
    else if ( 15621 <= salary < 21710) {
        tax.textContent = (salary * 0.31).toFixed(2);
    }
    else if ( 21711 <= salary < 45180) {
        tax.textContent = (salary * 0.35).toFixed(2);
    }
    else if ( salary >= 45181) {
        tax.textContent = (salary * 0.47).toFixed(2);
    }

    const total = salary - +tax.textContent;
    document.querySelector('#afterTax').textContent = total.toFixed(2);

}
CalculateSalary();