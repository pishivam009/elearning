import { Message } from './message';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Link } from './link';
import { LoginDetails } from './login-details';
import { Professor } from './professor';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8080";

  userLogin(logindetails: LoginDetails): Observable<User> {
    return this.http.post<User>(this.url + "/userLogin", logindetails);
  }

  adminLogin(logindetails: LoginDetails): Observable<Admin> {
    return this.http.post<Admin>(this.url + "/adminLogin", logindetails);
  }

  professorLogin(logindetails: LoginDetails): Observable<Professor> {
    return this.http.post<Professor>(this.url + "/professorLogin", logindetails);
  }

  updateUser(signupdetails: User) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<any>(this.url + "/updateUser", signupdetails, { headers, responseType: 'text' as 'json' });
  }
  updateProfessor(signupdetails: Professor) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<any>(this.url + "/updateProfessor", signupdetails, { headers, responseType: 'text' as 'json' });
  }

  userSignup(signupdetails:User):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.url+"/addUser", signupdetails, { headers, responseType: 'text' as 'json'  });
  }

  professorSignup(signupdetails:Professor):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.url+"/addProfessor", signupdetails, { headers, responseType: 'text' as 'json'  });
  }

  userList():Observable<User[]>{
    return this.http.get<User[]>(this.url+"/allPatients");
  }

  professorList():Observable<Professor[]>{
    return this.http.get<Professor[]>(this.url+"/allProfessors");
  }

  linkList():Observable<Link[]>{
    return this.http.get<Link[]>(this.url+"/allLinks");
  }

  messageList():Observable<Message[]>{
    return this.http.get<Message[]>(this.url+"/allMessages");
  }

  deleteUser(id:number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<any>(this.url+"/deletePatient/"+id,{ headers, responseType: 'text' as 'json'  });
  }

  deleteProfessor(id:number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<any>(this.url+"/deleteProfessor/"+id,{ headers, responseType: 'text' as 'json'  });
  }

  deleteLink(id:number):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete<any>(this.url+"/deleteLink/"+id,{ headers, responseType: 'text' as 'json'  });
  }
}
