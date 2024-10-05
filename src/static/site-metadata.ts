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
  siteTitle: 'Workout',
  siteUrl: '/',
  logo: '',
  description: 'My Workout',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Homepage',
      url: 'https://haiyankong.github.io/',
    },
    {
      name: 'Build Your Page',
      url: 'https://github.com/yihong0618/running_page',
    },
  ],
};

export default data;
