
var cube = undefined;
var gl = undefined;
var angle = 0;

var rotationAxis = [0, 0, 1];
var xAxis = [1, 0, 0];
var yAxis = [0, 1, 0];

var speed = 5;
var canvas;

var lastMouseX = null;
var lastMouseY = null;

function init() {
  var canvas = document.getElementById( "webgl-canvas" );

  gl = WebGLUtils.setupWebGL( canvas );

  if ( !gl ) {
    alert("Unable to setup WebGL");
    return;
  }

  gl.clearColor( 0.8, 0.8, 0.8, 1.0 );
  gl.enable( gl.DEPTH_TEST );

  cube = new Cube();
  
  document.getElementById("xButton").onclick = function() {
	  rotationAxis = xAxis;
  }
  
  document.getElementById("yButton").onclick = function() {
	  rotationAxis = yAxis;
  }
  
   document.getElementById("rButton").onclick = function() {
	  speed = 5;
	  rotationAxis = [0, 0, 1];
  }
  
  document.getElementById("slider").onchange = function() {
	  speed = 0 + event.srcElement.value * .10;
  }
  
  document.onmousemove = function handleMouseMove(event){
	  var newX = event.clientX;
	  var newY = event.clientY;
	  
	  var deltaX = newX - lastMouseX;
	  var deltaY = newY - lastMouseY;
	  
	  angle = degToRad(deltaX + deltaY) * Math.PI * 5;
	  
	  lastMouseX = newX;
	  lastMouseY = newY;	  
  }
  
  document.onkeydown = function() {
	  switch(event.which || event.KeyCode) { 
		  case 70 : speed += .1; break;
		  case 83 : speed -= .1; break;
	  }
  };
  

  render();
}

function degToRad(degrees){
	  return degrees * Math.PI / 180;
	  }

function render() {
  gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );

  //angle += 2.0; // degrees

  //cube.MV = rotate( angle, [1, 1, 0] );
  cube.MV = rotate(speed * angle, rotationAxis);

  cube.render();

  requestAnimationFrame( render ); // schedule another call to render()
}

window.onload = init;
