function formatarData(event, prec) {
    const input = event.target;
    const inputValue = input.value;
  
    // Remove todos os caracteres não numéricos da entrada
    const numericValue = inputValue.replace(/\D/g, '');
  
    // Verifica se a entrada é maior do que a última formatação conhecida (AAAA/MM/DD)
    if (numericValue.length > 8) {
      input.value = numericValue.slice(0, 8);
    } else {
      // Formata a entrada adicionando a barra como separador após o segundo e o quarto caractere
      let formattedValue = '';
      for (let i = 0; i < numericValue.length; i += 2) {
        if (i === 4 || i === 6) {
          formattedValue += '/' + numericValue.substr(i, 2);
        } else {
          formattedValue += numericValue.substr(i, 2);
        }
      }
      
      input.value = formattedValue;
    }
  }
  
  
  
  
  
  