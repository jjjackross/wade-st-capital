import Image from 'next/image';
import Link from 'next/link'

const ImageTextAndButton = (props) => {
    return (
        <div className="flex flex-col md:flex-row bg-slate-400 w-full h-96 lg:h-[36rem]">
            <div className="relative w-1/2 h-full p-12">
                <Image 
                    className=""
                    src={ props.imgPath }
                    alt={ props.imgAltText }
                    loading="eager"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
            <div className="w-1/2 h-full p-12">
                <h3 className="text-slate-100 uppercase text-5xl font-bold mb-6">{ props.heading }</h3>
                <p className="text-slate-100 text-xl font-normal leading-loose mb-6">{ props.content }</p>
                <Link href={ props.buttonLink }>
                    <a className="inline-block uppercase border border-slate-100 border-2 p-4 text-slate-100 font-medium
                    hover:bg-slate-100 hover:text-slate-700 active:bg-slate-300 active:border-slate-300">{ props.buttonText }</a>
                </Link>
            </div>
        </div>
    )
}

export default ImageTextAndButton;