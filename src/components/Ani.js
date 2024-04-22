import React, { useRef, useEffect } from 'react';

const cardsData = [
  { id: 1, logo: 'https://images.unsplash.com/photo-1594476664296-8c552053aef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8fDA%3D', title: 'Elegant Purple Flower' },
  { id: 2, logo: 'https://images.unsplash.com/photo-1594476664296-8c552053aef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8fDA%3D', title: 'Majestic Mountain Sunset' },
  { id: 3, logo: 'https://images.unsplash.com/photo-1594476664296-8c552053aef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8fDA%3D', title: 'Vibrant Coastal Landscape' },
  { id: 4, logo: 'https://images.unsplash.com/photo-1594476664296-8c552053aef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8fDA%3D', title: 'Soothing Rainy Day' },
  { id: 5, logo: 'https://images.unsplash.com/photo-1594476664296-8c552053aef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8fDA%3D', title: 'Peaceful Desert Oasis' },
  { id: 6, logo: 'https://images.unsplash.com/photo-1594476664296-8c552053aef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8fDA%3D', title: 'Enchanting Forest Retreat' },
  { id: 7, logo: 'https://images.unsplash.com/photo-1594476664296-8c552053aef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8fDA%3D', title: 'Sunny Countryside Meadow' },
  { id: 8, logo: 'https://images.unsplash.com/photo-1594476664296-8c552053aef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8fDA%3D', title: 'Tranquil Ocean Horizon' },
  { id: 9, logo: 'https://images.unsplash.com/photo-1594476664296-8c552053aef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8fDA%3D', title: 'Charming Rural Farmstead' },
  { id: 10, logo: 'https://images.unsplash.com/photo-1594476664296-8c552053aef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MSUzQTF8ZW58MHx8MHx8fDA%3D', title: 'Serene Lakeside Retreat' },
];

const Card = ({ logo, title }) => (
  <div className="card flex items-center w-64 h-20 mx-4 p-4">
    <img className="h-10 w-10 rounded-full mr-4" src={logo} alt="Logo" />
    <h1 className="text-lg font-semibold">{title}</h1>
  </div>
);

const Ani = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;

    const scroll = () => {
      scrollContainer.scrollLeft += 2; // Adjust scroll speed here

      const firstCard = scrollContainer.querySelector('.card');
      const lastCard = scrollContainer.querySelector('.card:last-child');

      if (scrollContainer.scrollLeft > lastCard.offsetLeft + lastCard.offsetWidth) {
        const clone = firstCard.cloneNode(true);
        scrollContainer.appendChild(clone);
        scrollContainer.removeChild(firstCard);
        scrollContainer.scrollLeft -= clone.offsetWidth; // Move scroll position back to mimic infinite scrolling
      }
    };

    const scrollInterval = setInterval(scroll, 20); // Adjust scroll interval here

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="scroll-container overflow-x-auto whitespace-nowrap h-20 "
      style={{
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
        "display": "flex",
        "boxShadow": "0px 9px 30px rgba(255, 149, 5, 0.3)" // Fixed syntax here
      }}
    >
      {cardsData.map((card) => (
        <Card key={card.id} logo={card.logo} title={card.title} />
      ))}
    </div>

  );
};

export default Ani;
