export const firePottery = (clayObject, temperature) => {
    clayObject.fired = true
    if (temperature > 2200) {
        clayObject.cracked = true
    }
    else if (temperature <= 2200) {
        clayObject.cracked = false
    }
    return clayObject
}

