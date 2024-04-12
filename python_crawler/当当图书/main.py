import os
import sys

sys.path.append(os.path.realpath("."))
from packages import *


def getStorePath(fileName):
    return os.path.join(getDataDir(__file__), fileName)


# 获取图书一级大分类
def getBookC1Data():
    c1Urls = []
    c1Data = []
    page = getPage(
        "http://bang.dangdang.com/books/bestsellers/01.41.00.00.00.00-recent30-0-0-1-1"
    )
    elements = page.select("#sortRanking .side_nav > a[href]")
    for i, el in enumerate(elements):
        c1_url = el.attrs["href"]
        c1_name = el.text
        c1Urls.append({"url": c1_url, "name": c1_name, "id": i + 1})
        c1Data.append({"id": i + 1, "name": c1_name})
    saveToJsonFile(getStorePath("c1_urls.json"), c1Urls)
    saveToJsonFile(getStorePath("c1.json"), c1Data)


# 获取图书二级大分类
def getBookC2Data():
    c2Data = []
    c2Urls = []
    i = 1
    c1Urls = getDataFromJsonFile(getStorePath("c1_urls.json"))
    for c1Item in c1Urls:
        print(c1Item["url"])
        page = getPage(c1Item["url"])
        linkElements = page.select(".side_nav_detail > li > a")
        for el in linkElements:
            c2Name = el.text
            c2Url = el.attrs["href"]
            print(el)
            print(c2Name)
            print(c2Url)
            c2Data.append({"id": i, "c1_id": c1Item["id"], "name": c2Name})
            c2Urls.append(
                {"id": i, "c1_id": c1Item["id"], "name": c2Name, "url": c2Url}
            )
            i += 1
    saveToJsonFile(getStorePath("c2_urls.json"), c2Urls)
    saveToJsonFile(getStorePath("c2.json"), c2Data)


def getBooksUrl():
    c2Urls = getDataFromJsonFile(getStorePath("c2_urls.json"))
    pass


def bootstrap():
    getBookC1Data()
    getBookC2Data()
    getBooksUrl()


bootstrap()
