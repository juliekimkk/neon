var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,
  window.innerWidth / window.innerHeight
);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
$("body").append(renderer.domElement);

//네모박스
// var geometry = new THREE.BoxGeometry(1, 1, 1);
//반듯한 원형
// var geometry = new THREE.SphereGeometry(2,50,50);
//도넛모양
var geometry = new THREE.TorusGeometry( 2, 0.2, 10, 100);

var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// var directionalLight = new THREE.directionalLight( 0xffffff,1.2);
// directionalLight.position.x = 3;
// directionalLight.position.y = 4;

cube.position.z = -5;
cube.rotation.x = 10;
cube.rotation.y = 5;

renderer.render(scene, camera);

var animate = function () {
  cube.rotation.x += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};
animate();
