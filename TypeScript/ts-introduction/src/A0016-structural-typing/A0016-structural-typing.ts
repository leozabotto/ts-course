/* eslint-disable */
type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

// type inference by the object structure
const dbUser = { username: 'leo', password: '123456' };
const sentUser = { username: 'leo', password: '123456' };

const loggedIn = verifyUser(dbUser, sentUser);
console.log(loggedIn);

export {};
