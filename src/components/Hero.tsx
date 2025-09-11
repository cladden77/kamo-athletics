'use client';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div 
      id="home"
      className="relative min-h-[900px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url('/kamo-hero-gradient.jpg')`
      }}
    > 
      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 max-w-[1100px]">
        <h1 className="text-white text-[64px] font-bold leading-[70.4px] tracking-[-1px] uppercase mb-8">
          CHANGE YOUR QUALITY OF LIFE,<br />
          ONE WORKOUT AT A TIME.
        </h1>
        
        <p className="text-[#f2f2f2] text-[18px] leading-[28.8px] mb-12 max-w-[600px] mx-auto">
          Our passionate and knowledgeable coaching staff will strive to<br />
          help you reach any goals, both inside and outside the gym
        </p>
        
        <button 
          onClick={scrollToContact}
          className="bg-[#0b3a86] text-white px-10 py-4 text-[13.6px] tracking-[1px] uppercase font-bold hover:bg-[#0a2d6b] transition-colors cursor-pointer"
        >
          CALL NOW
        </button>
      </div>
    </div>
  );
}
