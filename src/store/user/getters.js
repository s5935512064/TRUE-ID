/*
export function someGetter (state) {
}
*/

export function getUser(state) {
  return state;
}

export function getUsers(state) {
  return (sss) => {
    console.log(sss);
    return state;
  };
}
