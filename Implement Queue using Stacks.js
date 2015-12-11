/**
 * Created by ·« on 2015/12/10.
 */
/**Implement the following operations of a queue using stacks.

 push(x) -- Push element x to the back of queue.
 pop() -- Removes the element from in front of queue.
 peek() -- Get the front element.
 empty() -- Return whether the queue is empty.
 */

/**
 * @constructor
 */
var Queue = function() {
    this.store = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.store.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    if(!this.empty())
        this.store = this.store.slice(1,this.store.length);
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.store[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.store.length === 0;
};