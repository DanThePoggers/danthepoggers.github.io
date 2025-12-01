const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 100);
camera.position.set(2,2,3);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const geometry = new THREE.ConeGeometry(1, 1.5, 4);
const material = new THREE.MeshNormalMaterial();
const pyramid = new THREE.Mesh(geometry, material);
scene.add(pyramid);

function animate(){
    requestAnimationFrame(animate);
    pyramid.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', ()=>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
});
