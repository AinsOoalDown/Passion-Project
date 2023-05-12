//definition of variables
let grams, hLife, rGrams, time, hLives;
let find = {
  grams: false,
  hLife: false,
  rGrams: false,
  time: false,
  hLives: false,
};
let f = find;

//Adding elements
let hLifeElement
let hLivesElement
let timeElement
let gramsElement
let rGramsElement

//Functions

//gets the value of the text boxes and checks if they are numbers
//if they are not, it sets the corrisponding tag to false
function getNChk(id) {
	thing = eval(id + "Element").textContent;
  if (isNaN(thing)||(thing.length<1)) {
    find[id] = false;
  }
  return thing;
}

//Math equations
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
function yy() {
  return getBaseLog(2, grams / rGrams);
}

//Main
function calculate() {
hLifeElement = document.getElementById("hLifeText");
hLivesElement = document.getElementById("hLivesPastText");
timeElement = document.getElementById("timeText");
gramsElement = document.getElementById("gramsText");
rGramsElement = document.getElementById("rGramsText");	
  //Sets all the values to true
  for (var x in find) {
    find[x] = true;
  }
  //Calls the getNChk function to define and check the variables
  grams = getNChk("grams");
  hLife = getNChk("hLife");
  rGrams = getNChk("rGrams");
  time = getNChk("time");
  hLives = getNChk("hLives");
  //calculations
  //Check if the hLives variable has already been found
  if (!f.hLives) {
    //Checks if time and hLife have been found and then uses them to calculate half life
    if (f.time && f.hLife) {
      hLives = time / hLife;
      f.hLives = true;
    }
    //If one of the other two have not been found, tries with this instad
    else if (f.grams && f.rGrams) {
      hLives = yy();
      f.hLives = true;
    }
  }
  if (!f.time && f.hLife) {
    if (f.grams && f.rGrams) {
      time = yy() * hLife;
      f.time = true;
    }
    if (f.hLives) {
      time = hLives * hLife;
      f.time = true;
    }
  }
  if (!f.hLife && f.hLives && f.time) {
    hLife = time / hLives;
    f.hLife = true;
  }
  if (!f.grams && f.rGrams && f.hLives) {
    grams = rGrams * Math.pow(2, hLives);
    f.grams = true;
  }
  if (!f.rGrams && f.grams && f.hLives) {
    rGrams = grams / Math.pow(2, hLives);
    f.rGrams = true;
  }

  if (f.grams) gramsElement.textContent = grams;
  if (f.hLife) hLifeElement.textContent = hLife;
  if (f.hLives) hLivesElement.textContent = hLives;
  if (f.rGrams) rGramsElement.textContent = rGrams;
  if (f.time) timeElement.textContent = time;
}
