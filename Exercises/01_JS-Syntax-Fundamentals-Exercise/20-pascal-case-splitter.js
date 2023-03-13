function splitPascalCaseString(text) {
  let words = [];
  let currentWord = '';

  for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i].toUpperCase() && currentWord.length > 0) {
          words.push(currentWord);
          currentWord = '';
      }
      currentWord += text[i];
  }
  words.push(currentWord);
  let newWords = words.join(', ');

  console.log(newWords);
}

splitPascalCaseString('SplitMeIfYouCanHaHaYouCantOrYouCan'); // Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
splitPascalCaseString('HoldTheDoor'); // Hold, The, Door
splitPascalCaseString('ThisIsSoAnnoyingToDo'); // This, Is, So, Annoying, To, Do
