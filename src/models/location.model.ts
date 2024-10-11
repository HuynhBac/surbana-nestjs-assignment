import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationEntity } from 'src/entities/location.entity';
import { CreateLocationDto, UpdateLocationDto } from 'src/validator/location.validator';
import { Repository } from 'typeorm';

@Injectable()
export class LocationModel {
  constructor(
    @InjectRepository(LocationEntity)
    private readonly locationRepository: Repository<LocationEntity>
  ) {}

  // Get all locations
  getAll() {
    return this.locationRepository.find({
      where: {
        is_deleted: false
      }
    });
  }

  // Get location by ID
  async getById(id: number) {
    const findLocation = await this.locationRepository.findOne({ where: { id, is_deleted: false } });
    return findLocation;
  }

  // Create new location
  async create(location: CreateLocationDto) {
    const newLocation = this.locationRepository.create(location);
    const instance = await this.locationRepository.save(newLocation);
    return instance;
  }

  // Update location
  async update(id: number, location: UpdateLocationDto) {
    const findLocation = await this.getById(id);
    if (!findLocation) {
      throw new NotFoundException('Location not found');
    }
    return this.locationRepository.update(id, location);
  }

  // Delete location
  async deleteById(id: number) {
    const findLocation = await this.getById(id);
    if (!findLocation) {
      throw new NotFoundException('Location not found');
    }
    findLocation.is_deleted = true;
    findLocation.deleted_at = new Date();
    await this.locationRepository.save(findLocation);
  }
}
