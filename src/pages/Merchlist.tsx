const Merchlist = () => {
  return (
    <div id='ContainDiv' className='contain container clear'>
      <div className='row'>
        <div
          id='contentSection'
          className='col-lg-12 col-md-12 col-sm-12 col-12 padding0'
          role='main'>
          <ul
            className='breadcrumb background_none'
            style={{ display: 'none' }}>
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
              <a href='/' className='small'>
                {' '}
                New Arrivals
              </a>
            </li>
          </ul>

          <a
            className='floatr right15 top-50 pageHelp'
            href='https://www.uwalumnistore.com/help/MerchandiseBrowse.htm'
            style={{ display: 'none' }}>
            Help
          </a>

          <div className='row'>
            <div
              className='searchCatWrap col-sm-4 col-12 padding0 padding-right10 bottom10'
              style={{ display: 'none' }}>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control searchCat'
                  placeholder='Search New Arrivals'
                  aria-label='Search New Arrivals'
                />
                <button
                  className='btn btn-default searchCatButton'
                  type='button'
                  aria-label='Search New Arrivals'>
                  <span className='glyphicon glyphicon-search'></span>
                </button>
              </div>
            </div>

            <div
              className='sortCatWrap col-sm-8 col-12 padding0 bottom10'
              style={{ display: 'none' }}>
              <div
                className='row'
                style={{ width: '100%', justifyContent: 'flex-end' }}>
                <div className='col-md-5 col-sm-0 col-0 padding0 no_show_small'>
                  <div className='input-group'>
                    <label
                      className='input-group-text'
                      htmlFor='merchResultsSelectID'>
                      Show:
                    </label>
                  </div>
                </div>

                <div className='col-md-5 col-sm-12 col-12 padding0'>
                  <div className='input-group'>
                    <label
                      className='input-group-text'
                      htmlFor='merchSortBySelectID'>
                      Sort By:
                    </label>
                    <select
                      aria-label='Sort By'
                      id='merchSortBySelectID'
                      className='merchSortBy form-control form-select wauto'>
                      <option value='0' className='subject-option'>
                        {' '}
                        Description(A - Z)
                      </option>
                      <option value='1' className='subject-option'>
                        {' '}
                        Description(Z - A)
                      </option>
                      <option value='2' className='subject-option'>
                        {' '}
                        Price(Low - High)
                      </option>
                      <option value='3' className='subject-option'>
                        {' '}
                        Price(High - Low)
                      </option>
                    </select>
                  </div>
                </div>

                <div className='col-md-2 col-sm-0 col-0 padding0 no_show_small'>
                  <div
                    className='displayib largeSwitch listSwitch'
                    data-className=''
                    aria-label='Display Large'
                    role='button'>
                    <span className='fa fa-2x fa-th-large switchIcon'></span>
                  </div>
                  <div
                    className='displayib smallSwitch listSwitch listSwitchSelected'
                    aria-label='Display Small'
                    role='button'>
                    <span className='fa fa-2x fa-th switchIcon'></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='viewFiltersDiv col-12 bottom10'>
              <div className='filterButtonWrapper'>
                <div
                  role='button'
                  aria-label='Open Filters Dialog'
                  className='viewFiltersButton displayn'>
                  <span className='filterText'>FILTERS</span>
                </div>
              </div>
            </div>

            <div
              role='dialog'
              className='filterColumn col-md-3 col-sm-3 col-12 displayn'>
              <div className='row'>
                <div className='col-12 padding0'>
                  <p className='filterTitle font20'>
                    <strong>FILTER BY:</strong>
                  </p>
                  <p className='closeFilterX floatr hover_pointer filterDisplay'>
                    <span className='glyphicon glyphicon-remove'></span>
                  </p>
                  <input
                    type='button'
                    id='filterButton1'
                    className='btn btn-primary top5 wauto filterButton filterButtonDisplay'
                    value='Apply'
                  />
                </div>
              </div>
              <div className='filterOption top10 filterPriceOption row'>
                <div className='col-12 padding0'>
                  <p className='filterOptionTitle padding5 bottom_border bottom5'>
                    <strong>Price</strong>
                    <span
                      className='fa fa-minus-square floatr hover_pointer filterCollapse'
                      data-id='filterPriceOption'
                      data-filtername='Price'
                      aria-label='Collapse Price Filter'
                      role='button'></span>
                  </p>
                </div>
                <div className='col-12 padding0'>
                  <div
                    className='filterValueWrapper bottom10 '
                    data-filterid='filterPriceOption'>
                    <div className='filterPrice top10 bottom10 input-group'>
                      <input
                        aria-label='Minimum Price Filter Input'
                        className='filterMin form-control'
                        id='filterMinInput'
                        max='100000'
                        min='0'
                        name='filterMin'
                        placeholder='Min'
                        type='number'
                        value='0'
                      />
                      <span className='input-group-text'>to</span>
                      <input
                        aria-label='Maximum Price Filter Input'
                        className='filterMin form-control'
                        id='filterMaxInput'
                        max='100000'
                        min='0'
                        name='filterMax'
                        placeholder='Max'
                        type='number'
                        value='1000000'
                      />
                    </div>
                    <div className='filterOption top10 filterSaleOption'>
                      <div className='form-floating'>
                        <input
                          aria-label='On Sale'
                          className='filterCheck newCheckbox'
                          data-category='filteronsale'
                          data-value='filteronsale'
                          id='merchFilterOnSale'
                          name='merchFilterOnSale'
                          type='checkbox'
                          value='true'
                        />
                        <input
                          name='merchFilterOnSale'
                          type='hidden'
                          value='false'
                        />
                        <span className='newCheckboxText'> On Sale</span>
                      </div>
                    </div>
                    <p id='priceError' role='alert' className='red top10'></p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className='heading__line'>
                <span>New Arrivals</span>
              </h2>
            </div>
            <div id='merch__card' className='group'>
              <div
                className='merchColumn col-12 grid merch__card'
                style={{ visibility: 'visible' }}>
                <div className='row'>
                  <div
                    className='filterSelections col-12 padding0 bottom10'
                    style={{ display: 'none' }}>
                    <a
                      href='/'
                      className='hover_pointer clearIndPriceFilter bottom10 displayn filterSelection'>
                      <span className='priceFilterOptionText'></span>
                      <span className='fa fa-times'></span>
                    </a>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-12 padding0'>
                    <div className='row'>
                      <div
                        data-count='1'
                        data-merid='1907767'
                        className='merchItem col-sm-4 col-6 merchListClear3 merchListClearTwoThree merch__card-item'
                        data-classdefault='merchItem padding0 bottom10 col-sm-4 col-6 merchListClear3  merchListClearTwoThree'
                        data-class2='merchItem padding0 bottom10 col-sm-6 col-xs-6 merchListClear2 '>
                        <div className='row'>
                          <div className='merchDetailWrapper col-12'>
                            <a
                              href='//www.uwalumnistore.com/MerchDetail?MerchID=1907767&amp;type=8&amp;CategoryName=&amp;CatID=-1&amp;Name='
                              className='merchLink displayb bottom10'>
                              <div className='imageWrapper'>
                                <div className='bottom10 merchImageWrapper merchlist'>
                                  <div
                                    className='newBadge'
                                    style={{ backgroundColor: '#818181' }}>
                                    NEW!
                                  </div>

                                  <img
                                    width='200'
                                    className='merchImage img-responsive'
                                    src='https://www.uwalumnistore.com/storeimages/294-1907767-1.png'
                                    alt='CDI Corp Custom Name Wisconsin 2026 Grad Ornament'
                                    aria-hidden='true'
                                  />
                                </div>
                              </div>
                              <p
                                className='merchTitle top0 textc lead'
                                data-id='1907767'>
                                CDI Corp Custom Name Wisconsin 2026 Grad
                                Ornament
                              </p>
                            </a>
                            <div className='merchCol1 textc bottom10'>
                              <p className='merchNumber'>
                                <span className='merchSKU'>2080491 </span>
                              </p>

                              <p className='merchPrice top5 bold'>
                                <span className='merchPriceCurrent currentPrice1907767'>
                                  $29.99
                                </span>
                              </p>

                              <p className='merchDiscount red top5 bold'></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        data-count='2'
                        data-merid='1890495'
                        className='merchItem col-sm-4 col-6 merch__card-item'
                        data-classdefault='merchItem padding0 bottom10 col-sm-4 col-6 '
                        data-class2='merchItem padding0 bottom10 col-sm-6 col-xs-6 '>
                        <div className='row'>
                          <div className='merchDetailWrapper col-12'>
                            <a
                              href='//www.uwalumnistore.com/MerchDetail?MerchID=1890495&amp;type=8&amp;CategoryName=&amp;CatID=-1&amp;Name='
                              className='merchLink displayb bottom10'>
                              <div className='imageWrapper'>
                                <div className='bottom10 merchImageWrapper merchlist'>
                                  <div
                                    className='saleBadge'
                                    style={{ backgroundColor: '#c5050c' }}>
                                    SALE!
                                  </div>

                                  <img
                                    width='200'
                                    className='merchImage img-responsive'
                                    src='https://www.uwalumnistore.com/storeimages/294-1890495-2.png'
                                    alt='Comfort Wash Wisconsin Badgers T-Shirt (Gray)'
                                    aria-hidden='true'
                                  />
                                </div>
                              </div>
                              <p
                                className='merchTitle top0 textc lead'
                                data-id='1890495'>
                                Comfort Wash Wisconsin Badgers T-Shirt (Gray)
                              </p>
                            </a>
                            <div className='merchCol1 textc bottom10'>
                              <p className='merchNumber'>
                                <span className='merchSKU'>2079612 </span>
                              </p>

                              <p className='merchPrice topPrice bold'>
                                <span className='merchPriceCurrent currentPrice1890495'>
                                  <del>$34.99</del>
                                </span>
                              </p>
                              <p className='merchSalePrice top5 red bold'>
                                <span className='merchSalePriceCurrent'>
                                  $20.00
                                </span>
                              </p>

                              <p className='merchDiscount red top5 bold'></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        data-count='3'
                        data-merid='1890498'
                        className='merchItem col-sm-4 col-6 merchListClearTwoThree merch__card-item'
                        data-classdefault='merchItem padding0 bottom10 col-sm-4 col-6  merchListClearTwoThree'
                        data-class2='merchItem padding0 bottom10 col-sm-6 col-xs-6 merchListClear2 '>
                        <div className='row'>
                          <div className='merchDetailWrapper col-12'>
                            <a
                              href='//www.uwalumnistore.com/MerchDetail?MerchID=1890498&amp;type=8&amp;CategoryName=&amp;CatID=-1&amp;Name='
                              className='merchLink displayb bottom10'>
                              <div className='imageWrapper'>
                                <div className='bottom10 merchImageWrapper merchlist'>
                                  <div
                                    className='saleBadge'
                                    style={{ backgroundColor: '#c5050c' }}>
                                    SALE!
                                  </div>

                                  <img
                                    width='200'
                                    className='merchImage img-responsive'
                                    src='https://www.uwalumnistore.com/storeimages/294-1890498-2.png'
                                    alt='Comfort Wash Wisconsin Badgers T-Shirt (Gray) 3X'
                                    aria-hidden='true'
                                  />
                                </div>
                              </div>
                              <p
                                className='merchTitle top0 textc lead'
                                data-id='1890498'>
                                Comfort Wash Wisconsin Badgers T-Shirt (Gray) 3X
                              </p>
                            </a>
                            <div className='merchCol1 textc bottom10'>
                              <p className='merchNumber'>
                                <span className='merchSKU'>2079613 </span>
                              </p>

                              <p className='merchPrice topPrice bold'>
                                <span className='merchPriceCurrent currentPrice1890498'>
                                  <del>$39.99</del>
                                </span>
                              </p>
                              <p className='merchSalePrice top5 red bold'>
                                <span className='merchSalePriceCurrent'>
                                  $20.00
                                </span>
                              </p>

                              <p className='merchDiscount red top5 bold'></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        data-count='4'
                        data-merid='1890504'
                        className='merchItem col-sm-4 col-6 merchListClear3 merch__card-item'
                        data-classdefault='merchItem padding0 bottom10 col-sm-4 col-6 merchListClear3 '
                        data-class2='merchItem padding0 bottom10 col-sm-6 col-xs-6 '>
                        <div className='row'>
                          <div className='merchDetailWrapper col-12'>
                            <a
                              href='//www.uwalumnistore.com/MerchDetail?MerchID=1890504&amp;type=8&amp;CategoryName=&amp;CatID=-1&amp;Name='
                              className='merchLink displayb bottom10'>
                              <div className='imageWrapper'>
                                <div className='bottom10 merchImageWrapper merchlist'>
                                  <div
                                    className='saleBadge'
                                    style={{ backgroundColor: '#c5050c' }}>
                                    SALE!
                                  </div>

                                  <img
                                    width='200'
                                    className='merchImage img-responsive'
                                    src='https://www.uwalumnistore.com/storeimages/294-1890504-1.png'
                                    alt='Comfort Wash Wisconsin Suede Puff T-Shirt (Cream)'
                                    aria-hidden='true'
                                  />
                                </div>
                              </div>
                              <p
                                className='merchTitle top0 textc lead'
                                data-id='1890504'>
                                Comfort Wash Wisconsin Suede Puff T-Shirt
                                (Cream)
                              </p>
                            </a>
                            <div className='merchCol1 textc bottom10'>
                              <p className='merchNumber'>
                                <span className='merchSKU'>2079615 </span>
                              </p>

                              <p className='merchPrice topPrice bold'>
                                <span className='merchPriceCurrent currentPrice1890504'>
                                  <del>$29.99</del>
                                </span>
                              </p>
                              <p className='merchSalePrice top5 red bold'>
                                <span className='merchSalePriceCurrent'>
                                  $15.00
                                </span>
                              </p>

                              <p className='merchDiscount red top5 bold'></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        data-count='5'
                        data-merid='1907555'
                        className='merchItem col-sm-4 col-6 merchListClearTwoThree merch__card-item'
                        data-classdefault='merchItem padding0 bottom10 col-sm-4 col-6  merchListClearTwoThree'
                        data-class2='merchItem padding0 bottom10 col-sm-6 col-xs-6 merchListClear2 '>
                        <div className='row'>
                          <div className='merchDetailWrapper col-12'>
                            <a
                              href='//www.uwalumnistore.com/MerchDetail?MerchID=1907555&amp;type=8&amp;CategoryName=&amp;CatID=-1&amp;Name='
                              className='merchLink displayb bottom10'>
                              <div className='imageWrapper'>
                                <div className='bottom10 merchImageWrapper merchlist'>
                                  <div
                                    className='newBadge'
                                    style={{ backgroundColor: '#818181' }}>
                                    NEW!
                                  </div>

                                  <img
                                    width='200'
                                    className='merchImage img-responsive'
                                    src='https://www.uwalumnistore.com/storeimages/294-1907555-2.png'
                                    alt='Evergreen Enterprises WI Badgers 24 oz. Stein (Red)'
                                    aria-hidden='true'
                                  />
                                </div>
                              </div>
                              <p
                                className='merchTitle top0 textc lead'
                                data-id='1907555'>
                                Evergreen Enterprises WI Badgers 24 oz. Stein
                                (Red)
                              </p>
                            </a>
                            <div className='merchCol1 textc bottom10'>
                              <p className='merchNumber'>
                                <span className='merchSKU'>80194644192 </span>
                              </p>

                              <p className='merchPrice top5 bold'>
                                <span className='merchPriceCurrent currentPrice1907555'>
                                  $29.99
                                </span>
                              </p>

                              <p className='merchDiscount red top5 bold'></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        data-count='6'
                        data-merid='1907551'
                        className='merchItem col-sm-4 col-6 merch__card-item'
                        data-classdefault='merchItem padding0 bottom10 col-sm-4 col-6 '
                        data-class2='merchItem padding0 bottom10 col-sm-6 col-xs-6 '>
                        <div className='row'>
                          <div className='merchDetailWrapper col-12'>
                            <a
                              href='//www.uwalumnistore.com/MerchDetail?MerchID=1907551&amp;type=8&amp;CategoryName=&amp;CatID=-1&amp;Name='
                              className='merchLink displayb bottom10'>
                              <div className='imageWrapper'>
                                <div className='bottom10 merchImageWrapper merchlist'>
                                  <div
                                    className='newBadge'
                                    style={{ backgroundColor: '#818181' }}>
                                    NEW!
                                  </div>

                                  <img
                                    width='200'
                                    className='merchImage img-responsive'
                                    src='https://www.uwalumnistore.com/storeimages/294-1907551-1.png'
                                    alt='Evergreen Enterprises Wisconsin Stadium Seat Ornament'
                                    aria-hidden='true'
                                  />
                                </div>
                              </div>
                              <p
                                className='merchTitle top0 textc lead'
                                data-id='1907551'>
                                Evergreen Enterprises Wisconsin Stadium Seat
                                Ornament
                              </p>
                            </a>
                            <div className='merchCol1 textc bottom10'>
                              <p className='merchNumber'>
                                <span className='merchSKU'>80194637887 </span>
                              </p>

                              <p className='merchPrice top5 bold'>
                                <span className='merchPriceCurrent currentPrice1907551'>
                                  $29.99
                                </span>
                              </p>

                              <p className='merchDiscount red top5 bold'></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        data-count='7'
                        data-merid='1904865'
                        className='merchItem col-sm-4 col-6 merchListClear3 merchListClearTwoThree merch__card-item'
                        data-classdefault='merchItem padding0 bottom10 col-sm-4 col-6 merchListClear3  merchListClearTwoThree'
                        data-class2='merchItem padding0 bottom10 col-sm-6 col-xs-6 merchListClear2 '>
                        <div className='row'>
                          <div className='merchDetailWrapper col-12'>
                            <a
                              href='//www.uwalumnistore.com/MerchDetail?MerchID=1904865&amp;type=8&amp;CategoryName=&amp;CatID=-1&amp;Name='
                              className='merchLink displayb bottom10'>
                              <div className='imageWrapper'>
                                <div className='bottom10 merchImageWrapper merchlist'>
                                  <div
                                    className='newBadge'
                                    style={{ backgroundColor: '#818181' }}>
                                    NEW!
                                  </div>

                                  <img
                                    width='200'
                                    className='merchImage img-responsive'
                                    src='https://www.uwalumnistore.com/storeimages/294-1904865-2.png'
                                    alt="Lands' End Crewneck Sweatshirt - Journalism (Gray)"
                                    aria-hidden='true'
                                  />
                                </div>
                              </div>
                              <p
                                className='merchTitle top0 textc lead'
                                data-id='1904865'>
                                Lands' End Crewneck Sweatshirt - Journalism
                                (Gray)
                              </p>
                            </a>
                            <div className='merchCol1 textc bottom10'>
                              <p className='merchNumber'>
                                <span className='merchSKU'>2080308 </span>
                              </p>

                              <p className='merchPrice top5 bold'>
                                <span className='merchPriceCurrent currentPrice1904865'>
                                  $69.99
                                </span>
                              </p>

                              <p className='merchDiscount red top5 bold'></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        data-count='8'
                        data-merid='1904862'
                        className='merchItem col-sm-4 col-6 merch__card-item'
                        data-classdefault='merchItem padding0 bottom10 col-sm-4 col-6 '
                        data-class2='merchItem padding0 bottom10 col-sm-6 col-xs-6 '>
                        <div className='row'>
                          <div className='merchDetailWrapper col-12'>
                            <a
                              href='//www.uwalumnistore.com/MerchDetail?MerchID=1904862&amp;type=8&amp;CategoryName=&amp;CatID=-1&amp;Name='
                              className='merchLink displayb bottom10'>
                              <div className='imageWrapper'>
                                <div className='bottom10 merchImageWrapper merchlist'>
                                  <div
                                    className='newBadge'
                                    style={{ backgroundColor: '#818181' }}>
                                    NEW!
                                  </div>

                                  <img
                                    width='200'
                                    className='merchImage img-responsive'
                                    src='https://www.uwalumnistore.com/storeimages/294-1904862-2.png'
                                    alt="Lands' End WI Journalism ¼ Zip (Red)"
                                    aria-hidden='true'
                                  />
                                </div>
                              </div>
                              <p
                                className='merchTitle top0 textc lead'
                                data-id='1904862'>
                                Lands' End WI Journalism ¼ Zip (Red)
                              </p>
                            </a>
                            <div className='merchCol1 textc bottom10'>
                              <p className='merchNumber'>
                                <span className='merchSKU'>2080307 </span>
                              </p>

                              <p className='merchPrice top5 bold'>
                                <span className='merchPriceCurrent currentPrice1904862'>
                                  $69.99
                                </span>
                              </p>

                              <p className='merchDiscount red top5 bold'></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        data-count='9'
                        data-merid='1904856'
                        className='merchItem col-sm-4 col-6 merchListClearTwoThree merch__card-item'
                        data-classdefault='merchItem padding0 bottom10 col-sm-4 col-6  merchListClearTwoThree'
                        data-class2='merchItem padding0 bottom10 col-sm-6 col-xs-6 merchListClear2 '>
                        <div className='row'>
                          <div className='merchDetailWrapper col-12'>
                            <a
                              href='//www.uwalumnistore.com/MerchDetail?MerchID=1904856&amp;type=8&amp;CategoryName=&amp;CatID=-1&amp;Name='
                              className='merchLink displayb bottom10'>
                              <div className='imageWrapper'>
                                <div className='bottom10 merchImageWrapper merchlist'>
                                  <div
                                    className='newBadge'
                                    style={{ backgroundColor: '#818181' }}>
                                    NEW!
                                  </div>

                                  <img
                                    width='200'
                                    className='merchImage img-responsive'
                                    src='https://www.uwalumnistore.com/storeimages/294-1904856-2.png'
                                    alt="Lands' End WI Journalism Polo (Red)"
                                    aria-hidden='true'
                                  />
                                </div>
                              </div>
                              <p
                                className='merchTitle top0 textc lead'
                                data-id='1904856'>
                                Lands' End WI Journalism Polo (Red)
                              </p>
                            </a>
                            <div className='merchCol1 textc bottom10'>
                              <p className='merchNumber'>
                                <span className='merchSKU'>2080305 </span>
                              </p>

                              <p className='merchPrice top5 bold'>
                                <span className='merchPriceCurrent currentPrice1904856'>
                                  $59.99
                                </span>
                              </p>

                              <p className='merchDiscount red top5 bold'></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        data-count='10'
                        data-merid='1904869'
                        className='merchItem col-sm-4 col-6 merchListClear3 merch__card-item'
                        data-classdefault='merchItem padding0 bottom10 col-sm-4 col-6 merchListClear3 '
                        data-class2='merchItem padding0 bottom10 col-sm-6 col-xs-6 '>
                        <div className='row'>
                          <div className='merchDetailWrapper col-12'>
                            <a
                              href='//www.uwalumnistore.com/MerchDetail?MerchID=1904869&amp;type=8&amp;CategoryName=&amp;CatID=-1&amp;Name='
                              className='merchLink displayb bottom10'>
                              <div className='imageWrapper'>
                                <div className='bottom10 merchImageWrapper merchlist'>
                                  <div
                                    className='newBadge'
                                    style={{ backgroundColor: '#818181' }}>
                                    NEW!
                                  </div>

                                  <img
                                    width='200'
                                    className='merchImage img-responsive'
                                    src='https://www.uwalumnistore.com/storeimages/294-1904869-2.png'
                                    alt="Lands' End Women's WI Journalism ¼ Zip (Black)"
                                    aria-hidden='true'
                                  />
                                </div>
                              </div>
                              <p
                                className='merchTitle top0 textc lead'
                                data-id='1904869'>
                                Lands' End Women's WI Journalism ¼ Zip (Black)
                              </p>
                            </a>
                            <div className='merchCol1 textc bottom10'>
                              <p className='merchNumber'>
                                <span className='merchSKU'>2080310 </span>
                              </p>

                              <p className='merchPrice top5 bold'>
                                <span className='merchPriceCurrent currentPrice1904869'>
                                  $69.99
                                </span>
                              </p>

                              <p className='merchDiscount red top5 bold'></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        data-count='11'
                        data-merid='1904871'
                        className='merchItem col-sm-4 col-6 merchListClearTwoThree merch__card-item'
                        data-classdefault='merchItem padding0 bottom10 col-sm-4 col-6  merchListClearTwoThree'
                        data-class2='merchItem padding0 bottom10 col-sm-6 col-xs-6 merchListClear2 '>
                        <div className='row'>
                          <div className='merchDetailWrapper col-12'>
                            <a
                              href='//www.uwalumnistore.com/MerchDetail?MerchID=1904871&amp;type=8&amp;CategoryName=&amp;CatID=-1&amp;Name='
                              className='merchLink displayb bottom10'>
                              <div className='imageWrapper'>
                                <div className='bottom10 merchImageWrapper merchlist'>
                                  <div
                                    className='newBadge'
                                    style={{ backgroundColor: '#818181' }}>
                                    NEW!
                                  </div>

                                  <img
                                    width='200'
                                    className='merchImage img-responsive'
                                    src='https://www.uwalumnistore.com/storeimages/294-1904871-2.png'
                                    alt="Lands' End Women's WI Journalism ¼ Zip (Red)"
                                    aria-hidden='true'
                                  />
                                </div>
                              </div>
                              <p
                                className='merchTitle top0 textc lead'
                                data-id='1904871'>
                                Lands' End Women's WI Journalism ¼ Zip (Red)
                              </p>
                            </a>
                            <div className='merchCol1 textc bottom10'>
                              <p className='merchNumber'>
                                <span className='merchSKU'>2080311 </span>
                              </p>

                              <p className='merchPrice top5 bold'>
                                <span className='merchPriceCurrent currentPrice1904871'>
                                  $69.99
                                </span>
                              </p>

                              <p className='merchDiscount red top5 bold'></p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        data-count='12'
                        data-merid='1907306'
                        className='merchItem col-sm-4 col-6 merch__card-item'
                        data-classdefault='merchItem padding0 bottom10 col-sm-4 col-6 '
                        data-class2='merchItem padding0 bottom10 col-sm-6 col-xs-6 '>
                        <div className='row'>
                          <div className='merchDetailWrapper col-12'>
                            <a
                              href='//www.uwalumnistore.com/MerchDetail?MerchID=1907306&amp;type=8&amp;CategoryName=&amp;CatID=-1&amp;Name='
                              className='merchLink displayb bottom10'>
                              <div className='imageWrapper'>
                                <div className='bottom10 merchImageWrapper merchlist'>
                                  <div
                                    className='newBadge'
                                    style={{ backgroundColor: '#818181' }}>
                                    NEW!
                                  </div>

                                  <img
                                    width='200'
                                    className='merchImage img-responsive'
                                    src='https://www.uwalumnistore.com/storeimages/294-1907306-1.png'
                                    alt="League Women's Wisconsin Badgers Mock Neck (Black)"
                                    aria-hidden='true'
                                  />
                                </div>
                              </div>
                              <p
                                className='merchTitle top0 textc lead'
                                data-id='1907306'>
                                League Women's Wisconsin Badgers Mock Neck
                                (Black)
                              </p>
                            </a>
                            <div className='merchCol1 textc bottom10'>
                              <p className='merchNumber'>
                                <span className='merchSKU'>2080404 </span>
                              </p>

                              <p className='merchPrice top5 bold'>
                                <span className='merchPriceCurrent currentPrice1907306'>
                                  $69.99
                                </span>
                              </p>

                              <p className='merchDiscount red top5 bold'></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='textc' style={{ display: 'none' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id='pagination-btm' className='text-center'>
                <ul className='pagination' style={{ visibility: 'visible' }}>
                  <li className='active'>
                    <a href='/' className='hover_pointer pageNumber'>
                      1
                    </a>
                  </li>
                  <li>
                    <a href='/' className='hover_pointer pageNumber'>
                      2
                    </a>
                  </li>
                  <li className='chevRight'>
                    <a href='/' className='hover_pointer'>
                      ›
                    </a>
                  </li>
                </ul>
              </div>
              <select
                aria-label='Show number of items per page'
                id='merchResultsSelectID'
                className='merchResultsSelect form-control form-select mx-auto'>
                <option selected={true} value='12' className='subject-option'>
                  12 Items Per Page
                </option>
                <option value='24' className='subject-option'>
                  24 Items Per Page
                </option>
                <option value='48' className='subject-option'>
                  48 Items Per Page
                </option>
                <option value='99' className='subject-option'>
                  99 Items Per Page
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Merchlist;
