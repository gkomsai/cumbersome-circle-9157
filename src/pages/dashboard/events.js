const events = [
  { title: "All Day Work", start: getDate("YEAR-MONTH-01") },
  {
    title: "PortFolio",
    start: getDate("YEAR-MONTH-07"),
    end: getDate("YEAR-MONTH-10"),
  },
  {
    groupId: "999",
    title: "Basic structure created",
    start: getDate("YEAR-MONTH-08T16:00:00+00:00"),
  },
  {
    groupId: "999",
    title: "working on projects part ",
    start: getDate("YEAR-MONTH-09T19:00:00+00:00"),
  },
  {
    groupId: "999",
    title: "Portfolio completed",
    start: getDate("YEAR-MONTH-10T17:00:00+00:00"),
  },
  {
    groupId: "999",
    title: "Work on the GitHub",
    start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
  },
  {
    title: "Conference",
    start: "YEAR-MONTH-17",
    end: getDate("YEAR-MONTH-19"),
  },
  {
    title: "Meeting with clients",
    start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
    end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
  },
  { title: "MyGlamm project", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
  {
    title: "Work on Assignments",
    start: getDate("YEAR-MONTH-19T16:00:00+00:00"),
  },
  {
    title: "Meeting with Nrupul sir",
    start: getDate("YEAR-MONTH-18T14:30:00+00:00"),
  },
  { title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
  { title: "Dinner", start: getDate("YEAR-MONTH-18T20:00:00+00:00") },
  {
    title: "EverHour Clone",
    start: getDate("YEAR-MONTH-23"),
    end: getDate("YEAR-MONTH-27"),
  },
  {
    title: "Group Meeting",
    start: getDate("YEAR-MONTH-23T07:30:00+00:00"),
    end: getDate("YEAR-MONTH-23T08:30:00+00:00"),
  },
  { title: "Task Issue created", start: getDate("YEAR-MONTH-23T12:00:00+00:00") },
  {
    title: "Work on Home Page",
    start: getDate("YEAR-MONTH-24T16:00:00+00:00"),
  },
  {
    title: "Work on Home Page",
    start: getDate("YEAR-MONTH-26T16:00:00+00:00"),
  },
  {
    title: "Work on Dashboard ",
    start: getDate("YEAR-MONTH-27T14:30:00+00:00"),
  },
  {
    title: "Meeting  with IA ",
    start: getDate("YEAR-MONTH-25T14:30:00+00:00"),
  },
  { title: "Happy Hour", start: getDate("YEAR-MONTH-28T17:30:00+00:00") },
  { title: "Dinner", start: getDate("YEAR-MONTH-25T20:00:00+00:00") },
  {
    title: "Project Presentation",
    start: getDate("YEAR-MONTH-29T12:00:00+00:00"),
  },
  { title: "Enjoy day", start: getDate("YEAR-MONTH-30") },
  { title: "Work starts", start: getDate("YEAR-MONTH-31") },
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

export default events;
