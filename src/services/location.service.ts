import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationEntity } from 'src/entities/location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private readonly locationRepository: Repository<LocationEntity>
  ) {}

  // Create new location
  create(location: Partial<LocationEntity>) {
    const newLocation = this.locationRepository.create(location);
    return this.locationRepository.save(newLocation);
  }

  // Retrieve all locations
  findAll() {
    return this.locationRepository.find();
  }

  // Retrieve location by ID
  findOne(id: number) {
    return this.locationRepository.findOne({ where: { id } });
  }

  // Update location
  update(id: number, location: Partial<LocationEntity>) {
    return this.locationRepository.update(id, location);
  }

  // Delete location
  remove(id: number) {
    return this.locationRepository.delete(id);
  }
}
