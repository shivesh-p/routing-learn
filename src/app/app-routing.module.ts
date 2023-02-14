import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { CanDeactivateGuard } from './servers/can-deactivate.guard';
import { ServerResolver } from './servers/server/server.resolver';
import { FormsPracticeComponent } from "./forms-practice/forms-practice.component";
import { TemplateDrivenComponent } from './forms-practice/template-driven/template-driven.component';
import { ReactiveApproachComponent } from './forms-practice/reactive-approach/reactive-approach.component';
import { PipesComponent } from './pipes-comp/pipes-comp.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
    ],
  },
  {
    path: 'servers',
    component: ServersComponent,
    // canActivate: [AuthGuardGuard],
    canActivateChild: [AuthGuardGuard],
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: { server: ServerResolver }
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard]
      },
    ],
  },
  {
    path: 'forms', component: FormsPracticeComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: '/forms' },
      { path: 'template', component: TemplateDrivenComponent },
      { path: 'reactive', component: ReactiveApproachComponent },
    ]
  },
  { path: 'pipes', component: PipesComponent },
  {
    path: 'not-found', component: NotFoundComponent
  },
  {
    path: '**', redirectTo: '/not-found'
  }
];
@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
