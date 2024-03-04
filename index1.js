const input = [1,2,3,4,5];
/*
const array=[];
for(let i =0;i<input.length;i++){
    array.push(input[i]*2);
}
console.log(array);
*/
const ans =input.map(function(i) {
    return i*2;
});
console.log(ans);
