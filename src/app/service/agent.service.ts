import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../model/agent';

const baseUrl = 'http://localhost:9595/api/v1';
@Injectable({
  providedIn: 'root'
})

export class AgentService {
  constructor(private http: HttpClient) { }
  
  public getAgentsNumber(){
    return this.http.get<any>(`${baseUrl}/count`);
  } 
  
  public getAgents(): Observable<Agent[]>{
    return this.http.get<Agent[]>(`${baseUrl}/agents`);
  }
  public findByStatus(status:string) : Observable<Agent[]>{
    return this.http.get<Agent[]>(`${baseUrl}/find/${status}`);
  }
}
