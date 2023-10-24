// const { of, filter, map } = require('rxjs');

// of(1, 2, 3)
//   .pipe(map((x) => x * x))
//   .pipe(filter((x) => x % 2 !== 0))
//   .subscribe((v) => console.log(`value: ${v}`));

const { of, scan, map } = require('rxjs');

const numbers$ = of(1, 2, 3);

numbers$
  .pipe(
    scan((total, n) => total + n),
    map((sum, index) => sum / (index + 1)),
  )
  .subscribe(console.log);
