'use strict'

/*Petle for*/
for(var i=4 ; i>0 ; i--){
    console.log(i);
}

/*pętle while*/

var it = 0;
while (it<5){
// console.log(it);
 it++;
}

/*Pętla do while*/
var iter = 20;
do{
    console.log(iter);
    iter++;
 //   console.log(iter);
}while (iter<10)
    
    /*Przerywanie pętli - break*/
    var a=0;
while (a<5){
   console.log(++a);
    if (a==3){
        break;
        
    }
}
    
/*postinkrementcja vs preinkrementacja*/ 
for (var i = 1; i<4;){
    //console.login(++i);
    i = i + 1;
    console.log(i);
}

/*przeskakiwanie do kolejnej interakcji - continue*/

for (var b = 0; b<6; ++b){
    if (b == 3){
        continue;
    }else{
        console.log(b);
    }
    console.log("--");
}
    

    