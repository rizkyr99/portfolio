export type Rotation = {
  artist: string;
  album: string;
  year: number;
};

export type GearItem = {
  name: string;
  note?: string;
};

export const rotation: Rotation[] = [
  { artist: 'Radiohead', album: 'OK Computer', year: 1997 },
  { artist: 'My Chemical Romance', album: 'The Black Parade', year: 2006 },
  { artist: 'Avenged Sevenfold', album: 'Avenged Sevenfold', year: 2007 },
  { artist: 'Blink-182', album: 'Enema of the State', year: 1999 },
];

export const gear: GearItem[] = [
  { name: 'Squier Debut Telecaster', note: 'butterscotch blonde, maple neck' },
  { name: 'M-Track M-Audio Duo HD', note: '2-channel USB audio interface' },
  { name: 'Audio Technica M40X', note: 'closed-back studio headphones' },
  { name: 'Edifier MR4', note: 'nearfield studio monitors' },
];

export const spotifyEmbed: string | null =
  'https://open.spotify.com/embed/artist/7FBcuc1gsnv6Y1nwFtNRCb?utm_source=generator&theme=0';
