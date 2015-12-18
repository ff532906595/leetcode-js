/**
 * Created by ·« on 2015/12/13.
 */
/**Given a singly linked list, determine if it is a palindrome.

 Follow up:
 Could you do it in O(n) time and O(1) space?
 */
var isPalindrome = function(head) {
    //find middle
    var slow = head, fast = head, cacheHead = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    //reverse link list
    var list2Head = new ListNode("head"), tmp;
    while(slow !== null){
        tmp = slow;
        slow = slow.next;
        tmp.next = list2Head.next;
        list2Head.next = tmp;
    }

    //judge palindrom
    var list1 = cacheHead, list2 = list2Head.next;
    for(; list2 !== null; list1 = list1.next, list2 = list2.next){
        if(list1.val !== list2.val){
            return false;
        }
    }
    return true;
};