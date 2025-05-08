// LOOK UP WEIGHTED NUMBER GENERATION FOR HOW TO MAKE THIS WORK.


export function rollNewChest(generatedNumber:number) {
  if (generatedNumber < 50) {
    return "Standard Chest";
  } else if (generatedNumber >= 50 && generatedNumber < 75) {
    return "Rare Chest";
  } else if (generatedNumber >=75 && generatedNumber < 85) {
    return "Magical Chest";
  } else if (generatedNumber >= 85 && generatedNumber < 90) {
    return "Mythic Chest";
  } else if (generatedNumber >=90) {
    return "Legendary CHest";
  }
}