import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProblemComponent } from './components/problem/problem.component';
import { TopicComponent } from './components/topic/topic.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NonEditableComponent } from './components/non-editable/non-editable.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import {DynamicHooksModule, HookParserEntry} from "ngx-dynamic-hooks";
import { AssignmentComponent } from './components/assignement/assignment.component';
import { DiscussionComponent } from './components/discussion/discussion.component';

const componentParsers: Array<HookParserEntry> = [
    {component: NonEditableComponent},
    // ...
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ProblemComponent,
        TopicComponent,
        ProfileComponent,
        NonEditableComponent,
        AuthComponent,
        LoginComponent,
        RegisterComponent,
        AssignmentComponent,
        DiscussionComponent,
    ],
    imports: [
        DynamicHooksModule.forRoot({
            globalParsers: componentParsers
        }),
        BrowserModule,
        AppRoutingModule,
        CodemirrorModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
