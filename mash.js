function mash(){
return `You will live in a ${getHome()}, and you will have ${getChildrenCount()}, and you’ll drive a ${getCar()}, with a salary of ${getCash()}!`
}

function getHome(){["mansion", "shack","Apartment", "House"];
    return getHome[Math.floor(Math.random() * getHome.length)];
}
console.log(getHome)

function getChildrenCount(){
    if ((Math.random()>.5) || !process.argv[3]){
        return Math.floor(Math.random()*101);
    } else {
        return process.argv[3];
    }
}
console.log(getChilderenCount)
function getCar(){
    if (process.argv[3]);
    let cars = ["Tesla", "Lambo", "Horse", "Turtle"];
    return cars [Math.floor(Math.random()*cars.length)];
}

function getCash(){
    //if (process.argv[3]) {}
    let moolah = ["60 Trillion", "20 Billion", "1 Dollar", "Broke Boy"]
    console.log(getCash)
}


console.log(mash())