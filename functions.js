function round(number,rounder){
    var output;


    if(number%rounder>=rounder/2){output = number+(number%rounder);console.log("yes");}
    else{output = number-(number%rounder);console.log("no");}


    return output;
}