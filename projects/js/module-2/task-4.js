// циклНапишите цикл, который предлагает, через prompt, ввести число больше 100.
//
// Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз,
//   и так далее, пока не введет число больше 100.
//
// Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод
// вроде строк 'qweqwe' в этой задаче необязательно.
//
//   PS: используйте цикл do...while


let promptValue = '';

do {
  promptValue = prompt('Веедите число > 100');

}while(!promptValue || +promptValue < 100 );



