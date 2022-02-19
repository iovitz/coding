void main() {
  useVariable();
  useFinal();
  useConst();
}

// variable
useVariable() {
  String dogName = '修勾';
  print('Dog\'s name is ${dogName}.');
  print('dogName\'s type is ${dogName.runtimeType}.');

  dynamic number = 10;
  print('number is $number.');
  print('number\'s type is ${number.runtimeType}.');
}

useFinal() {
  final st1 = 'string 1';
  final st2 = 'string 2';
  print('$st1, $st2');
}

useConst() {
  const pi = 3.1415926;
  print('$pi');
}
