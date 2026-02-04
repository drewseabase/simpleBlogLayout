function translate(strand) {
  try {
    let protein = [];
    const chunks = [];
    const size = 3;

    if ([...strand].length === 0) {
      return protein;
    }

    for (let i = 0; i < [...strand].length; i += size) {
      chunks.push(strand.slice(i, i + size));
    }

    for (let j = 0; j < chunks.length; j++) {
      switch (chunks[j]) {
        case 'AUG':
          protein.push('Methionine');
          break;

        case 'UUU':
        case 'UUC':
          protein.push('Phenylalanine');
          break;

        case 'UUA':
        case 'UUG':
          protein.push('Leucine');
          break;

        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
          protein.push('Serine');
          break;

        case 'UAU':
        case 'UAC':
          protein.push('Tyrosine');
          break;

        case 'UGU':
        case 'UGC':
          protein.push('Cysteine');
          break;

        case 'UGG':
          protein.push('Tryptophan');
          break;

        case 'UAA':
        case 'UAG':
        case 'UGA':
          return protein;

        default:
          throw new Error('invalid codon');
      }
    }

    return protein;
  } catch (error) {
    throw error;
  }
}


let strand = 'AUGUGGUGUUAUUUGUUU';
console.log(translate(strand));