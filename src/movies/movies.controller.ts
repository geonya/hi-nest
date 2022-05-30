import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This Movie id is ${movieId}`;
  }
  @Post()
  create() {
    return 'This will create a Movie';
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a Movie ${movieId}`;
  }
  @Patch('/:id')
  patchMovie(@Param('id') movieId: string) {
    return `This will update a Movie ${movieId}`;
  }
}
