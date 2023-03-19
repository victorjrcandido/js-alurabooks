let livros = [];

const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endPointDaAPI);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  exibirOsLivrosNaTela(livrosComDesconto);
}
getBuscarLivrosDaAPI();