import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      {
        id: 1,
        slug: 'intellitrucks',
        title: 'Intellitrucks.com',
        url: '<div class="muted">internal site</div>',
        skills: [
          'PHP',
          'Laravel',
          'MySQL',
          'Javascript'
        ],
        images: [
          {
            id: 1,
            caption: 'Intellitrucks > Custom CMS creation'
          },
          {
            id: 2,
            caption: 'Intellitrucks > Using DataTables in fleet manager dashboard'
          },
          {
            id: 3,
            caption: 'Intellitrucks > Plotting JSON data as a stepline graph using amcharts.js'
          },
          {
            id: 4,
            caption: 'Intellitrucks > Log data output in compliance with federal regulations'
          },
        ],
        blurb: 'Web app meant to help truck fleet owners manage their trucks, drivers, and jobs.',
        bullets: [
          'Wrote specifications document based on US Department of Transportation Federal Motor Carrier regulations on Electronic Logging Devices',
          'Based on this doc, designed MySQL database structure in MySQLWorkbench',
          'Built models, controllers, and views for app, and designed custom CMS in Laravel 5',
          'Programmed REST API endpoints to feed JSON data to Datatables.net and amcharts.js libraries',
          'Integrated app with Google Maps Timezone and Geocoding APIs'
        ]
      },
      {
        id: 2,
        slug: 'superghost',
        title: 'SuperGhost',
        url: '<a href="http://superghost.herokuapp.com" target="_blank">http://superghost.herokuapp.com</a>',
        skills: [
          'Javascript',
          'Angular 5',
          'Express',
          'Node.js'
        ],
        images: [
          {
            id: 1,
            caption: 'SuperGhost > Match wits against the computer, or challenge a friend'
          },
          {
            id: 2,
            caption: 'SuperGhost > Victory modal'
          },
          {
            id: 3,
            caption: 'SuperGhost > Built-in Oxford Dictionary API lookup to define words'
          },
          {
            id: 4,
            caption: 'SuperGhost > Instructions modal'
          }
        ],
        blurb: 'Single and multi-player word-game programmed from scratch as a progressive web app.',
        bullets: [
          'Programmed Javascript AI capable of finding difficult English words',
          'Built front-end in Angular 5 using Angular Material components and Reactive forms',
          'Built backend using in-memory-API for word bank, and Oxford Dictionary API for word definitions and inflections',
          'Wrote bot to scrape Oxford API for complete list of definable English words,resulting in custom array of over 160,000 words'
        ]
      },
      {
        id: 3,
        slug: 'idc',
        title: 'IDC Energy',
        url: '<a href="https://jplew.github.io/idc" target="_blank">https://jplew.github.io/idc</a>',
        skills: [
          'Javascript',
          'Angular 4'
        ],
        images: [
          {
            id: 1,
            caption: 'IDC > Map Overview'
          },
          {
            id: 2,
            caption: 'IDC > Map Detail Sidenav flyout'
          },
          {
            id: 3,
            caption: 'IDC > Enhanced Search Results'
          },
          {
            id: 4,
            caption: 'IDC > List View using Angular Material Data-table'
          },
        ],
        blurb: 'Plant-monitoring app UI Prototype for global energy company',
        bullets: [
          'Developed a workable dashboard prototype, in both list and map views, based on static mockups',
          'Created map interface by integrating with Google Maps API',
          'Used DataTable component in Angular Material to produce plant list view',
          'Offered enhanced inline Search functionality using in-memory API'
        ]
      },
      {
        id: 4,
        slug: 'calculator',
        title: 'Distance Calculator',
        url: '<a href="https://node-distance-calculator.herokuapp.com" target="_blank">https://node-distance-calculator.herokuapp.com</a> <span class="divider">|</span> <a href="http://bit.ly/2mvXwLd" target="_blank">View Gist</a>',
        skills: [
          'Node.js',
          'Javascript'
        ],
        images: [
          {
            id: 1,
            caption: 'Listing of locations within 100km radius of coordinates'
          },
          {
            id: 2,
            caption: 'Listing of locations within 100km radius of coordinates'
          }
        ],
        blurb: 'Vanilla Node.js app which parses geographical locations and calculates their distance from a particular point.',
        bullets: [
          'Wrote a Node.js/JavaScript program that reads json and outputs a sorted list of names and addresses.',
          'Coded without recourse to any 3rd-party libraries or frameworks',
          'Wrote function to calculate distance between two points using the Haversine formula',
        ]
      },
      {
        id: 5,
        slug: 'syncdb',
        title: 'SyncDB',
        url: '<a href="https://github.com/jplew/SyncDB" target="_blank">https://github.com/jplew/SyncDB</a>',
        skills: [
          'Shell',
          'Bash',
          'Unix'
        ],
        images: [
          {
            id: 1,
            caption: 'SyncDB > Script in action. Pushing to remote server.'
          },
          {
            id: 2,
            caption: 'SyncDB > Bash scripting nuts and bolts.'
          }
        ],
        blurb: 'Open-source bash script I created as a service to the Wordpress developer community.',
        bullets: [
          'Fully automates MySQL database migration for Wordpress sites from the command-line.',
          'Also handles routine tasks like backing up your database, syncing uploads directories, and keeping itself up-to-date.',
          'Refined script over time based on community feedback, and accepted pull requests',
          'Starred over 180 times on Github.',
        ]
      },
      {
        id: 6,
        slug: 'kriyate',
        title: 'Kriyate.co',
        url: '<a href="https://www.kriyate.co" target="_blank">https://www.kriyate.co</a>',
        skills: [
          'PHP',
          'MySQL',
          'Wordpress',
          'UI/UX design'
        ],
        images: [
          {
            id: 1,
            caption: 'Kriyate > Personal site homepage'
          },
          {
            id: 2,
            caption: 'Kriyate > Share Your Care website homepage'
          },
          {
            id: 3,
            caption: 'Kriyate > Share Your Care website'
          },
          {
            id: 4,
            caption: 'Kriyate > TheDarkKnightManual.com site created for Insight Editions.'
          },
          {
            id: 5,
            caption: 'Kriyate > Previous website projects'
          },
          {
            id: 6,
            caption: 'Kriyate > Art portfolio website'
          }
        ],
        blurb: 'My personal Wordpress portfolio, showcasing previous design and photography work.',
        bullets: [
          'Created numerous Wordpress sites over the years, regularly necessitating custom PHP coding and scripting.',
          'Extensive experience designing and implementing user interfaces'
        ]
      }
    ];
    return { projects };
  }
}
