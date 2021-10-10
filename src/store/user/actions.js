/*
export function someAction (context) {
}
*/

export function initUser(context, payload) {
  context.commit("initUser", payload);
}
