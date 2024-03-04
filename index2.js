const input = [1,2,3,4,5,6,7,8];
const array =[];
for(let i=0;i<input.length;i++){
    if(input[i]%2==0){
        array.push(input[i]);
    }
}
console.log(array);
