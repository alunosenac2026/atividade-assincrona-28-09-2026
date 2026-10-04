const url = "https://jsonplaceholder.typicode.com/posts/5";

fetch(url)
    .then(resposta => resposta.json())
    .then(post => {

        document.getElementById("titulo").textContent = post.title;
        document.getElementById("texto").textContent = post.body;

        console.log("Post recebido:", post);
    })
    .catch(erro => {
        console.error("Erro ao buscar o post:", erro);
    });
