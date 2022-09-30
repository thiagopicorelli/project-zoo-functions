const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('retorna todos os horários se não passar argumentos', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('retorna se no dia e no horário ele está aberto', () => {
    let expected = 'The zoo is closed';
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(expected);
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(expected);

    expected = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(expected);
    expect(getOpeningHours('Saturday', '12:00-PM')).toBe(expected);
  });

  it('retorna erro se a hora ou minuto não representar um número', () => {
    const actual = () => getOpeningHours('Wednesday', 'a9sdy1273asdg');
    const expected = new Error('The hour should represent a number');
    expect(actual).toThrowError(expected);

    const actual2 = () => getOpeningHours('Wednesday', '09:AASDUAHSD');
    const expected2 = new Error('The minutes should represent a number');
    expect(actual2).toThrowError(expected2);
  });

  it('retorna erro se a abreviação da hora não for am ou pm', () => {
    const actual = () => getOpeningHours('Wednesday', '09:00-JJ');
    const expected = new Error('The abbreviation must be \'AM\' or \'PM\'');
    expect(actual).toThrowError(expected);
  });

  it('retorna erro se as horas ou minutos estiverem acima do possível', () => {
    const actual = () => getOpeningHours('Wednesday', '50:00-AM');
    const expected = new Error('The hour must be between 0 and 12');
    expect(actual).toThrowError(expected);

    const actual2 = () => getOpeningHours('Wednesday', '09:83-PM');
    const expected2 = new Error('The minutes must be between 0 and 59');
    expect(actual2).toThrowError(expected2);
  });

  it('retorna erro se o dia inserido não for válido', () => {
    const actual = () => getOpeningHours('Nebuladay', '12:00-AM');
    const expected = new Error('The day must be valid. Example: Monday');
    expect(actual).toThrowError(expected);
  });
});
