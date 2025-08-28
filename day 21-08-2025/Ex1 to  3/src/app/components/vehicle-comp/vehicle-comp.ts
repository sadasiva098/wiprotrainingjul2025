import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../../models/vehicle';
import { VehicleService } from '../../services/vehicle';

@Component({
  selector: 'app-vehicle-comp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicle-comp.html',
  styleUrls: ['./vehicle-comp.css']
})
export class VehicleComp implements OnInit {
  vehicles: Vehicle[] = [];
  newVehicle: Vehicle = { make: '', model: '', fuelType: '', price: 0 };
  isEditMode: boolean = false;  

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }

  addOrUpdateVehicle(): void {
    if (this.isEditMode && this.newVehicle.id) {

      this.vehicleService.updateVehicle(this.newVehicle).subscribe(updated => {
        const index = this.vehicles.findIndex(v => v.id === updated.id);
        if (index !== -1) {
          this.vehicles[index] = updated;
        }
        this.resetForm();
      });
    } else {

      this.vehicleService.addVehicle(this.newVehicle).subscribe(vehicle => {
        this.vehicles.push(vehicle);
        this.resetForm();
      });
    }
  }

  editVehicle(vehicle: Vehicle): void {
    this.newVehicle = { ...vehicle };  
    this.isEditMode = true;            
  }

  deleteVehicle(vehicleId: number): void {
    this.vehicleService.deleteVehicle(vehicleId).subscribe(() => {
      this.vehicles = this.vehicles.filter(v => v.id !== vehicleId);
    });
  }

  resetForm(): void {
    this.newVehicle = { make: '', model: '', fuelType: '', price: 0 };
    this.isEditMode = false;
  }
}
