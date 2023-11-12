// apiService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/demo/webapi', // Substitua pela URL real da sua API
});

const apiService = {
  buscarBicicletasPorCpf: async (cpf) => {
    try {
      const response = await api.get(`/bicicletas/${cpf}`, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/bicicletas' // Se necessário, ajuste para a origem correta
            }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  // Adicione outras chamadas de API conforme necessário
};

export default apiService;
