import { ReactNode } from "react"
import ReactMarkdown from "react-markdown"
import Image from "next/image"

interface CardProps {
  title: string;
  description: string;
  demo: React.ReactNode;
  large?: boolean;
  small?: boolean;
  imagePosition?: string;
  className?: string;
  imageSrc?: string;
}

export default function Card({
  title,
  description,
  demo,
  large,
  small,
  imagePosition = "left",
  className = "",
  imageSrc = "",
}: CardProps) {
  return (
    <div
      className={`relative scale-95 col-span-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 ${
        large ? "md:col-span-2" : ""
      } ${small ? "h-72" : "h-96"} ${className}`}
    >
      <div className={`flex items-center justify-center ${small ? "h-40" : "h-60"}`}>
        {imagePosition === "left" && imageSrc && <ImagePlaceholder src={imageSrc} small={small} />}
        <div className={`${imageSrc ? 'w-2/3' : 'w-full'} h-full flex items-center justify-center ${imagePosition === "right" ? "order-first" : ""}`}>
          {demo}
        </div>
        {imagePosition === "right" && imageSrc && <ImagePlaceholder src={imageSrc} small={small} />}
      </div>
      <div className="mx-auto max-w-lg text-center">
        <h2 className={`bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display font-bold text-transparent [text-wrap:balance] ${
          small ? "text-lg md:text-xl" : "text-xl md:text-3xl md:font-normal"
        }`}>
          {title}
        </h2>
        <div className={`prose-sm mt-3 leading-normal text-gray-500 [text-wrap:balance] ${
          small ? "text-sm" : "md:prose"
        }`}>
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  {...props}
                  className="font-medium text-gray-800 underline transition-colors"
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  {...props}
                  // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                  inline="true"
                  className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-gray-800"
                />
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

function ImagePlaceholder({ src, small }: { src: string; small?: boolean }) {
  return (
    <div className="relative w-1/3 h-full overflow-hidden group">
      <Image
        src={src}
        alt="Placeholder Image"
        width={small ? 120 : 160}
        height={small ? 180 : 240}
        className="object-contain w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
        style={{ objectPosition: 'center' }}
      />
    </div>
  )
}
