const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('total-income');
const moneyMinus = document.getElementById('total-expense');
const list = document.getElementById('transaction-list');
const form = document.getElementById('transaction-form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let transactions = localStorage.getItem('transactions') !== null 
    ? JSON.parse(localStorage.getItem('transactions')) 
    : [];

function addTransaction(e) {
    e.preventDefault();

    const transaction = {
        id: Date.now(),
        text: text.value,
        amount: parseFloat(amount.value)
    };

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();
    updateLocalStorage();

    text.value = '';
    amount.value = '';
}

function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');

    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = `
        ${transaction.text} <span>${sign}₹${Math.abs(transaction.amount).toFixed(2)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">&times;</button>
    `;

    list.appendChild(item);
}

function updateValues() {
    const amounts = transactions.map(t => t.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    balance.innerText = `₹${total}`;
    moneyPlus.innerText = `+₹${income}`;
    moneyMinus.innerText = `-₹${expense}`;
}

function removeTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateLocalStorage();
    init();
}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
}

form.addEventListener('submit', addTransaction);

init();
