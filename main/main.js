module.exports = function main(inputs) {
    // write your code here...
   

    let price=0;
    if(inputs.distance<2){
        price=6;
    }
    else if(inputs.distance<8){
        price=6+(inputs.distance-2)*0.8;
    }
    else{
        price=6+(8-2)*0.8+(inputs.distance-8)*0.8*(1+0.5);
    }
    price+=inputs.parkTime*0.25;
    return Math.round(price);
};
