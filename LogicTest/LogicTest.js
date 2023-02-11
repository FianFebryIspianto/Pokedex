function validName(name) {
  if (typeof name !== "string") return false;
  const nameArray = name.split(" ");
  if (nameArray.length < 2 || nameArray.length > 3) {
    return false;
  }
  if (nameArray.length === 3) {
    if (nameArray[2].length < 2) {
      return false;
    }
    if (nameArray[0].length === 2) {
      if (nameArray[1].length > 2) {
        return false;
      }
    }
    for (let i = 0; i < nameArray[2].length; i++) {
      const element = nameArray[2][i];
      if (element === ".") {
        return false;
      }
    }
  }
  //   check length array index 0 and 1
  if (nameArray[0].length < 2 || nameArray[1].length < 2) {
    return false;
  }

  if (nameArray[0].length === 2) {
    if (nameArray[0][nameArray[0].length - 1] !== ".") {
      return false;
    }
    if (nameArray[0][0] !== nameArray[0][0].toUpperCase()) {
      return false;
    }
  }
  if (nameArray[0].length > 2) {
    for (let i = 0; i < nameArray[0].length; i++) {
      const element = nameArray[0][i];
      if (element === ".") {
        return false;
      }
    }
  }
  return true;
}

const findDissappearedNumbers = (nums) => {
  const longArray = nums.length;
  const arr2 = Array.from({ length: longArray }, (v, i) => i + 1);
  arr3 = arr2.filter((item) => !nums.includes(item));
  return arr3;
};

console.log(findDissappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
