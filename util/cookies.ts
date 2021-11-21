import { serialize } from 'cookie';
import Cookies from 'js-cookie';

export function createSerializedRegisterSessionTokenCookie(token: string) {
  const isProduction = process.env.NODE_ENV === 'production';

  const maxAge = 60 * 60 * 24; // 5 for 100 = 5 min

  return serialize('sessionToken', token, {
    maxAge: maxAge,

    expires: new Date(Date.now() + maxAge * 1000),

    httpOnly: true,
    secure: isProduction,
    path: '/',
    sameSite: 'lax',
  });
}

export function getParsedCookie(key: string) {
  try {
    return JSON.parse(key);
  } catch (err) {
    return undefined;
  }
}

export function setParsedCookie(key: string, value: string) {
  Cookies.set(key, JSON.stringify(value));
}
