export interface IData {
  sectionHeader: string;
  dataList: IFacility[];
}
export interface IFacility {
  id: number;
  image: string;
  title: string;
  description: string;
  date?: string;
}
export const Data: IData[] = [
  {
    sectionHeader: 'Our Facilities',

    dataList: [
      {
        id: 1,
        image:
          'https://sigma.jo/Content/images/projects/gallery/636802780632835550RACJ15.jpg',
        title: 'Motor Sport',
        description: 'The RACJ has the primary role of assisting motorists',
      },

      {
        id: 2,
        image:
          'https://sigma.jo/Content/images/projects/gallery/636802780632835550RACJ15.jpg',
        title: 'The Fitness Club',
        description: 'The RACJ Fitness Club was launched in January 2004.',
      },
    ],
  },

  {
    sectionHeader: 'News and Events',

    dataList: [
      {
        id: 1,
        image:
          'https://sigma.jo/Content/images/projects/gallery/636802780632835550RACJ15.jpg',
        title: 'Save Kids Life Initiative',
        description:
          'On the occasion of the International United Nation week on road safety',
        date: '06 Jun 2015',
      },

      {
        id: 2,
        image:
          'https://sigma.jo/Content/images/projects/gallery/636802780632835550RACJ15.jpg',
        title: 'Save kids Lives Declaration',
        description:
          'This Declaration is a call for action to mark UN Global Road Safety',
        date: '28 Apr 2015',
      },
    ],
  },
];
