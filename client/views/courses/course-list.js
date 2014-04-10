var courseData = [
  {
    title: 'Hairdressing',
    type: 'NVQ',
    level: '1'
  },
  {
    title: 'Barbering',
    type: 'NVQ',
    level: '1'
  },
  {
    title: 'Hairdressing',
    type: 'NVQ',
    level: '2'
  },
  {
    title: 'Barbering',
    type: 'NVQ',
    level: '2'
  },
  {
    title: 'Hairdressing',
    type: 'NVQ',
    level: '3'
  }
];
Template.listCourses.helpers({
  courses: courseData
});
