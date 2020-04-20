const cipher = {

  encode: function(offset, string){
    let msg = "";

    if(typeof string !== "string"){
      throw new TypeError("Digite um número e uma mensagem válida");
    } else {
      for(let i = 0; i < string.length; i++){
        let originalLetter = string.charCodeAt(i);
        let newLetter = null;
        const asciiForA = "A".charCodeAt();
        const asciiForZ = "Z".charCodeAt()
        const asciiForLowerCaseA = "a".charCodeAt();
        const asciiForLowerCaseZ = "z".charCodeAt();
        const lettersInAlphabet = 26;
  
        if(originalLetter >= asciiForA && originalLetter <= asciiForZ){
          newLetter = ((originalLetter - asciiForA + offset) % lettersInAlphabet) + asciiForA;
          msg+= String.fromCharCode(newLetter);  
        } else if(originalLetter >= asciiForLowerCaseA && originalLetter <= asciiForLowerCaseZ){
          newLetter = ((originalLetter - asciiForLowerCaseA + offset) % lettersInAlphabet) + asciiForLowerCaseA;
          msg += String.fromCharCode(newLetter);  
        } else {
          msg += String.fromCharCode(originalLetter);
        } 
      }
      return msg;
    }
  },

  decode: function(offset, string){
    let msg = "";

    for(let i = 0; i < string.length; i++){
      let originalLetter = string.charCodeAt(i);
      let newLetter = null;
      const asciiForA = "A".charCodeAt();
      const asciiForZ = "Z".charCodeAt()
      const asciiForLowerCaseA = "a".charCodeAt();
      const asciiForLowerCaseZ = "z".charCodeAt();
      const lettersInAlphabet = 26;
      
      if(originalLetter >= asciiForA && originalLetter <= asciiForZ){
        newLetter = ((originalLetter - asciiForZ - offset) % lettersInAlphabet) + asciiForZ;
        msg += String.fromCharCode(newLetter);  
      } else if(originalLetter >= asciiForLowerCaseA && originalLetter <= asciiForLowerCaseZ){
        newLetter = ((originalLetter - asciiForLowerCaseZ - offset) % lettersInAlphabet) + asciiForLowerCaseZ;
        msg += String.fromCharCode(newLetter);  
      } else {
        msg += String.fromCharCode(originalLetter);
      } 
    }
    return msg;
  }
};

export default cipher;