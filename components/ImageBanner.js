import Image from 'next/image';
import Link from 'next/link'

const ImageBanner = (props) => {
    return (
        <div className="block w-full">
            <div className="relative h-screen">
                <Image
                    src={ props.imgPath }
                    alt={ props.imgAltText }
                    loading="eager"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                />

                <div className="relative bg-black w-full h-screen bg-opacity-30">
                    <div className="pt-32 md:pt-40 lg:pt-64">
                        <div className="px-6 md:px-20 lg:px-40">
                            <h1 className="text-slate-50 text-4xl sm:text-5xl md:text-6xl font-bold mb-8">{ props.heading }</h1>
                            <p className="text-slate-50 text-2xl mb-10 max-w-3xl">{ props.content }</p>
                            <Link href={ props.buttonLink }>
                                <a className="transition ease-in-out duration-250 border border-slate-50 inline-block text-slate-50 px-4 py-3 text-lg font-medium bg-slate-700 bg-opacity-20
                            hover:bg-slate-50 hover:text-slate-700 hover:shadow-lg
                            active:transition-none active:bg-slate-700 active:border-slate-700 active:text-slate-50 active:shadow-none">{ props.buttonText }</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageBanner;