import Teste from '.';

it('teste', () => {
  const teste = new Teste();
  expect(teste.name()).toBe('test');
});
