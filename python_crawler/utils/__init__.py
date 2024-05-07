import os
import requests
from bs4 import BeautifulSoup
import json
from prettytable import PrettyTable


# 拉取首页
def getPage(url):
    page = requests.get(url)
    bs_page = BeautifulSoup(page.text, "html.parser")
    return bs_page


# 保存文件
def saveToJsonFile(path, obj):
    fileData = obj
    if type(obj) != str:
        fileData = json.dumps(obj, ensure_ascii=False, indent=4)
    with open(path, "w") as f:
        f.write(fileData)


def getDataFromJsonFile(path):
    with open(path, "r") as fcc_file:
        return json.load(fcc_file)


def getDataDir(file_path):
    dataDir = os.path.join(os.path.dirname(os.path.abspath(file_path)), "data")
    if not os.path.exists(dataDir):
        os.makedirs(dataDir)
    return dataDir


def listSplit(urlList, member_count=30):
    urlList = list(urlList)
    groups = []
    currentGroup = []
    while len(urlList) != 0:
        currentGroup.append(urlList.pop(0))
        if len(currentGroup) == member_count:
            groups.append(currentGroup)
            currentGroup = []
    if len(currentGroup):
        groups.append(currentGroup)
    return groups


def printTable(title, tableList):
    table = PrettyTable(title)
    table.add_rows(tableList)
    print(table)
    pass
