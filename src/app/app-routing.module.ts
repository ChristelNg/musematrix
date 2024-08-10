import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MyBlogsComponent } from './components/my-blogs/my-blogs.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'blog', component: BlogPageComponent, title: 'Muse Matrix | Blog' },
  { path: 'my-blogs', component: MyBlogsComponent, title: 'Muse Matrix | My Blogs' },
  { path: 'create-post', component: CreatePostComponent, title: 'Muse Matrix | Create Post' },
  { path: 'read-more/:id', component: ReadMoreComponent, title: 'Muse Matrix | Read More' },
  { path: 'login', component: LoginComponent, title: 'Muse Matrix | Login' },
  { path: 'register', component: RegisterComponent, title: 'Muse Matrix | Register' },
];

export { routes };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }