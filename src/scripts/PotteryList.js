import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
        const potteryArray = usePottery()
        const potteryString =
        potteryArray.map(potteryObject => {
        return `
        <section class="pottery" id="pottery--${potteryObject.id}">
            <h2 class="pottery__shape">${potteryObject.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${potteryObject.weight} grams and is ${potteryObject.height} cm in height
            </div>
            <div class="pottery__price">
                Price is $${potteryObject.price}
            </div>
        </section>
        `
        }
    ).join("")
return potteryString
}
