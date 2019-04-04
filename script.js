let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    
    if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null //проверка на нажатие кнопки отмена, чтобы не записывалось значение null.
        && a != '' && b != '' && a.length < 50) {//проверка на пустую строку и ограничение кол-во символов
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
};
//два способа цикла for
//----ПЕРВЫЙ----
// let i = 0;
// let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
// b = prompt("Во сколько обойдется?", "");
// while(i < 2) {
//     i++;
//     if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null //проверка на нажатие кнопки отмена, чтобы не записывалось значение null.
//       && a != '' && b != '' && a.length < 50) {//проверка на пустую строку и ограничение кол-во символов
//      console.log("done");
//        appData.expenses[a] = b;
//     } else {
    
//    }
// }
//----ВТОРОЙ----
//  let i = 0;
//  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//  b = prompt("Во сколько обойдется?", "");
// do {
//     i++;
//     if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null //проверка на нажатие кнопки отмена, чтобы не записывалось значение null.
//       && a != '' && b != '' && a.length < 50) {//проверка на пустую строку и ограничение кол-во символов
//       console.log("done");
//         appData.expenses[a] = b;
//      } else {
    
//     }
// } while(i < 2);
//два способа





appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}






