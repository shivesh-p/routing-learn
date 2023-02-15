import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsPracticeComponent } from './forms-practice/forms-practice.component';
import { ReactiveApproachComponent } from './forms-practice/reactive-approach/reactive-approach.component';
import { TemplateDrivenComponent } from './forms-practice/template-driven/template-driven.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './http-prac/auth.interceptor';
import { HttpPracComponent } from './http-prac/http-prac.component';
import { LoggingInterceptor } from './http-prac/logging.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { PipesComponent } from './pipes-comp/pipes-comp.component';
import { ReversePipe } from './pipes-comp/reverse.pipe';
import { SortPipe } from './pipes-comp/sort.pipe';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServersService } from './servers/servers.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

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
    HttpPracComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [ServersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
