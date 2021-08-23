// Imports go first
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"
import { makePottery } from "./PotteryWheel.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 7)
let plumbus = makePottery("Plumbus", 3, 5)
let fluxCapacitor = makePottery("Flux Capacitor", 12, 9)
let playStation5 = makePottery("PlayStation 5", 24, 12)
let oneRingToRuleThemAll = makePottery("One Ring to Rule Them All", 5, 3)

console.log(mug)
console.log(plumbus)
console.log(fluxCapacitor)
console.log(playStation5)
console.log(oneRingToRuleThemAll)

// Fire each piece of pottery in the kiln
mug = firePottery(mug, 2000)
plumbus = firePottery(plumbus, 2100)
fluxCapacitor = firePottery(fluxCapacitor, 2200)
playStation5 = firePottery(playStation5, 2300)
oneRingToRuleThemAll = firePottery(oneRingToRuleThemAll, 2400)

console.log(mug)
console.log(plumbus)
console.log(fluxCapacitor)
console.log(playStation5)
console.log(oneRingToRuleThemAll)

// Determine which ones should be sold, and their price
mug = toSellOrNotToSell(mug)
plumbus = toSellOrNotToSell(plumbus)
fluxCapacitor = toSellOrNotToSell(fluxCapacitor)
playStation5 = toSellOrNotToSell(playStation5)
oneRingToRuleThemAll = toSellOrNotToSell(oneRingToRuleThemAll)



// Invoke the component function that renders the HTML list
const potteryHTML = PotteryList()

const potteryTarget = document.querySelector(".potteryList")

potteryTarget.innerHTML = `
<div class="pottery__card">
    ${potteryHTML}
<div>`
