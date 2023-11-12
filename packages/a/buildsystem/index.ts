import { task } from '@avensia-oss/garn';

task('foo', () => {
  console.log('Foo from A');
});

task('a-only-task', () => {
  console.log('ONLY A TASK');
});
