import { Button, Flexslider } from '../components';

const sizes = [
  {
    size: 'Small',
    display: 'S',
  },
  {
    size: 'Medium',
    display: 'M',
  },
  {
    size: 'Large',
    display: 'L',
  },
  {
    size: 'X-Large',
    display: 'XL',
  },
  {
    size: 'XX-Large',
    display: 'XXL',
  },
];

const Merchdetail = () => {
  return (
    <div id='ContainDiv' className='contain container clear'>
      <div id='merch-main' className='merch'>
        <div className='merch__detail'>
          <div id='merch-imgs' className='merch__detail-images'>
            <Flexslider />
          </div>

          <div id='merch-info' className='merch__detail-info'>
            <h2 className='merch__detail-title'>
              Comfort Wash Wisconsin Badgers T-Shirt (Gray)
            </h2>

            <div id='priceBlock' className='merch__detail-price'>
              <span className='original'>$34.99</span>
              <span className='sale'>$20.00</span>
            </div>

            <div id='description-block' className='merch__detail-description'>
              <h3 className='merch__detail-title-small'>The Details</h3>A
              Wisconsin Badgers shirt with a one-of-a-kind vintage look!
              <ul>
                <li>
                  Detailed with a badger on the left chest and "Wisconsin Badger
                  Nation" with other Wisconsin graphics on the back
                </li>
                <li>Ribbed set-in collar</li>
                <li>Classic fit t-shirt</li>
                <li>100% Cotton</li>
                <li>Imported</li>
              </ul>
              <div className='merch__detail-sku'>
                <strong>Item:</strong> 2079612
              </div>
            </div>

            <div id='sizes' className='merch__detail-size'>
              <p
                className='merchDisclaimerError red displayn'
                role='alert'
                data-disclaimererror='1904865'>
                Please check the disclaimer checkbox to add this item to the
                cart.<i className='close-p fa fa-times'></i>
              </p>
              <p
                className='merchSelectError red displayn'
                role='alert'
                data-selecterror='1904865'>
                Please select option for Lands' End Crewneck Sweatshirt -
                Journalism (Gray)&nbsp;.<i className='close-p fa fa-times'></i>
              </p>
              <label className='merch__detail-size-label'>Size |</label>
              <a
                href='https://i.univbkstr.com/sizeChart/landsEnd/'
                className='merch__detail-size-link gtmSizeTrack cboxElement'
                title="Lands' End Size Guide">
                Size Guide
              </a>
              <div className='merch__detail-size-picker'>
                {sizes.map((item) => {
                  const { size, display } = item;
                  return (
                    <Button
                      key={size}
                      className='btn btn-default sizeOption typeCodeOption'
                      data-size={size}>
                      <span className='sizeName'>{display}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className='merch__detail-add'>
              <div className='merch__detail-qty'>
                <label htmlFor='merchQTY'>Quantity: </label>
                <input
                  type='number'
                  id='merchQTY'
                  data-qtyid='1890495'
                  className='form-control merchDetailQTY QTY1 max'
                  defaultValue='1'
                  maxLength={3}
                  min='1'
                  max='999'
                  aria-label='Quantity'
                />
              </div>
              <div className='merch__detail-add-btn'>
                <a
                  href='/'
                  role='button'
                  className='addToCartTypes btn btn-primary'
                  data-name='Comfort Wash Wisconsin Badgers T-Shirt (Gray)'
                  data-id='1890495'
                  data-istypeless='False'
                  data-regularprice='34.99'
                  data-isloyalty='False'
                  data-formid='-1'
                  data-isonsale='True'
                  data-egiftcard='False'
                  data-nonmerch='False'
                  data-classid='0'
                  data-csid='0'
                  data-storeid='294'
                  data-pricepoint='false'
                  data-disclaimer='False'
                  data-reload='False'>
                  Add To Cart
                </a>
                <p className='addedToCart displayn' data-addedtocart='1890495'>
                  <span className='glyphicon glyphicon-ok Gift_Checkmark faa-shake animated Checkmark_Color padding0'></span>{' '}
                  This item has been added to your Cart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className='heading__line-center' id='tabs-header'>
        Additional Information
      </h2>

      <div className='tabs'>
        <ul className='tabs__nav'>
          <li className='tabs__item'>
            <a href='#returns' className='tabs__link tabs__link-active'>
              <i className='fa fa-exchange' aria-hidden='true'></i> Returns
              &amp; Exchanges
            </a>
          </li>
          <li className='tabs__item'>
            <a href='#shipping' className='tabs__link'>
              <i className='fa fa-truck' aria-hidden='true'></i> Shipping &amp;
              Handling
            </a>
          </li>
        </ul>
        <div id='tabs__container' className='tabs__container group'>
          <div id='returns'>
            <h2 className='tabs__header'>Returns &amp; Exchanges</h2>
            <br />
            <div className='row'>
              <div className='col-md-6'>
                <h2 className='tabs__header'>
                  Non-Tech Returns &amp; Exchanges
                </h2>
                <p>
                  If you are not completely satisfied with any product, we will
                  gladly replace it or refund the purchase price of the item. We
                  accept returns on orders within 30 days of delivery.
                  <br />
                  Please do the following:
                </p>
                <ol>
                  <li>
                    Items must be in new condition w/original packaging &amp;
                    accessories.
                  </li>
                  <li>
                    Circle the item(s) on the packing list and note whether you
                    want an EXCHANGE or CREDIT.
                  </li>
                  <li>
                    If an exchange, please make note as to what Size and/or
                    Color you want.
                  </li>
                </ol>
              </div>
              <div className='col-md-6'>
                <h2 className='tabs__header'>Tech Return Policy</h2>
                <p>
                  Tech items may be returned within 15 days, with receipt and in
                  new condition, complete with all packaging and pieces.
                  Unopened product may be refunded in full and opened product
                  will be subject to a 15% restocking fee, with the following
                  exceptions:
                </p>
                <ol>
                  <li>
                    Open Batteries, graphing calculators, in-ear headphones,
                    ink/toner, printers, and storage devices are not returnable.
                  </li>
                  <li>
                    Special Order and sale items are generally not returnable-
                    ask for details before purchasing please.
                  </li>
                  <li>
                    Defective items may require warranty processing or may be
                    exchanged for the same item after verified defective, per
                    manufacturer and store policies.
                  </li>
                </ol>
              </div>
            </div>
            <br />
            <p>
              Purchases may be returned to any of our stores with the packing
              list or send returns to:
            </p>
            <blockquote>
              The University Book Store
              <br />
              ATTN: Online Sales Returns Department
              <br />
              4509 West Beltline Hwy
              <br />
              Madison, WI 53711
            </blockquote>
            <p>
              Credit card purchases will be credited to the charge card used for
              the initial purchase. If the purchase was made with a personal
              check, we will issue a check.
            </p>
          </div>
          <div id='shipping' style={{ display: 'none' }}>
            <h2 className='tabs__header'>Shipping &amp; Handling</h2>
            <div className='text-center'>
              <img
                src='https://i.univbkstr.com/images/catalog/usps.png'
                alt='USPS Logo'
              />
              <img
                src='https://i.univbkstr.com/images/catalog/ups.png'
                alt='UPS Logo'
              />
            </div>
            <p>
              <strong>Methods for shipping are:</strong>
            </p>
            <table className='table table-striped'>
              <tbody>
                <tr>
                  <td>Ground Shipping (5-7 days)</td>
                  <td>$7.00 + $0.50 for each item</td>
                </tr>
                <tr>
                  <td>2nd Day Air</td>
                  <td>$21.00 + $1.00 for each item</td>
                </tr>
                <tr>
                  <td>Next Day Air</td>
                  <td>$45.00 + $2.00 for each item</td>
                </tr>
              </tbody>
            </table>
            <p>
              Order processing time is 5-7 business days (for ground shipping)
              or 1-2 business days (for expedited and pick up at store orders).
            </p>
            <p>
              <strong>Methods for shipping Gift Cards ONLY are:</strong>
            </p>
            <table className='table table-striped'>
              <tbody>
                <tr>
                  <td>Gift Card (Ground)</td>
                  <td>$3.50</td>
                </tr>
                <tr>
                  <td>Gift Card (2nd Day Air)</td>
                  <td>$20.00</td>
                </tr>
                <tr>
                  <td>Gift Card (Next Day Air)</td>
                  <td>$30.00</td>
                </tr>
              </tbody>
            </table>
            <p>
              From the Delivery Methods section select your shipping method and
              then click "Continue".
            </p>
            <p>
              Handling charges are applied to products that have special
              shipping requirements. Items that require handling charges are
              noted as such in the description field of that item.
            </p>
            <p>
              Out of country orders are usually sent USPS International Priority
              Mail and will arrive in 6-10 business days. These orders are not
              shipped or charged until we can weigh the order and check with
              USPS for options / prices. We will then e-mail that information to
              the customer for approval.
            </p>
            <p>
              Items are shipped Monday through Friday between the hours of 8 AM
              and 3 PM.
            </p>
            <p>
              We offer the option to "Pick Up At Store" at the following
              locations:
              <br />
              Library Mall (711 State Street)
              <br />
              Health Sciences Learning Center (750 N. Highland Ave)
              <br />
              Hilldale Mall (454 N. Midvale Blvd)
              <br />
              Please allow for our normal processing time of 3 – 4 business
              days. You will receive notification once the order has been
              delivered to the store of your choice.
            </p>
            <p>
              We are happy to work with customers who have particular shipping
              needs. Please feel free to{' '}
              <a href='https://www.uwalumnistore.com/Contact'>email</a> us, or
              call us toll free at 800-993-2665 ext. 1848.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Merchdetail;
