function randomString(length) {
  // Black magic to generate a random string of length 128 chars
  return [...Array(length)].map(() => (Math.random() * 36 | 0).toString(36)).join('');
}

function randomVector(length) {
  return Array.from({ length: length }, () => 
    Math.round((Math.random() * 9 + 1) * 10) / 10
  );
}


function generateDocument(context, events, done) {
  context.vars.field1 = randomString(128);
  context.vars.field2 = randomString(128);
  context.vars.field3 = randomString(128);
  context.vars.content_vector = randomVector(128); // Note: Have this match the dimension value for index creation
  return done();
}

module.exports = {
  generateDocument
};

