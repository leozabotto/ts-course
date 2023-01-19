// key     value
const object1: Record<string, string> = {
  name: 'Leo',
  lastName: 'Zabotto',
};

type PersonProtocol = {
  name?: string;
  lastName?: string;
  age?: number;
};

// Required
type PersonRequired = Required<PersonProtocol>;

const object2: PersonRequired = {
  name: 'Leo',
  lastName: 'Zabotto',
  age: 20,
};

console.log(object2);

// Partial
type PersonPartial = Partial<PersonProtocol>;

// Readonly
type PersonRedonly = Readonly<PersonProtocol>;

// Pick
type PersonPick = Pick<PersonRequired, 'name' | 'lastName'>;

// Extract & Exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountMongoAPI = Pick<
  AccountMongo,
  Exclude<keyof AccountMongo, '_id'>
> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'sdj1f0uyghavbspasdf910348',
  name: 'Leo',
  age: 20,
};

function mapAccount(accountMongo: AccountMongo): AccountMongoAPI {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountAPI = mapAccount(accountMongo);

export {};
