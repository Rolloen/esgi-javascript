'use strict';

var hello = 'hello world';

function ucfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalize(string) {
  if (typeof myVar === 'string' || myVar instanceof String) {
    var stringArray = string.split(" ");
    var resultString = '';
    for (var str of stringArray) {
      resultString += ucfirst(str) + ' ';
    }
    return resultString;
  } else {
    return '';
  }
}

function camelCase(string) {
  if (typeof string === 'string' || string instanceof String) {
    var stringArray = string.split(" ");
    var resultString = '';
    for (var str of stringArray) {
      resultString += ucfirst(str);
    }
    return resultString;
  } else {
    return '';
  }
}

function snake_case(string) {
  if (typeof string === 'string' || string instanceof String) {
    return string.toLowerCase().replace(/ +/g, '_');
  } else {
    return '';
  }
}

function leet(string) {
  if (typeof string === 'string' || string instanceof String) {
    var arr = Array.from(string);
    var arrayChar = arr.map(changeToLeet);
    var resultString = '';
    for (var char of arrayChar) {
      resultString += char;
    }
    return resultString;
  } else {
    return '';
  }
  function changeToLeet(char) {
    switch (char.toLowerCase()) {
      case 'a':
        return '4';
      case 'e':
        return '3';
      case 'i':
        return '1';
      case 'o':
        return '0';
      case 'u':
        return '(_)';
      case 'y':
        return '7';
      default:
        return char;
    }
  }
}

function verlan(string) {
  var arr = string.split(' ');
  var charArray;
  for (var str of arr) {
    Array.from(str);
  }



}
