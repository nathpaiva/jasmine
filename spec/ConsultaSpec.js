describe('#Consulta', function() {

  it('#retorno, não pode ser cobrado', function() {
    var paciente = new Paciente('Nath', 29, 73, 1.69);
    // paciente, procedimentos, particular, retorno
    var consulta = new Consulta(paciente, [], true, true);
    expect(consulta.preco()).toEqual(0);
  });

  it('#consulta comum', function() {
    var paciente = new Paciente('Nath', 29, 73, 1.69);
    // paciente, procedimentos, particular, retorno
    var consulta = new Consulta(paciente, ['consulta-1', 'consulta-2', 'consulta-3'], false, false);
    expect(consulta.preco()).toEqual(25 * 3);
  });

  it('#consulta particular com procedimentos comuns', function() {
    var paciente = new Paciente('Nath', 29, 73, 1.69);
    // paciente, procedimentos, particular, retorno
    var consulta = new Consulta(paciente, ['consulta-1', 'consulta-2', 'consulta-3'], true, false);
    expect(consulta.preco()).toEqual((25 * 3) * 2);
  });

  it('#consulta particular com procedimentos especiais', function() {
    var paciente = new Paciente('Nath', 29, 73, 1.69);
    // paciente, procedimentos, particular, retorno
    var consulta = new Consulta(paciente, ['consulta-1', 'raio-x', 'consulta-2', 'gesso'], true, false);
    expect(consulta.preco()).toEqual(((25 * 2) + 55 + 32) * 2);
  });

});
