void main(List<String> args) {
  print(sum(1, 2));
  sayHi('iovitz');
  sayHi('iovitz', 18, 180);
}

// Basic form of function
int sum(int num1, int num2) {
  return num1 + num2;
}

//
void sayHi(String name, [int age = 18, double height = 180]) {
  print('Hello, this is $name');
  print('I\'m $age, $height');
}
