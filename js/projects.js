let projectsArr = [
  {type: "Web", projects: [
    {name: "Graphs", description: "Winning"},
    {name: "Something", description: "Else"},
    {name: "More", description: "Things"}]},
  {type: "Java", projects: [
    {name: "MapperBot 2000", description: "A robot that maps space autonomously using IR"},
    {name: "Blackjack", description: "A text version of Blackjack, with calculated odds on exceeding 21."}
  ]},
  {type: "Python", projects: [
    {name: "Whodunit", description: "A text-based murder mystery game."}
  ]},
  {type: "Other", projects: [
    {name: "Sound spectrum analyzer", description: "Using Arduino."},
    {name: "Unity Game project", description: "Hobby game project that is on hold"}
  ]}
  ];

function getProjects() {
  return projectsArr;
}
