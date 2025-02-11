import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const [isMounted, setIsMounted] = useState(false); // Estado para verificar se o componente está montado
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Estado para armazenar o idioma selecionado

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true); // Garantir que o código só roda no lado do cliente
      // Verificar a URL para definir o idioma atual
      const path = window.location.pathname;
      if (path === '/pt-br') {
        setSelectedLanguage('pt-BR');
      } else {
        setSelectedLanguage('en');
      }
    }
  }, []);

  const handleLanguageChange = (e: any) => {
    const selectedLanguage = e.target.value;
    if (selectedLanguage === 'pt-BR') {
      window.location.href = '/pt-br'; // Redireciona para a página em português
    } else {
      window.location.href = '/'; // Redireciona para a página em inglês
    }
  };

  // Se o componente ainda não estiver montado, não renderiza nada
  if (!isMounted) {
    return null;
  }

  return (
    <select
      className="bg-transparent"
      onChange={handleLanguageChange}
      value={selectedLanguage} // Atualiza o select com base no idioma atual
    >
      <option key={1} value="pt-BR" className="bg-transparent bg-zinc-950">
        Português
      </option>
      <option key={2} value="en" className="bg-transparent bg-zinc-950">
        English
      </option>
    </select>
  );
};

export default LanguageSwitcher;
