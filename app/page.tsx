import Card from "@/app/components/home/card";
import { DEPLOY_URL } from "@/app/utils/lib/constants";
import { Github, Twitter } from "@/app/components/shared/icons";
import WebVitals from "@/app/components/home/web-vitals";
import ComponentGrid from "@/app/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/app/utils/lib/utils";

export default async function Home() {
  const stars = 0;

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://twitter.com/steventey/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter  className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing cleanLoop
          </p>
        </a>
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
        {features.map(({ title, description, demo, large, imagePosition, imageSrc }, index) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
            large={large}
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
    demo: <div>Demo 0</div>,
    large: true,
    imagePosition: "left",
    imageSrc: "/cleaner1.png",
  },
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
    imagePosition: "right",
  },
  {
    title: "Report a trash",
    description: "Make your neighborhood clean again",
    demo: <div>Demo 1</div>,
    imagePosition: "left",
    imageSrc: "/cleaner2.png",
  },
  {
    title: "Report a cleaning",
    description: "Show others your work",
    demo: <div>Demo 2</div>,
    imagePosition: "right",
    imageSrc: "/cleaner3.png",
  },  
];
