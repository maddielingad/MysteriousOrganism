// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
const dna = mockUpStrand();
// console.log(dna);
// Returns an object that contains the properties specimenNum and dna that correspond to the parameters provided
const pAequorFactory = (num, arrayOfDNA) => {
  return {
    specimenNum: num,
    dna: arrayOfDNA,
    mutate() {
      let index = Math.floor(Math.random() * this.dna.length);
      let originaldBase = this.dna[index];
      let nextBase = returnRandBase();
      while (nextBase === originaldBase) {
        nextBase = returnRandBase();
      }
      this.dna[index] = nextBase;
      return this.dna;
    },
    compareDNA(pAequor) {
      let matches = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          matches += 1;
        }
      }
      let matchPercentage = Math.round((matches / this.dna.length) * 100);
      console.log(`specimen #1 and specimen #2 have ${matchPercentage}% DNA in common`);
    },
    willLikelySurvive() {
      let matches = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          matches += 1;
        }
      }
      let matchPercentage = Math.round((matches / this.dna.length) * 100);
      if (matchPercentage >= 60) {
        return true;
      }
      else {
        return false;
      }
    }
  }
};
// console.log(pAequorFactory(1, dna).mutate());
const first = pAequorFactory(1, dna);
const second = pAequorFactory(2, mockUpStrand());
first.compareDNA(second);
console.log(dna, first.willLikelySurvive());

let arrayOfPAequor = [];
for (let i = 0; i < 30; i++) {
  arrayOfPAequor.push(pAequorFactory(i, mockUpStrand()));
}

