import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="App-header">
        <div class="col-12">
          HDRTZ Configuration Menu
        </div>
      </header>


      <body class="App-body">

        <div class="row">
          <div class="col-7">
            <img src="TestImage.jpg" width="90%"></img>
          </div>
          <div class="col-5">

            <div class="row">

              Move Camera:
            </div>
            <div class="row">
              <div class="col-3">
                <button type="button" class="btn btn-color col-10">Up</button>
              </div>
              <div class="col-3">
                <button type="button" class="btn btn-color col-10">Down</button>
              </div>
              <div class="col-3">
                <button type="button" class="btn btn-color col-10">Left</button>
              </div>
              <div class="col-3">
                <button type="button" class="btn btn-color col-10">Right</button>
              </div>
            </div>

            <div class="row">
              Zoom:
            </div>

            <div class="row">
              <div class="col-1">1x</div>
            <div class="col-10">
              <input type="range" class="form-range"></input>
              </div>
              <div class="col-1">4x</div>
            </div>

            <div class="row">
</div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
