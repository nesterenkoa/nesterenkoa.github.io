// Есть три переменные содержащие составляющие даты: день, месяц, и год.
//
//   Создай переменную date, в которую запиши полную дату в формате день\месяц\год
// Создай переменную message, в которую запиши сообщение "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
//
// PS: используя шаблонные строки.
// */

const day = 17;
const month = 10;
const year = 2048;

let date = day+"\\"+month +"\\" +year;
let message = `Доброе утро, cегодня ${date} , за бортом отличная погода!`;
console.log(date); // 17\10\2048
console.log(message); // "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
