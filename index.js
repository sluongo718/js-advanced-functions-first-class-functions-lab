// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
    return () => {return num * num}
}

  const fareDoubler = (num) => {
      return num += num
  }

  const fareTripler = (num) => {
      return num + num + num
  }

  const selectDifferentDrivers = (arr, func) => {
        return func(arr)
  }