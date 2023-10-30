const getLongestName = (names, callback) => {
    if (names.length === 0) {
      return;
    }

    let longestName = names[0];
    for (const name of names) {
      if (name.length > longestName.length) {
        longestName = name;
      }
    }
  
    callback(longestName);
  };
  
  const names = ['Андрій', 'Олександр', 'Максим', 'Юлія', 'Наталія'];
  
  getLongestName(names, (longestName) => {
    console.log(`Ім'я з найбільшою кількістю літер: ${longestName}`);
  });
  