function getQueryObject(queryString: string) {
  Object.fromEntries(
    queryString
      .replaceAll("?", "")
      .split("&")
      .map((str) => str.split("="))
  );
}
export default getQueryObject;

// 1)) window.location.search
//       => "?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8"
// 2)) "?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8".replaceAll('?','')
//      => 물음표제거
// 3)) 'sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8'.split('&')
//       =>  ['sourceid=chrome-instant', 'ion=1', 'espv=2', 'ie=UTF-8']
// 4)) ['sourceid=chrome-instant', 'ion=1', 'espv=2', 'ie=UTF-8'].map((str)=> str.split('='))
//      => [['sourceid', 'chrome-instant'], ['ion', '1'], ['espv', '2'], ['ie', 'UTF-8']]
// 5)) Object.fromEntries([ ['sourceid', 'chrome-instant'], ['ion', '1'], ['espv', '2'], ['ie', 'UTF-8']])
//      => {sourceid: 'chrome-instant', ion: '1', espv: '2', ie: 'UTF-8'}
