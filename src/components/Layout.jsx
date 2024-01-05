import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Img from '../assets/logo_udg.png';
import List from './List';

export function Layout({ doorId, name }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [fechaLocal, setFechaLocal] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/door/${doorId}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError('Error al obtener datos. Inténtalo de nuevo más tarde.');
    }
  }

  useEffect(() => {
    fetchData();
    const obtenerFechaLocal = () => {
      setFechaLocal(new Date());
    };
    obtenerFechaLocal();
    const dataIntervalId = setInterval(() => {
      fetchData();
    }, 60000);
    const timeIntervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(dataIntervalId);
      clearInterval(timeIntervalId);
    };
  }, []);

  return (
    <div>
      <header className="bg-blue-950 text-white">
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-center'>
            <img src={Img} className='h-40 w-auto' alt='Logo de la universidad' />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold">{name}</h1>
            <h3 className='text-xl text-right'>{currentTime.toLocaleTimeString()}</h3>
            <h3 className='text-sm text-right'>{fechaLocal.toLocaleDateString()}</h3>
          </div>
        </div>
      </header>

      <main className="p-4">
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            {data === null ? (
              <p>Cargando datos...</p>
            ) : (
              <List data={data} />
            )}
          </>
        )}
      </main>
    </div>
  );
}

Layout.propTypes = {
  doorId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};