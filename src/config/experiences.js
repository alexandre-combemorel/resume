/* eslint-disable global-require */
export default [
  {
    id: 1,
    company: {
      name: 'Homeday',
      picture: require('../config/images/logo/hd_logo.jpg'),
      industry: 'Real Estate company',
      location: 'Berlin (DE)',
    },
    date: '2016‐2018',
    date_timeline: {
      end: 2018,
      start: 2016,
    },
    text: 'Front‐end developer Homeday is a real estate company developing new tools and concepts for german real estate. I was a Front‐End developer in charge of the website development / migration and development process. I was part of a team working with a AGILE methodologies.',
    skills: 'AGILE management, VUE.JS, Kirby CMS PHP, Continuous integration GitHub/Jenkins',
  },
  {
    id: 2,
    company: {
      name: 'The Hope Factory',
      picture: require('../config/images/logo/thf_logo.png'),
      industry: 'Web development',
      location: 'Melbourne (AU)',
    },
    date: '2015‐2016',
    date_timeline: {
      end: 2016,
      start: 2015,
    },
    text: 'WordPress Developer The Hope Factory is a website development company. My role was to develop and adapt WordPress websites for customers and manage customer’s needs. I also improved the process and methods of the company',
    skills: 'Project management, Customers relations, business process development, WordPress, JQuery',
  },
  {
    id: 3,
    company: {
      name: 'Airbus CIMPA',
      picture: require('../config/images/logo/airbus_logo.svg'),
      industry: 'Aircraft manufacturer',
      location: 'Toulouse (FR)',
    },
    date: '2013‐2015',
    date_timeline: {
      end: 2015,
      start: 2013,
    },
    text: 'IT Business Project Leader CIMPA is an aircraft manufacturing service supplier. My role was to be in charge of optimizing the aircraft maintenance through IT tool technical documentation',
    skills: 'Project management methodology, aeronautical knowledge, team work, relationships and communication, benchmarking',
  },
  {
    id: 4,
    company: {
      name: 'B&T associées',
      picture: require('../config/images/logo/bt_logo.png'),
      industry: 'IT Consulting',
      location: 'Toulouse (FR)',
    },
    date: '2013 Internship',
    date_timeline: {
      end: 2013,
      start: 2013,
    },
    text: 'Process management Process improvement and tool development for automatic process analysis in JavaScript',
    skills: 'Process management, ARIS Business Process, MEGA Business process, BPMN standard',
  },
  {
    id: 5,
    company: {
      name: 'SNCF',
      picture: require('../config/images/logo/sncf_logo.png'),
      industry: 'Railroad company',
      location: 'Paris (FR)',
    },
    date: '2012 Internship',
    date_timeline: {
      end: 2012,
      start: 2012,
    },
    text: 'Security Web Developer Security tool development in PHP5 / JQuery for the main railway company in France',
    skills: 'PHP5, JQuery, HTML5/CSS3, Active Directory management in PHP',
  },
];
