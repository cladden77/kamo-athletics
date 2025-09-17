'use client';

import { urlFor } from '../../sanity/client';

interface HeroData {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  titleColor?: { hex?: string };
  subtitleColor?: { hex?: string };
  buttonColor?: { hex?: string };
}

interface HeroProps {
  data?: HeroData;
}

export default function Hero({ data }: HeroProps) {
  const callAndy = () => {
    window.location.href = 'tel:8167187374';
  };

  // Fallback values (original content)
  const title = data?.title || "CHANGE YOUR QUALITY OF LIFE,\nONE WORKOUT AT A TIME.";
  const subtitle = data?.subtitle || "Our passionate and knowledgeable coaching staff will strive to\nhelp you reach any goals, both inside and outside the gym";
  const buttonText = data?.buttonText || "CALL NOW";
  const backgroundImage = data?.backgroundImage?.asset 
    ? urlFor(data.backgroundImage.asset).url()
    : '/kamo-hero-gradient.jpg';
  const titleColor = data?.titleColor?.hex || '#ffffff';
  const subtitleColor = data?.subtitleColor?.hex || '#f2f2f2';
  const buttonColor = data?.buttonColor?.hex || '#0b3a86';

  return (
    <div 
      id="home"
      className="relative min-h-[900px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    > 
      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 max-w-[1100px]">
        <h1 
          className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold leading-[1.1] tracking-[-1px] uppercase mb-6 sm:mb-8"
          style={{ color: titleColor }}
        >
          {title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h1>
        
        <p 
          className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] mb-8 sm:mb-10 md:mb-12 max-w-[600px] mx-auto px-4"
          style={{ color: subtitleColor }}
        >
          {subtitle.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < subtitle.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
        
        <button 
          onClick={callAndy}
          className="text-white px-10 py-4 text-[13.6px] tracking-[1px] uppercase font-bold hover:opacity-80 transition-opacity cursor-pointer"
          style={{ backgroundColor: buttonColor }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
