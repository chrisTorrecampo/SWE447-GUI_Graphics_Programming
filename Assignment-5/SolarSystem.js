var distanceMultiplier = 10;
var gasGiantDistanceMultiplier = 3.5;
var sizeMultiplier = 2;
var gasGiantSizeMultiplier = .5;

var SolarSystem = {
  Sun : {
    radius : 1 * sizeMultiplier * 3,  
    distance : 0,
    year : 0,
    color : [ 1.0, 1.0, 0.0, 1.0 ]
  },
  Mercury : {
    radius : 0.0553 * sizeMultiplier * 12,
    distance : 0.387 * distanceMultiplier * 2,
    year : 0.241,
    color : [ 1.0, 0.0, 0.0, 1.0 ]
  },
  Venus : {
    radius : 0.949 * sizeMultiplier,
    distance : 0.723 * distanceMultiplier * 2,
    year : 0.615,
    color : [ 1.0, 0.0, 1.0, 1.0 ]
  },
  Earth : {
    radius : 1 * sizeMultiplier,
    distance : 1 * distanceMultiplier * 2,
    year : 1,
    color : [ 0.0, 0.0, 1.0, 1.0 ]
  },
  Moon : {
    radius : 0.2724 * sizeMultiplier * .5,
    distance : 0.00257 * distanceMultiplier * 55,
    year : 0.0748,
    color : [ 0.5, 0.5, 0.5, 1.0 ]
  },
  Mars : {
    radius : 0.532 * sizeMultiplier,
    distance : 1.52 * distanceMultiplier * 2,
    year : 1.88,
    color : [ 1.0, 0.0, 0.0, 1.0 ]
  },
  Jupiter : {
    radius : 11.21 * gasGiantSizeMultiplier, 
    distance : 5.20 * gasGiantDistanceMultiplier * 2.3,
    year : 11.9,
    color : [ 1.0, 153/255, 0.0, 1.0 ]
  },
  Saturn : {
    radius : 9.45 * gasGiantSizeMultiplier,
    distance : 9.58 * gasGiantDistanceMultiplier * 1.7,
    year : 29.4,
    color : [ 1.0, 1.0, 0.0, 1.0 ]
  },
  Uranus : {
    radius : 4.01 * gasGiantSizeMultiplier * 1.2,
    distance : 19.20 * gasGiantDistanceMultiplier * 1.1,
    year : 83.7,
    color : [ 0.0, 0.1, 1.0, 1.0 ]
  },
  Neptune : {
    radius : 3.88 * gasGiantSizeMultiplier * 1.2,
    distance : 30.05 * gasGiantDistanceMultiplier * .9,
    year : 163.7,
    color : [ 0.0, 0.0, 1.0, 1.0 ]
  },
  Pluto : {
    radius : 0.186 * gasGiantSizeMultiplier * 8,
    distance : 39.48 * gasGiantDistanceMultiplier * .8,
    year : 247.9,
    color : [ 150/255, 75/255, 0.0, 1.0 ]
  }
};
