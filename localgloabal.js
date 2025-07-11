const globalVar = "I am global";
function localScopeDemo(){
    const localVar = "I am local";
    console.log(localVar);
    
    function innerFunction(){
        console.log(globalVar);
    }
    return innerFunction;
}
const myFunc=localScopeDemo();
myFunc();

(function(a,b){
    let sum=a+b;
    console.log(sum);
})(5,10)

