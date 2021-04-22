import { CreateItemDto } from './dto/create.item.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('items')
export class ItemsController {

    @Get()
    findAll() :string {
        return 'Get all items';
    }
    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
    }
}
