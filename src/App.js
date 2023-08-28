import "./App.css";
import { Parallax } from "react-parallax";
import img1 from "./images/waterfall.jpg";
import img2 from "./images/pexels-suzy-hazelwood-12517600.jpg";
import img3 from "./images/pexels-yuanpang-wa-15596359.jpg";

function App() {
  return (
    <div className="App">
      <Parallax strength={300} className="" bgImage={img1}>
        <div className="content">
          <div className="text-content">Normal parallax</div>
        </div>
      </Parallax>

      <Parallax
        strength={300}
        blur={{ min: -5, max: 15 }}
        className=""
        bgImage={img2}
      >
        <div className="content">
          <div className="text-content">Blur parallax</div>
        </div>
      </Parallax>

      <Parallax strength={-600} bgImage={img3}>
        <div className="content">
          <div className="text-content">reverse parallax</div>
        </div>
      </Parallax>

      <div className="content"></div>
    </div>
  );
}

export default App;
