import { useState } from 'react';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { firestore } from '../../firebaseConfig'; // Configuração Firebase

function Receitas() {
  const [valor, setValor] = useState(0);
  
  const handleAddReceita = async () => {
    await firestore.collection('receitas').add({ valor });
    setValor(0);  // Reseta o valor após a adição
  };

  return (
    <div>
      <h2>Adicionar Receita</h2>
      <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
      <button onClick={handleAddReceita}>Adicionar</button>
    </div>
  );
}
export default Receitas;
