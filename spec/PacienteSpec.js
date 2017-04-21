describe('#Paciente', function() {
  it('#clacula IMC', function() {
    // nome, idade, peso, altura
    var paciente = new Paciente('Nath', 29, 73, 1.69);
    expect(paciente.imc()).toEqual(73 / (1.69 * 1.69));
  });

  it('#calcula Batimento', function() {
    // idade * 365 * 24 * 60 * 80
    var paciente = new Paciente('Nath', 29, 73, 1.69);
    expect(paciente.batimentos()).toEqual(29 * 365 * 24 * 60 * 80);
  });
});
