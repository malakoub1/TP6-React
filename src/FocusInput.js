import { useRef } from 'react';

function FocusInput() {
  // Référence liée au champ input
  const inputRef = useRef(null);

  const handleClick = () => {
    // Mettre directement le curseur dans le champ
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Saisir un texte..." />
      <button onClick={handleClick}>Donner le focus</button>
    </div>
  );
}

export default FocusInput;