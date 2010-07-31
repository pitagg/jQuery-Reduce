// Desenvolvido por: Pitágoras Gervasi Galiotto - pitagg@gmail.com

$.fn.reduce = function(textToFilter, options){
  var defaultOptions = {caseSensitive:false, showItemMethod: 'show', hideItemMethod: 'hide', inputElementToFilter: ''};
  var list = this;
  options = $.extend(defaultOptions, options);
  
  // Associa ação de busca aos elementos passados como parâmetro      
  if (options.inputElementToFilter.length > 0) {
    var inputElements = $(options.inputElementToFilter);
    inputElements.val(textToFilter);
    inputElements.keyup(function(){
      inputElements.val(this.value);
      list.reduce(this.value);
    });    
  } 
  
  // Reduz a lista para mostrar somente os itens que atendem aos critérios de pesquisa
  if (textToFilter.length > 0) {
    list.each(function(){
      if ($(this).text().match(RegExp(textToFilter, options.caseSensitive ? '' : 'i'))) {
        eval('$(this).' + options.showItemMethod + '();');
      } else {
        eval('$(this).' + options.hideItemMethod + '();');
      }
    });        
  } else {
    eval('list.' + options.showItemMethod + '();');
  }
};
