function Base64() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (input) {
    var output = new Array();
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = _utf8_encode(input);
    while (i < input.length) {
      chr1 = input[i++];
      chr2 = input[i++];
      chr3 = input[i++];
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else {
        if (isNaN(chr3)) {
          enc4 = 64;
        }
      }
      output.push(
        _keyStr.charAt(enc1) +
          _keyStr.charAt(enc2) +
          _keyStr.charAt(enc3) +
          _keyStr.charAt(enc4)
      );
    }
    return output.join("");
  };
  this.decode = function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = _utf8_decode(output);
    return output;
  };
  _utf8_encode = function (string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = new Array();
    var utftextlen = 0;
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext[utftextlen++] = c;
      } else {
        if (c > 127 && c < 2048) {
          utftext[utftextlen++] = (c >> 6) | 192;
          utftext[utftextlen++] = (c & 63) | 128;
        } else {
          utftext[utftextlen++] = (c >> 12) | 224;
          utftext[utftextlen++] = ((c >> 6) & 63) | 128;
          utftext[utftextlen++] = (c & 63) | 128;
        }
      }
    }
    return utftext;
  };
  _utf8_decode = function (utftext) {
    var string = "";
    var i = 0;
    var c = (c1 = c2 = 0);
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else {
        if (c > 191 && c < 224) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode(
            ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
          );
          i += 3;
        }
      }
    }
    return string;
  };
  _exchange_character = function (charArray) {
    charArray = charArray.split("");
    for (var i = 0; i < charArray.length; i++) {
      if (i > 0 && i % 2 == 0) {
        var c = charArray[i];
        charArray[i] = charArray[i - 1];
        charArray[i - 1] = c;
      }
    }
    return charArray.join("");
  };
  this.encodePostParam = function (input) {
    input = this.encode(input).split("").reverse().join("");
    return _exchange_character(input);
  };
  this.decodePostParam = function (input) {
    input = _exchange_character(input).split("").reverse().join("");
    return this.decode(input);
  };
}
