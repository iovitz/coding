void main() {
  useNumber();
  useNumberMethods();
}

useNumber() {
  // 数字类型的父类
  num number = 1;

  // num的子类：整形数值
  int intenger = 1;

  // num的子类：双精度浮点数
  double pi = 3.1415;

  print('number: $number');
  print('intenger: $intenger');
  print('pi: $pi');
}

useNumberMethods() {
  num number = -3.3;

  print('origin number: $number');
  print('absolute: ${number.abs()}');
  print('converse to ingenter: ${number.toInt()}');
  print('converse to double: ${number.toDouble()}');
}
