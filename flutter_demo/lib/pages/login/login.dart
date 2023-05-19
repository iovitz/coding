import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Hello'),
        ),
        body: Column(children: [
          ElevatedButton(
              onPressed: () {
                print("Hello");
              },
              child: const Text('Click'))
        ]));
  }
}
