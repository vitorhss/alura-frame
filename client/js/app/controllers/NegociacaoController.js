class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this.inputData = $('#data')
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');

        this.listaNegociacoes = new ListaNegociacoes();

        this.negociacoesView = new NegociacoesView($('#negociacoesView'));

        this.negociacoesView.update();
    }

    adiciona(event){
        event.preventDefault();

        let negociacao = new Negociacao(
            DateHelper.textToDate(this.inputData.value),
            this.inputQuantidade.value,
            this.inputValor.value
        );

        this.listaNegociacoes.adiciona(negociacao);
        
    }

}