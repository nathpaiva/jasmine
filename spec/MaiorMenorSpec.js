describe('#Maior e Menor', function() {

  it('#deve entender números em ordem não sequencial', function() {
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([8, 15, 6, 5, 10]);

    expect(algoritmo.pegaMenor()).toEqual(5);
    expect(algoritmo.pegaMaior()).toEqual(15);
  });

  it('#deve entender números em ordem crescente', function() {
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([5, 6, 7, 8, 9, 10]);

    expect(algoritmo.pegaMenor()).toEqual(5);
    expect(algoritmo.pegaMaior()).toEqual(10);
  });

  it('#deve entender números em ordem decrescente', function() {
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([10, 9, 8, 7, 6, 5, 4]);

    expect(algoritmo.pegaMenor()).toEqual(4);
    expect(algoritmo.pegaMaior()).toEqual(10);
  });

  it('#deve entender um array de um unico elemento', function() {
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([10]);

    expect(algoritmo.pegaMenor()).toEqual(10);
    expect(algoritmo.pegaMaior()).toEqual(10);
  });
});
