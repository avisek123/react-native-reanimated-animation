import {shuffle} from './utilies';

const DAFT_PUNK = 'Daft Punk';

export interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string;
}

export enum ScrollDirection {
  None,
  Up,
  Down,
}

export const SONGS: Song[] = shuffle([
  {
    id: 'one-more-time',
    title: 'One More Time',
    artist: DAFT_PUNK,
    cover: 'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
  },
  {
    id: 'digital-love',
    title: 'Digital Love',
    artist: DAFT_PUNK,
    cover: 'https://samplesongs.netlify.app/album-arts/bad-liar.jpg',
  },
  {
    id: 'nightvision',
    title: 'Nightvision',
    artist: DAFT_PUNK,
    cover: 'https://samplesongs.netlify.app/album-arts/faded.jpg',
  },
  {
    id: 'something-about-us',
    title: 'Something About Us',
    artist: DAFT_PUNK,
    cover: 'https://samplesongs.netlify.app/album-arts/hate-me.jpg',
  },
  {
    id: 'veridis-quo',
    title: 'Veridis Quo',
    artist: DAFT_PUNK,
    cover: 'https://samplesongs.netlify.app/album-arts/solo.jpg',
  },
  {
    id: 'make-love',
    title: 'Make Love',
    artist: DAFT_PUNK,
    cover: 'https://samplesongs.netlify.app/album-arts/without-me.jpg',
  },
  {
    id: 'television-rules-the-nation',
    title: 'Television Rules the Nation',
    artist: DAFT_PUNK,
    cover:
      'https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_1280.png',
  },
  {
    id: 'phoenix',
    title: 'Phoenix',
    artist: DAFT_PUNK,
    cover:
      'https://cdn.pixabay.com/photo/2018/12/21/20/17/instrument-3888684_1280.png',
  },
  {
    id: 'revolution-909',
    title: 'Revolution 909',
    artist: DAFT_PUNK,
    cover:
      'https://cdn.pixabay.com/photo/2017/01/11/10/25/headsets-1971383_1280.jpg',
  },
  {
    id: 'around-the-world',
    title: 'Around the World',
    artist: DAFT_PUNK,
    cover:
      'https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg',
  },
  {
    id: 'within',
    title: 'Within',
    artist: DAFT_PUNK,
    cover:
      'https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876_1280.jpg',
  },
  {
    id: 'touch',
    title: 'Touch (feat. Paul Williams)',
    artist: DAFT_PUNK,
    cover:
      'https://media.istockphoto.com/id/1179008276/photo/pretty-african-american-girl-in-a-hat-and-sweater-listening-to-music-on-a-mobile-phone-with.jpg?s=612x612&w=0&k=20&c=JTi_delC7MDoPcu33UdfoSjPXW4nYHEiozQJXkXVjJ8=',
  },
  {
    id: 'beyond',
    title: 'Beyond',
    artist: DAFT_PUNK,
    cover:
      'https://media.istockphoto.com/id/1391693314/vector/happy-woman-enjoying-her-music.jpg?s=612x612&w=0&k=20&c=Llq8pmOhVKNBxEBaPAMSnTiF3l0PIt4P4lh9INUeiAk=',
  },
  {
    id: 'motherboard',
    title: 'Motherboard',
    artist: DAFT_PUNK,
    cover:
      'https://media.istockphoto.com/id/685111998/photo/young-girl-dancing-to-the-music.jpg?s=612x612&w=0&k=20&c=XA8XG5Fyge1eR-69FeRbXwIj7mVgnhrTLDb9TJhxb24=',
  },
  {
    id: 'one-more-time-2',
    title: 'One More Time',
    artist: DAFT_PUNK,
    cover:
      'https://media.istockphoto.com/id/1319560552/photo/carefree-smiling-young-asian-woman-dancing-with-her-eyes-closed-while-listening-to-music-on.jpg?s=612x612&w=0&k=20&c=P-fnMsMiOE8y44FCFEWU7IHWdYIfO3KL8idVizMKh70=',
  },
  {
    id: 'digital-love-2',
    title: 'Digital Love',
    artist: DAFT_PUNK,
    cover:
      'https://media.istockphoto.com/id/1448790717/photo/headphones-black-woman-and-happy-dance-in-city-against-red-building-background-music-dancing.jpg?s=612x612&w=0&k=20&c=USl-9bW-NPdO9KeCrQVHNu8OPJan3w1dyVIHJs0k6kk=',
  },
  {
    id: 'nightvision-2',
    title: 'Nightvision',
    artist: DAFT_PUNK,
    cover:
      'https://cdn.pixabay.com/photo/2019/04/04/18/50/cassette-4103530_1280.jpg',
  },
  {
    id: 'something-about-us-2',
    title: 'Something About Us',
    artist: DAFT_PUNK,
    cover:
      'https://media.istockphoto.com/id/1338616288/vector/girl-listening-music-to-relax-using-earphone-to-listen-relaxing-music-with-closed-eyes.jpg?s=612x612&w=0&k=20&c=4mwxcOaiHldwYY0Cn_aMKrtoQ3ELQabTZQdM2M99MxA=',
  },
  {
    id: 'veridis-quo-2',
    title: 'Veridis Quo',
    artist: DAFT_PUNK,
    cover:
      'https://media.istockphoto.com/id/1488540963/photo/beautiful-emotional-woman-listening-to-music.jpg?s=612x612&w=0&k=20&c=3_CDzH5AJfIN09WD3wFqFCyG1cvVIBn-CcLTHldSShI=',
  },
  {
    id: 'make-love-2',
    title: 'Make Love',
    artist: DAFT_PUNK,
    cover:
      'https://media.istockphoto.com/id/901211936/photo/woman-relaxing-and-listening-to-music.jpg?s=612x612&w=0&k=20&c=xRFe_smYr-8Qv5V4dswNh5rs76rYPx3IXqb7dvE7lxc=',
  },
  {
    id: 'television-rules-the-nation-2',
    title: 'Television Rules the Nation',
    artist: DAFT_PUNK,
    cover:
      'https://media.istockphoto.com/id/1256944025/photo/trendy-girl-singing-favorite-song-out-loud-in-phone-as-mic-wearing-wireless-headphones.jpg?s=612x612&w=0&k=20&c=GIzdjh2QPC7y4_CcFZK-CbwLVFFQPpHpRb3LEnQo-nU=',
  },
]);
