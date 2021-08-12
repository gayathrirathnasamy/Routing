import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations:[HomeComponent,
    LoginComponent,
    RegisterComponent],
  imports:[RouterModule.forRoot([{ path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }])],
  exports: [RouterModule]
})

export class AppRoutingModule {}