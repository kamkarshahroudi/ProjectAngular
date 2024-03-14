import { Component } from '@angular/core';
import { ServiceToDoList } from './services/ServiceToDoList';
import { Observable } from 'rxjs';
import { ItemToDoList } from './model/ItemToDoList';
import { environment } from 'src/environments/environment';
import 'devextreme/data/odata/store';
import { DxPopupModule, DxButtonModule, DxTemplateModule } from 'devextreme-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To Do List';
  http: any;
  ValueCheckbox= false;
  checkBoxValue= false;
  namePattern: any = /^[^0-9]+$/;
  ToDoLists!:ItemToDoList[];
  selectToDoList=false;
  AddToDoList=false;
  ToDoList!:ItemToDoList;
  ListAdd:ItemToDoList={
    id: 0,
    itemName: '',
    itemDescription: '',
    itemStatus: false
  }
  constructor(private ToDoListService:ServiceToDoList) {   this.ToDoListService.GetAllToDoList().subscribe(res => { this.ToDoLists = res });
  this.supprimer = this.supprimer.bind(this);
  this.modifier = this.modifier.bind(this);
}
  
supprimer(e: any){ 
    const ToDo = { ...e.row.data };
    this.ToDoList = ToDo;
    this.ToDoListService.deleteToDoList(ToDo.id).subscribe({
    next: (data) => {
      this.GetToDoList();
    },
    error: (e) => console.error(e),
    complete: () => console.info('complete')
  }); 
}
GetToDoList()
{
  this.ToDoListService.GetAllToDoList().subscribe(res => { this.ToDoLists = res });
}
modifier(e: any){
    const ToDo = { ...e.row.data };
    this.selectToDoList=true;
    this.ToDoList = ToDo;
}

EditeBtn(itemName:string,itemDescription:string){
this.ToDoList.itemDescription=itemDescription;
this.ToDoList.itemName=itemName;
this.ToDoList.itemStatus= this.checkBoxValue;
console.log(this.checkBoxValue);
this.ToDoListService.EditToDoList(this.ToDoList.id,this.ToDoList).subscribe({
  next: (data) => {
    this.GetToDoList();
  },
  error: (e) => console.error(e),
  complete: () => console.info('complete')
});
this.selectToDoList=false;
}

checkBoxToggled(e:any) {
  this.checkBoxValue=false;
  this.checkBoxValue=e.value;
};

Cancel(){
  this.selectToDoList=false;
  this.AddToDoList=false;
}
Add()
{
this.AddToDoList=true;
}
AddBtn(itemNameAdd:string,itemDescriptionAdd:string){
this.ListAdd.itemDescription=itemDescriptionAdd;
this.ListAdd.itemName=itemNameAdd;
this.ListAdd.itemStatus=this.checkBoxValue;
this.ListAdd.id=0;
console.log(this.ListAdd);
this.ToDoListService.InsertToDoList(this.ListAdd).subscribe({
  next: (data) => {
    this.GetToDoList();
  },
  error: (e) => console.error(e),
  complete: () => console.info('complete')
});
this.AddToDoList=false;
}
}
