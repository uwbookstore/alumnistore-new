import hiRes1 from '../img/items/2079612-lg.png';
// import hiRes2 from '../img/items/2079612-A.png';
import thumb1 from '../img/items/2079612.png';
import thumb2 from '../img/items/2079612-A.png';

const Flexslider = () => {
  return (
    <div className='flexslider'>
      <ul className='slides merch__detail-slides'>
        <li id='thumbnail_1'>
          <img
            src={hiRes1}
            role='presentation'
            alt=''
            id='fullsize_1'
            className='merch__detail-img'
          />
        </li>
        {/* <li id='thumbnail_2'>
          <img
            src={hiRes2}
            role='presentation'
            alt=''
            id='fullsize_2'
            className='merch__detail-img'
          />
        </li> */}
      </ul>

      <ol className='flex-control-nav flex-control-thumbs'>
        <li>
          <img
            src={thumb1}
            className='flex-active'
            alt=''
            role='presentation'
          />
        </li>
        <li>
          <img src={thumb2} alt='' role='presentation' />
        </li>
      </ol>
    </div>
  );
};

export default Flexslider;
