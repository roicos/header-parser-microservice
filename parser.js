"use strict";


class Parser {
  
  static parseRequest(req) {
    var jsonData = {}; 
    var ip = Parser.parseIP(req.header('x-forwarded-for') || req.connection.remoteAddress);
    var language = Parser.parseLanguage(req.header('accept-language'));
    var software = Parser.parseSoftware(req.header('user-agent'));
    jsonData['ipaddress'] = ip;
    jsonData['language'] = language;
    jsonData['software'] = software;
    return jsonData;
  }
  
  static parseIP(ip){
    return ip.split(",")[0];   
  }
  
  static parseLanguage(ln){
    return ln.split(",")[0]; 
  }
  
  static parseSoftware(sw){
    var part1 = sw.split(")")[0];
    return part1.split("(")[1];
  }
  
}

module.exports = Parser;