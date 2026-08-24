
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("checkin");
  const out = document.getElementById("suggestion");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const feeling = form.feeling.value;
    const note = form.note.value;
    const suggestion = TenXMetric.suggestOffAppAction(feeling);
    const record = { feeling, note, suggestion, at: new Date().toISOString(), endedInWorld: true };
    const all = JSON.parse(localStorage.getItem("tenx-checkins") || "[]");
    all.push(record);
    localStorage.setItem("tenx-checkins", JSON.stringify(all));
    out.hidden = false;
    out.querySelector("[data-text]").textContent = suggestion;
    form.hidden = true;
  });
});
