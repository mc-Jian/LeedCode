// 1 两数之和 简单
/**
 * @param {number[]} num
 * @param {number} target
 * @return {number[]}
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