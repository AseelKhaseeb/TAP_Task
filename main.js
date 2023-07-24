// Function to check if two strings are anagrams
function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase to compare characters
    const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();
  
    // Sort the characters and check if they are the same
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}

  // Function to find anagrams of a given phrase in an array of strings
  function isAnagramInArray(anagram, arr) {
    const array = [];
    
    for (const str of arr) {
      if (areAnagrams(anagram, str)) {
        array.push(str);
      }
    }
  
    return array;
  }

  const anagrams = [
    "oz bilal tochberer",  
    "it's razorbill beachcomber", 
    "och robe tilblazer", 
    "bib chorizo cellarmaster", 
    "thor bble carizole", 
    "zll borcht aberoie", 
    "brzl orche atobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
  ]

  console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
