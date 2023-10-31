
import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

function App() {
  return (
    <div>
      <Name name={product.name} />
      <Price price={product.price} />
      <Description desc={product.desc} />
      <Image src={product.image} />
    </div>
  );
}

export default App;
