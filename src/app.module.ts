import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/blog'), CustomersModule],
})
export class AppModule {}
