let calculator = {
  firstValue: Number = 0,
  secondValue: Number = 0,

  read(firstValue, secondValue) {
    this.firstValue = firstValue;
    this.secondValue = secondValue;
  },
  sum() {
    return this.firstValue + this.secondValue;
  },
  mul() {
    return this.firstValue * this.secondValue;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
