import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Vehicle } from 'src/app/models/vehicle';
import { PetitionsService } from 'src/app/services/petitions.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {
addCarForm = new FormGroup({
  marca:new FormControl(''),
  modelo:new FormControl(''),
  anio:new FormControl(),
  patente:new FormControl('')
})
constructor(private petition:PetitionsService){}

addcar(){
  let auto= new Vehicle;
   auto.marca=this.addCarForm.value.marca!
   auto.modelo=this.addCarForm.value.modelo!
   auto.anio=this.addCarForm.value.anio!
   auto.patente=this.addCarForm.value.patente!

  this.petition.postVehicle(auto).subscribe({})
  alert('Se agregó el auto!')
}

}
