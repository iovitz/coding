import 'package:flutter/material.dart';
import 'package:flutter_demo/pages/index.dart';
import 'package:flutter_demo/pages/login/login.dart';
import 'package:flutter_demo/pages/unknown/unknown.dart';
import 'package:get/get.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: '啊我打我打',
      initialRoute: '/',
      defaultTransition: Transition.downToUp,
      getPages: [
        GetPage(name: '/', page: () => const Index()),
        GetPage(
            name: '/login',
            page: () => const Login(),
            transition: Transition.circularReveal),
      ],
      unknownRoute: GetPage(name: '/notfound', page: () => const Unknown()),
    );
  }
}
