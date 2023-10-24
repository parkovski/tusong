interface Song {
  name: string;
  page: string;
}

const songs: Song[] = [
  {
    name: 'It\'s a Good Day',
    page: 'its-a-good-day',
  },
  {
    name: 'Jambalaya',
    page: 'jambalaya',
  },
  {
    name: 'I Believe in Music',
    page: 'i-believe-in-music',
  },
  {
    name: 'We\'re Gonna Sing',
    page: 'were-gonna-sing',
  },
  {
    name: 'This Little Light of Mine',
    page: 'this-little-light-of-mine',
  },
  {
    name: 'Hey Good Lookin\'',
    page: 'hey-good-lookin',
  },
  {
    name: 'Three Little Birds',
    page: 'three-little-birds',
  },
  {
    name: 'Side By Side',
    page: 'side-by-side',
  },
  {
    name: 'Love Potion Number Nine',
    page: 'love-potion-number-nine',
  },
  {
    name: 'L-O-V-E',
    page: 'l-o-v-e',
  },
  {
    name: 'Don\'t Fence Me In',
    page: 'dont-fence-me-in',
  },
  {
    name: 'Stand By Me',
    page: 'stand-by-me',
  },
  {
    name: 'Every Little Cell',
    page: 'every-little-cell',
  },
  {
    name: 'I Walk the Line',
    page: 'i-walk-the-line',
  },
  {
    name: 'This Land Is Your Land',
    page: 'this-land-is-your-land',
  },
  {
    name: 'Don\'t Worry Be Happy',
    page: 'dont-worry-be-happy',
  },
  {
    name: 'Little Bit of Love',
    page: 'little-bit-of-love',
  },
  {
    name: 'On the Sunny Side of the Street',
    page: 'on-the-sunny-side-of-the-street',
  },
  {
    name: 'Sugar-Town',
    page: 'sugar-town',
  },
  {
    name: 'Put a Little Love in Your Heart',
    page: 'put-a-little-love-in-your-heart',
  },
];

export function load() {
  return { songs };
}
