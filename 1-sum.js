/**
 * @param {number[]} num
 * @param {number} target
 * @return {number[]}
 * 测试用例
 * 输入： [2,7,11,15]  9
 *预期输出：  [0,1]
 * 
 */
function sum(num, target) {
    for (let i=0; i<num.length-1; i++){
        for (let j=i+1; j<num.length; j++) {
            if (num[i] + num[j] === target){
                return [i, j];
            }
        }
    }
}