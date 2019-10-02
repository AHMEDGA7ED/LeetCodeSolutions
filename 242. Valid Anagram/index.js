// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(stringA, stringB) {
  const strA = removeSpecialCharacters(stringA);
  const strB = removeSpecialCharacters(stringB);

  if (strA.length != strB.length) {
    return false;
  }

  const aCharMap = buildCharMap(strA);
  const bCharMap = buildCharMap(strB);

  if (Object.keys(aCharMap).length !== Object.keys(aCharMap).length) {
    return false;
  }

  for (char in aCharMap) {
    if (!bCharMap || aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function removeSpecialCharacters(str) {
  return str.replace(/[^\w]/g, '');
}

function buildCharMap(str) {
  if (str.length === 0) return {};
  const charMap = {};
  for (char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

// function isAnagram(stringA, stringB) {
// 	return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
// 	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }
