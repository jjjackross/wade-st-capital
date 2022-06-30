import Image from 'next/image';
import BackgroundImage from '../src/img/city-skyscrapers-1.webp';

const ImageBanner = () => {
    return (
        <div className="block w-full">
            <div className="relative h-screen">
                <Image 
                    className=""
                    src={ BackgroundImage }
                    alt="City Skyscrapers"
                    loading="eager"
                    placeholder="blur"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                />

                <div className="relative bg-black w-full h-screen bg-opacity-30">
                    <div className="px-8 pt-40 md:p-0 md:pt-80 pt-1/2 max-w-5xl mx-auto">
                        <h1 className="text-slate-50 text-5xl font-bold mb-6">Heading Goes Here</h1>
                        <p className="text-slate-50 text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Suspendisse interdum consectetur libero id faucibus.</p>
                        <a href="/" className="transition ease-in-out duration-250 border border-slate-50 text-slate-50 px-4 py-3 text-lg font-medium bg-slate-700 bg-opacity-20
                        hover:bg-slate-50 hover:text-slate-700
                        active:transition-none active:bg-slate-700 active:border-slate-700 active:text-slate-50">View Page</a>
                    </div>\
                </div>
            </div>
        </div>
    )
}

export default ImageBanner;