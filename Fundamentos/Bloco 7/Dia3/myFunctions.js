function encode(string) {
    let encode = "";
    for (let i = 0; i < string.length; i++){
      if (string[i] === "a"){
        encode = encode + "1";
      } else if (string[i] === "e"){
        encode = encode + "2";
      } else if (string[i] === "i"){
        encode = encode + "3";
      } else if (string[i] === "o"){
        encode = encode + "4";
      } else if (string[i] === "u"){
        encode = encode + "5";
      } else {
        encode = encode + string[i];
      }
    } 
    return encode;
  }
  
  function decode(string) {
    let decode = "";
    for (let i = 0; i < string.length; i++){
      if (string[i] === "1"){
        decode = decode + "a";
      } else if (string[i] === "2"){
        decode = decode + "e";
      } else if (string[i] === "3"){
        decode = decode + "i";
      } else if (string[i] === "4"){
        decode = decode + "o";
      } else if (string[i] === "5"){
        decode = decode + "u";
      } else {
        decode = decode + string[i];
      }
    } 
    return decode;
  }
  
module.exports = {encode, decode};