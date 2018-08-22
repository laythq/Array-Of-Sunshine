var arrayList = [
  Array.prototype.join
]

module.exports = {
  findMethod: function(inputArray, desiredOutput){
    for (let i in arrayList) {
      if (arrayList[i].call(inputArray) === desiredOutput){
        return '.' + arrayList[i].name;
      }
    }
  }
}
