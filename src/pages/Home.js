import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
        Welcome to Omnicron
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>
        Your one-stop shop for trendy clothing
      </p>
      <div style={{ marginTop: '40px' }}>
        <h2>Featured Products</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '20px'
        }}>
          {[1, 2, 3].map((item) => (
            <div key={item} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              textAlign: 'center'
            }}>
              <img
                src={`https://via.placeholder.com/200x200`}
                alt={`Product ${item}`}
                style={{ width: '100%', maxWidth: '200px', marginBottom: '10px' }}
              />
              <h3>Product {item}</h3>
              <p>${(item * 29.99).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home; 