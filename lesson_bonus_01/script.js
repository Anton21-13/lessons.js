'use strict';

let money, time;

function start() {
  money = +prompt("Ваш бюджет в месяц?", '');
  time = prompt("Введите дату в формате YYYY-MM-DD", '');
  
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет в месяц?", '');

  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],  
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязатеьную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
      if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
    
        appData.expenses[a] = b;
      } else {
        i--;
        console.log("wrong");
      }
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 3; i++) {
      let l = prompt("Статья необязательных расходов?", "");
      if ((typeof(l)) != null && l != '' && l.length < 50) {
        console.log("done");
  
        appData.optionalExpenses[i] = l;
      } else {
      i--;
      console.log("wrong");
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function() {
    if(appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Производная ошибка");
    };
  },
  cheсkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент");
  
      appData.monthIncom = save/100/12*percent;
      alert("Доход в месяц вашего депозита: " + appData.monthIncom);
    }
  },
  chooseIncome: function() {
    let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    if ( (typeof(items)) === 'string' && ltems != '' && (typeof(ltems)) != null) {
      console.log("done");
      appData.income = items.split(", ");
      appData.income.push(prompt("Может что-то еще"));
      appData.income.sort();
    } else {
    console.log("wrong");
    }    
  }  
};

income.forEach(function(item))