for(let element in statistics){
    if((statistics[element]%2 == 1)||(element.charAt(0) == 'r')){
        console.log(statistics[element]);
    }
}