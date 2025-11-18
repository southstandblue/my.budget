import hero1 from "/hero_1.jpg";

const Hero = () => {
  return (
    <div className="relative rounded-xl overflow-hidden m-2 md:mx-10 md:my-5">
      <img src={hero1} className="w-full max-h-[400px] object-cover" />
    </div>
  );
};
export default Hero;
