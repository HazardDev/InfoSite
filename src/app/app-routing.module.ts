import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TwitchComponent } from './components/twitch.component';
import { TwitterComponent } from './components/twitter.component';
import { GithubComponent } from './components/github.component';


const routes: Routes = [
  { path: 'twitter', component: TwitterComponent },
  { path: 'twitch', component: TwitchComponent },
  { path: 'github', component: GithubComponent },
  { path: '',
    redirectTo: '/twitter',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule {}