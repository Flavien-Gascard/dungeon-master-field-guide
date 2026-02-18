

import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import MasterOfWorlds from './pages/MasterOfWorlds';
import MasterOfAdventures from './pages/MasterOfAdventures';
import FantasyLayout from './components/FantasyLayout';
import MasterOfRules from './pages/MasterOfRules';
import CreatingACharacter from './pages/CreatingACharacter';
import SpellBook from './pages/SpellBook';
import TreasureChest from './pages/TreasureChest';

function SidebarMenu() {
  return (
    <nav>
      <div style={{ fontWeight: 900, fontSize: '1.2rem', marginBottom: '2rem' }}>DM Field Guide</div>
      <Link to="/master-of-worlds" className="category-btn" style={{ width: '100%' }}>
        Master Of Worlds
      </Link>
      <Link to="/master-of-adventures" className="category-btn" style={{ width: '100%' }}>
        Master Of Adventures
      </Link>
      <Link to="/master-of-rules" className="category-btn" style={{ width: '100%' }}>
        Master Of Rules
      </Link>
      <Link to="/creating-a-character" className="category-btn" style={{ width: '100%' }}>
        Creating A Character
      </Link>
      <Link to="/spell-book" className="category-btn" style={{ width: '100%' }}>
        Spell Book
      </Link>
      <Link to="/treasure-chest" className="category-btn" style={{ width: '100%' }}>
        Treasure Chest
      </Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <FantasyLayout sidebar={<SidebarMenu />}>
        <Routes>
          <Route path="/" element={
            <div className="fantasy-welcome">
              <h1 className="fantasy-title">Dungeon Masters Field Guide</h1>
              <div className="fantasy-welcome-content">
                <p>Welcome, Dungeon Master!<br />
                This is your ultimate toolkit for world building, adventure crafting, and character creation.<br /><br />
                Use the menu on the left to begin your journey!</p>
              </div>
            </div>
          } />
          <Route path="/master-of-worlds" element={<MasterOfWorlds />} />
          <Route path="/master-of-adventures" element={<MasterOfAdventures />} />
          <Route path="/master-of-rules" element={<MasterOfRules />} />
          <Route path="/creating-a-character" element={<CreatingACharacter />} />
          <Route path="/spell-book" element={<SpellBook />} />
          <Route path="/treasure-chest" element={<TreasureChest />} />
      </Routes>
      </FantasyLayout>
    </BrowserRouter>
  );
}

export default App;
