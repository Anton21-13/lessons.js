//'use strict';

let startBtn = document.getElementById('start'),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.querySelectorAll('.monthsavings-value')[0],
  yearSavingsValue = document.querySelectorAll('.yearsavings-value')[0],

  expensesItem = document.getElementsByClassName('expenses-item'),

  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBtn = document.getElementsByTagName('button')[2],

  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),

  //Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
  incomeItem = document.querySelector("#income"),
  checkSavings = document.querySelector("#savings"),
  sumValue = document.querySelector("#sum"),
  percentValue = document.querySelector("#percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value"),
  money, time;
  
startBtn.addEventListener("click", function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет в месяц?", '');
  
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет в месяц?", '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  expensesBtn.disabled = false;
  expensesBtn.style.background = "";
  optionalExpensesBtn.disabled = false;
  optionalExpensesBtn.style.background = "";
  countBtn.disabled = false;
  countBtn.style.background = "";
});

expensesBtn.addEventListener("click", function(){
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
      && a != '' && b != '' && a.length < 50) {
      console.log("done");  
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i--;
      console.log("wrong");
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener("click", function() {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let l = optionalExpensesItem[i].value;
    if ((typeof(l)) != null && l != '' && l.length < 50) {
      console.log("done");
      appData.optionalExpenses[i] = l;
      optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    } else {
      i = i - 1;  //i--;
      console.log("wrong");
    }
  }
});

countBtn.addEventListener("click", function() {
  if (appData.budget != undefined) {
    let sum = 0;

    for (let i in appData.expenses) {
      sum += +appData.expenses[i];

    }

    appData.moneyPerDay = (appData.budget - sum) / 30;
    daybudgetValue.textContent = appData.moneyPerDay.toFixed();
  
    if(appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
    levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    daybudgetValue.textContent = "Произошла ошибка";
  }
   
});

incomeItem.addEventListener("input", function() {
  let items = incomeItem.value;
  appData.income = items.split(" , ");
  incomeValue.textContent = appData.income;  
});

checkSavings.addEventListener("click", function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener("input", function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncom = sum/100/12*percent;
    appData.yearIncom = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncom.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncom.toFixed(1);
  }
});

percentValue.addEventListener("input", function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncom = sum/100/12*percent;
    appData.yearIncom = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncom.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncom.toFixed(1);
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],  
  savings: false,
};

expensesBtn.disabled = true;
expensesBtn.style.background = "white";
optionalExpensesBtn.disabled = true;
optionalExpensesBtn.style.background = "white";
countBtn.disabled = true;
countBtn.style.background = "white";
