let scriptList = [
  "setup/init.js", //done
  "setup/camera.js", //done
  "setup/render.js", //done

  "View/lineMarking.js", //done
  "View/curbTexture.js", //done
  "View/score.js", //done
  "View/IsLand/left.js", //done
  "View/IsLand/right.js", //done
  "View/IsLand/middle.js", //done
  "View/IsLand/outer.js", //done
  "View/IsLand/renderMap.js", //done
  "View/tree.js", //done
  "View/animation.js", //done

  "Vehicle/control/reset.js",
  "Vehicle/control/start.js",
  "Vehicle/control/add.js",
  "Vehicle/control/move.js",
  "Vehicle/control/speed.js",
  "Vehicle/wheel.js",
  "Vehicle/Car/texture.js",
  "Vehicle/Car/car.js",

  "Collision/hitZone.js",
  "Collision/hitDetection.js",

  "EventListner/listner.js", //done

  "run.js",
];
scriptList.forEach(function (s) {
  let script = document.createElement("script"); //creating <script> element
  script.src = "./script/" + s;
  script.async = false;
  document.body.appendChild(script);
});
