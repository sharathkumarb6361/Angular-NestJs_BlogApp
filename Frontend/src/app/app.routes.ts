import { Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { FullblogComponent } from './pages/fullblog/fullblog.component';
import { WriteblogComponent } from './pages/writeblog/writeblog.component';
import { MagzineHomeComponent } from './pages/magzine-home/magzine-home.component';
import { MagzineReadComponent } from './pages/magzine-read/magzine-read.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AuthGaurd } from './guard/authgaurd.guard';
import { ManageBlogsComponent } from './pages/manage-blogs/manage-blogs.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { DeleteUserComponent } from './admin/delete-user/delete-user.component';
import { ManageblogsComponentAdmin } from './admin/manageblogs/manageblogsadmin.component';
import { UploadimageComponent } from './admin/uploadimage/uploadimage.component';

export const routes: Routes = [
  {path:'',redirectTo:'/signin', pathMatch:'full'},
 // {path:'',redirectTo:'/manageBlog',pathMatch:'full'},
   {path:'AddUser',component:AddUserComponent},
    {path:'signin',component:SigninComponent},
    {path:'home',component:HomeComponent,canActivate:[AuthGaurd]},
    {path:'readBlog',component:BlogComponent,canActivate:[AuthGaurd]},
    {path:'fullblog',component:FullblogComponent,canActivate:[AuthGaurd]},
     {path:'write',component:WriteblogComponent,canActivate:[AuthGaurd]},
    {path:'magList',component:MagzineHomeComponent,canActivate:[AuthGaurd]},
{path:'magRead',component:MagzineReadComponent,canActivate:[AuthGaurd]},
{path:'manage/:profid1',component:ManageBlogsComponent,canActivate:[AuthGaurd]},
{path:'admin',component:AdminComponent,canActivate:[AuthGaurd]},
{path:'adduser',component:AddUserComponent/*canActivate:[AuthGaurd] */},
{path:'updateuser',component:UpdateUserComponent/*,canActivate:[AuthGaurd]*/},
{path:'deleteUser',component:DeleteUserComponent},
{path:'manageBlog',component:ManageblogsComponentAdmin},
{path:'addimg',component:UploadimageComponent}];
