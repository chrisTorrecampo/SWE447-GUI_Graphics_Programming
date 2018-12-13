/*----------------
BASICS
----------------*/
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 200;

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor("#dbfce1");
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

/*----------------
LIGHTING
----------------*/
var keyLight = new THREE.DirectionalLight("#ff4d3d", 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight("#ff4d3d", 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

var cityLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(1, 1, 1);

var accentLight = new THREE.PointLight("#ff4d3d", 5, 100);
accentLight.position.set(0, 50, 0);


scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);
scene.add(cityLight);
scene.add(accentLight);

/*----------------
SKYBOX
----------------*/
var geometry = new THREE.CubeGeometry(1000, 1000, 1000);
var cubeMaterials = 
[
	new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("Front.png"), side: THREE.DoubleSide} ),
	new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("Back.png"), side: THREE.DoubleSide} ),
	new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("UP.png"), side: THREE.DoubleSide} ),
	new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("DOWN.png"), side: THREE.DoubleSide} ),
	new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("Right.png"), side: THREE.DoubleSide} ),
	new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("LEFT.png"), side: THREE.DoubleSide})
];
var skyCube = new THREE.Mesh(geometry, cubeMaterials);
scene.add(skyCube);


/*----------------
CLASSES
----------------*/
//Monolith
var MonolithClass = function() {
	THREE.Group.apply(this, arguments);
	this.rotationSpeed = Math.random() * 0.01 + 0.006;
	this.rotationPosition = Math.random();
	
	var mono_geo = new THREE.IcosahedronGeometry(10,0);
	var mono_mat = new THREE.MeshNormalMaterial();
	var monolith = new THREE.Mesh(mono_geo, mono_mat);
	
	monolith.position.y = +80;
	
	this.add(monolith);	
}
MonolithClass.prototype = Object.create(THREE.Group.prototype);
MonolithClass.prototype.constructor = MonolithClass;
MonolithClass.prototype.updatePosition = function() {
    this.rotationPosition += this.rotationSpeed;
    this.rotation.y = (Math.sin(this.rotationPosition));
};

//Sun
var SunClass = function() {
	THREE.Group.apply(this, arguments);
	this.orbitRadius = 100;
	
	var sun_geo = new THREE.SphereGeometry(15, 32, 32);
	var sun_color = new THREE.Color( "#f4ce42" );
	var sun_mat = new THREE.MeshLambertMaterial( {color: sun_color.getHex()} );
	var sun = new THREE.Mesh(sun_geo, sun_mat);
	
	sun.position.y = +200;
	
	this.add(sun);
}
SunClass.prototype = Object.create(THREE.Group.prototype);
SunClass.prototype.constructor = SunClass;
SunClass.prototype.updatePosition = function() {
	var date = Date.now() * 0.0001;
    this.position.set(
	Math.cos(date) * this.orbitRadius,
	0,
	Math.sin(date) * this.orbitRadius
	);
};

//Moon
var MoonClass = function() {
	THREE.Group.apply(this, arguments);
	this.orbitRadius = 80;
	
	var moon_geo = new THREE.SphereGeometry(10, 32, 32);
	var moon_color = new THREE.Color( "#ffffff" );
	var moon_mat = new THREE.MeshLambertMaterial( {color: moon_color.getHex()} );
	var moon = new THREE.Mesh(moon_geo, moon_mat);
	
	moon.position.y = +150;
	
	this.add(moon);
}
MoonClass.prototype = Object.create(THREE.Group.prototype);
MoonClass.prototype.constructor = MoonClass;
MoonClass.prototype.updatePosition = function() {
	var date = Date.now() * 0.002;
    this.position.set(
	Math.cos(date) * this.orbitRadius,
	0,
	Math.sin(date) * this.orbitRadius
	);
};


//Shape1_Octagon
var s1Class = function() {
	THREE.Group.apply(this, arguments);
	this.rotationSpeed = Math.random() * 0.01 + 0.006;
	this.rotationPosition = Math.random();
	
	var shape1_geo = new THREE.OctahedronGeometry(5,0);
	var shape1_color = new THREE.Color( "#ff5ee1" );
	var shape1_mat = new THREE.MeshStandardMaterial({
		color: shape1_color.getHex(),
		metalness: 0.8,
		roughness: 1
	});
	var shape1 = new THREE.Mesh(shape1_geo, shape1_mat);
	
	shape1.position.y = +90;
	shape1.position.x = +20;
	
	this.add(shape1);
}
s1Class.prototype = Object.create(THREE.Group.prototype);
s1Class.prototype.constructor = s1Class;
s1Class.prototype.updatePosition = function() {
    this.rotationPosition += this.rotationSpeed;
    this.rotation.y = (Math.sin(this.rotationPosition));
};


//Shape2_Octagon
var s2Class = function() {
	THREE.Group.apply(this, arguments);
	this.rotationSpeed = Math.random() * 0.01 + 0.006;
	this.rotationPosition = Math.random();
	
	var shape2_geo = new THREE.OctahedronGeometry(5,0);
	var shape2_color = new THREE.Color( "#ff5ee1" );
	var shape2_mat = new THREE.MeshStandardMaterial({
		color: shape2_color.getHex(),
		metalness: 0.8,
		roughness: 1
	});
	var shape2 = new THREE.Mesh(shape2_geo, shape2_mat);
	
	shape2.position.y = +90;
	shape2.position.x = -20;
	
	this.add(shape2);
}
s2Class.prototype = Object.create(THREE.Group.prototype);
s2Class.prototype.constructor = s2Class;
s2Class.prototype.updatePosition = function() {
    this.rotationPosition += this.rotationSpeed;
    this.rotation.y = (Math.sin(this.rotationPosition));
};

//Float
var FloatClass = function() {
	THREE.Group.apply(this, arguments);
	this.rotationSpeed = Math.random() * 0.01 + 0.006;
	this.rotationPosition = Math.random();
	
	//Torus SubObject
	var torus_geo = new THREE.TorusGeometry(10, 3, 16, 100);
	var torus_color = new THREE.Color( "#8c003f" );
	var torus_mat = new THREE.MeshStandardMaterial({
		color: torus_color.getHex(),
		emissive: "#8c003f",
		metalness: .6,
		roughness: 0
	});
	var torus = new THREE.Mesh(torus_geo, torus_mat);
	
	torus.rotation.x = Math.PI / 2;
	
	//Sphere SubObject
	var sphere_geo = new THREE.SphereGeometry(5, 32, 32);
	var sphere_color = new THREE.Color( "#2faae2" );
	var sphere_mat = new THREE.MeshStandardMaterial({
		color: torus_color.getHex(),
		emissive: "#2faae2",
		metalness: 1,
		roughness: 0
	});
	var sphere = new THREE.Mesh(sphere_geo, sphere_mat);
	
	this.add(torus)
	this.add(sphere);
	
	this.position.y -= 8;
}
FloatClass.prototype = Object.create(THREE.Group.prototype);
FloatClass.prototype.constructor = FloatClass;
FloatClass.prototype.updatePosition = function() {
    this.rotationPosition += this.rotationSpeed;
    this.rotation.y = (Math.sin(this.rotationPosition));
};


//Car
var CarClass = function() {
	THREE.Group.apply(this, arguments);
	this.moveSpeed = .1;
	this.dirSwap = 1;	//Used to swap move direction
	
	//Body SubObject
	var body_geo = new THREE.BoxGeometry(5, 3.5, 5);
	var body_color = new THREE.Color( "#49d7ff" );
	var body_mat = new THREE.MeshStandardMaterial({
		color: body_color.getHex(),
		metalness: .7,
		roughness: .3
	});
	var body = new THREE.Mesh(body_geo, body_mat);
	body.position.y += .5;
	
	this.add(body);
	
	//Hood SubObject
	var hood_geo = new THREE.BoxGeometry(5, 2, 5);
	var hood_color = new THREE.Color( "#49d7ff" );
	var hood_mat = new THREE.MeshStandardMaterial({
		color: hood_color.getHex(),
		metalness: .7,
		roughness: .3
	});
	var hood = new THREE.Mesh(hood_geo, hood_mat);
	
	hood.position.x += 1;
	hood.position.y -= .5;
	this.add(hood);
	
	//Trunk SubObject
	var hood_geo = new THREE.BoxGeometry(5, 2, 5);
	var hood_color = new THREE.Color( "#49d7ff" );
	var hood_mat = new THREE.MeshStandardMaterial({
		color: hood_color.getHex(),
		metalness: .7,
		roughness: .3
	});
	var hood = new THREE.Mesh(hood_geo, hood_mat);
	
	hood.position.x -= 1;
	hood.position.y -= .5;
	this.add(hood);
	
	//Wheels SubObject
	var wheels_geo = new THREE.CylinderGeometry(1, 1, 5.5, 25);
	var wheels_color = new THREE.Color( "#707070" );
	var wheels_mat = new THREE.MeshStandardMaterial({
		color: wheels_color.getHex(),
		metalness: 0,
		roughness: .3
	});
	var wheelsF = new THREE.Mesh(wheels_geo, wheels_mat);
	var wheelsB = new THREE.Mesh(wheels_geo, wheels_mat);
	
	wheelsF.position.x += 2;
	wheelsB.position.x -= 2;
	wheelsF.position.y -= .5;
	wheelsB.position.y -= .5;
	wheelsF.rotation.x = Math.PI / 2;
	wheelsB.rotation.x = Math.PI / 2;
	this.add(wheelsF);
	this.add(wheelsB);
	
	//Headlights SubObject
	var lights_geo = new THREE.CylinderGeometry(.5, .5, 1.5, 25);
	var flights_color = new THREE.Color( "#fffddb" );
	var blights_color = new THREE.Color( "#ff4d3d" );
	var flights_mat = new THREE.MeshStandardMaterial({
		color: flights_color.getHex(),
		emissive: "#fffddb",
		metalness: .6,
		roughness: .3
	});
	var blights_mat = new THREE.MeshStandardMaterial({
		color: blights_color.getHex(),
		emissive: "#ff4d3d",
		metalness: .6,
		roughness: .3
	});
	var flights1 = new THREE.Mesh(lights_geo, flights_mat);
	var flights2 = new THREE.Mesh(lights_geo, flights_mat);
	var blights1 = new THREE.Mesh(lights_geo, blights_mat);
	var blights2 = new THREE.Mesh(lights_geo, blights_mat);
	
	flights1.position.x += 3;
	flights2.position.x += 3;
	flights1.position.y -= .5;
	flights2.position.y -= .5;
	flights1.position.z += 1.5;
	flights2.position.z -= 1.5;
	
	blights1.position.x -= 3;
	blights2.position.x -= 3;	
	blights1.position.y -= .5;
	blights2.position.y -= .5;	
	blights1.position.z += 1.5;
	blights2.position.z -= 1.5;
	
	flights1.rotation.z = Math.PI / 2;
	flights2.rotation.z = Math.PI / 2;
	blights1.rotation.z = Math.PI / 2;
	blights2.rotation.z = Math.PI / 2;
	this.add(flights1);
	this.add(flights2);
	this.add(blights1);
	this.add(blights2);
	
	var fl1 = new THREE.PointLight(flights_color.getHex(), .5, 100);
	fl1.position.set(3.1,.5,-1.5);
	this.add(fl1);
	
	var fl2 = new THREE.PointLight(flights_color.getHex(), .5, 100);
	fl2.position.set(3.1,.5,1.5);
	this.add(fl2);
	
	var bl1 = new THREE.PointLight(blights_color.getHex(), 1, 100);
	bl1.position.set(-3.1,.5,1.5);
	this.add(bl1);
	
	var bl2 = new THREE.PointLight(blights_color.getHex(), 1, 100);
	bl2.position.set(-3.1,.5,-1.5);
	this.add(bl2);
}
CarClass.prototype = Object.create(THREE.Group.prototype);
CarClass.prototype.constructor = CarClass;
CarClass.prototype.updatePosition = function() {
	if (this.position.x > 60)
		this.dirSwap = -1;
	else if (this.position.x < -60)
		this.dirSwap = 1;
	
	this.position.x += (this.moveSpeed * this.dirSwap);
};

//Lamp Orbs
var LampClass = function() {
	THREE.Group.apply(this, arguments);
	this.rotationSpeed = .05;
	
	//Lamp Head SubObject
	var lamp_geo = new THREE.IcosahedronGeometry(3,0);
	var lamp_color = new THREE.Color( "#ff4d3d" );
	var lamp_mat = new THREE.MeshStandardMaterial({
		color: lamp_color.getHex(),
		emissive: "#ff167f",
		metalness: .6,
		roughness: .3
	});
	var lamp = new THREE.Mesh(lamp_geo, lamp_mat);
	
	lamp.position.y = +20;
	
	this.add(lamp);	
	
	//Lamp Light SubObject
	var light = new THREE.PointLight(lamp_color.getHex(), 6, 100);
	light.position.set(1,1,1);
	this.add(light);
}
LampClass.prototype = Object.create(THREE.Group.prototype);
LampClass.prototype.constructor = MonolithClass;
LampClass.prototype.updatePosition = function() {
    this.rotation.y = this.rotation.y + (Math.sin(this.rotationSpeed));
};

/*----------------
SCENE OBJECTS
----------------*/
var objects = [];

var monolith1 = new MonolithClass();
scene.add(monolith1);
objects.push(monolith1);

var sun1 = new SunClass();
scene.add(sun1);
objects.push(sun1);

var moon1 = new MoonClass();
scene.add(moon1);
objects.push(moon1);

var shape1 = new s1Class();
scene.add(shape1);
objects.push(shape1);

var shape2 = new s2Class();
scene.add(shape2);
objects.push(shape2);

var f1 = new FloatClass();
scene.add(f1);
objects.push(f1);

f1.position.x += 50;
f1.position.z += 50;

var f2 = new FloatClass();
scene.add(f2);
objects.push(f2);

f2.position.x += 50;
f2.position.z -= 50;

var f3 = new FloatClass();
scene.add(f3);
objects.push(f3);

f3.position.x -= 50;
f3.position.z += 50;

var f4 = new FloatClass();
scene.add(f4);
objects.push(f4);

f4.position.x -= 50;
f4.position.z -= 50;

var car = new CarClass();
scene.add(car);
objects.push(car);

car.position.x += 60;
car.position.z += 60;
car.position.y += 2;

var lamp1 = new LampClass();
scene.add(lamp1);
objects.push(lamp1);

lamp1.position.x += 51.5;
lamp1.position.z += 51.5;

var lamp2 = new LampClass();
scene.add(lamp2);
objects.push(lamp2);

lamp2.position.x += 51.5;
lamp2.position.z -= 51.5;

var lamp3 = new LampClass();
scene.add(lamp3);
objects.push(lamp3);

lamp3.position.x -= 51.5;
lamp3.position.z += 51.5;

var lamp4 = new LampClass();
scene.add(lamp4);
objects.push(lamp4);

lamp4.position.x -= 51.5;
lamp4.position.z -= 51.5;
/*----------------
LOADER
----------------*/
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('city_block.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    var vscale = 5;
    objLoader.load('city_block.obj', function (object) { 
       object.scale.x = vscale;
       object.scale.y = vscale;
	   object.scale.z = vscale;
	   
	   object.rotation.y = Math.PI / 2;
		
        scene.add(object);
    });

});

var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
	
	for (var i = 0; i < objects.length; i++)
	{
		objects[i].updatePosition();
	}
};

/*
document.getElementById("b1").onclick = function() {
	var geometry = new SunClass();
	scene.add(geometry);
	objects.push(geometry);
}*/


animate();
