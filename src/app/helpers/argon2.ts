/* eslint-disable import/prefer-default-export */
import argon2 from 'argon2';

export default async function hash(senha) {
  const retorno = await argon2.hash(senha, {
    type: argon2.argon2i,
    hashLength: 100
  });

  return retorno;
}
