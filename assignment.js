//feetToMile



function feetToMile(feet){
    var mile=feet*0.000189394;
    return mile;
}
var mile1=feetToMile(2);
console.log(mile1)
var mile2=feetToMile(3);
console.log(mile2)
var mile3=feetToMile(1);
console.log(mile3)




//woodCalculator





function woodCalculator(chair,table,bed){
   var totalwood=(chair*1)+(table*3)+(bed*5);
    return totalwood
}
var customer1=woodCalculator(6,1,3);
console.log(customer1,"cubicfeet wood needed");
var customer2=woodCalculator(100,10,2);
console.log(customer2,"cubicfeet wood needed");





//bricCalculator






function bricCalculator(floor){
    if(floor<=10){
        var bric=floor*1000*15;
        return bric;
    }
    else if(floor>10 && floor<=20){
        const lowerbric=150000;
        var newfloor=floor-10;
        var bric=(newfloor*12*1000)+lowerbric;
        return bric;
    }
    else
    {
        var tweentyfloor=(10*15*1000)+(10*12*1000);
        var newfloor=floor-20;
        var bric=tweentyfloor+(newfloor*10*1000);
        return bric;
    }
}

var floornum=bricCalculator(45);
console.log(floornum,"bricks");
var floornum2=bricCalculator(20);
console.log(floornum2,"bricks");
var floornum3=bricCalculator(4);
console.log(floornum3,"bricks");





//tinyFriend


function tinyFriend(name){
    var maxName=name[0];
    for(var i=0;i<name.length;i++){
        if(maxName.length>=name[i].length){
            maxName=name[i];
        }
        
    }
    return maxName;

}
var friendsName=['mehedi','safin','niloy','asik','hasibur','pritom'];
var tinyFriend1=tinyFriend(friendsName);
console.log(" tiny name:",tinyFriend1)
var friendsName2=['mehedi','safin','niloy','ask','hasibur','pritom'];
var tinyFriend2=tinyFriend(friendsName2);
console.log("tiny name:",tinyFriend2)





        
