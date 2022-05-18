let number = Number(prompt("Enter the number of terms"));

let num1=1, num2=1, nextNum;

console.log("The last number of your Fibonacci Series;")
function fibo(number){
    for(i = 2; i <= number; i++){
         nextNum = num1 + num2 ;
         num1 = num2;
         num2 = nextNum;
    }
    return nextNum
}

fibo(number)