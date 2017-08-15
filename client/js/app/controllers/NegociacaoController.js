class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this.inputData = $('#data')
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');

        this.listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event){
        event.preventDefault();

        let negociacao = new Negociacao(
            DateHelper.textToDate(this.inputData.value),
            this.inputQuantidade.value,
            this.inputValor.value
        );

        this.listaNegociacoes.adiciona(negociacao);

        console.log(this.listaNegociacoes.negociacoes);
        
    }

}