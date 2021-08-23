var primaryKey = 1

export const makePottery = (shape, weight, height) => {
    var clayObject = {
        "shape" : shape,
        "weight" : weight,
        "height" : height,
        "id" : primaryKey++
     }
    return clayObject
}