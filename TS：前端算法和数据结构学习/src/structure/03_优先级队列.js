var PriorityQueue = (function () {
    var QueueElement = /** @class */ (function () {
        function QueueElement(element, priority) {
            this.element = element;
            this.priority = priority;
        }
        return QueueElement;
    }());
    var PriorityQueue = /** @class */ (function () {
        function PriorityQueue() {
            // 内部类
        }
        PriorityQueue.prototype.enqueue = function (element, priority) {
            var queue = new QueueElement(element, priority);
        };
        return PriorityQueue;
    }());
});
//# sourceMappingURL=03_%E4%BC%98%E5%85%88%E7%BA%A7%E9%98%9F%E5%88%97.js.map