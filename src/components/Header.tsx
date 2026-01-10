import Logo from '../img/shield-logo.svg';
import { Search } from '.';

const Header = () => {
  return (
    <div id='topSection'>
      <header>
        <div id='cyberMondayBanner' className='promo-banner'>
          Save 25% on your entire purchase — today only! Use promo code:{' '}
          <strong>UWCYBER25</strong>
        </div>

        <div id='waa-nav' className='container'>
          <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
              <a
                className='navbar-brand'
                href='https://www.uwalumnistore.com/home'>
                <img
                  src={Logo}
                  alt=''
                  role='presentation'
                  className='waa-logo'
                />
                <h1 className='navbar-brand-name'>
                  UW Alumni <span>Store</span>
                </h1>
              </a>

              <a
                className='cart'
                href='https://www.uwalumnistore.com/shoppingcart'>
                <svg
                  xmlns='https://www.w3.org/2000/svg'
                  width='117'
                  height='88.17'
                  viewBox='0 0 117 88.17'
                  className='cart--icon'>
                  <path
                    d='M98.5,73h-55a3.5,3.5,0,0,1-3.27-2.24L16.1,8H4.5a3.5,3.5,0,0,1,0-7h14a3.5,3.5,0,0,1,3.27,2.24L45.9,66H98.5a3.5,3.5,0,0,1,0,7Z'
                    transform='translate(0 0)'
                    strokeMiterlimit='10'
                    strokeWidth='2'></path>
                  <path
                    d='M100.5,53.33H36.17a3.5,3.5,0,0,1,0-7H97.94l9.79-31H36.5a3.5,3.5,0,0,1,0-7h76a3.5,3.5,0,0,1,3.5,3.5,3.39,3.39,0,0,1-.16,1.05l-12,38A3.5,3.5,0,0,1,100.5,53.33Z'
                    transform='translate(0 0)'
                    strokeMiterlimit='10'
                    strokeWidth='2'></path>
                  <circle cx='50.5' cy='83.5' r='4.67'></circle>
                  <circle cx='91.83' cy='82.83' r='4.67'></circle>
                </svg>
                <span className='sr-only'>Shopping Cart</span>
              </a>

              <Search />

              <button
                className='navbar-toggler collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar top-bar'></span>
                <span className='icon-bar middle-bar'></span>
                <span className='icon-bar bottom-bar'></span>
              </button>

              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto navbar-left'>
                  {/* <!-- ********************************************* -->
                <!-- ****************** Womens ******************* -->
                <!-- ********************************************* --> */}
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle'
                      href='/'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'>
                      Women
                    </a>
                    <div className='dropdown-menu'>
                      <div className='row'>
                        <div className='col-md-3'>
                          <ul className='featured'>
                            <li className='dropdown-header'>Top Sellers</li>
                            <li>
                              <a
                                className='alumni nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Alumni'>
                                For Alumni
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/The-Red-Shirt'>
                                The Red Shirt
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Under-Armour'>
                                Under Armour
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-3'>
                          <ul className='tops'>
                            <li className='dropdown-header'>Tops</li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Long-Sleeve'>
                                Long Sleeves
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Chapter-Polo'>
                                Chapter Polo
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Polo-Dress-Shirts'>
                                Polo / Dress Shirts
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/T-Shirts'>
                                Women's Cut T-Shirts
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Unisex-T-Shirts'>
                                Unisex T-Shirts
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Sweatshirts'>
                                Sweatshirts / Sweaters
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Tank-Tops'>
                                Tank Tops
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Jackets'>
                                Jackets
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-3'>
                          <ul className='bottoms'>
                            <li className='dropdown-header'>Bottoms</li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Pants-and-Shorts'>
                                Pants / Shorts
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-3'>
                          <ul className='accessories'>
                            <li className='dropdown-header'>Accessories</li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Socks-and-Footwear'>
                                Socks / Footwear
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Winter-Wear'>
                                Winter Hats / Accessories
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Hats'>
                                Hats
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Jewelry'>
                                Jewelry
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Bags'>
                                Bags
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Womens/Hair-Accessories'>
                                Hair Accessories
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-12'>
                          <a
                            className='nav-link show-all'
                            href='https://www.uwalumnistore.com/NewArrivals'>
                            New Arrivals
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* <!-- ********************************************* -->
                <!-- ******************* Mens ******************** -->
                <!-- ********************************************* --> */}
                  <li className='nav-item dropdown' id='men'>
                    <a
                      className='nav-link dropdown-toggle'
                      href='/'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'>
                      Men
                    </a>
                    <div className='dropdown-menu'>
                      <div className='row'>
                        <div className='col-md-3'>
                          <ul className='featured'>
                            <li className='dropdown-header'>Top Sellers</li>
                            <li>
                              <a
                                className='alumni nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/Alumni'>
                                For Alumni
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/The-Red-Shirt'>
                                The Red Shirt
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/Under-Armour'>
                                Under Armour
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-3'>
                          <ul className='tops'>
                            <li className='dropdown-header'>Tops</li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/Long-Sleeve'>
                                Long Sleeve Tees
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/Jerseys'>
                                Jerseys
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/Chapter-Polo'>
                                Chapter Polo
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/Polo-Dress-Shirts'>
                                Polo / Dress Shirts
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/Sweatshirts'>
                                Sweatshirts / Sweaters
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/Tank-Tops'>
                                Tank Tops
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/T-Shirts'>
                                T-Shirts
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/Jackets'>
                                Jackets
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/Big-and-Tall'>
                                Big / Tall
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-3'>
                          <ul className='bottoms'>
                            <li className='dropdown-header'>Bottoms</li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/Pants-and-Shorts'>
                                Pants / Shorts
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-3'>
                          <ul className='accessories'>
                            <li className='dropdown-header'>Accessories</li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Hats/Mens-Hats'>
                                Caps / Hats
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/Socks-and-Footwear'>
                                Socks / Footwear
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Mens/Winter-Wear'>
                                Winter Hats / Accessories
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Gifts/Wallets-and-ID-Holders'>
                                Wallets &amp; ID Holders
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-12'>
                          <a
                            className='show-all nav-link'
                            href='https://www.uwalumnistore.com/NewArrivals'>
                            New Arrivals
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* <!-- ********************************************* -->
                <!-- ******************* Kids ******************** -->
                <!-- ********************************************* --> */}
                  <li className='nav-item dropdown' id='kids'>
                    <a
                      className='nav-link dropdown-toggle'
                      href='/'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'>
                      Kids
                    </a>
                    <div className='dropdown-menu'>
                      <div className='row'>
                        <div className='col-md-3'>
                          <ul className='featured'>
                            <li className='dropdown-header'>Top Sellers</li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Kids/The-Red-Shirt'>
                                The Red Shirt
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/Shop/Kids/Under-Armour'>
                                Under Armour
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-3'>
                          <ul className='infant'>
                            <li className='dropdown-header'>Infant</li>
                            <li>
                              <a
                                className='infant nav-link'
                                href='https://www.uwalumnistore.com/Shop/Kids/Infant-Clothing'>
                                Clothing
                              </a>
                            </li>
                            <li>
                              <a
                                className='infant kds-acc nav-link'
                                href='https://www.uwalumnistore.com/Shop/Kids/Infant-Accessories'>
                                Accessories
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-3'>
                          <ul className='toddler'>
                            <li className='dropdown-header'>Toddler</li>
                            <li>
                              <a
                                className='toddler nav-link'
                                href='https://www.uwalumnistore.com/Shop/Kids/Toddler-Clothing'>
                                Clothing
                              </a>
                            </li>
                            <li>
                              <a
                                className='toddler kds-acc nav-link'
                                href='https://www.uwalumnistore.com/Shop/Kids/Toddler-Accessories'>
                                Accessories
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-3'>
                          <ul className='youth'>
                            <li className='dropdown-header'>Youth</li>
                            <li>
                              <a
                                className='youth nav-link'
                                href='https://www.uwalumnistore.com/Shop/Kids/Youth-Clothing'>
                                Clothing
                              </a>
                            </li>
                            <li>
                              <a
                                className='youth kds-acc nav-link'
                                href='https://www.uwalumnistore.com/Shop/Kids/Youth-Accessories'>
                                Accessories
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-12'>
                          <a
                            className='show-all nav-link'
                            href='https://www.uwalumnistore.com/NewArrivals'>
                            New Arrivals
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* <!-- ********************************************* -->
                <!-- ******************* Gift ******************** -->
                <!-- ********************************************* --> */}
                  <li className='nav-item dropdown' id='gifts-acc'>
                    <a
                      className='nav-link dropdown-toggle'
                      href='/'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'>
                      Gifts &amp; Accessories
                    </a>
                    <div className='dropdown-menu'>
                      <div className='row'>
                        <div className='col-md-4'>
                          <ul className='featured'>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/All-Gift'>
                                All Gift
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Accessories'>
                                Accessories
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Alumni'>
                                Alumni
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Totes-and-Purses'>
                                Bags &amp; Totes
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Banners-and-Flags'>
                                Banners &amp; Flags
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Barware'>
                                Barware
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Books'>
                                Books
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className='col-md-4'>
                          <ul className='for-the-home'>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Car-Accessories'>
                                Car Accessories
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Decals-Patches-Stickers'>
                                Decals/Patches/Stickers
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Toys-and-Games '>
                                Games &amp; Plush
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/High-End-Gift'>
                                High End Gift
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Office-Supplies-Furnishings'>
                                Home Decor &amp; Blankets
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Office-Supplies-and-Cards'>
                                Office Supplies &amp; Cards
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Holiday'>
                                Ornaments &amp; Seasonal
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className='col-md-4'>
                          <ul className='miscellaneous'>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Party-Supplies'>
                                Party Supplies
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Passcases-Wallets-and-Keychains'>
                                Passcases, Wallets, &amp; Keychains
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Pet'>
                                Pet
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Picture-Frames-and-Wall-Art'>
                                Picture Frames &amp; Wall Art
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Rain-Gear'>
                                Rain Wear &amp; Umbrellas
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Golf'>
                                Sporting Goods
                              </a>
                            </li>

                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwbookstore.com/Wisconsin-Badgers/gift-items/Tailgate'>
                                Tailgate
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-12'>
                          <a
                            className='show-all nav-link'
                            href='https://www.uwalumnistore.com/NewArrivals'>
                            New Arrivals
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <ul className='navbar-nav navbar-right'>
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle  account-toggle'
                      href='/'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                      title='My Account'>
                      <svg
                        xmlns='https://www.w3.org/2000/svg'
                        width='69.77'
                        height='83'
                        viewBox='0 0 69.77 83'
                        className='account-img'>
                        <path
                          d='M36.56,44.14A22.07,22.07,0,1,1,58.63,22.07,22.09,22.09,0,0,1,36.56,44.14Zm0-34.78A12.71,12.71,0,1,0,49.27,22.07,12.72,12.72,0,0,0,36.56,9.36Z'
                          transform='translate(0.01)'></path>
                        <path
                          d='M4.68,83a4.8,4.8,0,0,1-1.55-.26,4.67,4.67,0,0,1-2.87-6v0L7.27,57a14.17,14.17,0,0,1,13.35-9.45H51.69A11.79,11.79,0,0,1,63,55.74l6.62,20.63a4.68,4.68,0,0,1-8.91,2.86L54,58.63a2.48,2.48,0,0,0-2.35-1.72h-31a4.8,4.8,0,0,0-4.52,3.2l-7,19.76A4.68,4.68,0,0,1,4.68,83Z'
                          transform='translate(0.01)'></path>
                      </svg>
                      <span>My Account</span>
                      <span className='caret'></span>
                    </a>
                    <div id='login' className='dropdown-menu my-account'>
                      <div className='row'>
                        <div className='col'>
                          <ul>
                            <li>
                              <a
                                className='nav-link'
                                href='https://secure2.mbsbooks.com//CustomerRegister?s=www.uwalumnistore.com'>
                                Register
                              </a>
                            </li>
                            <li>
                              <a
                                className='nav-link'
                                href='https://www.uwalumnistore.com/login'>
                                Login
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
