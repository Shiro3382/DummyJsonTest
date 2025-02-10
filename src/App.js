import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setData(res.products));
  }, []);

  return (
    <div className="App">
      <div className="search">Søk gjennom kategori</div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />

      {data
        .filter(x => x.category.toLowerCase().includes(filter.toLowerCase()))
        .map((x, index) => (
          <div key={index} style={{ marginTop: 30 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div className="tabell">
                <img src={x.thumbnail} alt="Produktbilde" />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '50%',
                    margin: 'auto',
                  }}
                >
                  <div className="row">
                    <strong>Tittel:</strong> <div>{x.title}</div>
                  </div>
                  <div className="row">
                    <strong>Beskrivelse:</strong> <div>{x.description}</div>
                  </div>
                  <div className="row">
                    <strong>Pris:</strong> <div>{x.price} $</div>
                  </div>
                  <div className="row">
                    <strong>Rabatt:</strong> <div>{x.discountPercentage}%</div>
                  </div>
                  <div className="row">
                    <strong>Vurdering:</strong> <div>{x.rating}</div>
                  </div>
                  <div className="row">
                    <strong>Lagerbeholdning:</strong> <div>{x.stock}</div>
                  </div>
                  <div className="row">
                    <strong>Firma:</strong> <div>{x.brand}</div>
                  </div>
                  <div className="row">
                    <strong>Kategori:</strong> <div>{x.category}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
