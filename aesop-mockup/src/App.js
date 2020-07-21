import React from 'react';
import './App.css';
import ArchComp from './components/ArchComp';
import Main from './components/Main';
import Footer from './components/Footer';
import EssentialsComp from './components/EssentialsComp';

import Discovermore from './components/Discovermore';
function App() {
  return (
    <div className="App">
      {/* Header */}

      {/* NavBar */}
      {/* In Main Component*/}
      {/* Main */}
      <Main />
      {/* Aesop Essentials */}
      <EssentialsComp 
        firstTitle="Aesop Essentials"
        secondTitle="A selection of staples"
        description="From beloved forumlations first created decades ago to personal care necessities."
      />
      {/* Five Mythical Gift Kits */}

      {/* Fragrance */}
      <EssentialsComp 
        firstTitle="Fragrance"
        secondTitle="An aromatic signature"
        description="Our bold, sophisticated fragrances-from Parfum and Eau de Parfum to Room Sparays-are meticulously crafted using high-quality ingredients."
      />
      {/* Odyssey of Gifts */}

      {/* For hands and body */}
      <EssentialsComp 
        firstTitle="For hands and body"
        secondTitle="Daily cleansing"
        description="Ensure impeccable hygiene with our range of mild yet efficacious formulations."
      />
      {/* Architecture and Design */}
      <ArchComp      />
      {/* Nurturing formulations */}
      <EssentialsComp 
        firstTitle="Nurturing formulations"
        secondTitle="For all ages, genders, and skin types"
        description="Healthy skin is the product of careful cleansing, nourishing hydration and protection against environmental factors"
      />
      {/* Discover more */}
      <Discovermore/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
