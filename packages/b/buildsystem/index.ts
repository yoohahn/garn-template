import { task } from '@avensia-oss/garn';

task('foo', () => {
  console.log('Foo from B');
});

task('b-only-task', () => {
  console.log('ONLY B TASK');
});
