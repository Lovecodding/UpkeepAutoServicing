import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlotdataService } from '../../slotdata.service';
import { FormGroup, FormControl } from '@angular/forms';
import { slot } from '../../slot-display/slot';

@Component({
  selector: 'app-slot-edit',
  templateUrl: './slot-edit.component.html',
  styleUrls: ['./slot-edit.component.css']
})
export class SlotEditComponent implements OnInit {
  editSlot:FormGroup;
  constructor(private _slotdata :SlotdataService,private _router:Router,private _act_routs:ActivatedRoute) {
    var slot_id :number= this._act_routs.snapshot.params['slot_regester_id'];

    this.editSlot=new FormGroup({
      slot_register_id:new FormControl(null),
      vehicle_type: new FormControl(null),
      vehicle_model:new FormControl(null),
      service_type:new FormControl(null),
      time_period: new FormControl(null),
      pickup_time: new FormControl(null),
      pickup_address: new FormControl(null),
      requirment:new FormControl(null),
      drop_address:new FormControl(null),
      allotment_emp_id:new FormControl(null)
    });
  }

  ngOnInit() {
    this._slotdata.getAllSlots().subscribe(
      (data:any)=>{
        console.log(data);
        this.formDataBind(data);
     }
    );

  }
formDataBind(item:slot)
{
  this.editSlot.patchValue({
    slot_register_id:item.slot_register_id,
      vehicle_type:item.vehicle_model,
      vehicle_model:item.vehicle_model,
      service_type:item.service_type,
      time_period: item.time_period,
      pickup_time: item.pickup_time,
      pickup_address: item.pickup_address,
      requirment:item.requirment,
      drop_address:item.drop_address,
      allotment_emp_id:item.allotment_emp_id
     });
  }
  onSlotedit()
  {
    console.log(this.editSlot.value);
    this._slotdata.updateSlot(this.editSlot.value).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/nav/Slot']);
      }
    );
  }
}
