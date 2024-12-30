interface MainType {
  h4: string;
  h2: string;
  p: string;
  button: string;
  image: string;
}

export const main: MainType[] = [
  {
    h4: "Featured Post",
    h2: "How AI will Change the Future",
    p: "The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction",
    image: "/images/main.png",
    button: "Read More",
  },
  {
    h4: "Development | 19 March 2023",
    h2: "How to make a Game look more attractive with New VR & AI Technology",
    p: "Google has been investing in AI for many years and bringing its benefits to individuals, businesses, and communities.",
    button: "Read More",
    image: "/images/1.png",
  },
];

interface AboutType {
  num: number;
  title: string;
  detail: string;
}

export const about: AboutType[] = [
  {
    num: 1,
    title: "Brainstorming",
    detail:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated",
  },
  {
    num: 2,
    title: "Analysing",
    detail:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.",
  },
];
