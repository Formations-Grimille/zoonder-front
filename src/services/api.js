import { $fetch } from 'ohmyfetch';

const api = $fetch.create({
  baseURL: 'https://zoonder.grimille.fr'
});


export const authenticate = async(credentials) => {
  return api('/auth/login', { method: "POST", body: credentials });
}

export const getRandomProfile = async() => {
  return api('/api/profiles/random');
}

export const tryMatch = async(id) => {
  return api('/api/match', { method: "POST", body: { id}});
}