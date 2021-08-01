import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Movies-App',
    desc:
      'An application to find  all movies in it, and show the overviews and ratings of all movies.',
    img: UTrackerImg,
    url:'Github Link:- https://javed-tech.github.io/HollywoodMovies-App/',
  },
  {
    id: uuidv4(),
    name: 'Learning-website',
    desc:
      'A website provides different types of courses to teach the students for bright future .',
    img: GreenCtgImg,
    url:'Github Link:- https://javed-tech.github.io/Animated-app/',
  },
  {
    id: uuidv4(),
    name: 'Porfolio ',
    desc:
      'In this website mentioned all information about myself and my projects and education. ',
    img: CoinTrackerImg,
    url:'',

  },
  
];

export default projects;
