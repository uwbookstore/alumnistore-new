const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__image'>
        <picture>
          <source
            media='(min-width: 48em)'
            srcSet='https://i.univbkstr.com/uwalumnistore/images/home/homepage_hero.jpg'
            width='900'
            height='500'
          />
          <img
            src='https://i.univbkstr.com/uwalumnistore/images/home/homepage_hero-mobile.jpg'
            width='640'
            height='447'
            alt=''
            role='presentation'
          />
        </picture>
      </div>
      <div className='hero__body home'>
        <h2 className='hero__body--header'>
          <span>Frosty</span>
          <br />
          <span>Badger Fashions</span>
        </h2>
      </div>
    </div>
  );
};
export default Hero;
