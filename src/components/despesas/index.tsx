import { useState } from 'react';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { firestore } from '../../firebaseConfig';

function Despesas() {
  const [valor, setValor] = useState(0);
  
  const handleAddDespesa = async () => {
    await firestore.collection('despesas').add({ valor });
    setValor(0);
  };

  return (
    <div>
      <h2>Adicionar Despesa</h2>
      <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
      <button onClick={handleAddDespesa}>Adicionar</button>
    </div>
  );
}
export default Despesas;
