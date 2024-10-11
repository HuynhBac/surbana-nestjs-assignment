import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CustomValidationPipe } from 'src/pipes/custom-validation.pipe';
import { LocationService } from 'src/services/location.service';
import { CreateLocationDto, UpdateLocationDto } from 'src/validator/location.validator';
import { RequestResponse } from './request-response';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  async getAll() {
    const response = await this.locationService.getAll();
    const locations = response.map(item => {
      return {
        id: item.id,
        name: item.name,
        building: item.building,
        area: item.area,
        parent_id: item.parentId,
        created_at: item.createdAt,
        updated_at: item.updatedAt
      };
    });
    return new RequestResponse('Get all locations successfully!', locations);
  }

  @Get(':id')
  async getDetail(@Param('id') id: number) {
    const findItem = await this.locationService.getDetail(id);
    const locationDetail = {
      id: findItem.id,
      name: findItem.name,
      building: findItem.building,
      area: findItem.area,
      parent_id: findItem.parentId,
      created_at: findItem.createdAt,
      updated_at: findItem.updatedAt
    };
    return new RequestResponse('Get location detail successfully!', locationDetail);
  }

  @Post()
  async create(@Body(new CustomValidationPipe()) createLocationDto: CreateLocationDto) {
    const instance = await this.locationService.create(createLocationDto);
    return new RequestResponse('Create new location successfully!', instance);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateLocationDto: UpdateLocationDto) {
    const instance = await this.locationService.update(id, updateLocationDto);
    return new RequestResponse('Update location successfully!', instance);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const instance = await this.locationService.deleteById(id);
    return new RequestResponse('Delete location successfully!', instance);
  }
}
