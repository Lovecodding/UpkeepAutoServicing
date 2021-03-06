import { Component, OnInit, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WorkerService } from '../worker.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workerviewmore',
  templateUrl: './workerviewmore.component.html',
  styleUrls: ['./workerviewmore.component.css']
})
export class WorkerviewmoreComponent implements OnInit {
  worker_id : number = 0;
  worker_name : string = '';
  email_id : string = '';
  mobile_no : number =0 ;
  address : string = '';
  worker_image: string = '';
  joining_date : string='';
  WorkerImage:string='';

  constructor(public _data:WorkerService,public _act_routs:ActivatedRoute,public _router :Router) { }

  ngOnInit() {
    this.worker_id=this._act_routs.snapshot.params['worker_id'];
    this._data.getWorkerById(this.worker_id).subscribe(
      (workerData:any[])=>{
        this.worker_id =workerData[0].worker_id;
        this.worker_name=workerData[0].worker_name;
        this.email_id =workerData[0].email_id;
        this.mobile_no=workerData[0].mobile_no;
        this.address = workerData[0].address;
        this.worker_image=workerData[0].worker_image;
        this.joining_date=workerData[0].joining_date;
        this.WorkerImage = environment.url+ 'Images/WorkerImages/' +workerData[0].worker_image;
      }
    );

  }
  onClickClose()
  {
    this._router.navigate(['/nav/worker']);
  }
}
