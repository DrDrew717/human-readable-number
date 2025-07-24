module.exports = function toReadable(number) {
  const str = number.toString();
  const units = Number(str[str.length - 1]);
  const tens = Number(str[str.length - 2]);
  const hundreds = Number(str[str.length - 3]);
  let result = '';

  if (number === 0) {
    return 'zero';
  }

  switch (hundreds) {
    case 1:
      result = 'one hundred ';
      break;
    case 2:
      result = 'two hundred ';
      break;
    case 3:
      result = 'three hundred ';
      break;
    case 4:
      result = 'four hundred ';
      break;
    case 5:
      result = 'five hundred ';
      break;
    case 6:
      result = 'six hundred ';
      break;
    case 7:
      result = 'seven hundred ';
      break;
    case 8:
      result = 'eight hundred ';
      break;
    case 9:
      result = 'nine hundred ';
      break;
    default:
      result = '';
      break;
  }

  switch (tens) {
    case 2:
      result = `${result}twenty `;
      break;
    case 3:
      result = `${result}thirty `;
      break;
    case 4:
      result = `${result}forty `;
      break;
    case 5:
      result = `${result}fifty `;
      break;
    case 6:
      result = `${result}sixty `;
      break;
    case 7:
      result = `${result}seventy `;
      break;
    case 8:
      result = `${result}eighty `;
      break;
    case 9:
      result = `${result}ninety `;
      break;
    case 1:
      switch (units) {
        case 0:
          result = `${result}ten`;
          break;
        case 1:
          result = `${result}eleven`;
          break;
        case 2:
          result = `${result}twelve`;
          break;
        case 3:
          result = `${result}thirteen`;
          break;
        case 4:
          result = `${result}fourteen`;
          break;
        case 5:
          result = `${result}fifteen`;
          break;
        case 6:
          result = `${result}sixteen`;
          break;
        case 7:
          result = `${result}seventeen`;
          break;
        case 8:
          result = `${result}eighteen`;
          break;
        case 9:
          result = `${result}nineteen`;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  if (tens > 1 || tens === 0 || number < 10) {
    switch (units) {
      case 2:
        result = `${result}two`;
        break;
      case 3:
        result = `${result}three`;
        break;
      case 4:
        result = `${result}four`;
        break;
      case 5:
        result = `${result}five`;
        break;
      case 6:
        result = `${result}six`;
        break;
      case 7:
        result = `${result}seven`;
        break;
      case 8:
        result = `${result}eight`;
        break;
      case 9:
        result = `${result}nine`;
        break;
      case 1:
        result = `${result}one`;
        break;
      default:
        break;
    }
  }
  return result.trim();
};
