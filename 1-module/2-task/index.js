/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (
    name === undefined
    || name === null
    || name.length < 4
    || isNameContainSpaceSymbol(name)
  ) {
    return false;
  }

  return true;
}

function isNameContainSpaceSymbol(name) {
  for (symbol of name) {
    if (symbol === ' ') {
      return true;
    }
  }

  return false;
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
