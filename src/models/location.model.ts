import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationEntity } from 'src/entities/location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocationModel {
  constructor(
    @InjectRepository(LocationEntity)
    private readonly locationRepository: Repository<LocationEntity>
  ) {}

  // Get all locations
  getAll() {
    return this.locationRepository.find();
  }

  // Get location by ID
  getById(id: number) {
    return this.locationRepository.findOne({ where: { id } });
  }

  // Create new location
  create(location: Partial<LocationEntity>) {
    const newLocation = this.locationRepository.create(location);
    return this.locationRepository.save(newLocation);
  }

  // Update location
  update(id: number, location: Partial<LocationEntity>) {
    return this.locationRepository.update(id, location);
  }

  // Delete location
  deleteById(id: number) {
    return this.locationRepository.delete(id);
  }
}
