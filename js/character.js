// Business Logic for character API call
export default class Character {
  static allCharacters(){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://swapi.dev/api/people/`;
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

  static allCharacterss = async ()=>{
    const url = await fetch `https://swapi.dev/api/people/`;
    const characterList = await url.json();
    console.log(characterList)
    return characterList;
  }



  static getCharacter(number){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://swapi.dev/api/people/${number}`;
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