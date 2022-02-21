import 'package:flutter/material.dart';
import 'package:flutter_xiecheng/comps/global/main_entry.dart';

void main() {
  const isProd = bool.fromEnvironment('dart.vm.product');
  if (isProd) {
    runApp(const MyApp());
  } else {
    runApp(const MyApp());
  }
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MainEntry(),
    );
  }
}
