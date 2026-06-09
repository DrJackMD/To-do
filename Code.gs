// ─────────────────────────────────────────────────────────────────────────────
// TASK MANAGER — Google Apps Script Backend
// Paste this entire file into your Google Apps Script editor.
// ─────────────────────────────────────────────────────────────────────────────

var SHEET_NAME = "Tasks";

// Called automatically when the web app receives a GET request (loading tasks)
function doGet(e) {
  try {
    var tasks = loadTasks();
    var output = JSON.stringify({ tasks: tasks });
    return ContentService
      .createTextOutput(output)
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Called automatically when the web app receives a POST request (saving tasks)
function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    if (payload.action === "save" && payload.tasks) {
      saveTasks(payload.tasks);
    }
    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Reads all tasks from the Google Sheet and returns them as an array
function loadTasks() {
  var sheet = getOrCreateSheet();
  var data  = sheet.getDataRange().getValues();

  if (data.length <= 1) return []; // only header row or empty

  var headers = data[0];
  var tasks   = [];

  for (var i = 1; i < data.length; i++) {
    var row  = data[i];
    var task = {};
    for (var j = 0; j < headers.length; j++) {
      task[headers[j]] = row[j];
    }
    // Convert the stored "done" string back to a boolean
    task.done  = (task.done === true || task.done === "TRUE" || task.done === "true");
    task.recur = (task.recur === true || task.recur === "TRUE" || task.recur === "true");
    tasks.push(task);
  }
  return tasks;
}

// Writes all tasks to the Google Sheet (replaces existing data)
function saveTasks(tasks) {
  var sheet = getOrCreateSheet();
  sheet.clearContents();

  if (!tasks || tasks.length === 0) return;

  // Define column order
  var headers = [
    "id","name","cat","pri","due","notes","done",
    "recur","recurN","recurUnit","recurEnd","recurEndDate","recurEndCount","recurCount"
  ];

  var rows = [headers];
  for (var i = 0; i < tasks.length; i++) {
    var t = tasks[i];
    rows.push([
      t.id           || "",
      t.name         || "",
      t.cat          || "",
      t.pri          || "",
      t.due          || "",
      t.notes        || "",
      t.done         || false,
      t.recur        || false,
      t.recurN       || 1,
      t.recurUnit    || "week",
      t.recurEnd     || "never",
      t.recurEndDate || "",
      t.recurEndCount|| 12,
      t.recurCount   || 0
    ]);
  }

  sheet.getRange(1, 1, rows.length, headers.length).setValues(rows);
}

// Returns the Tasks sheet, creating it if it doesn't exist
function getOrCreateSheet() {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  return sheet;
}
