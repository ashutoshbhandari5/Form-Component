const isExisty = (value) => {
  return value !== null && value !== undefined;
};

const isEmpty = (value) => {
  if (value instanceof Array) {
    return value.length === 0;
  }
  return value === "" || !isExisty(value);
};

const rules = {
  // eslint-disable-next-line

  testRegex: (value, regex) => {
    const textRegex = new RegExp(regex);
    return textRegex.test(value);
  },

  isEmail: (value, regex) => rules["testRegex"](value, regex),

  isPassword: (value, regex) => rules["testRegex"](value, regex),

  startsWith: (value, check) => value.toString().startsWith(check),

  endsWith: (value, check) => value.toString().endsWith(check),

  includes: (value, check) => value.toString().includes(check),

  required: (value) => !isEmpty(value),

  isNumber: (value) => /^-?[0-9]\d*(\d+)?$/i.test(value),

  isFloat: (value) => /^(?:-?[1-9]\d*|-?0)?(?:\.\d+)?$/i.test(value),

  isPositive: (value) => {
    if (isExisty(value)) {
      return (rules.isNumber(value) || rules.isFloat(value)) && value >= 0;
    }
    return true;
  },

  maxNumber: (value, max) => value.length <= parseInt(max, 10),

  minNumber: (value, min) => value.length >= parseInt(min, 10),

  maxString: (value, max) => value.length <= max,

  minString: (value, min) => value.length >= min,

  hasStringLength: (value, length) => value.length === length,

  isString: (value) =>
    isEmpty(value) || typeof value === "string" || value instanceof String,
};

export const validate = (validator, value) => {
  let rule;
  let extra;
  const validatorString = JSON.stringify(validator);
  const index = validatorString.indexOf(":");
  const validatorArray = Object.keys(validator).map((el) => el);
  if (index > -1) {
    rule = validatorArray[0];
    extra = validator[validatorArray[0]];
    return rules[rule](value, extra);
  } else {
    rule = validator;
    console.log(rules[rule](value));
    console.log(rules["isString"]("1"));
    return rules[rule](value);
  }
};
