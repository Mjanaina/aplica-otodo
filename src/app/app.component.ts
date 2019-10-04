import { Component } from "@angular/core";
import{Model,TodoItem} from "./model";

@Component({
 selector: "todo-app",
 templateUrl: "app.component.html",
})
export class AppComponent  {
 model=new Model ();



  getTodoItems() {
    return this.model.itens.filter(item => !item.done);
  }

  getTodoItemsConcluidas() {
    return this.model.itens.filter(item => item.done);
  }

  addItem(newItem, prioridade, dataTermino) {
    if (newItem != "") {
      this.model.itens.push(new TodoItem(newItem, false, prioridade, dataTermino));
      this.model.sortBydueDate();
    }
  }

}