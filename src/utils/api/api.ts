import { Auth, onAuthStateChanged } from "firebase/auth";
import { Firestore, collection, getDocs } from "firebase/firestore";

export class Api {
    private db: Firestore;
    private auth: Auth;

    constructor(db: Firestore, auth: Auth) {
        this.db = db;
        this.auth = auth;
        console.log("Construindo API");
    }

    // Método para buscar receitas do Firestore
    async getReceitas(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            onAuthStateChanged(this.auth, async (user) => {
                if (user) {
                    try {
                        const receitasRef = collection(this.db, 'usuarios', user.uid, 'receitas');
                        const receitasSnapshot = await getDocs(receitasRef);
                        const receitas = receitasSnapshot.docs.map(doc => doc.data());
                        resolve(receitas);
                    } catch (error) {
                        console.error("Erro ao buscar receitas: ", error);
                        reject(error);
                    }
                } else {
                    reject("Usuário não autenticado");
                }
            });
        });
    }

    // Método para buscar despesas do Firestore
    async getDespesas(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            onAuthStateChanged(this.auth, async (user) => {
                if (user) {
                    try {
                        const despesasRef = collection(this.db, 'usuarios', user.uid, 'despesas');
                        const despesasSnapshot = await getDocs(despesasRef);
                        const despesas = despesasSnapshot.docs.map(doc => doc.data());
                        resolve(despesas);
                    } catch (error) {
                        console.error("Erro ao buscar despesas: ", error);
                        reject(error);
                    }
                } else {
                    reject("Usuário não autenticado");
                }
            });
        });
    }
}
