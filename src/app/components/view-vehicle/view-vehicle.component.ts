import { Component, OnInit } from '@angular/core';
import { PetitionsService } from 'src/app/services/petitions.service';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css'],
})
export class ViewVehicleComponent implements OnInit {
  constructor(private http: PetitionsService) {}
  ngOnInit(): void {
    this.getAutos();
  }

  autos: Array<any> = [];

  getAutos() {
    this.http.getVehicles().subscribe({
      next: (autos: any) => (this.autos = autos),
    });
  }
  eliminarAuto(id: Number) {
    this.autos = this.autos.filter((auto) => auto.id !== id);
    this.http.deleteVehicle(id).subscribe();
  }
}
