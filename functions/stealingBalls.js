import {sumItems, generationIndexForArray} from "../helpers/helpers.js";

export const stealingBalls = (maxBalls, warehouseBall) => {
    if(warehouseBall.length === 0){
        return "грабитель попал на пустой склад. Облом!";
    }

    let sumBag = 0;
    let robbersBag = [];
    let sumWarehouseBall = sumItems(warehouseBall);
    

    for(let i = 0; i<maxBalls && warehouseBall.length; i++){
        if(sumBag<maxBalls){
            robbersBag[i] = Math.floor(warehouseBall[i]/sumWarehouseBall * maxBalls) || 1; 
            sumBag = sumBag + robbersBag[i];
        }
    }


    
    if(maxBalls<sumBag){
        const index = generationIndexForArray(robbersBag.length-1);
        robbersBag[index]=robbersBag[index] + 1;
    }

    return robbersBag;
}

