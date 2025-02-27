import { sumItems, generationIndexForArray } from '../helpers/helpers.js';

export const stealingBalls = (maxBalls, warehouseBall) => {
  if (warehouseBall.length === 0) {
    return 'грабитель попал на пустой склад. Облом!';
  }

  let sumBag = 0;
  let robbersBag = [];
  let sumWarehouseBall = sumItems(warehouseBall);

  // распределяю шары по новому массиву
  for (let i = 0; i < warehouseBall.length; i++) {
    if (sumBag < maxBalls) {
      robbersBag[i] = Math.floor((warehouseBall[i] / sumWarehouseBall) * maxBalls) || 0;
      sumBag = sumBag + robbersBag[i];
    }
  }

  // добавляю недостающие шарики
  while (sumBag < maxBalls) {
    const index = generationIndexForArray(robbersBag.length - 1);
    robbersBag[index] += 1;
    sumBag += 1;
  }

  // проверяю, все ли цвета представлены в новом массиве
  for (let i = 0; i < robbersBag.length; i++) {
    if (robbersBag[i] === 0) {
      for (let j = 0; j < robbersBag.length; j++) {
        if (robbersBag[j] > 1) {
          robbersBag[j] -= 1;
          robbersBag[i] += 1;
          break;
        }
      }
    }
  }

  return robbersBag;
};
