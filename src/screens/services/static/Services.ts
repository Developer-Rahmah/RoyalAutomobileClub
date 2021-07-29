export interface IServices {
  id: number;
  image: string;
  title: string;
}

export const Services: IServices[] = [
  {
    id: 1,
    image: require('../../../../assets/images/halls.png'),
    title: 'Halls Reservation',
  },
  {
    id: 2,
    image: require('../../../../assets/images/playground.png'),
    title: 'Playground Reservation',
  },
  {
    id: 3,
    image: require('../../../../assets/images/courses.png'),
    title: 'Courses Reservation',
  },
  {
    id: 4,
    image: require('../../../../assets/images/events.png'),
    title: 'Events Reservation',
  },
];
