// Business Logic for planet API call

export default class Planets {
  static allPlanets(number) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://swapi.dev/api/planets`;
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

  static getPlanet(number) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://swapi.dev/api/planets/${number}`;
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