import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div class="gora1">
    <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div class="gora2">
      <h1>Moja pierwsza strona REACT</h1>
    </div>
   
<div class="content">
    <div class="lewa">
    <div class="lewasrodek"> 
    <h3>Wirtualna Uczelnia</h3>
      <div>
      <a href="https://dziekanat.spoleczna.pl/" target="_blank" rel="noopener noreferrer">
        <button>Sprawdź</button>
      </a>
    </div>
    <h3>Strefa Stydenta</h3>
    <div>
      <a href="https://san.edu.pl/strefa-studenta" target="_blank" rel="noopener noreferrer">
        <button>Sprawdź</button>
      </a>
    </div>
    <h3>Intranet SAN</h3>
    <div>
      <a href="https://intranet.san.edu.pl/" target="_blank" rel="noopener noreferrer">
        <button>Sprawdź</button>
      </a>
      </div>
    </div>
      </div>


    <div class="prawa">
    <a href="https://san.edu.pl/" target="_blank">
      <img src="https://cogito.com.pl/wp-content/uploads/sites/2/2018/07/logo-SAN-1-450x160.jpg" alt="logo SAN" style={{ width: '600px', }}/>
      </a>
      </div>
      </div>
      <div class= "footer">
      
      <h3>Bartosz Omiotek Gr:6, Nr indeksu: 113969</h3> 
      
      
      </div>
      
      <p className="read-the-docs">
       
      </p>

    </>
  )
}

export default App
