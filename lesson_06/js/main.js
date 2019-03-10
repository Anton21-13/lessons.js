'use strict';

let startBtn = document.getElementById('start'),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

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
      i--;
      console.log("wrong");
    }
  }
});

countBtn.addEventListener("click", function() {

  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;
  
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
  for (let b = 0; b < 1; b++) {
    let items = incomeItem.value;
    if ( (typeof(items)) === 'string' && ltems != '' && (typeof(ltems)) != null) {
      console.log("done");
      appData.income = items.split(", ");
      appData.income.push(prompt("Может что-то еще"));
      appData.income.sort();
      appData.income.forEach(function(item) {
      console.log("Способы полученного заработка: " + item);
        
      });
      incomeValue.textContent = appData.income;
    } else {
      b--;
      console.log("wrong");
    }
  }
  
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],  
  savings: true,
  chooseExpenses: function () {
    
  },
  chooseOptExpenses: function () {
    
  },
  detectDayBudget: function() {
    
  },
  detectLevel: function() {
    
  },
  cheсkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент");
  
      appData.monthIncom = save/100/12*percent;
      alert("Доход в месяц вашего депозита: " + appData.monthIncom);
    }
  },
  chooseIncome: function() {/*
    for (let b = 0; b < 1; b++) {
      let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
      if ( (typeof(items)) === 'string' && ltems != '' && (typeof(ltems)) != null) {
        console.log("done");
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще"));
        appData.income.sort();
        appData.income.forEach(function(item) {
        console.log("Способы полученного заработка: " + item);
          
        });
      } else {
        b--;
        console.log("wrong");
      }
    }*/
  }  
};

for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key + ":" + appData[key]);
}
