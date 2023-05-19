import 'package:flutter/material.dart';

class Study extends StatefulWidget {
  const Study({super.key});

  @override
  State<Study> createState() => _StudyState();
}

class _StudyState extends State<Study> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: const Center(child: Text('学习')),
    );
  }
}
