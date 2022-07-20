import ImageBanner from '../components/ImageBanner';
import Services from '../components/Services/Services';
import Statistics from '../components/Statistics/Statistics';
import ImageTextAndButton from '../components/ImageTextAndButton';
import ContactForm from '../components/ContactForm';

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
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum. Augue lacus viverra vitae congue. Facilisis volutpat est velit egestas. Faucibus vitae aliquet nec ullamcorper. Integer enim neque volutpat ac tincidunt vitae. Auctor augue mauris augue neque gravida in fermentum et. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Facilisi cras fermentum odio eu."
        buttonText="Meet the Team"
        buttonLink="/team"
      />
      <ContactForm
        formDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean et tortor at risus viverra. Ac felis donec et odio. Pharetra et ultrices neque ornare aenean."
      />
    </>
  )
}
