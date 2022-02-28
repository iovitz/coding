void main() {
  useString();
}

useString() {
  String dogName = 'xiugou';
  String catName = 'maomao';
  // concat string and variable

  String words1 = 'dog: $dogName, cat: $catName';

  String words2 = 'dog: ' + dogName + ', cat: ' + catName;

  String words3 = '''Hi,
Here is iovitz.
''';

  print(words1);
  print(words2);
  print(words3);
}
