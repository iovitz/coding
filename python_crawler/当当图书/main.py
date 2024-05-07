import os
import sys
import time
import threading
import random


sys.path.append(os.path.realpath("."))
from utils import *


def getStorePath(fileName):
    return os.path.join(getDataDir(__file__), fileName)


needBookTypes = [
    "小说",
    "文学",
    "外语",
    "成功/励志",
    "历史",
    "哲学/宗教",
    "心理学",
    "管理",
    "艺术",
    "动漫/幽默",
    "青春文学",
    "社会科学",
    "科普读物",
    "古籍",
    "法律",
    "经济",
    "计算机/网络",
    "文化",
    "建筑",
    "自然科学",
]


# 获取图书一级大分类
def getBookC1Data():
    c1Urls = []
    c1Data = []
    page = getPage(
        "http://bang.dangdang.com/books/bestsellers/01.41.00.00.00.00-recent30-0-0-1-1"
    )
    elements = page.select("#sortRanking .side_nav > a[href]")
    counter = 1
    for i, el in enumerate(elements):
        c1_url = el.attrs["href"]
        c1_name = el.text
        if c1_name in needBookTypes:
            c1Urls.append({"url": c1_url, "name": c1_name, "id": counter})
            c1Data.append({"id": counter, "name": c1_name})
            counter += 1
    saveToJsonFile(getStorePath("c1_urls.json"), c1Urls)
    saveToJsonFile(getStorePath("c1.json"), c1Data)


# 获取图书二级大分类
def getBookC2Data():
    c2Data = []
    c2Urls = []
    counter = 1
    c1Urls = getDataFromJsonFile(getStorePath("c1_urls.json"))
    for c1Item in c1Urls:
        page = getPage(c1Item["url"])
        linkElements = page.select(".side_nav_detail > li > a")
        maxC2Count = random.randint(3, 5)
        for index, el in enumerate(linkElements):
            if index > maxC2Count:
                continue
            c2Name = el.text
            c2Url = el.attrs["href"]
            c2Data.append({"id": counter, "c1_id": c1Item["id"], "name": c2Name})
            c2Urls.append(
                {"id": counter, "c1": c1Item["id"], "name": c2Name, "url": c2Url}
            )
            counter += 1
    saveToJsonFile(getStorePath("c2_urls.json"), c2Urls)
    saveToJsonFile(getStorePath("c2.json"), c2Data)


def getBooksUrl(page=5):
    page = random.randint(2, 5)
    c2Urls = getDataFromJsonFile(getStorePath("c2_urls.json"))
    print(len(c2Urls))
    time.sleep(1)
    books = {}

    def fetchBookList(targetUrl, c1Id, c2Id):
        pageSelector = getPage(targetUrl)
        bookLiList = pageSelector.select(".bang_list > li")
        for index, li in enumerate(bookLiList):
            bookUrl = li.select_one(".name > a").attrs["href"]
            bookName = li.select_one(".name > a").attrs["title"]
            posterUrl = li.select_one(".pic img").attrs["src"]
            price = li.select_one(".price_n").text
            author = li.select_one(".publisher_info a").text
            if bookUrl not in books:
                books[bookUrl] = {
                    "name": bookName,
                    "url": bookUrl,
                    "c1": c1Id,
                    "poster": posterUrl,
                    "c2": c2Id,
                    "price": price,
                    "author": author,
                }

    for groupIndex, c2UrlsGroups in enumerate(listSplit(c2Urls, 30)):
        threads = []
        print("准备拉取到", (groupIndex + 1) * 30)
        for index, c2Item in enumerate(c2UrlsGroups):
            originUrl = c2Item["url"]
            c2Id = c2Item["id"]
            c1Id = c2Item["c1"]
            templateUrl = originUrl[0 : len(originUrl) - 1]
            time.sleep(0.5)
            for i in range(page):
                targetUrl = templateUrl + str(i + 1)
                t = threading.Thread(
                    target=fetchBookList,
                    args=(
                        targetUrl,
                        c1Id,
                        c2Id,
                    ),
                )
                t.start()
                threads.append(t)
        for t in threads:
            t.join()
    saveToJsonFile(getStorePath("books_data.json"), books)


def test():
    # authorsMap = {}
    # authors = []
    # id = 1
    # books = list(getDataFromJsonFile(getStorePath("books_data.json")).values())
    # for book in books:
    #     author = book["author"]
    #     if author not in authorsMap:
    #         authors.append({"name": author, "id": id})
    #         authorsMap[author] = id
    #         book["author"] = id
    #         id = id + 1
    #     else:
    #         print("相同")
    #         book["author"] = authorsMap[author]
    #         pass

    # saveToJsonFile(getStorePath("author.json"), authors)
    # saveToJsonFile(getStorePath("books_author.json"), books)
    books = getDataFromJsonFile(getStorePath("books_author.json"))
    for book in books:
        book["poster"] = book["poster"].replace("_l", "_u")
        pass
    saveToJsonFile(getStorePath("new_books.json"), books)
    pass


def bootstrap():
    getBookC1Data()
    getBookC2Data()
    getBooksUrl()


bootstrap()
