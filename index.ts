import { concat, forkJoin, fromEvent, interval, of, zip } from 'rxjs';
import {
  concatAll,
  concatWith,
  exhaustAll,
  flatMap,
  map,
  mergeAll,
  mergeMap,
  switchAll,
  switchMap,
  take,
} from 'rxjs/operators';

let name1 = of(1, 2, 3, 4);
// let name2 = of(5, 3, 6, 8);
// let user: any[] = [];
// let user1: any[] = [1, 2, 3];
// let user2: any[] = [4, 5, 6];

// forkJoin([name1, name2])
//   .pipe(map(([name1, name2]) => name1 * name2))
//   .subscribe((x) => console.log(x));

// zip(name1, name2)
//   .pipe(map(([name1, name2]) => name1 * name2))
//   .subscribe((x) => console.log(x));

// concat(name1, name2).subscribe((x) => user.push(x));
// console.log(user);

const letters = of('a', 'b', 'c');
const result = letters.pipe(mergeMap((x) => name1.pipe(map((i) => x + i))));
result.subscribe((x) => console.log(x));

//join
const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(map((ev) => interval(1000).pipe(take(4))));
const firstOrder = higherOrder.pipe(concatAll());
// const firstOrder = higherOrder.pipe(mergeAll());
// const firstOrder = higherOrder.pipe(switchAll());
// const firstOrder = higherOrder.pipe(exhaustAll());
firstOrder.subscribe((x) => console.log(x));
