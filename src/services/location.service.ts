/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { LocationEntity } from 'src/entities/location.entity';
import { LocationModel } from 'src/models/location.model';

@Injectable()
export class LocationService {
  constructor(private locationModel: LocationModel) {}

  // Create new location
  create(location: Partial<LocationEntity>) {
    return this.locationModel.create(location);
  }

  // Retrieve all locations
  getAll() {
    return this.locationModel.getAll();
  }

  // Retrieve location by ID
  getDetail(id: number) {
    return this.locationModel.getById(id);
  }

  // Update location
  update(id: number, location: Partial<LocationEntity>) {
    return this.locationModel.update(id, location);
  }

  // Delete location
  deleteById(id: number) {
    return this.locationModel.deleteById(id);
  }
}
