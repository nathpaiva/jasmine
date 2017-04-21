describe('#Consulta', function() {

  var paciente;
  beforeEach(function() {
    paciente = new PacienteBuilder().constroi();
  });

  it('#retorno, não pode ser cobrado', function() {
    // paciente, procedimentos, particular, retorno
    var consulta = new Consulta(paciente, [], true, true);
    expect(consulta.preco()).toEqual(0);
  });

  it('#consulta comum', function() {
    // paciente, procedimentos, particular, retorno
    var consulta = new Consulta(paciente, ['consulta-1', 'consulta-2', 'consulta-3'], false, false);
    expect(consulta.preco()).toEqual(25 * 3);
  });

  describe('#tipos de consulta comum e com particular', function() {
    it('#consulta particular com procedimentos comuns', function() {
      // paciente, procedimentos, particular, retorno
      var consulta = new Consulta(paciente, ['consulta-1', 'consulta-2', 'consulta-3'], true, false);
      expect(consulta.preco()).toEqual((25 * 3) * 2);
    });
  });

  describe('#tipo de consulta especial', function() {

    it('#consulta particular com procedimentos especiais', function() {
      // paciente, procedimentos, particular, retorno
      var consulta = new Consulta(paciente, ['consulta-1', 'raio-x', 'consulta-2', 'gesso'], true, false);
      expect(consulta.preco()).toEqual(((25 * 2) + 55 + 32) * 2);
    });
  });

});
