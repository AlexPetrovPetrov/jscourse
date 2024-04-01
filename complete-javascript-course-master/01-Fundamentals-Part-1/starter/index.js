// logical operators && || !
const hasDriversLicense = true
const hasGoodVision = true
console.log(hasDriversLicense && hasGoodVision)
console.log(!hasGoodVision && hasDriversLicense)
const shouldDrive = false
if (hasDriversLicense && hasGoodVision && shouldDrive) {
    console.log("Sarah should drive")
} else {
    console.log("Someone else should driver...")
}