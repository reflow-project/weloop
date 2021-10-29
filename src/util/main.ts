type objectWithEmptyFields = { [field: string]: boolean | string | number };

export const notEmptyValue = (obj: objectWithEmptyFields) => {
  const notEmptyObj: objectWithEmptyFields = {};
  Object.keys(obj).forEach(key => {
    if (
      (typeof obj[key] === 'boolean' && obj[key] === true) ||
      typeof obj[key] === 'number' ||
      (typeof obj[key] === 'string' && obj[key] !== '')
    ) {
      notEmptyObj[key] = obj[key];
    }
  });

  return notEmptyObj;
};
