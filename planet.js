
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('globe'), alpha: true });
renderer.setSize(350, 350); 


const geometry = new THREE.SphereGeometry(2, 64, 64);
const texture = new THREE.TextureLoader().load('images/earthmap1k.jpg');
const material = new THREE.MeshPhongMaterial({ map: texture });
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(3,3,3);
scene.add(light);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.002;
    renderer.render(scene, camera);
}
animate();
