import Image from 'next/image';
import Link from 'next/link'

const ImageTextAndButton = (props) => {
    return (
        <div className="flex flex-col md:flex-row bg-slate-400 w-full md:h-[36rem] lg:h-[30rem] xl:h-[40rem] 2xl:h-[34rem]">
            <div className="relative md:w-1/2 h-60 md:h-full">
                <Image
                    src={ props.imgPath }
                    alt={ props.imgAltText }
                    loading="eager"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
            <div className="md:w-1/2 p-8">
                <h3 className="text-slate-100 uppercase text-3xl xl:text-5xl font-bold mb-6">{ props.heading }</h3>
                <p className="text-slate-100 xl:text-xl font-normal leading-relaxed xl:leading-loose mb-6">{ props.content }</p>
                <Link href={ props.buttonLink }>
                    <a className="transition ease-in-out duration-250 inline-block uppercase border border-slate-100 border-2 p-4 text-slate-100 font-medium
                    hover:bg-slate-100 hover:text-slate-700 hover:shadow-lg active:transition-none active:bg-slate-300 active:border-slate-300 active:shadow-none">{ props.buttonText }</a>
                </Link>
            </div>
        </div>
    )
}

export default ImageTextAndButton;