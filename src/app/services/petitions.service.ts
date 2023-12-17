import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class PetitionsService {

  constructor(private http : HttpClient) { }

  getVehicles(){
    return this.http.get('http://localhost:3000/vehiculos')
  }
  getUsers(){
    return this.http.get("http://localhost:3000/users")
  }
  postVehicle(vehicle:Vehicle){
    return this.http.post("http://localhost:3000/vehiculos", vehicle);
  }
  deleteVehicle(id:Number){
    return this.http.delete(`http://localhost:3000/vehiculos/${id}`);
  }
}
