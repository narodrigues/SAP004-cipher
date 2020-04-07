const cipher = {

  encode: function(offset, string){
    let msg = "";

    if(typeof offset !== "number" || typeof string !== "string"){
      throw new TypeError;
    } else {
      for(let i = 0; i < string.length; i++){
        let originalLetter = string.charCodeAt(i);
        let newLetter = null;
        
        if(originalLetter >= 65 && originalLetter <= 90){
          newLetter = ((originalLetter - 65 + offset) % 26) + 65;
          msg += String.fromCharCode(newLetter);  
        } else if(originalLetter >= 97 && originalLetter <= 122){
          newLetter = ((originalLetter - 97 + offset) % 26) + 97;
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
      
      if(originalLetter >= 65 && originalLetter <= 90){
        newLetter = ((originalLetter - 90 - offset) % 26) + 90;
        msg += String.fromCharCode(newLetter);  
      } else if(originalLetter >= 97 && originalLetter <= 122){
        newLetter = ((originalLetter - 122 - offset) % 26) + 122;
        msg += String.fromCharCode(newLetter);  
      } else {
        msg += String.fromCharCode(originalLetter);
      } 
    }
    return msg;
  }
};

export default cipher;