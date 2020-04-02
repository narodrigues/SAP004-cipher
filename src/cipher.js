const cipher = {

  encode: function(offset, string){
    /*((codigoDaLetraASC - CódigoDaLetraA(65) + deslocamento) % 26) + CódigoDaLetraA    -> dessa forma o A se torna 0 e depois volta para o código ASC original para retornar a nova letra pós deslocamento
      ("A".charCodeAt(0) - 65 ...)
      string.fromCharCode(código)*/   
    let upperCase = string.toUpperCase(); 
    let msg = "";

    for(let i = 0; i < upperCase.length; i++){
        let originalLetter = upperCase.charCodeAt(i);
        
        if(originalLetter === 32){
          msg += String.fromCharCode(originalLetter);
          continue;
        }

        let newLetter = ((originalLetter - 65 + offset) % 26) + 65;
        msg += String.fromCharCode(newLetter);
    }
    return msg;
  },

  decode: function(offset, string){
    let upperCase = string.toUpperCase(); 
    let msg = "";

    for(let i = 0; i < upperCase.length; i++){
      let originalLetter = upperCase.charCodeAt(i); 

      if(originalLetter === 32){
        msg += String.fromCharCode(originalLetter);
        continue;
      }
      
      let newLetter = ((originalLetter - 65 - offset)% 26);     
          
      if(newLetter < 0){
          newLetter += 65 + 26;
      } else {
          newLetter += 65;
      }

      msg += String.fromCharCode(newLetter);
    }
    return msg;
  }
};

export default cipher;