// Business Logic for species API call

export default class Species {
  static allSpecies(number) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://swapi.dev/api/species/`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  static getSpecies(number) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://swapi.dev/api/species/${number}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}