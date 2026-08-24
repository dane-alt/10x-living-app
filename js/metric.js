
// Shared rules. Works in the browser and in Node tests.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.TenXMetric = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function isEngagementTrap(change) {
    const bad = ["infinite feed", "streak shame", "nag notification", "ad", "time on site"];
    const t = String(change || "").toLowerCase();
    return bad.some((b) => t.includes(b));
  }
  function sessionSucceeded(endedInWorld) {
    return Boolean(endedInWorld);
  }
  function suggestOffAppAction(feeling) {
    const f = String(feeling || "").toLowerCase();
    if (f === "tight" || f === "scared") return "Stand up. Look at the sky or a tree for one minute. Then close this.";
    if (f === "lonely") return "Send one honest message to a real person, then close this.";
    if (f === "tired") return "Drink water and rest. The app should go quiet.";
    if (f === "glad") return "Keep the gladness in the world. Close this.";
    return "Do the next kind thing in the room you are in, then close this.";
  }
  return { isEngagementTrap, sessionSucceeded, suggestOffAppAction };
});
