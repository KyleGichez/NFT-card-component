import './App.css';
import Image from './images/image-equilibrium.jpg';
import Image1 from './images/image-avatar.png';
function App() {
  return (
     <div className="App">
          <div className="main--container">
          <img src={Image} alt="equilibrium" className="main--container--image"/>
                  <h2 className="main--h2">Equilibrium #3429</h2>
                  <p className="main--paragraph--one"> Our Equilibrium collection promotes balance and calm.</p>
                  <div className="main--container--content">
                  <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8 " className="main--svg--one"/></svg>
                  <p className="main--paragraph--two">0.041ETH</p>
                  
                  <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9" className="main--svg--two"/></svg>
                  <p className="main--paragraph--three">3 days left</p>
                  </div>
                     <hr/>
                        <div className="Footer">
                           <img src ={Image1} alt="Avatar" width="50" height="50" className="main--image"/>
                           <p className="main--paragraph--three">Creation of <strong>Julius Wyvren</strong></p>
                         </div>
                        </div>
          </div>
  );
}

export default App;
