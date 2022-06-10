<h1 align="center">
  mock2file
</h1>

<p align="center">
  A tool to export mock data to file.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/mock2file"><img alt="NPM Status" src="https://img.shields.io/npm/v/mock2file.svg?style=flat"></a>
</p>

- [About](#about)
- [Install](#install)
- [Use](#use)
  - [Generate template file.](#generate-template-file)
  - [Parse to a new file.](#parse-to-a-new-file)
- [To Excel.](#to-excel)

## About

mock2file is a command line tool that parses the **mock syntax in JSON file** and exports the parsed mock data to a new file. Tt supports exporting `JSON` and `excel` formats

## Install

```shell
# use npm
npm install -g mock2file
# use yarn
yarn global add mock2file
# use pnpm
pnpm add -g mock2file
```

## Use

### Generate template file.

Create a json file named `mock.json` with mockjs syntax:

```shell
m2f i mock.json
# or
m2f i mock.json -t json
```

If you do, you will see that a new file named `mock.json` is generated.

```json
// mock.json

{
  "list|1-10": [
    {
      "id|+1": 1,
      "name": "@cname"
    }
  ]
}
```

> Of course, you can create a file yourself without using a template

### Parse to a new file.

Parse the specified file and generate a **new data file**.

```shell
m2f p mock.json
```

At this time, a new file with `- parsed` suffix will be generated. The file content is the data generated after parsing mock syntax.

```json
// mock-parsed.json

{
  "list": [
    {
      "id": 1,
      "name": "文军"
    },
    {
      "id": 2,
      "name": "张勇"
    },
    {
      "id": 3,
      "name": "田洋"
    }
  ]
}
```



## To Excel.

At this point, you already know how to use `mock2file` to create templates and parse files. If you try to convert the data into **Excel files**, you only need to add `- t excel` or `--type excel` after the above instructions.

```shell
# Create a file named 'mock.json' with excel template.
m2f i mock.json -t excel

# Parse file to excel.
m2f p mock.json -t excel
```

At this time, you will find that your mock data is converted and exported to excel file.

> Converting to an excel file requires that the JSON file has **fixed fields**. If you don't know which fields are, you can learn more by `m2f i mock.json -t excel`.
