void main() {
  useVar();
  // final ans const are constant keywords.
  useFinal();
  useConst();
}

useVar() {
  var num = 1;
  print('num is $num.');
}

useFinal() {
  final me = new Person('iovitz');
  print('I\'m ${me.toString()}.');
}

useConst() {
  const String name = 'iovitz';
  print('Const value name is $name.');
}

class Person {
  late final String name;

  Person(String name) {
    this.name = name;
  }

  @override
  String toString() {
    return this.name;
  }
}
