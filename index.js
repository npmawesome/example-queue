var queue = require('queue');

function populateQueue(q) {
  for (var i = 0; i < 20; i++) {
    (function(index) {
      q.push(function(done) {
        console.log('done', index);
        setTimeout(done, 500);
      });
    })(i);
  }
}

var q1 = queue();
var q2 = queue({concurrency: 2});

populateQueue(q1);
populateQueue(q2);

q1.start();
q2.start();
