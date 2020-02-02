/*******************
 * YOUR CODE HERE! *
 *******************/

function capitalize(str) {
  return str.toUpperCase();
}

function exclaim(str) {
  return str + '!';
}

function firstCharacter(str) {
  return str[0];
}

function lastCharacter(str) {
  return str[str.length-1];
}

function oneCharacter(str, index) {
  return str[index];
}

function twoCharacters(str, index1, index2) {
  return str[index1] + str[index2];
}

function yeller(str) {
  return str.toUpperCase() + "!!!";
}

// Initials generator.  Designed to allow future customization of total initial count maximum
function initials(str) {
  // Initialize vars
  const maxInitials = 2; // Maximum initials to return
  let i;
  let output = "";
  let wasSpace = 1;
  let initialCount = 0;

  // Go through the full name and find first chars of each name
  for(i = 0; i < str.length; i++) {
    // Eat white space
    if(str[i] == ' ') {
      wasSpace = 1;
      continue;
    }

    // Encountering text after a space
    if(wasSpace) { // Only process letters right after a space
      if(++initialCount > maxInitials) {
        break; // Stop when we reach our max
      }
      wasSpace = 0; // Eat the rest of the name upon next iterations
      output += str[i] + '.';
    }
  }

  if(initialCount == 1) {
    return output + output; // Double if only one initial
  } else {
    return output;
  }
}

/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof capitalize === 'undefined') {
  capitalize = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof firstCharacter === 'undefined') {
  firstCharacter = undefined;
}

if (typeof lastCharacter === 'undefined') {
  lastCharacter = undefined;
}

if (typeof oneCharacter === 'undefined') {
  oneCharacter = undefined;
}

if (typeof twoCharacters === 'undefined') {
  twoCharacters = undefined;
}

if (typeof initials === 'undefined') {
  initials = undefined;
}

if (typeof yeller === 'undefined') {
  yeller = undefined;
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  yeller,
  initials,
};