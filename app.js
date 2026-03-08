import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";
import { OrbitControls } from 
"https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js";


const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75 , 
    window.innerWidth/window.innerHeight, 
    0.1, 
    1000
)

camera.position.z = 5;

const geometry = new THREE.BoxGeometry( )

const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });

const cube = new THREE.Mesh( 
    geometry, material
)
cube.scale.set(2,2,2)
scene.add(cube)


const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth , window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true






let direction = 1 

function animate ()
{
    requestAnimationFrame(animate)

    cube.rotation.y += 0.02
    cube.rotation.x += 0.01

    cube.position.y += 0.01 * direction

    if (cube.position.y >= 1.5  || cube.position.y < -1.5){
        direction *= -1
    }

    cube.material.color.set(Math.random() * 0xffffff)
    controls.update()
    renderer.render(scene, camera)


}
animate( )