var LinkedList = (function () {
    var Node = /** @class */ (function () {
        function Node(data) {
            this.data = data;
            this.next = null;
        }
        return Node;
    }());
    var LinkedList = /** @class */ (function () {
        function LinkedList() {
            this.head = null;
            this.length = 0;
        }
        LinkedList.prototype.append = function (data) {
            if (this.length === 0) {
                this.head = new Node(data);
            }
            else {
                var newNode = new Node(data);
                var current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
            this.length += 1;
        };
        LinkedList.prototype.insert = function (position, data) {
            if (position < 0 || position > this.length)
                return false;
            var newNode = new Node(data);
            if (position === 0) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                var index = 0, current = this.head;
                while (++index < position) {
                    current = current.next;
                }
                newNode.next = current.next;
                current.next = newNode;
            }
            this.length += 1;
            return true;
        };
        LinkedList.prototype.update = function (position, newDate) {
            if (position < 0 || position >= this.length)
                return false;
            this.get(position).data = newDate;
        };
        LinkedList.prototype.removeAt = function (position) {
            if (position < 0 || position >= this.length)
                return false;
            if (position === 0) {
                this.head = this.head.next;
            }
            else {
                var current = this.head;
                while (--position) {
                    current = current.next;
                }
                current.next = current.next.next;
            }
            this.length -= 1;
            return true;
        };
        LinkedList.prototype.remove = function (data) {
            var index = this.indexOf(data);
            return this.removeAt(index);
        };
        LinkedList.prototype.get = function (position) {
            if (position < 0 || position > this.length)
                return null;
            var current = this.head;
            while (position--) {
                current = current.next;
            }
            return current;
        };
        LinkedList.prototype.indexOf = function (data) {
            var current = this.head, index = -1;
            while (current) {
                index++;
                if (current.data === data) {
                    return index;
                }
                current = current.next;
            }
            return -1;
        };
        LinkedList.prototype.toString = function () {
            var current = this.head, resultString = '';
            while (current) {
                resultString += current.data + ' ';
                current = current.next;
            }
            return resultString;
        };
        LinkedList.prototype.size = function () {
            return this.length;
        };
        LinkedList.prototype.isEmpty = function () {
            return this.length === 0;
        };
        return LinkedList;
    }());
    return LinkedList;
}());
//# sourceMappingURL=04_%E5%8D%95%E5%90%91%E9%93%BE%E8%A1%A8.js.map