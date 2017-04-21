describe('#Paciente', function() {

  var paciente;

  beforeEach(function() {
    paciente = new Paciente('Nath', 29, 73, 1.69);
  });

  it('#clacula IMC', function() {
    expect(paciente.imc()).toEqual(73 / (1.69 * 1.69));
  });

  it('#calcula Batimento', function() {
    expect(paciente.batimentos()).toEqual(29 * 365 * 24 * 60 * 80);
  });
});
