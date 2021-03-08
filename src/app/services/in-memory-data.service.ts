import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      {
        id: 11,
        slug: 'crud',
        title: 'MongoDB CRUD App',
        url:
          '<a href="https://mongodb-angular-app.web.app" target="_blank">https://mongodb-angular-app.web.app</a>',
        skills: [
          'Angular',
          'Angular Material',
          'MongoDB',
          'Mongoose',
          'Express',
        ],
        images: [
          {
            id: 1,
            caption: 'MongoDB CRUD App > List view',
          },
          {
            id: 2,
            caption: 'MongoDB CRUD App > Create view',
          },
        ],
        blurb:
          'Sample client/server app pair demonstrating basic CRUD operations on a MongoDB. Frontend is an Angular SPA, backend is a an Express server powered by Mongoose. Hosted on Firebase. Github links to source code available in the app header.',
        bullets: [
          'Uses RxJS 6 pipeable operators',
          'Layout with Angular Flex-Layout and Material',
          'Can filter results via search box or drop-down menu',
          'Results are sortable alphabetically by name',
          'PUT and POST requests update the listing dynamically in real-time',
          'Uses extensive client-side form validation',
          'API uses Mongoose as ORM',
        ],
      },
      {
        id: 10,
        slug: 'rtadubai',
        title: 'RTA Dubai Traffic Dashboard Visualization',
        url:
          '<a href="https://rta-dubai-1900a.web.app" target="_blank">https://rta-dubai-1900a.web.app</a>',
        skills: [
          'Angular',
          'Angular Material',
          'ArcGIS',
          'D3.js',
          'Typescript',
        ],
        images: [
          {
            id: 1,
            caption: 'RTA Dubai > Heatmap bubble view',
          },
          {
            id: 2,
            caption: 'RTA Dubai > Arc travel map view',
          },
          {
            id: 3,
            caption: 'RTA Dubai > Tabular analytics view',
          },
          {
            id: 4,
            caption: 'RTA Dubai > Congestion spot overlay window',
          },
        ],
        blurb:
          'Traffic visualization app to help the Road Transport Authority (RTA) of Dubai identify top road traffic bottlenecks based on GPS Probe data. ',
        bullets: [
          'Uses the ArcGIS maps API to represent traffic data as either heatmap network or arc-based node-link diagram',
          'Shows congested road segments in both tabular and map-based formats',
          'Histograph allows animated playback of data, and permits granular analysis by half-hour intervals',
          'Uses D3.js for charts',
        ],
      },
      {
        id: 1,
        slug: 'intellitrucks',
        title: 'Intellitrucks.com',
        url: '<div class="muted">internal site</div>',
        skills: ['PHP', 'Laravel', 'MySQL', 'Javascript'],
        images: [
          {
            id: 1,
            caption: 'Intellitrucks > Custom CMS creation',
          },
          {
            id: 2,
            caption:
              'Intellitrucks > Using DataTables in fleet manager dashboard',
          },
          {
            id: 3,
            caption:
              'Intellitrucks > Plotting JSON data as a stepline graph using amcharts.js',
          },
          {
            id: 4,
            caption:
              'Intellitrucks > Log data output in compliance with federal regulations',
          },
        ],
        blurb:
          'Web app meant to help truck fleet owners manage their trucks, drivers, and jobs.',
        bullets: [
          'Wrote specifications document based on US Department of Transportation Federal Motor Carrier regulations on Electronic Logging Devices',
          'Based on this doc, designed MySQL database structure in MySQLWorkbench',
          'Built models, controllers, and views for app, and designed custom CMS in Laravel 5',
          'Programmed REST API endpoints to feed JSON data to Datatables.net and amcharts.js libraries',
          'Integrated app with Google Maps Timezone and Geocoding APIs',
        ],
      },
      {
        id: 2,
        slug: 'idc',
        title: 'IDC Energy',
        url:
          '<a href="https://jplew.github.io/idc" target="_blank">https://jplew.github.io/idc</a>',
        skills: ['Javascript', 'Angular 4'],
        images: [
          {
            id: 1,
            caption: 'IDC > Map Overview',
          },
          {
            id: 2,
            caption: 'IDC > Map Detail Sidenav flyout',
          },
          {
            id: 3,
            caption: 'IDC > Enhanced Search Results',
          },
          {
            id: 4,
            caption: 'IDC > List View using Angular Material Data-table',
          },
        ],
        blurb: 'Plant-monitoring app UI Prototype for global energy company',
        bullets: [
          'Developed a workable dashboard prototype, in both list and map views, based on static mockups',
          'Created map interface by integrating with Google Maps API',
          'Used DataTable component in Angular Material to produce plant list view',
          'Offered enhanced inline Search functionality using in-memory API',
        ],
      },
      {
        id: 3,
        slug: 'calculator',
        title: 'Distance Calculator',
        url:
          '<a href="https://node-distance-calculator.herokuapp.com" target="_blank">https://node-distance-calculator.herokuapp.com</a> <span class="divider">|</span> <a href="http://bit.ly/2mvXwLd" target="_blank">View Gist</a>',
        skills: ['Node.js', 'Javascript'],
        images: [
          {
            id: 1,
            caption: 'Listing of locations within 100km radius of coordinates',
          },
          {
            id: 2,
            caption: 'Listing of locations within 100km radius of coordinates',
          },
        ],
        blurb:
          'Vanilla Node.js app which parses geographical locations and calculates their distance from a particular point.',
        bullets: [
          'Wrote a Node.js/JavaScript program that reads json and outputs a sorted list of names and addresses.',
          'Coded without recourse to any 3rd-party libraries or frameworks',
          'Wrote function to calculate distance between two points using the Haversine formula',
        ],
      },
      {
        id: 4,
        slug: 'syncdb',
        title: 'SyncDB',
        url:
          '<a href="https://github.com/jplew/SyncDB" target="_blank">https://github.com/jplew/SyncDB</a>',
        skills: ['Shell', 'Bash', 'Unix'],
        images: [
          {
            id: 1,
            caption: 'SyncDB > Script in action. Pushing to remote server.',
          },
          {
            id: 2,
            caption: 'SyncDB > Bash scripting nuts and bolts.',
          },
        ],
        blurb:
          'Open-source bash script I created as a service to the Wordpress developer community.',
        bullets: [
          'Fully automates MySQL database migration for Wordpress sites from the command-line.',
          'Also handles routine tasks like backing up your database, syncing uploads directories, and keeping itself up-to-date.',
          'Refined script over time based on community feedback, and accepted pull requests',
          'Starred over 220 times on Github.',
        ],
      },
    ];
    return { projects };
  }
}
