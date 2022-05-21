import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "time"})
export class TimeLeftPipe implements PipeTransform {

    transform(value: number, ...args: any[]): string {
        return `${(Math.floor(value / 60)).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
            useGrouping: false
        })}:${(value % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`
    }
}
