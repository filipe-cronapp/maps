window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Login = window.blockly.js.blockly.Login || {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Login.fecharModalCadastro = function() {

  this.cronapi.screen.hideModal("modalCadastro");
}

/**
 * Login
 */
window.blockly.js.blockly.Login.abrirModalCadastro = function() {

  this.cronapi.screen.showModal("modalCadastro");
}
