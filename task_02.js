const filterNumbers = (arr, callback) => {
    const evenNumbers = arr.filter((num) => num % 2 === 0);
    callback(evenNumbers);
};
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  filterNumbers(arr, (evenNumbers) => {
    console.log(evenNumbers);
  });
  