const someFilter = () => {
  const defaultValue = '';

  const isCorrect = (text) => typeof text === 'string';
  
  return (text) => {

    return isCorrect(text) ?
      text.replace(/\s+/, '').split('').join(' ') : defaultValue;
  }
}

export default someFilter;
