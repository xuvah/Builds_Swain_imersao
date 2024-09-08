function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo ID "resultados-pesquisa".
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();
    campoPesquisa = campoPesquisa.trim();

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Campo de busca vazio!!</p>";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags ="";

    // Itera sobre cada objeto "dado" no array de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)||tags.includes(campoPesquisa)) {
            // Concatena HTML para criar um novo elemento "div" com as informações da build.
            // Utiliza template literals (``) para facilitar a interpolação de variáveis.
            resultados += `
            <div class="item-resultado">
            <h2>${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> 
            <a href=${dado.link} target="_blank">Build Mobafire</a> </div>
        `;
        }
    }

    if(!resultados){
        resultados= '<p>Nenhum resultado encontrado</p>';
    }

    // Atribui o HTML gerado para o conteúdo interno da seção.
    section.innerHTML = resultados;
}
