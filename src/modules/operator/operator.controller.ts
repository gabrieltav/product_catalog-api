import { ApiTags } from '@nestjs/swagger';
import {
    Controller,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';

@Controller('operator')
@ApiTags('operator')
@UsePipes(ValidationPipe)
export class OperatorController {

}
