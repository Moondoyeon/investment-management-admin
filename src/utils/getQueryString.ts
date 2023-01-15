// Record관련  https://developer-talk.tistory.com/296
const getQueryString = (
  query: Record<string, string | number | boolean | string[]>,
  converter?: (key: string) => string
) => {
  Object.entries(query)
    .filter(([, value]) => value && value !== 'all')
    .map(([key, value]) => `${converter ? converter(key) : key}=${value}`)
    .join('&');
};
export default getQueryString;
