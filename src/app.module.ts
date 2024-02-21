import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import { SportsModule } from './sports/sports.module';
import { HealthModule } from './health/health.module';
import { DiaryModule } from './diary/diary.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [
    ContentModule,
    SportsModule,
    HealthModule,
    DiaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
