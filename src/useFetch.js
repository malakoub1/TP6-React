import { useState, useEffect } from 'react';

function useFetch(url) {
  // Stockage des données récupérées
  const [data, setData] = useState(null);

  // Indique si le chargement est en cours
  const [chargement, setChargement] = useState(true);

  // Stockage d'une éventuelle erreur
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    setChargement(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setErreur(err))
      .finally(() => setChargement(false));
  }, [url]);

  return { data, chargement, erreur };
}

export default useFetch;