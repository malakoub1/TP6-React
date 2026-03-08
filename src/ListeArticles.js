import useFetch from './useFetch';

function ListeArticles() {
  const { data, chargement, erreur } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (chargement) return <p>Chargement des articles...</p>;

  if (erreur) return <p>Erreur détectée : {erreur.message}</p>;

  return (
    <ul>
      {data.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}

export default ListeArticles;