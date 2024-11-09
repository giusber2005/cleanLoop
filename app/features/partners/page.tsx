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
          Partners page
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
      title: "Paulaner Stuben Pizza voucher",
      description: "Get a voucher for a free pizza at Paulaner Stuben, go to clean the streets of this area",
      demo: <Button variant="secondary">
        <Download className="mr-2 h-4 w-4" /> Create a team
      </Button>,
      imagePosition: "left",
      large: true,
      small: false,
      imageSrc: "/pizzeria.jpg",
    },
    {
      title: "Centrum rewards vouchers",
      description: "Make this area greener and gain rewards, see possibilities in the Centrum area",
      demo: <Button variant="secondary">
        <Download className="mr-2 h-4 w-4" /> Create a team
      </Button>,
      large: true,
      small: false,
      imagePosition: "right", 
      imageSrc: "/centrum.jpg",
    },
    {
      title: "Oberalp free trial",
      description: "Get a free trial of Oberalp, the best climbing gym in Bolzano, go and clean with your friends",
        demo: <Button variant="secondary">
        <Download className="mr-2 h-4 w-4" /> Create a team
      </Button>,
      imagePosition: "left",
      large: true,
      small: false,
      imageSrc: "/climber.png",
    },
    {
      title: "Sportler Card",
      description: "Clean the center, get a Sportler Card for sales in their shops",
      demo: <Button variant="secondary">
        <Download className="mr-2 h-4 w-4" /> Create a team
      </Button>,
      imagePosition: "right",
      large: true,
      small: false,
      imageSrc: "/sportShop.png",
    },
    {
        title: "Panificio Lemayr",
        description: "Make this area greener and get a discount of 10% on your next purchase at Panificio Lemayr",
        demo: <Button variant="secondary">
          <Download className="mr-2 h-4 w-4" /> Create a team
        </Button>,
        imagePosition: "left",
        large: true,
        small: false,
        imageSrc: "/panetteria.jpg",
      },
      {
        title: "Decathlon",
        description: "Clean the center, get a discount of 20% on your next purchase at Decathlon",
        demo: <Button variant="secondary">
          <Download className="mr-2 h-4 w-4" /> Create a team
        </Button>,
        imagePosition: "right",
        large: true,
        small: false,
        imageSrc: "/decathlon.png",
      },  


  ];
  