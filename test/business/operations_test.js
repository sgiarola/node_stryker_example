const operations = require("../../business/operations");
const assert = require('assert');

describe("when simulate operations", function() {
  describe("with simulated success params", function() {
    it("return 1 by a greater than 0", function() {
      assert.equal(operations.firstCondition(1, 1, true), 1);
    });
    it("return 2 by flag true", function() {
      assert.equal(operations.firstCondition(0, 1, true), 2);
    });
  });

  describe("with simulated fail params", function() {
    it("return 3 by flag false", function() {
      assert.equal(operations.firstCondition(0, 10, false), 3);
    });
    it("return 3 by b minor than 10", function() {
      assert.equal(operations.firstCondition(0, 1, false), 3);
    });
    it("return 3 by b equal than 10", function() {
      assert.equal(operations.firstCondition(0, 10, true), 3);
    });
  });
});
