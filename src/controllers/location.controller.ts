import { Controller, Get, Post, Body, Param, Delete, Put, HttpStatus, UseFilters, ForbiddenException } from '@nestjs/common';
import { LocationEntity } from 'src/entities/location.entity';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CustomValidationPipe } from 'src/pipes/custom-validation.pipe';
import { LocationService } from 'src/services/location.service';
import { CreateLocationValidator } from 'src/validator/location/create-location.validator';
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
        parent_id: item.parentId
      };
    });
    return new RequestResponse('Get all locations successfully!', locations);
  }

  @Get(':id')
  getDetail(@Param('id') id: number) {
    return this.locationService.getDetail(id);
  }

  @Post()
  @UseFilters(new HttpExceptionFilter())
  create(@Body(new CustomValidationPipe()) createLocationValidator: CreateLocationValidator) {
    return this.locationService.create(createLocationValidator);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() location: Partial<LocationEntity>) {
    return this.locationService.update(id, location);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.locationService.deleteById(id);
  }
}
