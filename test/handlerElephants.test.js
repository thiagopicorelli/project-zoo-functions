const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });

  it('retorna a média de idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });

  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toBe(expected);
  });
});
