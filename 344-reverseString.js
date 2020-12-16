/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 
 * 测试用例
 * 输入：["h","e","l","l","o"]
 * 预期输出： ["o","l","l","e","h"]
 */
// 递归法
var reverseString = function(s) {
    reverse(s, 0, s.length-1);
};
function reverse(s, left, right) {
    if (left > right) {
        return;
    }
    [s[left], s[right]] = [s[right], s[left]];
    reverse(s, ++left, --right);
}