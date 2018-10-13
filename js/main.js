console.log(5) ;
var a = 0 , b = 0 , op = "+" , res = 0 ;
var readPosition = 0 ;
// readPosition = 0 : read a
// readPosition = 1 : read b 
// readPosition = 2 : disable
function addToA(n){
    a = a*10+n ;
}

function addToB(n){
    b = b*10+n ;
}

function updateScreen(){
    if(op == "+"){res = a +b ;}
    else if(op == "-"){res = a - b ;}
    else if(op == "*"){res = a * b ;}
    else if(op == "/"){res = a / b ; }
    console.log("a = ",a);
    console.log("b = ",b);
    console.log("res = ",res);
    console.log("");

    //document.getElementById("#input").innerHTML =  ; /////
}

function readFromScreen(n){
    if(readPosition == 0){
        addToA(n);
    }
    else{
        addToB(n);
    }
    updateScreen();
}

function switchVariable(n){
    //1 +
    //2 -
    //3 *
    //4 /
    if(n == 1){op = "+" ; readPosition = 1}
    else if(n == 2){op = "-" ; readPosition = 1}
    else if(n == 3){op = "*" ; readPosition = 1}
    else if(n == 4){op = "/" ; readPosition = 1 ;}
    else if(n == 5){op = "=" ; readPosition = 2 ;}
    updateScreen();
    //op = n ;
    //readPosition++ ;
    
}
