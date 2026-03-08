import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';
import './App.css';

function App() {
  return (
    <div>
      <h1>TP React Hooks</h1>
      <p>
        Cette application présente quelques hooks React avec des exemples simples
        et faciles à comprendre.
      </p>

      <h2>Compteur géré avec useReducer</h2>
      <Compteur />

      <h2>Champ texte avec focus via useRef</h2>
      <FocusInput />

      <h2>Nombre de rendus du composant</h2>
      <CompteurRendu />

      <h2>Affichage d'une liste avec un hook personnalisé</h2>
      <ListeArticles />

      <h2>Chronomètre avec nettoyage automatique</h2>
      <Timer />
    </div>
  );
}

export default App;