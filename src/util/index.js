export const getRandomArray = () => {
  const numbers = [];

  let insert;
  let search;
  for (insert = 0; insert < 25; insert++) {
    numbers[insert] = Math.floor(Math.random() * 25) + 1;

    for (search = 0; search < insert; search++) {
      if (numbers[insert] == numbers[search]) {
        insert--;
        break;
      }
    }
  }
  return numbers;
};
