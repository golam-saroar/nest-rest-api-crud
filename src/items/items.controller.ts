import { CreateItemDto } from './dto/create.item.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('items')
export class ItemsController {

    @Get()
    findAll() :string {
        return 'Get all items';
    }
    @Get(':id')
    findOne(@Param() param) :string {
        return `the item is ${param.id}`;
    }
    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
    }
    
    @Put(':id')
    update(@Param() param, @Body() updateItemDto: CreateItemDto): string {
        return `update for ${param.id} Name: ${updateItemDto.name}`

    }
    @Delete(':id')
    delete(@Param() param) {
        return `deleted ${param.id}`;
    }



}
