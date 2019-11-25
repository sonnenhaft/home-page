function getRatio() {
  return window.innerWidth / window.innerHeight;
}

const CUBE_SIZE = 1;
const SMALL_CUBE_SIZE = CUBE_SIZE * 0.4;

export default (canvas, THREE) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, getRatio(), 0.1, 1000);
  camera.position.z = 2;

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const greenBorder = new THREE.LineSegments(
    new THREE.EdgesGeometry(
      new THREE.BoxBufferGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE)
    ),
    new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1 })
  );

  const greenCube = new THREE.Mesh(
    new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE),
    new THREE.MeshBasicMaterial({ color: 0x33AA55, transparent: true, opacity: 0.8 })
  );

  const blueCube = new THREE.Mesh(
    new THREE.BoxGeometry(SMALL_CUBE_SIZE, SMALL_CUBE_SIZE, SMALL_CUBE_SIZE),
    new THREE.MeshBasicMaterial({ color: 'blue' })
  );

  const blueBorder = new THREE.LineSegments(
    new THREE.EdgesGeometry(
      new THREE.BoxBufferGeometry(SMALL_CUBE_SIZE, SMALL_CUBE_SIZE, SMALL_CUBE_SIZE)
    ),
    new THREE.LineBasicMaterial({ color: 0xffffff })
  );

  new THREE.BoxGeometry(1, 1, 1)

  const pathBase = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.5, -0.5, -0.5),
    new THREE.Vector3(-0.5, -0.5, 0.5),
    new THREE.Vector3(-0.5, 0.5, 0.5),
    new THREE.Vector3(0.5, 0.5, 0.5),
    new THREE.Vector3(0.5, -0.5, 0.5),
    new THREE.Vector3(0.5, -0.5, -0.5),
    new THREE.Vector3(-0.5, -0.5, -0.5),
    new THREE.Vector3(-0.5, 0.5, -0.5),
    new THREE.Vector3(-0.5, 0.5, 0.5),
    new THREE.Vector3(0.5, 0.5, 0.5)
  ]);

  const potentialBorder = new THREE.Mesh(
    new THREE.TubeGeometry(pathBase, 500, 0.04, 50, false),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  );

  scene.add(potentialBorder);
  [greenCube, greenBorder].forEach(cube => scene.add(cube));

  function rotateCubes() {
    const speed = 0.02;

    [greenCube, greenBorder, potentialBorder].forEach(({ rotation }) => {
      rotation.x += speed;
      rotation.y += speed;
    });

    [blueCube, blueBorder].forEach(({ rotation }) => {
      rotation.x -= speed * 2;
      rotation.y -= speed * 2;
    });

    renderer.render(scene, camera);
  }

  let requestAnimationFrameId;
  function animate() {
    rotateCubes();
    requestAnimationFrameId = requestAnimationFrame(animate);
  }
  animate();

  return () => cancelAnimationFrame(requestAnimationFrameId)
}
