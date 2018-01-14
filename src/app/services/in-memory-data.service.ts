import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      {
        id: 1,
        slug: 'intellitrucks',
        title: 'Intellitrucks.com',
        images: [
          {
            id: 1,
            caption: 'Datatables.net chart'
          },
          {
            id: 2,
            caption: 'Datatables.net chart'
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
        ]
      },
    ];
    return { projects };
  }
}
