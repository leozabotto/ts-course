export class Company {
  public readonly name: string; // public by default
  // Other classes can be types
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  public showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

export class Collaborator {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

const company1 = new Company('Microsoft', '01.254.698/0001-25');

const collaborator1 = new Collaborator('Leo', 'Zabotto');
const collaborator2 = new Collaborator('Jane', 'Doe');

console.log(company1);
console.log(company1.name);

console.log(collaborator1);
console.log(collaborator1.name);

company1.addCollaborator(collaborator1);
company1.addCollaborator(collaborator2);

company1.showCollaborators();
