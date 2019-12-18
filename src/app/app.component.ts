import { Component } from "@angular/core";
import{Model,TodoItem} from "./model";

@Component({
 selector: "todo-app",
 templateUrl: "app.component.html",
})
export class AppComponent  {

 model=new Model ();
public tarefa="";


  getTodoItems() {
    return this.model.itens.filter(item => !item.done);
  }

  getTodoItemsConcluidas() {
    return this.model.itens.filter(item => item.done);
  }

  addItem(newItem, prioridade, dataTermino) {
    let a = true;
    for(let i = 0; i<this.model.itens.length;i++){
      if(newItem==this.model.itens[i].action){
        a = false;
      }
    }
    if (newItem != "") {
      if(dataTermino!= ""){
        if(a){
      this.model.itens.push(new TodoItem(newItem, false, prioridade, dataTermino));
      this.model.sortBydueDate();
        }
      }
    }
  }
  remove(index){
    let a;
    for(let i = 0;i<this.model.itens.length;i++){
      if(index==this.model.itens[i].action){
        a=i;
      }
    }
    this.model.itens.splice(a,1);
  }
  }