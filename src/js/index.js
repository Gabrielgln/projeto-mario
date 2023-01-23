//document.querySelector serve para pegar a tag atráves da classe ou id
//pegar a tag que ta na classe = "botao-trailer" e guardar numa constante
const botaoTrailer = document.querySelector(".botao-trailer");
//pegar a tag que tem a classe "modal" e guardar numa constante
const modal = document.querySelector(".modal");
//pegar a tag que ta na classe = "fechar-modal" e guardar numa constante
const botaoFecharModal = document.querySelector(".fechar-modal");
//pegar a tag que ta no id = "video" e guardar numa constante
const video = document.getElementById("video");
//usando uma constante para pegar outra constante que contem a tag do video e pegar o src do video
const linkDoVideo = video.src;

function addClass(){
    //usando a constante para adicionar uma nova classe na tag que tem a classe modal, que habilita a visibilidade da tag no css:
    //classe:modal, passando a ser -> classe:modal.aberto
    botaoTrailer.addEventListener("click", ()=> {
        modal.classList.add("aberto");
    });
}

function removeClass(){
    //usando a constante para remover uma nova classe na tag que tem a classe modal, que desabilita a visibilidade da tag no css:
    //classe:modal.aberto passando a ser -> classe:modal
    modal.classList.remove("aberto");
}

//usando a constante, adicionamos um listener que cria um evento de click na tag que tem a classe "modal"
botaoTrailer.addEventListener("click", ()=>{
    addClass();
    //setando uma src que contem o src valido do video, assim o video volta a existir
    video.setAttribute("src", linkDoVideo);
});


//usando a constante, adicionamos um listener que cria um evento de click na tag que tem a classe "fechar-modal"
botaoFecharModal.addEventListener("click", ()=>{
    removeClass();
    //setando uma src vazia para o video, assim o video deixa de existir
    video.setAttribute("src", "");
});