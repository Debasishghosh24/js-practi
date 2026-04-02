
function jazzify(chords) {
  let jazzChords = [];
  
  for (let i = 0; i < chords.length; i++) {
    let currentChord = chords[i];
    
    if (currentChord[currentChord.length - 1] !== '7') {
      jazzChords.push(currentChord + '7');
    } else {
      jazzChords.push(currentChord);
    }
  }
  
  return jazzChords;
}