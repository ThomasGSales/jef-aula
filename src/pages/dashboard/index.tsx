import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { firestore } from '../../firebaseConfig';

function Dashboard() {
  const [receitas, setReceitas] = useState([]);
  const [novaReceita, setNovaReceita] = useState(0);

  useEffect(() => {
    // Função para buscar receitas do Firestore
    async function fetchReceitas() {
        const receitasSnapshot = await getDocs(collection(firestore, "receitas"));
        const receitasList = receitasSnapshot.docs.map(doc => doc.data());
        console.log("Receitas: ", receitasList);
      }

    fetchReceitas();
  }, []);

  // Função para adicionar uma nova receita
  const handleAddReceita = async () => {
    await addDoc(collection(firestore, "receitas"), {
      valor: parseFloat(novaReceita),
      createdAt: new Date()
    });
    setNovaReceita(0);  // Limpa o campo
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Receitas</h2>
      <ul>
        {receitas.map((receita, index) => (
          <li key={index}>R${receita.valor}</li>
        ))}
      </ul>

      <input
        type="number"
        value={novaReceita}
        onChange={(e) => setNovaReceita(e.target.value)}
        placeholder="Adicionar Receita"
      />
      <button onClick={handleAddReceita}>Adicionar Receita</button>
    </div>
  );
}

export default Dashboard;
