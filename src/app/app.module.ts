import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServersService } from './servers/servers.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsPracticeComponent } from './forms-practice/forms-practice.component';
import { TemplateDrivenComponent } from './forms-practice/template-driven/template-driven.component';
import { ReactiveApproachComponent } from './forms-practice/reactive-approach/reactive-approach.component';
import { PipesComponent } from './pipes-comp/pipes-comp.component';
import { SortPipe } from './pipes-comp/sort.pipe';
import { ReversePipe } from './pipes-comp/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    NotFoundComponent,
    FormsPracticeComponent,
    TemplateDrivenComponent,
    ReactiveApproachComponent,
    PipesComponent,
    SortPipe,
    ReversePipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [ServersService],
  bootstrap: [AppComponent],
})
export class AppModule { }
