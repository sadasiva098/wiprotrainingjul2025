import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'http://localhost:3000/vehicles'; // JSON-server or backend

  constructor(private http: HttpClient) {}

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.apiUrl, vehicle);
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  getVehicleById(vehicleId: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/${vehicleId}`);
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    if (!vehicle.id) {
      throw new Error('Vehicle id is required for update');
    }
    return this.http.put<Vehicle>(`${this.apiUrl}/${vehicle.id}`, vehicle);
  }


  deleteVehicle(vehicleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${vehicleId}`);
  }
}
