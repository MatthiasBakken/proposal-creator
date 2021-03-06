import { v4 as uuid } from 'uuid'
import { string } from "yup/lib/locale";

const newDate = new Date();
const date = newDate.getDate();
const month = newDate.getMonth() + 1;
const year = newDate.getFullYear();

export const todaysDate = `${`${month}`.length === 2 ? `${month}` : `0`.concat(`${month}`)}/${`${date}`.length === 2 ? `${date}` : `0`.concat(`${date}`)}/${year}`

export interface IBuilderData {
  id: string;
  firstName: string;
  lastName: string;
  designation: string;
  email: string;
  skills: string[];
  availability: {
    currentlyAvail: boolean;
    availableOn: string;
    blackoutDates: string;
    upcomingProjects: {
      startDate: string;
      project: string;
    }
  },
  match: number;
}

export const buildersData: IBuilderData[] = [
  {
    id: uuid(),
    firstName: 'Les',
    lastName: 'Stuart',
    designation: 'Frontend',
    email: 'builder1@email.com',
    skills: [
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'React',
      'Redux',
      'Node.js',
      'Express',
    ],
    availability: {
        currentlyAvail: true,
        availableOn: todaysDate,
        blackoutDates: '10/20/2021 - 11/01/2021',
        upcomingProjects: {
            startDate: '08/14/2021',
            project: 'https://linktoproject.com',
        },
    },
    match: 0,
  },
  {
    id: uuid(),
    firstName: 'Natalie',
    lastName: 'Portman',
    designation: 'Frontend',
    email: 'builder2@email.com',
    skills: [
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'React',
      'Redux',
      'Data Structures',
      'MaterialUI',
      'React Native',
      'LESS',
      'Context',

    ],
    availability: {
        currentlyAvail: true,
        availableOn: todaysDate,
        blackoutDates: '',
        upcomingProjects: {
            startDate: '',
            project: 'No scheduled project',
        },
    },
    match: 0,
  },
  {
    id: uuid(),
    firstName: 'James',
    lastName: 'Judge',
    designation: 'Frontend',
    email: 'builder3@email.com',
    skills: [
      'JavaScript',
      'TypeScript',
      'jQuery',
      'PHP',
      'HTML5',
      'CSS',
      'React',
      'Redux',
      'Data Structures',
      'MaterialUI',
      'Context',

    ],
    availability: {
        currentlyAvail: false,
        availableOn: '08/01/2021',
        blackoutDates: '12/28/2021 - 01/10/2022',
        upcomingProjects: {
            startDate: '',
            project: 'No scheduled project',
        },
    },
    match: 0,
  },
  {
    id: uuid(),
    firstName: 'Jacob',
    lastName: 'Langham',
    designation: 'Frontend',
    email: 'builder4@email.com',
    skills: [
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'React',
      'Redux',
      'Data Structures',
      'MaterialUI',
      'BootStrap',
      'Java',
      'Context',
      'AngularJS',

    ],
    availability: {
        currentlyAvail: false,
        availableOn: '07/01/2021',
        blackoutDates: '04/01/2022 - 06/01/2022',
        upcomingProjects: {
            startDate: '',
            project: 'No scheduled project',
        },
    },
    match: 0,
  },
  {
    id: uuid(),
    firstName: 'Diep',
    lastName: 'Truong',
    designation: 'Backend',
    email: 'builder5@email.com',
    skills: [
      'JavaScript',
      'HTML5',
      'PostgreSQL',
      'React',
      'Redux',
      'Data Structures',
      'Amazon S3',
      'AWS CloudFormation',
      'AWS Lambda',
      'REST API',
      'AWS Elastic Beanstalk',
      'AWS',
      'Kubernetes',
      'API Development',
      'Go',
      'Express',

    ],
    availability: {
        currentlyAvail: true,
        availableOn: todaysDate,
        blackoutDates: '05/01/2021 - 06/01/2021',
        upcomingProjects: {
            startDate: '',
            project: 'No scheduled project',
        },
    },
    match: 0,
  },
  {
    id: uuid(),
    firstName: 'Elizabeth',
    lastName: 'Uselton',
    designation: 'Backend',
    email: 'builder6@email.com',
    skills: [
      'Python',
      'Ruby on Rails',
      'Ruby',
      'TDD',
      'JavaScript',
      'SQL',
      'APIs',
    ],
    availability: {
        currentlyAvail: true,
        availableOn: todaysDate,
        blackoutDates: '',
        upcomingProjects: {
            startDate: '',
            project: 'No scheduled project',
        },
    },
    match: 0,
  },
  {
    id: uuid(),
    firstName: 'Peter',
    lastName: 'Gray',
    designation: 'Backend',
    email: 'builder7@email.com',
    skills: [
      'JavaScript',
      'React',
      'Node',
      'Riot.js',
      'Redux',
      'HTML',
      'SASS',
      'Mongo',
      'PHP',
      'Xamarin'

    ],
    availability: {
        currentlyAvail: true,
        availableOn: todaysDate,
        blackoutDates: '',
        upcomingProjects: {
            startDate: '',
            project: 'No scheduled project',
        },
    },
    match: 0,
  },
  {
    id: uuid(),
    firstName: 'Samuel',
    lastName: 'M',
    designation: 'Fullstack',
    email: 'builder8@email.com',
    skills: [
      'JavaScript',
      'Python',
      'Web Services',
      'Physics',
      'Data Analysis',
      'Web Development',
      'TDD',
      'Sensors',
      'Statistics',
      'Matlab',
      'Django',
      'Arduino',
      'Linux',
      'Jest',
      'Node',
      'Docker Products',
      'Red Hat Linux',
      'Elastic Search',
      'Ubuntu',
      'Semantic UI',
      'AWS',

    ],
    availability: {
        currentlyAvail: true,
        availableOn: todaysDate,
        blackoutDates: '06/11/2021 - 07/14/2021',
        upcomingProjects: {
            startDate: '02/01/2022',
            project: 'https://linktoproject.com',
        },
    },
    match: 0,
  },
]