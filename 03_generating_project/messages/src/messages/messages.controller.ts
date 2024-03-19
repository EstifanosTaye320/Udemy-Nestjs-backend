import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {}

  @Get(':id')
  getOneMessage(@Param('id') id: string) {
    return id
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return body.content
  }
}
