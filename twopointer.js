// input: Numbers =[2,7,11,15], target = 9
//output:[1,2]
//explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
//the brute force approach is take two loops and check for each pair if the sum is equal to target or not.
//that is O(n^2) time complexity. But we can do it in O(n) time complexity using two pointers approach.
let numbers=[2,7,11,15];
function twosum(numbers , target){
let left=0;
let right=numbers.length-1;
let result=[];
while(left<right){
    let sum=numbers[left]+numbers[right];
    if(sum==target){
        result.push(left+1);
        result.push(right+1);
        return result;
    }
    else if(sum<target){
        left=left+1;
    }
    else if(sum>target){
         right=right-1;
}

}
return result;
}
console.log(twosum(numbers, 9));
