let projectsArr = [
  {type: "Web", projects: [
    {name: "Graphs", description: "Scaling clickable bar graphs", details: "javascript, p5.js", img: "img/frivolousfive.jpg"},
    {name: "Tiskijukka", description: "Chore tracking site for groups.", details: "javascript, p5.js", img: "img/frivolousfive.jpg"},
    {name: "More", description: "Things", details: "javascript, p5.js", img: "img/frivolousfive.jpg"}]},
  {type: "Java", projects: [
    {name: "MapperBot 2000", description: "A robot that maps space autonomously using IR", details: "javascript, p5.js", img: "img/frivolousfive.jpg"},
    {name: "Blackjack", description: "A text version of Blackjack, with calculated odds on exceeding 21.", details: "javascript, p5.js", img: "img/frivolousfive.jpg"}
  ]},
  {type: "Python", projects: [
    {name: "Whodunit", description: "A text-based murder mystery game.", details: "javascript, p5.js", img: "img/frivolousfive.jpg"}
  ]},
  {type: "Other", projects: [
    {name: "Sound spectrum analyzer", description: "Using Arduino.", details: "javascript, p5.js", img: "img/frivolousfive.jpg"},
    {name: "Unity Game project", description: "Hobby game project that is on hold", details: "javascript, p5.js", img: "img/frivolousfive.jpg"}
  ]}
  ];

function getProjects() {
  return projectsArr;
}
