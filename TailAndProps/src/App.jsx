import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./compunent/card";

function App() {
  return (
    <>
    <h1 className="bg-red-400 mb-4">Tailwind Test</h1>
    <Card 
    userName="Hammad Khan"
    btnText="Visite Me"
    bio="Hi I am Hammad Khan, And I have been Learning Web development for the last six month."
    bgImg="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/347604119_1231400927551391_4561789992372589178_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S5mT2FdeIy4AX_tquFF&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfCzC-bM4o3EABl63FHkbcLdv6x8jsvFIhnclO_nNR-bTQ&oe=655CD789"
    />
    <Card 
    userName="Noor-e-Nazar" 
    btnText="Come Here" 
    bio="Hi I am Noor-e-Nazar, And I have been Learning Web development for the last six month."
    bgImg="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/402347908_1293993531292130_2608181965500473870_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=V9l5xVeCm-oAX_XKq8U&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfDGXBjZnAIQ5_bBL-cPB5GxG8yWYYa38FPltXaRoRHWqA&oe=655D41F5"
    />

    
    </>
  )
}

export default App
