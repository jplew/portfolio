import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
{
        id: 12,
        slug: 'greenflower',
        title: 'GreenFlower website',
        url:
          '<a href="https://lxp-cbgflower.vercel.app" rel="noopener noreferrer" target="_blank">https://lxp-cbgflower.vercel.app</a>',
        skills: [
          'React/Next.js',
          'Tailwind CSS',
          'Sanity CMS',
          'AWS Cognito',
          'DynamoDB',
        ],
        images: [
          {
            id: 1,
            caption: 'Green Flower > Homepage',
          },
          {
            id: 2,
            caption: 'Green Flower > LMS Video Player',
          },
          {
            id: 3,
            caption: 'Green Flower > Compliance page',
          },
          {
            id: 4,
            caption: 'Green Flower > Course selection',
          },
        ],
        blurb:
          'Frontend for top cannabis education company site Green Flower (green-flower.com). This iteration of the site was built from scratch based on Adobe XD mockups and stylesheets, using an extensible React component library.',
        bullets: [
          'performance enhanced by mix of SSR and static pages using NextJS incremental static regeneration',
          'all marketing copy stored in Sanity CMS for ease of editing by non-technical staff',
          'integration with Hubspot Forms API',
          'simple content animations using Framer Motion',
          'full-featured video player for course previews',
        ],
      },
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
          'Sample client/server app simulating an admin dashboard and showcasing CRUD operations on a MongoDB. Frontend is an Angular SPA, backend is a an Express server powered by Mongoose. Hosted on Firebase. Github links to source code available in the app header.',
        bullets: [
          'Uses RxJS 6 pipeable operators',
          'Layout with Angular Flex-Layout and Material',
          'Can filter results via search box or drop-down menu',
          'Can sort results alphabetically',
          'PUT and POST requests update the listing dynamically in real-time',
          'Data integrity ensured by both client-side form validation and server-side validation via Mongoose schema',
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
          'Open-source bash script with 230 stars on Github. Created as a service to the Wordpress developer community to streamline production deployments.',
        bullets: [
          'Fully automates MySQL database migration for Wordpress sites from the command-line.',
          'Also handles routine tasks like backing up your database, syncing uploads directories, and keeping itself up-to-date.',
          'Refined script over time based on community feedback, and accepted pull requests',
          'Starred over 220 times on Github.',
        ],
      },
      {
        id: 4,
        slug: 'nextkeycloak',
        title: 'Next Keycloak',
        url:
          '<a href="https://github.com/jplew/next-keycloak" target="_blank" rel="noopener noreferrer">https://github.com/jplew/next-keycloak</a>',
        skills: ['Typescript', 'Next.js', 'SSR', 'Keycloak'],
        images: [
          {
            id: 1,
            caption: 'Next-Keycloak > Logged in state',
          }
        ],
        blurb:
          'Open-source app illustrating OAuth 2.0 authentication and authorization with Next.js and open-source identity and access management library, Keycloak. Integrations already existed between React SPAs (create-react-app) and Keycloak via the react-keycloak package, but my library was the first to solve the challenge of server-side rendering for the Keycloak community.',
        bullets: [
          'work in my repo served as the basis for the @react-keycloak/ssr package',
          'writes auth token to cookies in order to persist state and trigger logged-in views on the server'
        ],
      },
      
    ];
    return { projects };
  }
}
