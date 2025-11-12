import axios from "axios";
import type { Vela } from "../types/vela";

export const getVelas = async (): Promise<Vela[]> => {
    try {
        const resposta = await axios.get("http://localhost:3000/produtos");
        return resposta.data;
    } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
        throw error;
    }
}