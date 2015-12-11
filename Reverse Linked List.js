/**
 * Created by ·« on 2015/12/10.
 */

var reverseList = function(head) {
    if(head === null || head.next === null)
        return head;

    var newHead = null;

    while(head !== null){
        next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    return newHead;
};