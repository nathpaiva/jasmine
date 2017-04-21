describe('#Agendamento', function() {

  var paciente,
    agendamento;

  beforeEach(function() {
    paciente = new PacienteBuilder();
    agendamento = new Agendamento();
  });

  it('#criar consulta 20 dias para frente', function() {
    // paciente, procedimentos, particular, retorno, data
    var consulta = new Consulta(paciente, [], true, true, new Date(2017, 3, 21));
    var novaConsulta = agendamento.para(consulta);

    expect(novaConsulta.getData().toString()).toEqual(new Date(2017, 4, 11).toString());
  });

  it('#criar consulta 20 dias para frente e pluar final de semana', function() {
    // paciente, procedimentos, particular, retorno, data
    var consulta = new Consulta(paciente, [], true, true, new Date(2017, 3, 23));
    var novaConsulta = agendamento.para(consulta);

    expect(novaConsulta.getData().toString()).toEqual(new Date(2017, 4, 15).toString());
  });
});
