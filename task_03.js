const filterStrings = (arr, char, callback) => {
    const filteredArray = arr.filter((str) => str.includes(char));
    callback(filteredArray);
  };
  
  const arr4 = ['hello', 'world', 'javascript', 'callback'];
  const char = 'a';

  filterStrings(arr4, char, (filteredArray) => {
    console.log(filteredArray);
  });
  