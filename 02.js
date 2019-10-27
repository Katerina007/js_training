function myFunction(str, n, str1) {
    let wordArr = str.split(" ");
    let result = "";

    wordArr.forEach(word => {
      let charArr = word.split("");
      if (charArr.length >= n) {
        charArr[n-1] = str1;
        word = charArr.join("");
      }
      result = result.concat(word + " ");
    });
    return result;
  }

  console.log(myFunction("Fusce dictum ultrices. Lacus ac eleifend nullam sodales.", 3, "SSSS"));