//import logo from './logo.svg';
//import './App.css';
import "aframe";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import universe from "./models/shusha_3d_landscape.glb";
import stars from "./models/images.jfif";
import caracter from "./models/star_wars_nier_automata.glb";
 
const App = () => {
  const loader = new GLTFLoader();
  loader.load(universe, (d) => {
    const entity = document.getElementById("universe");
    entity.object3D.add(d.scene);
  });
  loader.load(caracter, (d) => {
    const entity = document.getElementById("caracter");
    entity.object3D.add(d.scene);
  });
  return (
    <div className="App">
      <a-scene>
        <a-assets>
          <img id="sky" src={stars} alt="stars" />
        </a-assets>
        <a-entity id="universe" position="-100 -100 -100" scale="15 15 15"></a-entity>
        <a-entity id="caracter" position="-90 -10 -90" scale="2 2 2"></a-entity>
        <a-sky color="#ECECEC" material="src:#sky" rotation="0 0 0"></a-sky>
      </a-scene>
    </div>
  );
};
 
export default App;