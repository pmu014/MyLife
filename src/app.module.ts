import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import { SportsModule } from './sports/sports.module';
import { HealthModule } from './health/health.module';
import { DiaryModule } from './diary/diary.module';

@Module({
  imports: [ContentModule, SportsModule, HealthModule, DiaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
