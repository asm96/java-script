const string = "Привет! Как дела?";

const vowels = ['ё', 'у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю'];

const getVowels = stringToFilter => {
  let extractedVowels = "";
  for (i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();
    if (vowels.includes(currentLetter)) {
      extractedVowels += currentLetter;
    }
  }
  return extractedVowels;
};
console.log('Фильтрация строки');
console.log(getVowels(string));