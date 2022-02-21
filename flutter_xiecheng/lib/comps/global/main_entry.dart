import 'package:flutter/material.dart';

class MainEntry extends StatefulWidget {
  const MainEntry({Key? key}) : super(key: key);

  @override
  State<MainEntry> createState() => _MainEntryState();
}

class _MainEntryState extends State<MainEntry> {
  int _currentIndex = 0;
  rem(int originWidth) {
    double deviceWidth = MediaQuery.of(context).size.width;
    return deviceWidth * originWidth / 375;
  }

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    double statusBarHeight = MediaQuery.of(context).padding.top;

    return Scaffold(
      backgroundColor: Colors.white,
      bottomNavigationBar: BottomNavigationBar(
          currentIndex: _currentIndex,
          onTap: (int index) {
            setState(() {
              _currentIndex = index;
            });
          },
          items: const [
            BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),
            BottomNavigationBarItem(icon: Icon(Icons.add), label: '社区'),
            BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的'),
          ]),
      body: Container(
        padding: EdgeInsets.only(top: statusBarHeight),
        child: const Text('dataefawefea'),
      ),
    );
  }

  changeBarPage(int index) {
    setState(() {
      _currentIndex = index;
    });
  }
}
