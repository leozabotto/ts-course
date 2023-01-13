export class Company {
  public readonly name: string; // public by default
  protected readonly collaborators: Collaborator[] = [];
  private readonly cnpj: string;

  // sensetive data must be private (+ readonly when it is possible)
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

  public getName(): string {
    return this.name;
  }
}

export class Collaborator {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

// protected is similar

export class Udemy extends Company {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popCollaborator(): Collaborator | null {
    const collaborator = this.collaborators.pop();
    if (collaborator) return collaborator;
    return null;
  }
}
