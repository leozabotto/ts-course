type VotingOption = {
  description: string;
  quantityOfVotes: number;
};

class VotingApp {
  private _options: VotingOption[] = [];

  constructor(private _question: string) {}

  get question(): string {
    return this._question;
  }

  get options(): VotingOption[] {
    return this._options;
  }

  addOption(...options: string[]): void {
    options.forEach((option) =>
      this._options.push({ description: option, quantityOfVotes: 0 }),
    );
  }

  findOptionIndex(optionDescription: string): number {
    return this.options.findIndex(
      (option) => option.description === optionDescription,
    );
  }

  increaseOptionVotes(optionToIncreaseVotesIndex: number): void {
    this._options[optionToIncreaseVotesIndex].quantityOfVotes += 1;
  }

  showCurrentResults(): void {
    console.log(this.question);
    this.options.forEach((option) => {
      console.log(`${option.description}: ${option.quantityOfVotes}`);
    });
  }

  vote(optionDescription: string): void {
    const optionIndex = this.findOptionIndex(optionDescription);
    const optionExists = optionIndex > -1;

    if (optionExists) {
      this.increaseOptionVotes(optionIndex);
      console.log('Thanks for voting!');
    } else {
      console.log('Invalid option. Please, try again!');
    }
  }
}

const favoriteProgrammingLanguageVoting = new VotingApp(
  'What is your favorite programming language?',
);

favoriteProgrammingLanguageVoting.addOption(
  'Python',
  'JavaScript',
  'C#',
  'PHP',
);

favoriteProgrammingLanguageVoting.showCurrentResults();

favoriteProgrammingLanguageVoting.vote('JavaScript');
favoriteProgrammingLanguageVoting.vote('JavaScript');
favoriteProgrammingLanguageVoting.vote('Ruby');
favoriteProgrammingLanguageVoting.vote('Python');
favoriteProgrammingLanguageVoting.vote('C#');
favoriteProgrammingLanguageVoting.vote('Python');
favoriteProgrammingLanguageVoting.vote('PHP');
favoriteProgrammingLanguageVoting.vote('JavaScript');
favoriteProgrammingLanguageVoting.vote('C#');

favoriteProgrammingLanguageVoting.showCurrentResults();

export {};
