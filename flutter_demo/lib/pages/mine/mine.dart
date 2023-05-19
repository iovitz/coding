import 'package:flutter/material.dart';
import 'package:get/get.dart';

class Mine extends StatefulWidget {
  const Mine({super.key});

  @override
  State<Mine> createState() => _MineState();
}

class _MineState extends State<Mine> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
          child: ElevatedButton(
              onPressed: () {
                Get.toNamed("/login");
              },
              child: const Text('点击跳转'))),
    );
  }
}
