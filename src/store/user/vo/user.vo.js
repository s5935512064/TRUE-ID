export function User({ id, username, email, isconfirmed, userToken }) {
  return Object.freeze({
    id: String(id),
    username: String(username),
    email: String(email),
    isconfirmed: Boolean(isconfirmed),
    userToken: String(userToken),
  });
}
