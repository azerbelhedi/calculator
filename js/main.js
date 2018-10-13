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
    //console.log("a = ",a);
    //console.log("b = ",b);
    //console.log("res = ",res);
    //console.log("");
    // readPosition
    if(readPosition == 0){
        document.getElementById("input").innerHTML = a ;
    }
    else if (readPosition == 1){
        document.getElementById("input").innerHTML = a+" "+ op + " " + b ;
    }
    else if(readPosition == 2){
        document.getElementById("input").innerHTML = a+" "+ op + " " + b + "=" + res ;
    }
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

function reset(){
    readPosition = 0 ;
    a = res ;
    b = 0 ;
    op = 1 ;
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
    else if(n == 5){readPosition = 2 ; reset() ;}
    updateScreen();
    //op = n ;
    //readPosition++ ;
    
}

function restart(){
    document.getElementById("input").innerHTML = "" ;
    a = 0;
    b = 0;
    res = 0 ;
    op = "+" ;
    readPosition = 0 ;
}

// read from keyboard 
document.addEventListener('keydown', function(event){
    if(event.key == '+'){
        console.log("+ is pressed") ;
        switchVariable(1);
    }
    if(event.key == '-'){
        console.log("- is pressed");
        switchVariable(2) ;
    }
    if(event.key == '*'){
        console.log("* is pressed");
        switchVariable(3) ;
    }
    if(event.key == '/'){
        console.log("/ is pressed");
        switchVariable(4) ;
    }
    if(event.key == '='){
        console.log( " = is pressed ");
        switchVariable(5);
    }
    if(event.keyCode == '13'){
        console.log("enter is pressed");
        switchVariable(5) ;
    }
    for(var i = 0 ; i < 10 ; i++){
        if(event.key == i){
            readFromScreen(i);
            console.log(i," is pressed");
        }
    }
})
