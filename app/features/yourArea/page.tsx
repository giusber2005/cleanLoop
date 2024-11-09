'use client'
import { useState } from 'react'
import Map from '../../components/home/map/map'
import { places } from '../../components/home/map/constants'
import Card from '@/components/home/card'
import { Button } from '@/components/home/modernButton'
import { Send } from 'lucide-react'
import Image from 'next/image';
import OpenMap from '../../components/home/map/map'

export default function MapPage() {
const [selectedPlace, setSelectedPlace] = useState(null)

  return (
    <div className="container mx-auto p-4">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
         Your personal area
        </h1>
        <p
          className="mt-6 mb-12 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
            See the waste and recycling in your neighborhood
        </p>

      <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-120px)] mb-20">
        <div className="w-full md:w-1/2 h-full scale-90">
           <OpenMap />
        </div>
        <div className="w-full md:w-1/2 h-full">
            <div className="grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-6 xl:px-0">
            {features.map(({ title, description, demo, large, small, imagePosition, imageSrc }, index) => (
            <Card
                key={title}
                title={title}
                description={description}
                demo={demo}
                large={large}
                small={small}
                imagePosition={imagePosition}
                imageSrc={imageSrc}
            />
                ))}
            </div>        
        </div>
      </div>
    </div>
  )
}

const features = [
    {
      title: "Trash 1",
      description: "08/11/2024",
      demo: (
        <div className="relative w-full h-full">
          <Image
            src="/trash1.png"  // Add your image path here
            alt="Trash Demo"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      ),
      large: true,
      imagePosition: "left",
      small: true,
      imageSrc: "/cleaner1.png",
    },
    {
      title: "Trash 2",
      description: "08/11/2024",
      demo: (
        <div className="relative w-full h-full">
          <Image
            src="/trash2.png"  // Add your image path here
            alt="Trash Demo"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      ),
      imagePosition: "left", 
      imageSrc: "/cleaner2.png",
      large: true,
      small: true,
    },
    {
      title: "Recycling 1",
      description: "08/11/2024",
      demo: (
        <div className="relative w-full h-full">
          <Image
            src="/cleaning1.png"  // Add your image path here
            alt="Trash Demo"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      ),
      imagePosition: "right",
      large: true,
      small: true,
      imageSrc: "/cleaner2.png",
    },
    {
      title: "Recycling 2",
      description: "06/11/2024",
      demo:  (
        <div className="relative w-full h-full">
          <Image
            src="/cleaning2.png"  // Add your image path here
            alt="Trash Demo"
            fill
            className="object-contain p-4"
            priority
          />
        </div>
      ),
      imagePosition: "right",
      large: true,
      small: true,
      imageSrc: "/cleaner2.png",
    },  
      {
        title: "Trash 3",
        description: "09/11/2024",
        demo: (
          <div className="relative w-full h-full">
            <Image
              src="/trash3.png"  // Add your image path here
              alt="Trash Demo"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        ),
        imagePosition: "left",
        large: true,
        small: true,
        imageSrc: "/cleaner1.png",
      },  
      {
        title: "Recycling 3",
        description: "06/11/2024",
         demo: (
          <div className="relative w-full h-full">
            <Image
              src="/cleaning3.png"  // Add your image path here
              alt="Trash Demo"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        ),
        imagePosition: "right",
        large: true,
        small: true,
        imageSrc: "/cleaner2.png",
      },  
  ];