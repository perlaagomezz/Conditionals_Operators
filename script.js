console.log('Hi I am alive')

document.write ("<h1>Conditionals and Operators</h1>")
var mynumb = prompt('Choose a number between 1 and 20')

if(20>mynumb){
    console.log('your number is less than 20')
}
else if(20<mynumb){
console.log ('your number is greater than 20')
}
else{
    console.log('Your number is equal to 20')
};

var numb = prompt('choose a number between 30 and 40')

if(30 && numb> 40 ) { 
    console.log('Your number is between 35 and 40');
}
else if(numb>30){
    console.log('you went to big for the number didnt you?');
}
else if (numb<40){
    console.log('what you choose was to small wasnt it?')
}


