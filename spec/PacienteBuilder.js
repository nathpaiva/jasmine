function PacienteBuilder() {
  // nome, idade, peso, altura
  var nome = 'Nath',
    idade = 29,
    peso = 73,
    altura = 1.69;

  var clazz = {
    comNome: function(value) {
      nome = value;
      return this
    },
    comIdadde: function(value) {
      idade = value;
      return this
    },
    comPeso: function(value) {
      peso = value;
      return this
    },
    comAltura: function(value) {
      altura = value;
      return this
    },
    constroi: function() {
      return new Paciente(nome, idade, peso, altura);
    }
  };

  return clazz;
}
