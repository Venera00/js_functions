// Создайте функцию которая высчитывает площадь прямоугольника. S = a * b;
function square(a, b) {
  console.log(a * b);
}
square(3, 6);

// Создайте функцию которая спрашивает ваше имя и возраст. если ваше имя не равно пустой строке или null то выведите его в предложении "Меня зовут (ваше имя). Мне (ваш возраст) лет.
const aboutMe = function (name, age) {
  if ((name && age !== "") || null) {
    console.log("Меня зовут " + name + ". Мне " + age + " лет");
  }
};

aboutMe("Венера", 20);

// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
function numbers(c, d) {
  if (c % 2 === 0 && d % 2 === 0) {
    console.log(c / d);
  } else if (c % 2 != 0 && d % 2 != 0) {
    console.log(c + d);
  } else if (c % 2 === 0 && d % 2 != 0) {
    console.log(d);
  } else {
    console.log(c, d);
  }
}

numbers(1, 3);

// Создайте функцию getTidyClothes которая принимает 2 аргумента (цвет белья и порошок котором вы стираете- название). если цвет = "black" то выведите "Я стираю черное белье порошком (название порошка), если "white" - то должно выйти "Я стираю белое белье с порошком (название порошка). Если любой другой цвет то "я стираю цветное белье".
function getTidyClothes(color, powder) {
  if (color === "black") {
    console.log("Я стираю черное белье порошком " + powder);
  } else if (color === "white") {
    console.log("Я стираю белое белье с порошком " + powder);
  } else {
    console.log("Я стираю цветное белье");
  }
}

getTidyClothes("white", "Миф");

// Напишите 2 функции. Первая перебирает массив из чисел [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5,6,7,8,9,10] и возвращает только целые числа ( как найти целое число в JavaScript можете найти в интернете). вторая принимает то что вернула первая функция и умножает каждое число на 2. ответ выводит в консоль);
const arrayNum = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8, 9, 10];

function getNumbers(num) {
  const array = num.filter(function (number) {
    return number % 1 === 0;
  });
  console.log(array);

  const multiply = array.map(function (num) {
    return num * 2;
  });
  console.log(multiply);
}

getNumbers(arrayNum);
