import { task, workspaces } from '@avensia-oss/garn';

task('start', () => {
  console.log('Executing start-task from root');
});

task('all-foo', async () => {
  await workspaces.runTask('foo', 'a');
  await workspaces.runTask('foo', 'b');
});
