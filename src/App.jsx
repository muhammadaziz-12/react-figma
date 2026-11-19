import React from 'react'
import "./App.css";
function App() {
  return (
    <div className='container'>
      <nav>
        <ul>
          <li><a href="#">SUPPLEMENT</a></li>
          <li><a href="#">LASER</a></li>
          <li><a href="#">REVIEWS</a></li>
          <li><a href="#">JOURNAL</a></li>
          <li><a href="#">ABOUT</a></li>
        </ul>
        <img src="./src/assets/Site map.png" alt="" className="logo" />
        <div className="df">
          <ul>
            <li><a href="#">HELP & SUPPORT</a></li>
            <li><a href="#">ACTIVATE</a></li>
            <li><a href="#">ACCOUNT</a></li>
          </ul>
          <button className='buyBtn'>BUY</button>
        </div>
      </nav>
      <header>
        <h1 className="text">THE FUTURE OF WELLNESS.</h1>
        <p className='textP'>The perfect balance of science, nature and technology. <br /> Prepare to look and feel your absolute best.</p>
        <div className="dfBtns">
          <button className="btn">SUPPLEMENT</button>
          <button className="btn">LASER</button>
        </div>
      </header>
      <section>
        <div className="bgdark">
          <h1 className='bgdarkH1'>THE QUEST FOR BETTER.</h1>
          <img src="./src/assets/atirlar.png" alt="" className="atirlar" />
          <p className='bgP'>At LYMA, we’re always searching for the perfect balance of science, nature and technology. Every LYMA product has been designed to work together. We know that when we discover the best, you’ll discover yours.</p>
        </div>
        <div className="section2">
          <h1 className="s2h1">Wellness innovation at its scientific best.</h1>
          <div className="dfBtns">
            <button className="btn">SUPPLEMENT</button>
            <button className="btn">LASER</button>
          </div>
        </div>
        <div className="section3">
          <div className="textlar">
            <h1 className='s3h1'>Meet our founder.</h1>
            <p className='s3p'>Lucy’s story is one you really need to read; it changed an industry forever.</p>
            <button className='s3btn'>READ MORE</button>
          </div>
        </div>
      </section>
       <footer className="ftr">
      <div className="ftrdiv">

        <div className="ftrdiv">
          <h4 className="ftrh4">SUPPLEMENT</h4>
          <a className="ftra" href="#">Benefits</a>
          <a className="ftra" href="#">Formula</a>
          <a className="ftra" href="#">Immunity</a>
          <a className="ftra" href="#">Journal</a>
          <a className="ftra" href="#">Reviews</a>
          <a className="ftra" href="#">Buy</a>
        </div>

        <div className="ftrdiv">
          <h4 className="ftrh4">LYMA LASER</h4>
          <a className="ftra" href="#">LYMA Laser</a>
          <a className="ftra" href="#">Active Mat</a>
          <a className="ftra" href="#">Priming Serum</a>
          <a className="ftra" href="#">Technology</a>
          <a className="ftra" href="#">Results</a>
          <a className="ftra" href="#">Journal</a>
          <a className="ftra" href="#">Reviews</a>
          <a className="ftra" href="#">Buy</a>
        </div>

        <div className="ftrdiv">
          <h4 className="ftrh4">ABOUT</h4>
          <a className="ftra" href="#">About</a>
          <a className="ftra" href="#">Journal</a>
          <a className="ftra" href="#">FAQs</a>
          <a className="ftra" href="#">Contact</a>
          <a className="ftra" href="#">Terms</a>
          <a className="ftra" href="#">Privacy</a>
          <a className="ftra" href="#">Warranty</a>
        </div>

        <div className="ftrdiv">
          <h4 className="ftrh4">ACCOUNT</h4>
          <a className="ftra" href="#">Activate</a>
          <a className="ftra" href="#">My subscription</a>
          <a className="ftra" href="#">Add extras</a>
          <a className="ftra" href="#">My orders</a>
          <a className="ftra" href="#">Account details</a>
          <a className="ftra" href="#">Payment method</a>
          <a className="ftra" href="#">Login details</a>
        </div>

        <div className="ftrdiv newsletter">
          <h4 className="ftrh4">NEWSLETTER</h4>
          <p className="ftrp">Subscribe to our newsletter.</p>

          <form className="ftrform">
            <input className="ftrinput" type="email" placeholder="LYMA Newsletter" />
            <button className="ftrbutton">SIGN UP</button>
          </form>

          <div className="ftrdiv socials">
            <a className="ftra" href="#">▶</a>
            <a className="ftra" href="#">in</a>
            <a className="ftra" href="#">f</a>
            <a className="ftra" href="#">◎</a>
            <a className="ftra" href="#">℗</a>
          </div>

          <p className="ftrp copyright">© LYMA Ltd. 2021</p>
        </div>

      </div>
    </footer>
    </div>
  )
}

export default App