


n=[5, 2, 8, 1, 9]
function mergeSort(n) {
if(n.length<=1){
    return n;

}
let mid=Math.floor(n.length/2);
let left=n.slice(0, mid);
let right=n.slice(mid);
return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let result=[];
    let i=0;//index for the left array 
    let j=0;//index for the right array

    while(i<left.length && j<right.length){
        //i< left.length (starting from 0) 
        // checks every valid index from 0 to length - 1, and stops the moment i goes 
        // past the last index — same logic applies to j < right.length

if(left[i]<=right[j]){
    result.push(left[i]);
    i++;

}

else{
    result.push(right[j]);
    j++;
}
    }
      while (i < left.length)
         result.push(left[i++]);
  while (j < right.length)
     result.push(right[j++]);

  return result;
}

console.log(mergeSort(n));
