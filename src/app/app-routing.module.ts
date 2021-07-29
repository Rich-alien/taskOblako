import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormTaskComponent} from "./common/form-task/form-task.component";
import {MainComponent} from "./pages/main/main.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'form', component: FormTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
