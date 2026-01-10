import { Button } from '../components';

const Merchdetail = () => {
  return (
    <div id='ContainDiv' className='contain container clear'>
      <div className='row'>
        <div
          id='contentSection'
          className='col-lg-12 col-md-12 col-sm-12 col-12'
          role='main'>
          <ul className='breadcrumb background_none'>
            <li>
              {' '}
              <a
                className='small'
                href='https://www.uwalumnistore.com/merchandise'>
                {' '}
                Merchandise Categories
              </a>
            </li>
            <li>
              {' '}
              <a
                className='small'
                href='https://www.uwalumnistore.com/NewArrivals'>
                {' '}
                New Arrivals
              </a>
            </li>
            <li>
              {' '}
              <a href='/' className='small'>
                {' '}
                Comfort Wash Wisconsin Badgers T-Shirt (Gray)
              </a>
            </li>
          </ul>

          <a
            className='floatr right15 top-50 pageHelp'
            href='https://www.uwalumnistore.com/help/MerchandiseDetail.htm'>
            Help
          </a>
          <form
            action='/MerchDetail?MerchID=1890495&amp;type=8&amp;CategoryName=&amp;CatID=-1&amp;Name='
            method='post'>
            <input
              name='__RequestVerificationToken'
              type='hidden'
              value='mAUjab-RrwfNKlpN32jSt-ZPem4iQI-n83Jpwln3pHex1EA20cAxzij38AwEYjBBGPq3LTA8KJ4YJPQqUa620EUKxEo1'
            />
            <input id='hiddenType' name='itemType' type='hidden' value='8' />
            <input
              id='customerLoyaltyRWD_totalPointsAvail'
              name='customerLoyaltyRWD.totalPointsAvail'
              type='hidden'
              value='0'
            />
            <input
              id='hiddenSKU'
              name='SKU'
              type='hidden'
              value='2079612           '
            />
            <input
              id='hiddenImg'
              name='merchDefaultFull'
              type='hidden'
              value='/storeimages/294-1890495-2.png'
            />
            <div className='center'>
              <h1 className='page_header bottom10 displayn'>Product Detail</h1>
            </div>

            <div className='row merchItem'>
              <div className='merchImage col-sm-2 col-12'>
                <div className='merchImageMain'>
                  <img
                    width='200'
                    className='merchDetailImage margin_auto img-responsive'
                    data-id='1'
                    src='https://www.uwalumnistore.com/storeimages/294-1890495-2.png'
                    data-high='/storeimages/294-1890495-2_hi.png'
                    data-thumb='/storeimages/294-1890495-2_th.png'
                    alt='Comfort Wash Wisconsin Badgers T-Shirt (Gray)'
                  />
                </div>
                <div className='merchThumbnailWrapper top10'>
                  <a href='/' className='merchThumbnail'>
                    <img
                      width='50'
                      className='individualThumb img-thumbnail verticalTop top5 hover_pointer'
                      src='https://www.uwalumnistore.com/storeimages/294-1890495-2_th.png'
                      data-high='/storeimages/294-1890495-2_hi.png'
                      data-full='/storeimages/294-1890495-2.png'
                      data-tgcid='0'
                      alt='Comfort Wash Wisconsin Badgers T-Shirt (Gray)'
                      role='button'
                      aria-label='Cover image 1'
                    />
                  </a>
                  <a href='/' className='merchThumbnail'>
                    <img
                      width='50'
                      className='individualThumb img-thumbnail verticalTop top5 hover_pointer'
                      src='https://www.uwalumnistore.com/storeimages/294-1890495-1_th.png'
                      data-high='/storeimages/294-1890495-1_hi.png'
                      data-full='/storeimages/294-1890495-1.png'
                      data-tgcid='0'
                      alt='Comfort Wash Wisconsin Badgers T-Shirt (Gray)'
                      role='button'
                      aria-label='Cover image 2'
                    />
                  </a>
                </div>
                <div id='imageLightBox' className='modal fade' role='dialog'>
                  <div className='modal-dialog modal-lg'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <div className='row bottom10'>
                          <div className='col-md-1 col-sm-2 col-2 textl'>
                            <a
                              href='/'
                              className='imageLightBoxLeft btn btn-default btn-lg'
                              style={{ display: 'inline-block' }}>
                              <span className='glyphicon glyphicon-chevron-left'></span>
                            </a>
                          </div>
                          <div
                            className='modalDetailImage textc col-md-10 col-sm-8 col-8'
                            data-count='0'>
                            <img
                              data-id='1'
                              className='imageLightBoxBig img-responsive margin_auto'
                              alt=''
                            />
                          </div>
                          <div className='col-md-1 col-sm-2 col-2 textr'>
                            <a
                              href='/'
                              className='imageLightBoxRight btn btn-default btn-lg'
                              style={{ display: 'inline-block' }}>
                              <span className='glyphicon glyphicon-chevron-right'></span>
                            </a>
                          </div>
                        </div>
                        <div className='modalDetailThumbnail textc'></div>
                      </div>
                      <div className='modal-footer'>
                        <Button
                          type='button'
                          className='btn btn-default'
                          data-bs-dismiss='modal'>
                          Close
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='merchInfo col-sm-10 col-12'>
                <h2 className='merchTitle top5' data-id='1890495'>
                  Comfort Wash Wisconsin Badgers T-Shirt (Gray)
                </h2>

                <div className='merchDesc'>
                  A Wisconsin Badgers shirt with a one-of-a-kind vintage look!
                  <ul>
                    <li>
                      Detailed with a badger on the left chest and "Wisconsin
                      Badger Nation" with other Wisconsin graphics on the back
                    </li>
                    <li>Ribbed set-in collar</li>
                    <li>Classic fit t-shirt</li>
                    <li>100% Cotton</li>
                    <li>Imported</li>
                  </ul>
                </div>

                <p className='merchItem'>
                  <strong>Item: </strong>
                  <span className='itemSKU'>2079612 </span>
                </p>

                <p className='merchRegPrice top5 lineThrough'>
                  <strong>Reg. Price: </strong>$34.99
                </p>
                <p className='merchSavePrice'>
                  <strong>You Save: </strong>$14.99
                </p>
                <p className='salePrice red'>
                  <strong>Sale Price: </strong>
                  <span className='merchPriceCurrent'>$20.00</span>
                </p>
                <input type='hidden' id='hiddenPriceVal' value='34.99' />

                <p className='merchSizeTitle bold'>
                  1 ADULT SIZES: <span className='selectedSize'>X-LARGE</span>
                </p>
                <input
                  id='colorSelected'
                  name='colorSelected'
                  type='hidden'
                  value=''
                />
                <input
                  id='colorCodeSelected'
                  name='colorCodeSelected'
                  type='hidden'
                  value=''
                />
                <input
                  id='sizeSelected'
                  name='sizeSelected'
                  type='hidden'
                  value='X-LARGE'
                />
                <input
                  id='sizeCodeSelected'
                  name='sizeCodeSelected'
                  type='hidden'
                  value='104'
                />
                <input
                  id='logoSelected'
                  name='logoSelected'
                  type='hidden'
                  value=''
                />
                <input
                  id='logoCodeSelected'
                  name='logoCodeSelected'
                  type='hidden'
                  value=''
                />
                <input
                  id='allThree'
                  name='allThree'
                  type='hidden'
                  value='False'
                />
                <input id='noColor' name='noColor' type='hidden' value='True' />
                <input id='noSize' name='noSize' type='hidden' value='False' />
                <input id='noLogo' name='noLogo' type='hidden' value='True' />
                <input
                  id='firstSelected'
                  name='firstSelected'
                  type='hidden'
                  value='0'
                />
                <input id='showHex' name='showHex' type='hidden' value='True' />
                <input
                  id='colorOne'
                  name='colorOne'
                  type='hidden'
                  value='False'
                />
                <input id='sizeOne' name='sizeOne' type='hidden' value='True' />
                <input
                  id='logoOne'
                  name='logoOne'
                  type='hidden'
                  value='False'
                />
                <input
                  id='typeselected'
                  name='typeselected'
                  type='hidden'
                  value='1167738'
                />
                <p
                  className='merchSelectError red displayn'
                  role='alert'
                  data-selectError='1890495'>
                  Please select option for Comfort Wash Wisconsin Badgers
                  T-Shirt (Gray)&nbsp;.
                </p>

                <div className='addToCartButton top5'>
                  <div className='input-group maxW-250-all'>
                    <span className='input-group-text'>QTY</span>
                    <input
                      type='number'
                      id='merchQTY'
                      data-QTYid='1890495'
                      className='form-control merchDetailQTY QTY1 max'
                      value='1'
                      maxLength={3}
                      min='1'
                      max='999'
                      aria-label='Quantity'
                    />
                    <a
                      href='/'
                      role='button'
                      className='addToCartTypes btn btn-primary'
                      data-name='Comfort Wash Wisconsin Badgers T-Shirt (Gray)'
                      data-Id='1890495'
                      data-isTypeless='False'
                      data-regularPrice='34.99'
                      data-isLoyalty='False'
                      data-formid='-1'
                      data-isOnSale='True'
                      data-egiftCard='False'
                      data-nonMerch='False'
                      data-classID='0'
                      data-csID='0'
                      data-storeID='294'
                      data-pricePoint='false'
                      data-disclaimer='False'
                      data-reload='False'>
                      Add To Cart
                    </a>
                  </div>
                  <p
                    className='addedToCart displayn'
                    data-addedtocart='1890495'>
                    <span className='glyphicon glyphicon-ok Gift_Checkmark faa-shake animated Checkmark_Color padding0'></span>
                    This item has been added to your Cart.
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='backCart col-12 textr'>
                <a
                  href='/'
                  className='hover_pointer btn btn-primary backButton'>
                  Back
                </a>
                <a
                  href='https://www.uwalumnistore.com/shoppingcart'
                  className='hover_pointer btn btn-primary cartButton'>
                  Shopping Cart
                </a>
              </div>
            </div>

            <div id='itemFormModal' className='modal fade' role='dialog'>
              <div className='modal-dialog'>
                <div className='modal-content itemFormModalContent'></div>
              </div>
            </div>
            <div id='cartType' className='modal fade' role='dialog'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-body cartTypeBody'></div>
                </div>
              </div>
            </div>
            <div id='reportPostModal' className='modal fade' role='dialog'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h3 className='modal-title'>Report Comment</h3>
                  </div>
                  <div className='modal-body'>
                    <p>
                      Are you sure you want to report this comment for
                      inappropriate content?
                    </p>
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-primary reportCommentYes'>
                      Yes
                    </button>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id='notEnough' className='modal fade' role='dialog'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'></div>
                  <div className='modal-body'>
                    <p>
                      This item requires more points than you have available.
                    </p>
                  </div>
                  <div className='modal-footer'>
                    <Button
                      type='button'
                      className='btn btn-default'
                      data-bs-dismiss='modal'>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Merchdetail;
