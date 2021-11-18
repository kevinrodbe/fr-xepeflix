export const User = {
  create: (persistence) => ({
    email: persistence.email,
    pwd: persistence.password,
    username: persistence.username,
  }),
};
