let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

arr.forEach((subArray) => {
  subArray.forEach((value) => {
    let start = arr.indexOf(subArray) + 1;
    let stop = subArray.indexOf(value) + 1;

    if (value === "mem") {
      console.log(subArray.slice(start,stop));
    }
  });
});
