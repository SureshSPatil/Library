import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component"
import { AppRoutingModule } from './app.routes';
import { EmployeesListComponent } from "./employees-list/employees-list.component"

@NgModule({
declarations: [AppComponent, EmployeesListComponent],
imports: [BrowserModule, HttpClientModule, AppRoutingModule],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
