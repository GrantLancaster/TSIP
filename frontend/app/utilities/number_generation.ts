
export function generateNum1To100() {
  const randomNumber:number = Math.floor(Math.random()*100);
  return randomNumber;
}

export function generateNum1To1000() {
  const randomNumber:number = Math.floor(Math.random()*1000);
  return randomNumber;
}

export function randomByWeight(table: string[], weights: number[]) {
  // This requires two parameters:
  // the first is the loot table to calculate from
  // the second is the weights for each part of each table.
  let sumOfWeights:number = 0;
  weights.forEach(weight => {
    sumOfWeights += weight;
  });
  console.log("sum: ", sumOfWeights);

  const randomNumber: number = Math.floor(Math.random()*sumOfWeights);
  console.log("random: ", randomNumber);

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