import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "ipl-auction-analysis",
    category: "Data Analysis",
    title: "IPL Auction Data Analysis",
    src: "/assets/projects-screenshots/ipl-auction/landing.png",
    screenshots: ["landing.png"],
    live: "https://ipl-data-explorer.vercel.app/",
    github: "https://github.com/ramdhote05/IPL-AUCTION-DATA-ANALYSIS",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            IPL Auction Data Analysis is a comprehensive exploratory data analysis project that dives deep into the Indian Premier League auction dataset. Using Python, Pandas, and Matplotlib, this project uncovers patterns, trends, and insights from IPL auction data.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Data cleaning and preprocessing of IPL auction dataset</li>
            <li>Feature engineering for better insights</li>
            <li>Aggregation of player statistics and performance metrics</li>
            <li>Visualization of team spending patterns</li>
            <li>Analysis of player base prices and auction trends</li>
            <li>Graphical representation of key metrics</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technologies Used</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li><strong>Python:</strong> Core programming language</li>
            <li><strong>Pandas:</strong> Data manipulation and analysis</li>
            <li><strong>Matplotlib:</strong> Data visualization</li>
            <li><strong>Jupyter Notebook:</strong> Interactive analysis environment</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Key Insights</TypographyH3>
          <p className="font-mono mb-2">
            This analysis provides valuable insights into IPL auction dynamics, including:
          </p>
          <ul className="list-disc ml-6 font-mono">
            <li>Team spending strategies and budget allocation</li>
            <li>Player valuation trends across different roles</li>
            <li>Performance metrics and player auction prices</li>
            <li>Historical trends in player selection patterns</li>
          </ul>

          <p className="font-mono mb-2 mt-8">
            Perfect for cricket analytics enthusiasts, data scientists, and IPL fans looking to understand the business and strategy behind the world&apos;s most valuable cricket league!
          </p>
        </div>
      );
    },
  },
  {
    id: "salary-deployment",
    category: "Machine Learning",
    title: "Salary Prediction Model Deployment",
    src: "/assets/projects-screenshots/salary-deployment/landing.png",
    screenshots: ["landing.png"],
    live: "https://salary-prediction-ai-orcin.vercel.app/",
    github: "https://github.com/ramdhote05/Salary-Deployment",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Salary Prediction Model Deployment is a machine learning project that builds and deploys a sophisticated salary prediction model. This project demonstrates the complete ML pipeline from model training to deployment, enabling accurate salary predictions based on relevant features.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Machine learning model for salary prediction</li>
            <li>Pre-trained model serialization (pickle format)</li>
            <li>Python-based Flask/FastAPI web application</li>
            <li>Easy-to-use API endpoints for predictions</li>
            <li>Environment management with requirements.txt</li>
            <li>Docker containerization for deployment</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technologies Used</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li><strong>Python:</strong> ML model development and backend</li>
            <li><strong>Flask/FastAPI:</strong> Web framework for API</li>
            <li><strong>Scikit-learn:</strong> Machine learning model training</li>
            <li><strong>Docker:</strong> Containerization for deployment</li>
            <li><strong>Pickle:</strong> Model serialization and persistence</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Project Structure</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li><strong>app.py:</strong> Main Flask/FastAPI application</li>
            <li><strong>best_salary_model.pkl:</strong> Pre-trained ML model</li>
            <li><strong>requirements.txt:</strong> Python dependencies</li>
            <li><strong>.devcontainer:</strong> Development environment configuration</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">How It Works</TypographyH3>
          <p className="font-mono mb-2">
            The application accepts input features and uses the trained machine learning model to predict salary values. The model has been optimized for accuracy and can handle various employee attributes to provide reliable salary predictions.
          </p>

          <p className="font-mono mb-2 mt-8">
            This project is ideal for HR professionals, recruiters, and compensation analysts looking to make data-driven salary decisions!
          </p>
        </div>
      );
    },
  },
];
export default projects;
