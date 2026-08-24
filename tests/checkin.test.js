
const assert = require("assert");
const { isEngagementTrap, sessionSucceeded, suggestOffAppAction } = require("../js/metric.js");

assert.strictEqual(isEngagementTrap("add an infinite feed"), true);
assert.strictEqual(isEngagementTrap("off-app walk prompt"), false);
assert.strictEqual(sessionSucceeded(true), true);
assert.strictEqual(sessionSucceeded(false), false);
assert.ok(suggestOffAppAction("tired").toLowerCase().includes("quiet") || suggestOffAppAction("tired").toLowerCase().includes("rest"));
console.log("ok: metric and check-in rules hold");
