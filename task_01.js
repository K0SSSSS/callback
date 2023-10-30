const filterArrayByWord = (arr, word, callback) => {
    const filteredArray = arr.filter((str) => str.includes(word));
    callback(filteredArray);
};
  
const arr = ['Hello World', 'Goodbye', 'JavaScript', 'World of Warcraft'];
  
filterArrayByWord(arr, 'World', (filteredArray) => {
    console.log(filteredArray);
});
  