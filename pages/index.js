import ImageBanner from '../components/ImageBanner';
import Services from '../components/Services/Services';
import Statistics from '../components/Statistics/Statistics';
import ImageTextAndButton from '../components/ImageTextAndButton';

export default function Home() {
  return (
    <>
      <ImageBanner 
        imgPath="/images/city-skyscrapers-1.webp"
        imgAltText="Skyscrapers"
        heading="Modern World. Modern Minds."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna neque viverra justo nec ultrices."
        buttonText="Why Wade"
        buttonLink="/why-wade"
      />
      <Statistics />
      <Services />
      <ImageTextAndButton
        imgPath="/images/the-team-1.webp"
        imgAltText="Picture of the Team"
        heading="The Team Behind the Dream"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum. Augue lacus viverra vitae congue. Facilisis volutpat est velit egestas. Faucibus vitae aliquet nec ullamcorper. Integer enim neque volutpat ac tincidunt vitae. Auctor augue mauris augue neque gravida in fermentum et. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Facilisi cras fermentum odio eu. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae."
        buttonText="Meet the Team"
        buttonLink="/team"
      />
    </>
  )
}
