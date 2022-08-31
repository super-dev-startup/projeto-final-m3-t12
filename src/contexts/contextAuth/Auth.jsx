/*
import  { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { api, createSession } from "../api/request"; // Este import é pra depois que tivermos as request da api criadas.
export const AthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate(); // Para verificarmos em que rota estamos.
  const [user, setUser] = useState(null); // Para armazenar os dados do usuario logado.
  const [loading, setLoading] = useState(true); // Para definir página de carregamento.

  // Toda vez que o componente é carregado ele precisa recuperar os dados inseridos no localStorage por isso utilizei o useEffect.
  useEffect(() => {
    const recoveredUser = localStorage.getItem("@pfm3:User");
    const recoveredToken = localStorage.getItem("@pfm3:Token");
    // Se o usuário possuir dados no localStorage para User e Token ele atribui ao estado o id do usuario.
    if (recoveredUser && recoveredToken) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.Authorization = `Bearer ${recoveredToken}`; // Depois que a API estiver pronta eu consigo deixar o Authorization do axios pré-definido com o token coletado do localStorage
    }
    setLoading(false); // Encerramos o processo de Loading após a conclusão do processo.
  }, []);

  const login = async (email, password) => {
    const response = await createSession(email, password); // A função createSession na api fará o POST para rota de login passando os dados necessários para logar - email e senha

    const loggedUser = response.data.user;
    const { token } = response.data;

    localStorage.setItem("@pfm3:User", JSON.stringify(loggedUser));
    localStorage.setItem("@pfm3:Token", token);

    api.defaults.Authorization = `Bearer ${token}`; // Depois que a api estiver pronta fára a atribuição do tocken retornado para o Authorization do Axios.

    setUser(loggedUser);
    navigate("/dashboard"); // Depois de atribuir os valores navega para area privada
  };

  // logout irá remover o acesso e redirecionar para home.
  const logout = () => {
    setUser(null);
    localStorage.removeItem("@pfm3:User");
    localStorage.removeItem("@pfm3:Token");
    api.defaults.Authorization = null;

    navigate("/");
  };
  // Passa como props os dados de usuario para outras telas conseguirem utilizar caso necessário.
  return (
    <AthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }} // Aqui coloquei os valores que provavelmente utilizaremos em alguma pagina que utiliza esse contexto.
    >
      {children}
    </AthContext.Provider>
  );
}
*/
