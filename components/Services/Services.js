import ServiceCard from './ServiceCard';

const Services = () => {
    return (
        <div className="w-full xl:px-16 md:py-4 lg:py-6 xl:py-10">
            <div className="bg-white flex flex-col justify-around px-8 py-12 gap-12
            md:flex-row md:px-8 md:py-14 md:gap-6
            lg:gap-12 xl:gap-20">
                <ServiceCard
                    cardTitle="Blue Chip NFT Experience"
                    cardContent="Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Massa placerat duis ultricies lacus sed turpis. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Nunc pulvinar sapien et ligula."
                    cardImgPath="/images/neon-ink-1.webp"
                    cardImgAltText="Neon Ink"
                />
                <ServiceCard
                    cardTitle="Versed in Web3"
                    cardContent="Consequat semper viverra nam libero justo laoreet sit amet. Varius quam quisque id diam vel quam elementum pulvinar. Amet consectetur adipiscing elit ut aliquam purus sit. Orci ac auctor augue mauris augue neque. Vestibulum mattis ullamcorper velit sed."
                    cardImgPath="/images/data-web-1.webp"
                    cardImgAltText="Colored Net"
                />
                <ServiceCard
                    cardTitle="Seasoned Crypto Traders"
                    cardContent="Aliquet risus feugiat in ante metus dictum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Praesent elementum facilisis leo vel fringilla est."
                    cardImgPath="/images/crypto-phones-1.webp"
                    cardImgAltText="Neon Ink"
                />
            </div>
        </div>
    )
}

export default Services;