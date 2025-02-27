import { sumItems, generationIndexForArray } from '../helpers/helpers.js';

export const stealingBalls = (maxBalls, warehouseBall) => {
  if (warehouseBall.length === 0) {
    return 'грабитель попал на пустой склад. Облом!';
  }

  let sumBag = 0;
  let robbersBag = [];

  const lengthRobbersBag = warehouseBall.length < maxBalls ? warehouseBall.length : maxBalls; // длина моего нового массива, ограничиваю её сразу

  for (let i = 0; i < lengthRobbersBag; i++) {
    robbersBag[i] = 1;
  }

  let sumWarehouseBall = sumItems(warehouseBall);

  // распределяю шары по новому массиву
  for (let i = 0; i < lengthRobbersBag; i++) {
    if (sumBag < maxBalls) {
      robbersBag[i] = Math.floor(warehouseBall[i] / sumWarehouseBall) * maxBalls || robbersBag[i];
      sumBag = sumBag + robbersBag[i];
    }
  }

  // если шариков не хватает добавляю их на рандомное место
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
