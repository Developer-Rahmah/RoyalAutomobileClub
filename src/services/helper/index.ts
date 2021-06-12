/**
 *
 * @param {*} uri
 * @param {*} query
 */

export const buildUrl = (uri: string, query: object = {}, params = []) => {
  let queryString = '';
  let paramString = '';

  params.forEach((param) => {
    paramString = `${paramString}/${param}`;
  });

  Object.keys(query).map((key) => {
    queryString = `${queryString}&${key}=${query[key]}`;
  });
  const t = `${uri}${paramString}${queryString}`;
  return `${uri}${paramString}${queryString}`;
};

/**
 *
 * @param {string} input
 */
export const htmlDecode = (input) =>
  input != undefined ? input.replace('&amp;', '&') : null;

export const seasons = (startYear) => {
  const currentYear = new Date().getFullYear();
  let years = [];
  startYear = startYear || 1980;
  while (startYear <= currentYear) {
    const year = startYear++;
    years = [
      ...years,
      {
        id: year,
        name: year,
      },
    ];
  }
  return years;
};
