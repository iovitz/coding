import 'package:flutter/material.dart';
import 'package:flutter_demo/pages/home/home.dart';
import 'package:flutter_demo/pages/mine/mine.dart';
import 'package:flutter_demo/pages/study/study.dart';

class Index extends StatefulWidget {
  const Index({super.key});

  @override
  State<Index> createState() => _IndexState();
}

class _IndexState extends State<Index> {
  final List<BottomNavigationBarItem> bottomNavItems = [
    const BottomNavigationBarItem(
        icon: Icon(Icons.home), label: '首页', backgroundColor: Colors.blue),
    const BottomNavigationBarItem(
        icon: Icon(Icons.message), label: '学习', backgroundColor: Colors.blue),
    const BottomNavigationBarItem(
        icon: Icon(Icons.person), label: '我的', backgroundColor: Colors.blue),
  ];

  final List pages = [
    {
      "title": "首页",
      "page": const Home(),
    },
    {
      "title": "学习中心",
      "page": const Study(),
    },
    {
      "title": "个人中心",
      "page": const Mine(),
    }
  ];

  int currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(pages[currentIndex]["title"]),
        centerTitle: true,
        elevation: 0,
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: bottomNavItems,
        currentIndex: currentIndex,
        selectedItemColor: Colors.red,
        type: BottomNavigationBarType.fixed,
        onTap: (index) {
          setState(() {
            currentIndex = index;
          });
        },
      ),
      body: pages[currentIndex]["page"],
    );
  }
}

class NavigationBarPageItem {
  final String title;

  NavigationBarPageItem(this.title, Widget body);
}
