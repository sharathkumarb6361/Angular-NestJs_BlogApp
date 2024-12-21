import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  registerUser(user:any){
    console.log(user)
    return  this.http.post('http://localhost:3000/profile-controller/register', user, {
      headers: { 'Content-Type': 'application/json' },
    })
    .subscribe({
      next: (response) => {
        console.log('User added successfully:', response);
        alert('User added successfully!');
      },
      error: (err) => {
        console.error('Error adding user:', err);
        alert('Failed to add user. Please try again.');
      },
    });


}
DeleteUse(id:any){
  return this.http.delete('http://localhost:3000/profile-controller/'+id).subscribe({
    next:(response)=>{
      console.log('User deleted succcessfully:',response);
      alert('user deleted successfully');
        },
      error:(err)=>{
        console.error('Error removing user',err);
       alert("Failed to delete user")
      }
  })

 

}
UpdateUser(id: any, data: any): Observable<any> {
  const url = `http://localhost:3000/profile-controller/${id}`;
  console.log(`Updating user with ID: ${id}`, data);
  console.log(url);
  return this.http.put(url, data).pipe(
    tap((response) => {
      console.log('User updated successfully:', response);
    }),
    catchError((err) => {
      console.error('Error updating user:', err);
      return throwError(() => new Error('Failed to update user'));
    })
  );
}

}