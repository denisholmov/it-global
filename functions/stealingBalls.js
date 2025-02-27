import {sumItems, generationIndexForArray} from "../helpers/helpers.js";

export const stealingBalls = (maxBalls, warehouseBall) => {
    if(warehouseBall.length === 0){
        return "грабитель попал на пустой склад. Облом!";
    }

    const newWarehouseBall = [];

    for(let i = 0; i < maxBalls && i < warehouseBall.length; i++){
        newWarehouseBall.push(warehouseBall[i]);
    }

    let ballsInBag = 0;
    const robbersBag = [];
    const sumWarehouseBall = sumItems(newWarehouseBall);
    

    for(let i = 0; i<newWarehouseBall.length; i++){
        robbersBag[i] = Math.floor(newWarehouseBall[i]/sumWarehouseBall * maxBalls); 
        ballsInBag = ballsInBag + robbersBag[i];
    }

    
    
    if(maxBalls!==ballsInBag){
        const index = generationIndexForArray(robbersBag.length-1);
        robbersBag[index]=robbersBag[index] + 1;
    }

    return robbersBag;
}

