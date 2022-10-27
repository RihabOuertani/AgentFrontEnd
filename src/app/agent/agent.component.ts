import { Component, OnInit } from '@angular/core';
import { AgentService } from '../service/agent.service';
import { Agent } from 'src/app/model/agent';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  agents: Agent[]=[];
  agent : Agent=new Agent();  
  public afent!: Agent;
  constructor(private agentService: AgentService) { }
  
  ngOnInit(): void {
    this.getAgents();
    
  }
  getCount(status: any) {
    return this.agent.filter((o: { status: any; }) => o.status === status).length;
  }

  public getAgents(): void {
    this.agentService.getAgents().subscribe(
      (response: Agent[]) => {
        this.agents = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  
  

}
