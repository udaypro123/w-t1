
import './App.css';
import Body from './comonents/Body';
import Footer from './comonents/Footer';
import MIddle from './comonents/MIddle';
import Middle2 from './comonents/Middle2';
import Navbar from './comonents/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Body/>
      <div className='middlemaindiv'>
        
      <MIddle imgsrc="https://img.icons8.com/ios-glyphs/256/monitor.png" name="Fully Responsive"  />
      <MIddle imgsrc="https://img.icons8.com/windows/256/user.png" name="Trusted Author"  />
      <MIddle imgsrc="https://img.icons8.com/ios-glyphs/256/environment.png" name="Reusable Elements"  />
     
      </div>
      <div className='middlepart2'>
        <Middle2 imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyrOk3SQWXO8CeVe9kVPPxgbRRejN-AusjA&usqp=CAU" tag="Winnnig awrded" number="20" />
        <Middle2 imgsrc="https://static.vecteezy.com/system/resources/previews/004/230/299/non_2x/office-bag-icon-free-vector.jpg" tag="Finished Projects" number="145" />
        <Middle2 imgsrc="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg" tag="twitter fans" number="7844" />
      </div>

      <Footer/>
    </div>
  );
}

export default App;
