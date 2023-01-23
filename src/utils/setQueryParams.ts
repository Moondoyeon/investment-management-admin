import getQueryObject from './getQueryObject';
import getQueryString from './getQueryString';

const setQueryParams = (params: Record<string, string | number | boolean | string[]>) => {
  // window.location.search => ?page=1&limit=30&broker_id=209&status=1
  const prevParams = window.location.search ? getQueryObject(window.location.search) : {}; // get => {page: '1', limit: '30', broker_id: '209', status: '1'}
  const url = `${window.location.pathname}?${getQueryString({ ...prevParams, ...params })}`; // get => page=1&limit=30&broker_id=209&status=1
  window.history.replaceState({ ...window.history.state, as: url, url }, '', url);
};

export default setQueryParams;
