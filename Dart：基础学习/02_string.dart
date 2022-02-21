void main() {
  useString();
}

useString() {
  String dogName = 'xiugou';
  String catName = 'maomao';
  String words1 = 'dog: $dogName, cat: $catName';
  String words2 = 'dog: ' + dogName + ', cat: ' + catName;
  print(words1);
  print(words2);
}
