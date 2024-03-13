const MY_NAME: string = "Povilas";
let myMilkAmount: number = 50;
let myCoffeeType: string = "black"

console.log(`Preparing coffee, ${MY_NAME}! Your coffee which is ${myCoffeeType} with ${myMilkAmount} ml of milk is ready to be served!`)

if (myMilkAmount > 100) {
  console.log(`Your coffee is too milky!`)
}

if(myMilkAmount < 100) {
  console.log(`Your coffee is too strong!`)
}

function muchMilkResult(isNotaRealCoffee: boolean): string {
if (isNotaRealCoffee) {
  return 'not a real coffee to be honest'
}
return 'Maybe for other coffee!'
}

function milkResult(isNotTooStrong: boolean): string {
return isNotTooStrong ? "Your coffee is just awesome!" : "Your coffee is too strong!"
}

console.log(milkResult(myMilkAmount < 100))
console.log(muchMilkResult(myMilkAmount > 100))
