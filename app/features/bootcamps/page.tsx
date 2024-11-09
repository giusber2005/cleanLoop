'use client'
import React, { useState } from 'react'
import { Button } from '../../components/home/modernButton'
import { Heart, Send, Trash2, Settings, Mail, Plus, Download } from 'lucide-react'
import Card from '../../components/home/card'

export default function partnersPage() {
  return (
    <div className="container mx-auto p-8">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Our partners
        </h1>

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
            imageSrc={imageSrc}
          />
        ))}
      </div>
    </div>
  )
}

const features = [
    {
      title: "Cleaning group center area",
      description: "Get a voucher for a discount pizza at Paulaner Stuben, go to clean the streets of this area",
      demo: <Button variant="default">
        <Plus className="mr-2 h-4 w-4" /> Join a group
    </Button>, 
      imagePosition: "left",
      large: true,
      small: false,
      imageSrc: "/pizzeria.jpg",
    },
    {
      title: "Cleaning group NOI tech park area",
      description: "Make this area greener and gain rewards, see possibilities in the Centrum area",
      demo: <Button variant="default">
        <Plus className="mr-2 h-4 w-4" /> Join a group
    </Button>,
      large: true,
      small: false,
      imagePosition: "right", 
      imageSrc: "/centrum.jpg",
    },
    {
      title: "Cleaning group Gebert-Deeg area",
      description: "Get a free trial of Oberalp, the best climbing gym in Bolzano, go and clean with your friends",
        demo: <Button variant="default">
        <Plus className="mr-2 h-4 w-4" /> Join a group
      </Button>,
      imagePosition: "left",
      large: true,
      small: false,
      imageSrc: "/climber.png",
    },
    {
      title: "Cleaning group San Maurizio area",
      description: "Clean the center, get a Sportler Card for sales in their shops",
      demo: <Button variant="default">
      <Plus className="mr-2 h-4 w-4" /> Join a group
    </Button>,
      imagePosition: "right",
      large: true,
      small: false,
      imageSrc: "/sportShop.png",
    },
    {
        title: "Cleaning group bakery area",
        description: "Make this area greener and get a discount of 10% on your next purchase at Panificio Lemayr",
        demo: <Button variant="default">
        <Plus className="mr-2 h-4 w-4" /> Join a group
      </Button>,
        imagePosition: "left",
        large: true,
        small: false,
        imageSrc: "/panetteria.jpg",
      },
      {
        title: "Cleaning group Virgolo area",
        description: "Clean the center, get a discount of 20% on your next purchase at Decathlon",
        demo: <Button variant="default">
        <Plus className="mr-2 h-4 w-4" /> Join a group
      </Button>,
        imagePosition: "right",
        large: true,
        small: false,
        imageSrc: "/decathlon.png",
      },  


  ];
  