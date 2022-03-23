void main(List<String> args) {
  final res = doing(((num) => num + 10));
  print(res);
}

typedef ParamsType = int Function(int num);
doing(ParamsType func) {
  return func(19);
}
