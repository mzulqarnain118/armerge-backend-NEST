import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsString,
    IsNotEmpty,
    IsEmail,
    MaxLength,
    MinLength,
    IsUUID,
    IsOptional,
    ValidateIf,
    IsEnum,
} from 'class-validator';
import { PLATFORMS } from '../store.constants';

 class CreateStoreDto {
    @IsEnum(PLATFORMS)
    @Type(() => String)
    readonly platform: string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    readonly connection: any;
}

  class getProductsDto {
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    readonly storeId: string;
}

export {getProductsDto, CreateStoreDto}