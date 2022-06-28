var itens = ["sapato", "calça", "camisa", "meia", "casaco"];
console.log(itens);
itens.unshift("chinelo");
console.log(itens);
itens.pop();
console.log(itens);
itens.push("boné", "oculos");
console.log(itens);
itens.shift();
console.log(itens);

let numbers = [7,5,6,3,8,9,2,1,4];

numbers.sort(function(a, b){
    return a - b
});

numbers.reverse();

console.log(numbers)