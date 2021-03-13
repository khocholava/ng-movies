import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let secondsLeft = value * 60;

    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    const mins = Math.floor(secondsLeft / 60);

    return `${hours ? hours + 'h' : ''} ${mins}min`;
  }

}

@NgModule({
  declarations: [
    TimePipe,
  ],
  exports: [
    TimePipe,
  ],
})
export class TimePipeModule {
}
