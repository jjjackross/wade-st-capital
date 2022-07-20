import Image from 'next/image';

const ServiceCard = (props) => {
    return (
        <div className="bg-slate-700 rounded-md shadow-md shadow-slate-700/60 w-full h-full max-w-full flex flex-col overflow-hidden
        transition-none md:transition md:ease-in-out md:delay-75 md:hover:-translate-y-1 md:hover:scale-105 md:hover:shadow-2xl md:duration-300">
            <div className="relative h-52 w-full">
                <Image 
                    className=""
                    src={ props.cardImgPath }
                    alt={ props.cardImgImgAltText }
                    loading="eager"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
                <div className={`relative flex justify-center items-center h-full bg-black bg-opacity-20 py-8 px-12`}>
                    <h3 className="text-white font-bold text-2xl lg:text-3xl text-center uppercase">{ props.cardTitle }</h3>
                </div>
            </div>

            <div className="p-6 lg:p-8">
                <p className="text-lg text-white leading-relaxed lg:leading-loose xl:text-xl xl:leading-loose">{ props.cardContent }</p>
            </div>
        </div>
    )
}

export default ServiceCard;