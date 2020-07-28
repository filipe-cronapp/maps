window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.ObterGeo = window.blockly.js.blockly.ObterGeo || {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.ObterGeo.AdicionarCirculo = function() {
 var item, destino, meulocal, saida;
  destino = this.cronapi.screen.getScopeVariable('destino');
  this.cronapi.maps.drawCircle("map7261", 'idCirculo', this.cronapi.maps.createLatLngPoint(String(this.cronapi.conversion.toString(this.cronapi.maps.getPropertyFromAutoComplete(destino, 'latitude'))), String(this.cronapi.conversion.toString(this.cronapi.maps.getPropertyFromAutoComplete(destino, 'longitude')))), '100', 'gray', 'black', '0.5', '');
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.ObterGeo.AdicionarMarcador = function() {
 var item, destino, meulocal, saida;
  destino = this.cronapi.screen.getScopeVariable('destino');
  this.cronapi.maps.createMarker("map7261", 'Treinamento', 'Câmara', this.cronapi.maps.createLatLngPoint(String(this.cronapi.conversion.toString(this.cronapi.maps.getPropertyFromAutoComplete(destino, 'latitude'))), String(this.cronapi.conversion.toString(this.cronapi.maps.getPropertyFromAutoComplete(destino, 'longitude')))), '', '', '');
  this.cronapi.maps.centralizeMap("map7261", String(this.cronapi.conversion.toString(this.cronapi.maps.getPropertyFromAutoComplete(destino, 'latitude'))), String(this.cronapi.conversion.toString(this.cronapi.maps.getPropertyFromAutoComplete(destino, 'longitude'))));
  this.blockly.js.blockly.ObterGeo.AdicionarCirculo();
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.ObterGeo.GerarRota = function() {
 var item, destino, meulocal, saida;
  saida = this.cronapi.screen.getScopeVariable('saida');
  destino = this.cronapi.screen.getScopeVariable('destino');
  this.cronapi.maps.directionRoute(this.cronapi.maps.createRequestDirection(this.cronapi.maps.createLatLngPoint(this.cronapi.maps.getPropertyFromAutoComplete(saida, 'latitude'), this.cronapi.maps.getPropertyFromAutoComplete(saida, 'longitude')), this.cronapi.maps.createLatLngPoint(this.cronapi.maps.getPropertyFromAutoComplete(destino, 'latitude'), this.cronapi.maps.getPropertyFromAutoComplete(destino, 'longitude')), 'DRIVING', null), function(sender_item) {
      item = sender_item;
    this.cronapi.maps.drawRoute("map7261", item, '{\"preserveViewport\": false}', function(sender_item) {
        item = sender_item;
    }.bind(this));
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.ObterGeo.AutoCompletarDestino = function() {
 var item, destino, meulocal, saida;
  this.cronapi.maps.createAutoComplete("map7261", "destino", 'address', this.cronapi.maps.createLatLngBounds(this.cronapi.maps.createLatLngPoint('-13.0183736', '-38.5480934'), this.cronapi.maps.createLatLngPoint('-12.7513579', '-38.1534927')), 'false', '', function(sender_item) {
      item = sender_item;
    this.cronapi.screen.createScopeVariable('destino', item);
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.ObterGeo.AutoCompletarSaida = function() {
 var item, destino, meulocal, saida;
  this.cronapi.maps.createAutoComplete("map7261", "partida", 'address', this.cronapi.maps.createLatLngBounds(this.cronapi.maps.createLatLngPoint('-13.0183736', '-38.5480934'), this.cronapi.maps.createLatLngPoint('-12.7513579', '-38.1534927')), 'true', '', function(sender_item) {
      item = sender_item;
    this.cronapi.screen.createScopeVariable('saida', item);
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.ObterGeo.fa_C3_A7a_algo = function() {
 var item, destino, meulocal, saida;
  if (!this.cronapi.maps.isInitialized("map7261")) {
    this.cronapi.maps.init("map7261", 'roadmap', this.cronapi.maps.createLatLngPoint('-13.0183736 ', '-38.5480934'), '16', function(sender_item) {
        item = sender_item;
      this.blockly.js.blockly.ObterGeo.AutoCompletarSaida();
      this.blockly.js.blockly.ObterGeo.AutoCompletarDestino();
    }.bind(this));
  }
}
