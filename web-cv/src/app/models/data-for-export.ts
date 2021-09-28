import { ProjectsAndCertsData } from "./projects-and-certs-data";
import { TimelineData } from "./timeline-data";

export const userActivityTimeline: TimelineData[] = [
    {
        startYear: '2012',
        endYear: '2013',
        activityName: '10th Grade, CGPA: 8.8',
        institution: 'St. Aloysius Sr. Sec. School'
    }, {
        startYear: '2014',
        endYear: '2015',
        activityName: '12th Grade, Percentage: 92.8',
        institution: 'Royal Higher Secondary School'
    }, {
        startYear: '2015',
        endYear: '2019',
        activityName: 'B. Tech (Computers and Communication), CGPA: 8.1',
        institution: 'Manipal Institute of Technology'
    }, {
        startYear: 'January, 2019',
        endYear: 'July, 2019',
        activityName: 'Software Development Intern',
        institution: 'BlackRock, Inc.'
    }, {
        startYear: 'July, 2019',
        endYear: 'Present',
        activityName: 'Software Development Analyst',
        institution: 'BlackRock, Inc.'
    }
];

export const projectsAndCertifications: ProjectsAndCertsData[] = [
    {
        name: 'Remote Controller',
        startYear: 'Oct, 2019',
        endYear: 'Jan, 2020',
        technologies: 'Spring Framework, Angular 8, Java Robot API',
        programmingLanguages: 'Java, JavaScript, TypeScript',
        repo: 'https://github.com/tushtiw97/remote-controller-ui',
        description: 'A simple remote controller with an executable service and a mobile control that allows us to control streaming services throughout different platforms (like Netflix, Primevideo, Hotstar, etc.) through a tailor made remote controller'
    }, {
        name: 'Kafka Trade Arbitrage',
        startYear: 'Jan, 2019',
        endYear: 'March, 2019',
        technologies: 'Spring Framework, Kafka Publish/Subscribe Message Broker, Yahoo Finance API (free subscription)',
        programmingLanguages: 'Java',
        repo: 'https://github.com/tushtiw97/KafkaTradeArbitrage',
        description: 'An application that allows users to leverage the minor glitches in stock markets (arbitrage) wherein the price of a stock in one exchange is slightly more or less compared to equivalent stock in a different exchange, thus allowing users to make small, but certain profits'
    }, {
        name: 'Seat Booking System',
        startYear: 'July, 2018',
        endYear: 'Dec, 2018',
        technologies: 'Laravel Framework',
        programmingLanguages: 'JavaScript, PHP',
        repo: 'https://github.com/tushtiw97/Seat_Matrix',
        description: 'A working prototype of a real-time seat booking system which allows users to book seats for movies, events, screenings, etc., while maintaining live monitoring of booked/occupied seats, and a notification system to notify users in case of successful bookings, or failures'
    }
];

export const skills = [
    {
        name: 'JavaScript',
        proficiency: 7.5
    }, {
        name: 'Angular (JavaScript Framework)',
        proficiency: 8.5
    }, {
        name: 'Java',
        proficiency: 7
    }, {
        name: 'PHP',
        proficiency: 7
    }, {
        name: 'Python',
        proficiency: 6
    }
];
