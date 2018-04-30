import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';

const appRoutes: Routes = [
  {path:'home', component:HomeComponent  },
  {path:'about', component:AboutComponent  },
  {path:'user', children: [
      {path:'list',component: UserlistComponent, children:[
    {
      path:'detail/:name', component: UserComponent}
  ]}
  ]  },
  {path: '' , redirectTo:'/home', pathMatch:'full'},
  {path:'**', redirectTo:'/home', pathMatch:'full' }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot (appRoutes, )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
