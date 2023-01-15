export const COOKIE_TOKEN_KEY = 'TOKEN';
export const TOKEN_EXPIRED = 'EXPIRED';

const CookieToken = {
  set(token: string) {
    document.cookie = `${COOKIE_TOKEN_KEY}=${token};`;
  },

  get() {
    return document.cookie.split('=')[1];
  },

  remove() {
    document.cookie = `${COOKIE_TOKEN_KEY}=false; max-age=-1`;
    // max-age 0이나 음수 지정시 쿠키 삭제
  },
};

export default CookieToken;
