import { SchemaOptions } from '@nestjs/mongoose';
export declare function DatabaseConnection(connectionName?: string): ParameterDecorator;
export declare function DatabaseModel(entity: any, connectionName?: string): ParameterDecorator;
export declare function DatabaseEntity(options?: SchemaOptions): ClassDecorator;
