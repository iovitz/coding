import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(const StateLessApp());
}

class StateLessApp extends StatelessWidget {
  const StateLessApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(home: HomePage());
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('haha'),
        ),
        body: ListView(
          children: <Widget>[
            const SizedBox(
              height: 100,
            ),
            HomePagePart(
                title: 'Image1',
                desc: 'description1',
                url: 'https://s3.bmp.ovh/imgs/2022/02/9bfacad1f492bf21.png'),
            HomePagePart(
                title: 'Image2',
                desc: 'description2',
                url: 'https://s3.bmp.ovh/imgs/2022/02/9bfacad1f492bf21.png'),
            HomePagePart(
                title: 'Image3',
                desc: 'description3',
                url: 'https://s3.bmp.ovh/imgs/2022/02/9bfacad1f492bf21.png'),
          ],
        ));
  }
}

// ignore: must_be_immutable
class HomePagePart extends StatelessWidget {
  String title;
  String desc;
  String url;
  HomePagePart(
      {Key? key, required this.title, required this.desc, required this.url})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          border: Border.all(width: 10, color: Colors.deepOrangeAccent)),
      padding: const EdgeInsets.all(90),
      child: Column(
        children: <Widget>[
          Row(
            children: [
              Text(
                title,
                style: const TextStyle(color: Colors.orange, fontSize: 30),
              ),
            ],
          ),
          Row(
            children: [
              Text(
                title,
                style: const TextStyle(color: Colors.orange, fontSize: 10),
              ),
            ],
          ),
          Image.network(url),
        ],
      ),
    );
  }
}
