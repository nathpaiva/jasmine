describe('#NumerosRomanos', function() {
  var escreveNumeros;

  beforeEach(function() {
    escreveNumeros = new NumerosRomanos();
  });

  it('#escreve numeros romanos', function() {
    var numeros = escreveNumeros.escreve(['I', 'II', 'III']);

    expect(escreveNumeros.getRomanos()).toEqual(['I', 'II', 'III']);
  });

  it('#troca para numeros', function() {
    var numeros = escreveNumeros.escreve(['I', 'II', 'III']);
    var pegaNumeros = escreveNumeros.getRomanos();

    expect(escreveNumeros.trocaNumeros(pegaNumeros)).toEqual([1, 2, 3]);
  });
});
