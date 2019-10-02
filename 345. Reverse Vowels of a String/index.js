// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  s = s.split('');
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  let vowel_pos = [];
  // find all the vowels
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) > -1) {
      // if character is part of the vowels array
      vowel_pos.push(i);
    }
  }

  for (let j = 0; j < vowel_pos.length / 2; j++) {
    const temp = s[vowel_pos[j]];
    s[vowel_pos[j]] = s[vowel_pos[vowel_pos.length - 1 - j]];
    s[vowel_pos[vowel_pos.length - 1 - j]] = temp;
  }

  return s.join('');
};

// const reverseVowels = function(s) {
//   let i = 0;
//   let j = s.length - 1;

//   s = s.split('');
//   while (i <= j) {
//     const iIsVowel = isVowel(s[i]);
//     const jIsVowel = isVowel(s[j]);
//     if (iIsVowel && jIsVowel) {
//       const temp = s[i];
//       s[i] = s[j];
//       s[j] = temp;
//       i++;
//       j--;
//     }
//     if (!iIsVowel) i++;
//     if (!jIsVowel) j--;
//   }
//   return s.join('');
// };

// const isVowel = function(str) {
//   return ['a', 'e', 'i', 'o', 'u'].includes(str.toLowerCase());
// };
