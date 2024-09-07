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
  siteTitle: 'Activity Tracker',
  siteUrl: '/',
  logo: '',
  description: 'My Activity Tracker',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Homepage',
      url: 'https://haiyankong.github.io/',
    },
    {
      name: 'Build Your Tracker',
      url: 'https://github.com/yihong0618/running_page',
    },
  ],
};

export default data;
