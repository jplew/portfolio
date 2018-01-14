import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      {
        id: 1,
        slug: 'intellitrucks',
        title: 'Intellitrucks.com',
        skills: [
          'PHP',
          'Laravel',
          'MySQL',
          'Javascript'
        ],
        images: [
          {
            id: 1,
            caption: 'Datatables.net chart'
          },
          {
            id: 2,
            caption: 'List view of data'
          },
          {
            id: 3,
            caption: 'Datatables.net chart'
          },
          {
            id: 4,
            caption: 'Datatables.net chart'
          },
          {
            id: 5,
            caption: 'Datatables.net chart'
          }
        ],
        blurb: 'Web app for logistics technology company.',
        bullets: [
          'Developed set of specs based on US Department of Transportation federal motor carrier regulations on Electronic Logging Devices',
          'Custom CMS development in Laravel',
          'MySQL database design',
          'Programmed REST API endpoints',
          'Created charts and tables using Datatables.net and amcharts.js',
          'Connected to Google Maps APIs'
        ]
      },
      {
        id: 2,
        direction: 'right',
        slug: 'superghost',
        title: 'SuperGhost',
        skills: [
          'Javascript',
          'Angular 5',
          'Express',
          'Node.js'
        ],
        images: [
          {
            id: 1,
            caption: 'Datatables.net chart'
          },
          {
            id: 2,
            caption: 'List view of data'
          },
          {
            id: 3,
            caption: 'Datatables.net chart'
          },
          {
            id: 4,
            caption: 'Datatables.net chart'
          },
          {
            id: 5,
            caption: 'Datatables.net chart'
          }
        ],
        blurb: 'Web app for logistics technology company.',
        bullets: [
          'Developed set of specs based on US Department of Transportation federal motor carrier regulations on Electronic Logging Devices',
          'Custom CMS development in Laravel',
          'MySQL database design',
          'Programmed REST API endpoints',
          'Created charts and tables using Datatables.net and amcharts.js',
          'Connected to Google Maps APIs'
        ]
      },
      {
        id: 3,
        slug: 'idc',
        title: 'IDC Energy',
        skills: [
          'Javascript',
          'Angular 4'
        ],
        images: [
          {
            id: 1,
            caption: 'Datatables.net chart'
          },
          {
            id: 2,
            caption: 'List view of data'
          },
          {
            id: 3,
            caption: 'Datatables.net chart'
          },
          {
            id: 4,
            caption: 'Datatables.net chart'
          },
          {
            id: 5,
            caption: 'Datatables.net chart'
          }
        ],
        blurb: 'Web app for logistics technology company.',
        bullets: [
          'Developed set of specs based on US Department of Transportation federal motor carrier regulations on Electronic Logging Devices',
          'Custom CMS development in Laravel',
          'MySQL database design',
          'Programmed REST API endpoints',
          'Created charts and tables using Datatables.net and amcharts.js',
          'Connected to Google Maps APIs'
        ]
      }
    ];
    return { projects };
  }
}
