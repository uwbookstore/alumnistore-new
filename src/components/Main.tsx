import { Hero, Featured } from '.';

const Main = () => {
  return (
    <div className='page_wrapper'>
      <Hero />
      <h3 className='tagline'>
        The official online retailer for UW–Madison alumni
      </h3>

      <Featured />
    </div>
  );
};
export default Main;
