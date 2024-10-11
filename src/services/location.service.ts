/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { LocationEntity } from 'src/entities/location.entity';
import { LocationModel } from 'src/models/location.model';
import { CreateLocationDto, UpdateLocationDto } from 'src/validator/location.validator';

@Injectable()
export class LocationService {
  constructor(private locationModel: LocationModel) {}

  // Create new location
  create(location: CreateLocationDto) {
    return this.locationModel.create(location);
  }

  // Retrieve all locations
  getAll() {
    return this.locationModel.getAll();
  }

  // Retrieve location by ID
  async getDetail(id: number) {
    const findLocation = await this.locationModel.getById(id);
    return findLocation;
  }

  // Update location
  update(id: number, location: UpdateLocationDto) {
    return this.locationModel.update(id, location);
  }

  // Delete location
  async deleteById(id: number) {
    const instance = await this.locationModel.deleteById(id);
    return instance;
  }
}
