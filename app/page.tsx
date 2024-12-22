import Card from "@/app/components/home/card";
import { Github, Twitter } from "@/app/components/shared/icons";
import WebVitals from "@/app/components/home/web-vitals";
import { nFormatter } from "@/app/utils/lib/utils";
import Link from 'next/link';
import { Button } from '@/app/components/home/modernButton'
import { Heart, Send } from 'lucide-react'
import { places } from "./components/home/map/constants";
import Map from "@/app/components/home/map/map";

export default async function Home() {
  const stars = 0;

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <div className="flex justify-center">
          <Link href="/features/presentation">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600">
              Introducing cleanLoop
            </Button>
          </Link>
        </div>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Be part of the solution, not the pollution
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Play, pick up, win!
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/giusber2005/project-name"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              <span className="font-semibold">{nFormatter(stars)}</span>
            </p>
          </a>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-6 xl:px-0">
        {features.map(({ title, description, demo, large, small, imagePosition, imageSrc }, index) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
            large={large}
            small={small}
            imagePosition={imagePosition}
            className={`${
              index >= features.length - 2 
                ? "md:col-span-2 md:col-start-2 last:md:col-start-4" 
                : "md:col-span-3"
            }`}
            imageSrc={imageSrc}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Visualize",
    description: "See the waste and recycling in your neighborhood",
    demo: <div className="w-full h-full mx-[-15px] opacity-75 scale-90">
      <Link href="/features/yourArea" className="cursor-pointer transition-transform hover:scale-105">
      <Map 
          places={places} 
          interactive={false}
        />
      </Link> 
    </div>,
    large: true,
    small: false,
    imagePosition: "left",
    imageSrc: "/cleaner1.png",
  },
  {
    title: "Double rewards!",
    description: "Make your city greener and gain benefits, see possibilities in the Partners area",
    demo: (
      <div className="flex flex-col space-y-2">
        <WebVitals />
        <br />
        <div>
          <Link href="/features/partners">
            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600">
              <Heart className="mr-2 h-4 w-4" /> See our Partners 
            </Button>
          </Link>
        </div>
      </div>
    ),
    small: false,
    imagePosition: "right", 
  },
  {
    title: "Report a trash",
    description: "Make your neighborhood clean again",
    demo: <Button 
      variant="red" 
      size="lg"
    >
      <Send className="mr-2 h-4 w-4" /> Send your report
    </Button>,
    imagePosition: "left",
    small: false,
    imageSrc: "/cleaner2.png",
  },
  {
    title: "Report a cleaning",
    description: "Show others your work",
    demo:  <Button 
      className="bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600" 
      size="lg"
    >
      <Send className="mr-2 h-4 w-4" /> Send your report
    </Button>,
    imagePosition: "right",
    small: false,
    imageSrc: "/cleaner3.png",
  },  
];
