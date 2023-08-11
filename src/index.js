module.exports = function check(str, bracketsConfig) {
  let arrayFromStr = str;
  const brackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1])
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      arrayFromStr = arrayFromStr.replace(brackets[j], '');
      if (arrayFromStr.length == 0) {
        return true
      }
    }
  }
  return false
}