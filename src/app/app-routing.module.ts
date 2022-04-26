import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProblemComponent} from "./components/problem/problem.component";
import {TopicComponent} from "./components/topic/topic.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {AuthComponent} from "./components/auth/auth.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {AssignmentComponent} from "./components/assignement/assignment.component";
import {DiscussionComponent} from "./components/discussion/discussion.component";
import {CertifyComponent} from "./components/certify/certify.component";
import {CertifyResultComponent} from "./components/certify-result/certify-result.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'problem/:id',
        component: ProblemComponent,
        children: [{
            path: '',
            component: AssignmentComponent
        }, {
            path: 'discussion',
            component: DiscussionComponent
        }]
    },
    {
        path: 'topic/:id',
        component: TopicComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
        ]
    },
    {
        path: 'certify',
        component: CertifyComponent,
        children: [
            {
                path: 'problem/:num',
                component: AssignmentComponent
            }
        ]
    },
    {
        path: 'result',
        component: CertifyResultComponent,
    },
    {
        path: '**',
        redirectTo: ''
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
