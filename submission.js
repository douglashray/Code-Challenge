const findSum = function(array) {
  return array.reduce((a, b) => a + b, 0);
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
let frequency = {};
let mostLeast = {};
for (let i = 0; i < array.length; i++) {
	let value = array[i];
  if (value in frequency) {
    frequency[value]++;
      } else {
    frequency[value] = 1;
      }
   } 
let uniques = [];
for (value in frequency) { 
        uniques.push(value);
    }
function compareFrequency(a, b) {
        return frequency[b] - frequency[a];
    }
   uniques.sort(compareFrequency);
const addFrequency = function(key, value) {
 mostLeast[key] = value;
}
  addFrequency('most', uniques[0]);
  addFrequency('least', uniques[uniques.length - 1]);
  return mostLeast;
  }; 

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
  str = str.toLowerCase();
  for (let pali = 0; pali < Math.floor(str.length / 2); pali++) {
    if (str[pali] !== str[str.length - pali - 1]) {
    return false;
    } else { return true;
    }
    }
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
str2 = str.replace(/\([^)]*\)|, /g,'');
return str2;
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
str = str.toLowerCase();
let score = 0;
const scoring = {'a': 1, 'e' : 1, 'i' : 1, 'o' : 1, 'u' : 1, 'l' : 1, 'n' : 1, 'r' : 1, 's' : 1, 't' : 1, 'd' : 2, 'g' : 2, 'b' : 3, 'c' : 3, 'm' : 3, 'p' : 3, 'f' : 4, 'h' : 4, 'v' : 4, 'w' : 4, 'y' : 4, 'k' : 5, 'j' : 8, 'x' : 8, 'q' : 10, 'z' : 10
}
for (i = 0; i < str.length; i++) {
        score += scoring[str[i]];
    }
    return score;
};
