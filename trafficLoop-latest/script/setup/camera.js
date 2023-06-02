const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 1500;
const cameraHeight = cameraWidth / aspectRatio;
const camera = new THREE.OrthographicCamera(
  cameraWidth / -2,
  cameraWidth / 2,
  cameraHeight / 2,
  cameraHeight / -2,
  50,
  700
);
camera.position.set(0, -210, 300);
camera.lookAt(0, 0, 0);
