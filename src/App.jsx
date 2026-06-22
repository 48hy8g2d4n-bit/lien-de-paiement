import React, { useState } from 'react';
import CarteVirtuelle from './pages/CarteVirtuelle';
import CartePhysique from './pages/CartePhysique';

export default function App() {
  const [pageActive, setPageActive] = useState('virtuelle');

  return (
    <div>
      {/* Barre de navigation supérieure pour basculer de page */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '10px', backgroundColor: '#111827' }}>
        <button 
          onClick={() => setPageActive('virtuelle')} 
          style={{ padding: '6px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: '600', backgroundColor: pageActive === 'virtuelle' ? '#b054a1' : '#374151', color: '#ffffff' }}
        >
          Lien 1 : Carte Virtuelle
        </button>
        <button 
          onClick={() => setPageActive('physique')} 
          style={{ padding: '6px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer', fontWeight: '600', backgroundColor: pageActive === 'physique' ? '#b054a1' : '#374151', color: '#ffffff' }}
        >
          Lien 2 : Carte Physique
        </button>
      </div>

      {/* Rendu de la page sélectionnée */}
      {pageActive === 'virtuelle' ? <CarteVirtuelle /> : <CartePhysique />}
    </div>
  );
}