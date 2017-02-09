function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return function (number){
    return number*multiplierValue
  }
}

function multiplier(multiplier, number) {
  return number*multiplier
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
