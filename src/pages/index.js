import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>x0y</title>
      </Helmet>
      <h1>x0y.net</h1>
      <h2>
        
      </h2>
      <p>
        ocun @ tuta.io
      </p>
      <br />
      <h2></h2>
      <p></p>
    </main>
  );
}

export default Index;
