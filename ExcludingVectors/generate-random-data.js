function randomString() {
  // Black magic to generate a random string of length 128 chars
  return [...Array(128)].map(() => (Math.random() * 36 | 0).toString(36)).join('');
}

function generateDocument(context, events, done) {
  context.vars.field1 = randomString();
  context.vars.field2 = randomString();
  context.vars.field3 = randomString();
  return done();
}

module.exports = {
  generateDocument
};

