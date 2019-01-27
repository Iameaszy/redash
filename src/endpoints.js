let baseUrl;
let productionUrl = 'https://server-gzpzstxali.now.sh/api/';
let devUrl = 'http://localhost:7070/api/';
baseUrl = process.env.NODE_ENV === 'production' ? productionUrl : devUrl;

export default {
  BASE: `${baseUrl}`,
  SIGNIN: `${baseUrl}user/signin`,

  SIGNUP: `${baseUrl}user/signup`,
  VERIFY: `${baseUrl}user/verify`,
  UPDATE: `${baseUrl}user/update`,
  RESET_PASSWORD: `${baseUrl}user/password/reset?`,
  FORGOT_PASSWORD: `${baseUrl}user/password/forgot`,
  VERIFY_EMAIL: `${baseUrl}user/email/verify?`,
  GET_EMAIL_VERIFICATION_LINK: `${baseUrl}user/email/send`,
  ADD_LISTING: `${baseUrl}listing`,
  DELETE_LISTING: `${baseUrl}listing/`, // id
  UPDATE_LISTING: `${baseUrl}listing/`, // id
  FIND_LISTINGS: `${baseUrl}listing`,
  MAKE_RATING: `${baseUrl}p/rating`,
  FIND_PUBLIC_LISTINGS: `${baseUrl}p/listing?`,
  FIND_PUBLIC_LISTINGS_ADVANCED: `${baseUrl}p/a/listing?`,
  FIND_DATES_TO_IGNORE: `${baseUrl}booking/info`,
};
