import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  

  constructor(private http:HttpClient) { }
  getblog(){
    return this.http.get('http://localhost:3000/blog-controller')
  }
  getblogbyid(id:any){
    return this.http.get('http://localhost:3000/blog-controller/'+id)
  }
  getblogsbyid(id:any){
    return this.http.get('http://localhost:3000/blog-controller/profile/'+id)
  }
  private userurl='http://localhost:3000/profile-controller/'
  private magzurl='http://localhost:3000/magazines'
  getMagzines(){
    return this.http.get(this.magzurl)
  }
  getMagbyId(val:any){
    return this.http.get(this.magzurl+'?id='+val)
  }
  getUserByID(Rno: string): Observable<any> {
    console.log('Requesting user with ID:', Rno);
    const res = this.http.get<any>('http://localhost:3000/profile-controller/' + Rno);
    res.subscribe(data => console.log('Response:', data)); 
    return res;
}

  postblog(content:any){
    const id=sessionStorage.getItem('pid');
    return this.http.post('http://localhost:3000/blog-controller/'+id,content,{
      headers: { 'Content-Type': 'application/json' }})
  }
  deletePostById(id:number){
    console.log(id)
    return this.http.delete('http://localhost:3000/blog-controller/'+id).subscribe({
      next: response => console.log(response),
      error: err => console.error('Error:', err),
    });
  }
  registerUser(user:any){
    console.log(user)
    return this.http.post('http://localhost:3000//profile-controller/register',user,{
      headers: { 'Content-Type': 'application/json' }})
}
getImageUrlById(id: string) {
  console.log(id)
  return this.http.get<{ imageUrl: string }>(  `http://localhost:3000/profimage/${id}`);
}
}