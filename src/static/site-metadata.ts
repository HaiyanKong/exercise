interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Exercise',
  siteUrl: '/',
  logo: '',
  description: 'My Exercise Data',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Build your page',
      url: 'https://github.com/HaiyanKong/exercise/blob/main/README.md',
    },
  ],
};

export default data;
