var DoublyLinkedList = (function () {
    var Node = /** @class */ (function () {
        function Node(data) {
            if (data === void 0) { data = null; }
            this.data = data;
            this.prev = null;
            this.next = null;
        }
        return Node;
    }());
    var DoublyLinkedList = /** @class */ (function () {
        function DoublyLinkedList() {
            this.head = new Node();
            this.tail = this.head;
            this.length = 0;
        }
        DoublyLinkedList.prototype.append = function (data) {
            var newNode = new Node(data);
            if (this.length === 0) {
                this.head.next = newNode;
            }
            else {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            }
            return ++this.length;
        };
        DoublyLinkedList.prototype.toString = function () {
            var carrent = head.next, resultString = '';
            while (carrent) {
                resultString += carrent.data + ' ';
                carrent = carrent.next;
            }
        };
        return DoublyLinkedList;
    }());
    return DoublyLinkedList;
}());
console.log(DoublyLinkedList.prototype.append.toString());
//# sourceMappingURL=05_%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8.js.map