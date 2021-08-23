let potteryToBeSold = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked !== true &&
        potteryObject.weight >= 6)
        { potteryObject.price = 40,
        potteryToBeSold.push(potteryObject) }
        else if (potteryObject.cracked !== true &&
        potteryObject.weight < 6)
        { potteryObject.price = 20,
        potteryToBeSold.push(potteryObject) }
    return potteryObject
}
console.log(potteryToBeSold)

export let usePottery = () => {
    return potteryToBeSold.slice()
}