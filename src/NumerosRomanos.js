function NumerosRomanos() {
  var romanos;

  var clazz = {
    escreve: function(arr) {
      romanos = arr;
    },
    getRomanos: function() {
      return romanos;
    },
    trocaNumeros: function(numeros) {
      var trocaNumeros = [];

      numeros.forEach(function(numero) {
        if (numero === 'I') trocaNumeros.push(1);
        if (numero === 'II') trocaNumeros.push(2);
        if (numero === 'III') trocaNumeros.push(3);
      });

      return trocaNumeros;
    }
  };

  return clazz;
}
