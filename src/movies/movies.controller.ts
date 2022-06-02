import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are Searching for a movie made after : ${searchingYear}`;
  }
  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This Movie id is ${movieId}`;
  }
  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }
  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a Movie ${movieId}`;
  }
  @Patch(':id')
  patchMovie(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
