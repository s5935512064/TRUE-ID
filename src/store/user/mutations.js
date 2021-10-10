/*
export function someMutation (state) {
}
*/

const log = ({ mutation, state, payload }) => {
  console.log({ mutation, state, payload });
};

export function initUser(state, payload) {
  log({ mutation: "initUser", payload, state });
  const { id, username, email, isconfirmed, userToken } = payload;

  state.id = id;
  state.name = username;
  state.email = email;
  state.isconfirmed = isconfirmed;
  state.userToken = userToken;

  log({ mutation: "AfterinitUser", payload, state });
}
