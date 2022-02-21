import 'package:flutter/material.dart';

class Stateful extends StatefulWidget {
  const Stateful({Key? key}) : super(key: key);

  @override
  State<Stateful> createState() => StatefulState();
}

class StatefulState extends State<Stateful> {
  int _currentIndex = 0;
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: Scaffold(
          appBar: AppBar(
            title: const Text('q爱我的wer'),
          ),
          bottomNavigationBar: BottomNavigationBar(
            currentIndex: _currentIndex,
            onTap: (index) => {
              setState(() {
                _currentIndex = index;
              })
            },
            items: const [
              BottomNavigationBarItem(
                icon: Icon(Icons.home, color: Colors.grey),
                activeIcon: Icon(Icons.home, color: Colors.blue),
                label: 'homssse',
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.list, color: Colors.grey),
                activeIcon: Icon(Icons.list, color: Colors.blue),
                label: 'home',
              ),
            ],
          ),
          floatingActionButton: const FloatingActionButton(
            onPressed: null,
            child: Text('点我'),
          ),
          body: _currentIndex == 0
              ? Container(
                  decoration: const BoxDecoration(color: Colors.white),
                  alignment: Alignment.center,
                  child: Column(
                    children: const <Widget>[
                      Text('Here is text'),
                      Icon(
                        Icons.access_alarm,
                        size: 50,
                        color: Colors.red,
                      ),
                      CloseButton(),
                      BackButton(),
                      Chip(avatar: Icon(Icons.people), label: Text('zujian')),
                      Divider(height: 10, color: Colors.black38),
                      AlertDialog(
                          title: Text('awd'), content: Text('=aefaewfa'))
                    ],
                  ),
                )
              : const Text('hahah'),
        ));
  }
}
