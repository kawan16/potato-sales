
type BaseUser = { username: String }
type BaseAuthenticatedUser =  BaseUser & { isAuthenticated: boolean };
type BaseUserCredentials =  Pick<User, 'username'> & { password: String };

export type User = Readonly<BaseUser>;
export type AuthenticatedUser = Readonly<BaseAuthenticatedUser>;
export type UserCredentials = Readonly<BaseUserCredentials>;

