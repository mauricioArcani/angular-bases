import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter.component';
import { HeroesModule } from '../heroes/heroes.module';


@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent,
    HeroesModule,
  ]
})
export class CounterModule {}
