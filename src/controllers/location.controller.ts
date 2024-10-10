import { Controller, Get, Post, Body, Param, Delete, Put, ValidationPipe } from '@nestjs/common';
import { LocationEntity } from 'src/entities/location.entity';
import { LocationService } from 'src/services/location.service';
import { CreateLocationValidator } from 'src/validator/location/create-location.validator';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  create(@Body(new ValidationPipe()) createLocationValidator: CreateLocationValidator) {
    return this.locationService.create(createLocationValidator);
  }

  @Get()
  findAll() {
    return this.locationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.locationService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() location: Partial<LocationEntity>) {
    return this.locationService.update(id, location);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.locationService.remove(id);
  }
}
