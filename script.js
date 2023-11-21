document.addEventListener('DOMContentLoaded', function () {
    const billAmountInput = document.getElementById('bill-amount');
    const numberOfPeopleInput = document.getElementById('number-of-people');
    const tipPercentages = document.getElementsByName('tip');
    const tipAmountSpan = document.getElementById('tip-amount');
    const totalPerPersonSpan = document.getElementById('total-per-person');
    const calculateButton = document.getElementById('calculate');

    calculateButton.addEventListener('click', function () {
        const billAmount = parseFloat(billAmountInput.value);
        const numberOfPeople = parseInt(numberOfPeopleInput.value);

        if (isNaN(billAmount) || isNaN(numberOfPeople) || billAmount <= 0 || numberOfPeople <= 0) {
            alert("Zəhmət olmasa, Hesab Məbləği və İnsan Sayisi üçün düzgün qiymətləri daxil edin.");
            return;
        }

        let tipPercentage = 0;
        for (const tipRadio of tipPercentages) {
            if (tipRadio.checked) {
                tipPercentage = parseFloat(tipRadio.value) / 100;
                break;
            }
        }

        const tipAmount = billAmount * tipPercentage;
        const totalAmount = billAmount + tipAmount;
        const totalPerPerson = totalAmount / numberOfPeople;

        tipAmountSpan.textContent = tipAmount.toFixed(2);
        totalPerPersonSpan.textContent = totalPerPerson.toFixed(2);
    });
});
