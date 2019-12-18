export class Model {
    user;
    itens;
    dataAtual: String;

    constructor() {
      
        this.itens = [
            new TodoItem("Dominar o mundo", false, "Alta", "2019-10-02"),
            new TodoItem("Matar Trump", false, "Baixa", "2019-10-03"),
            new TodoItem("Dar 8,0 para Janaina", false, "Alta", "2019-10-04"),
            new TodoItem("Caminhar 10km", true, "Média", "2019-10-05")
        ]
    }

   public sortBydueDate():void{
     this.itens.sort((a:TodoItem, b:TodoItem)=>{
       return +new Date(a.dataTermino)- +new Date (b.dataTermino);
     });
   }
    

}

export class TodoItem {
    action;
    done;
    prioridade;
    dataTermino: Date;

    constructor(action, done, prioridade, dataTermino) {
        this.action = action;
        this.done = done;
        this.prioridade = prioridade;
        this.dataTermino = dataTermino;
    }

}