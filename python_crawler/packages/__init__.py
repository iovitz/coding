import os
import requests
from bs4 import BeautifulSoup
import json


# 拉取首页
def getPage(url):
    page = requests.get(url)
    bs_page = BeautifulSoup(page.text, "html.parser")
    return bs_page


# 保存文件
def saveToJsonFile(path, obj):
    with open(path, "w") as f:
        f.write(json.dumps(obj, ensure_ascii=False, indent=4))


def getDataFromJsonFile(path):
    with open(path, "r") as fcc_file:
        return json.load(fcc_file)


def getDataDir(file_path):
    dataDir = os.path.join(os.path.dirname(os.path.abspath(file_path)), "data")
    if not os.path.exists(dataDir):
        os.makedirs(dataDir)
    return dataDir
