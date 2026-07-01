export type Publication = {
  title: string;
  venue: string;
  year: string;
  citations?: number;
  url: string;
};

export const publications: Publication[] = [
  {
    title: "Healthybroker: A Trustworthy Blockchain-Based Multi-Cloud Broker",
    venue: "Electronics, Vol. 8, No. 6",
    year: "2019",
    citations: 66,
    url: "https://scholar.google.com/citations?user=2M1TedQAAAAJ&hl=en",
  },
  {
    title: "Automatic Image Annotation Using Possibilistic Clustering Algorithm",
    venue: "International Journal of Fuzzy Logic and Intelligent Systems, Vol. 19, No. 4",
    year: "2019",
    citations: 6,
    url: "https://scholar.google.com/citations?user=2M1TedQAAAAJ&hl=en",
  },
  {
    title: "SFCS-Broker: Supporting Feedback Credibility Brokering Service",
    venue: "International Conference on P2P, Parallel, Grid, Cloud and Internet Computing",
    year: "2016",
    url: "https://scholar.google.com/citations?user=2M1TedQAAAAJ&hl=en",
  },
];

export const scholarUrl = "https://scholar.google.com/citations?user=2M1TedQAAAAJ&hl=en";
