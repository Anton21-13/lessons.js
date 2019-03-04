'use strict';

let money = +prompt("Ваш бюджет в месяц?"),
  time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],  
  savings: false
};

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
  };
};

/*
Способ while ('До тех пор пока')

let i = 0; 

while (i < 2) {
  let a = prompt("Введите обязатеьную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");
  if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50) {
    console.log("done");

    appData.expenses[a] = b;
  } else {
    console.log("wrong");
  };

  i++;
}
*/

/*
Способ do ('До тех пор пока')

let i = 0;

do {
  let a = prompt("Введите обязатеьную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");
  if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50) {
    console.log("done");

    appData.expenses[a] = b;
  } else {
    console.log("wrong");
  };

  i++;
}

while (i < 2);*/

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Производная ошибка");
};

function name(params) {
  
}

