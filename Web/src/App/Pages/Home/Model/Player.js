/*
  eslint-disable
    no-bitwise,
    no-mixed-operators,
*/

// courtesy of:  https://stackoverflow.com/questions/105034/create-guid-uuid-in-g
const pseudoGuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  const r = Math.random() * 16 | 0; const
    v = c === 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});

export const Player = candidate => ({
  id: candidate.Id || pseudoGuid(),
  Name: candidate.Name || 'New Player',
});
