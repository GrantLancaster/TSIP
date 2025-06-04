
export function randomBetweenTwoValues(min:number, max:number) {
  const value = Math.floor(Math.random() * (max - min) + min);
  return value
}

export function randomByWeight(table: string[], weights: number[]) {
  // This requires two parameters:
  // the first is the loot table to calculate from
  // the second is the weights for each part of each table.
  let sumOfWeights:number = 0;
  weights.forEach(weight => {
    sumOfWeights += weight;
  });

  const randomNumber: number = Math.floor(Math.random()*sumOfWeights);

  let pointer: number = 0;
  for (let i=0; i < weights.length; i++) {
    pointer += weights[i];
    if (pointer >= randomNumber) {
      // Return here what the corresponding item is in the table.
      return table[i]
    }
  }
  return "I have broken";
}