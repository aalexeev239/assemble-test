var extname = require('gulp-extname');
var assemble = require('assemble');

assemble.partials('./src/templates/partials/*.hbs');
assemble.layouts('./src/templates/layouts/*.hbs');
assemble.data('./src/templates/data/*.json')

assemble.task('default',function(){
  return assemble.src('./src/templates/pages/*.hbs')
    .pipe(extname())
    .pipe(assemble.dest('./build'));
});

assemble.task('noextname',function(){
  return assemble.src('./src/templates/pages/*.hbs')
    // .pipe(extname())
    .pipe(assemble.dest('./noextname'));
});
