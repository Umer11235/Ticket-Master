import React from 'react';
import Image from 'next/image';


const InfoCard: React.FC<InfoCardProps> = ({ title, imageSrc, imageAlt, items }) => {
  return (
    <div className="w-full max-w-72 flex flex-col flex-wrap rounded-xl border-4">
      <h2 className="p-5 text-md md:text-md lg:text-md font-bold">{title}</h2>
      <div className="relative w-full mb-3">
        <Image src={imageSrc} alt={imageAlt} />
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-5">
        <ul >
          {items.map((item, index) => (
            <li key={index} className="text-xs md:text-base lg:text-xs">{item.label}</li>
          ))}
        </ul>
        <ul className="flex-1">
          {items.map((item, index) => (
            <li key={index} className="text-xs md:text-base lg:text-xs">{item.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoCard;
