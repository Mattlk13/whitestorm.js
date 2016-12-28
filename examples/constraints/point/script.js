(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _globals = require('./globals');

var UTILS = _interopRequireWildcard(_globals);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var world = new (PHYSICS.$world(WHS.World))(_extends({}, UTILS.$world, {

  physics: {
    ammo: 'http://localhost:8001/vendor/ammo.js'
  },

  camera: {
    far: 10000,
    position: [0, 40, 70]
  }
}));

var halfMat = {
  kind: 'phong',
  transparent: true,
  opacity: 0.5
};

var PhysicsBox = PHYSICS.$rigidBody(WHS.Box, PHYSICS.BOX);

var box = new PhysicsBox({
  geometry: {
    width: 2,
    height: 20,
    depth: 2
  },

  mass: 0,

  material: _extends({
    color: UTILS.$colors.mesh
  }, halfMat),

  position: {
    y: 40
  }
});

var box2 = new PhysicsBox({
  geometry: {
    width: 2,
    height: 2,
    depth: 20
  },

  mass: 10,

  material: _extends({
    color: UTILS.$colors.softbody
  }, halfMat),

  physics: {
    damping: 0.1
  },

  position: {
    y: 28,
    z: 10
  }
});

var pointer = new (PHYSICS.$rigidBody(WHS.Sphere, PHYSICS.SPHERE))({ material: { color: UTILS.$colors.mesh } });
pointer.position.set(0.5, 60, -8);
pointer.addTo(world);

box.addTo(world);
box2.addTo(world);

var constraint = new PHYSICS.PointConstraint(box2.native, box.native, new THREE.Vector3(0, box2.position.y, 1));

world.addConstraint(constraint);

UTILS.addPlane(world, 250);
UTILS.addBasicLights(world);

world.start();
world.setControls(new WHS.OrbitControls());

},{"./globals":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAmbient = addAmbient;
exports.addBasicLights = addBasicLights;
exports.addPlane = addPlane;
exports.addBoxPlane = addBoxPlane;
var $world = exports.$world = {
  stats: "fps", // fps, ms, mb or false if not need.
  autoresize: "window",

  gravity: [0, -100, 0],

  camera: {
    position: [0, 10, 50]
  },

  rendering: {
    background: {
      color: 0x162129
    },

    renderer: {
      antialias: true
    }
  },

  shadowmap: {
    type: THREE.PCFSoftShadowMap
  }
};

var $colors = exports.$colors = {
  bg: 0x162129,
  plane: 0x447F8B,
  mesh: 0xF2F2F2,
  softbody: 0x434B7F
};

function addAmbient(world, intensity) {
  new WHS.AmbientLight({
    light: {
      intensity: intensity
    }
  }).addTo(world);
}

function addBasicLights(world) {
  var intensity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 10, 10];
  var distance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;

  addAmbient(world, 1 - intensity);

  return new WHS.PointLight({
    light: {
      intensity: intensity,
      distance: distance
    },

    shadowmap: {
      fov: 90
    },

    position: position
  }).addTo(world);
}

function addPlane(world) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  return new (PHYSICS.$rigidBody(WHS.Plane, PHYSICS.PLANE))({
    geometry: {
      width: size,
      height: size
    },

    physics: {
      create: PHYSICS.createPlane
    },

    mass: 0,

    material: {
      color: 0x447F8B,
      kind: 'phong'
    },

    rotation: {
      x: -Math.PI / 2
    }
  }).addTo(world);
}

function addBoxPlane(world) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  return new (PHYSICS.$rigidBody(WHS.Box, PHYSICS.BOX))({
    geometry: {
      width: size,
      height: 1,
      depth: size
    },

    mass: 0,

    material: {
      color: 0x447F8B,
      kind: 'phong'
    }
  }).addTo(world);
}

},{}]},{},[1]);
