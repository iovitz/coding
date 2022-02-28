void main(List<String> args) {
  var maybeNull = null;
  maybeNull ??= 'not null';

  print(maybeNull);

  final p = Person('viiotz');
  p
    ..name = 'iovitz'
    ..run()
    ..eat();
}

class Person {
  late String name;
  Person(this.name) {}

  run() {
    print('$name is running.');
  }

  eat() {
    print('$name is eating.');
  }
}
