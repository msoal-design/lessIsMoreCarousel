'use client'
import { useRef } from 'react';
import Image from "next/image";
import Link from 'next/link'



// Carousel Component

export function HorizontalCarousel({ sectionTitle, children, id }) {
  const containerRef = useRef(null);
  return (
    <div className="relative carouselStyles" id={id}>
      <h1 id="section-title" className="px-3 sm:px-5 md:px-12 xl:px-[0px] pb-6 font-bold text-xl tracking-[-0.6px] lg:text-2xl lg:tracking-[-1px] text-black">{sectionTitle}</h1>
      <div ref={containerRef} id="items-container" className="flex flex-row py-4 px-4 sm:px-8 md:px-12 xl:px-[0px] xl:pb-6 gap-4 xl:gap-6 overflow-x-auto overflow-y-hidden hide-scrollbar scroll-behavior scroll-ios" >
        {children}
      </div>
      <div id="leftArrow" className="hidden xl:flex absolute top-1/2 left-[-64px] bg-white px-4 py-3 rounded-full border border-[#F2F2F7] shadow-md cursor-pointer" onClick={() => { containerRef.current.scrollLeft -= 500; }} >
        <ChevronLeft styles="w-[12px]" />
      </div>
      <div id="rightArrow" className="hidden xl:flex absolute top-1/2 right-[-64px] bg-white px-4 py-3 rounded-full border border-[#F2F2F7] shadow-md cursor-pointer" onClick={() => { containerRef.current.scrollLeft += 500; }} >
        <ChevronRight styles="w-[12px]" />
      </div>
    </div>
  );
}



/// Arrows Icons

export function ChevronRight({ styles }){
	return(
		<svg class={styles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
	);
}


export function ChevronLeft({ styles }){
	return(
		<svg class={styles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
	);
}





//// Item Component

export function Item({ title, link = '/', src, alt = "alt" }){
	return(
		<Link href={link} className="flex flex-col flex-none items-start w-[250px] lg:w-[300px] h-[300px] lg:h-[350px] border border-[#E5E5EA] rounded-[16px] overflow-hidden xl:hover:shadow-md myanimation">
			<Image src={src} alt={alt} className="object-cover flex-1 self-stretch " />
			<h2 className="font-semibold text-base tracking-[-0.64px] lg:text-xl lg:tracking-[-0.8px] py-6 px-6">{title}</h2>
		</Link>
	);
}