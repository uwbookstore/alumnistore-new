/* 
Fifth module
*/
var debugItemForms = false;
var token = $('input[name="__RequestVerificationToken"]').val();
function formatUSD(number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
}
$(document).on('click', '.colorOption', function (e) {
  e.preventDefault();
  var disabled = $(this).is(':disabled');
  if (disabled === true) {
    return false;
  }

  $('.colorOption').removeClass('typeSelected');
  $(this).addClass('typeSelected');
  var logoOne = $('#logoOne').val();
  var sizeOne = $('#sizeOne').val();
  var merid = $(this).attr('data-merid');
  var colorSelected = $(this).attr('data-color');
  var tgcid = $(this).attr('data-tgcid');
  $('.individualThumb[data-tgcid="' + tgcid + '"]').click();
  var indThumbValue = $('.individualThumb[data-tgcid="' + tgcid + '"]').attr(
    'src',
  );

  if (indThumbValue != undefined) {
    $('#hiddenImg').val(
      $('.individualThumb[data-tgcid="' + tgcid + '"]').attr('src'),
    );
  }

  $('#colorSelected').val(colorSelected);
  $('.selectedColor').html(colorSelected);
  var colorCode = $(this).attr('data-value');
  if (colorCode === '') {
    colorCode = '0';
  }
  $('#colorCodeSelected').val(colorCode);
  var sizeSelected = $('#sizeSelected').val();
  var sizeCode = $('#sizeCodeSelected').val();
  if (sizeCode === '') {
    sizeCode = '0';
  }
  var logoSelected = $('#logoSelected').val();
  var logoCode = $('#logoCodeSelected').val();
  if (logoCode === '') {
    logoCode = '0';
  }
  var showHex = 'True';
  var firstSelected = $('#firstSelected').val();
  if (
    firstSelected === undefined ||
    firstSelected.trim() === '' ||
    parseInt(firstSelected) >= 4 ||
    parseInt(firstSelected) <= 0
  ) {
    $('#firstSelected').val('1');
    firstSelected = 1;
  }
  $.ajax({
    type: 'POST',
    url: '//insitestore2.mbsbooks.com/uwmadison/MerchDetail/ColorTypeCode',
    dataType: 'json',
    data: {
      __RequestVerificationToken: token,
      merid: merid,
      colorSelected: colorSelected,
      colorCode: colorCode,
      sizeSelected: sizeSelected,
      sizeCode: sizeCode,
      logoSelected: logoSelected,
      logoCode: logoCode,
      firstSelected: firstSelected,
      showHex: showHex,
    },
    error: function (xhr) {
      $('#errorModal').modal('show');
      $('#errorModal').focus();
    },
    success: function (data, jqXHR) {
      if (data.typeOnly === undefined) {
        data.typeOnly = false;
      }
      if (data.colorOnly === undefined) {
        data.colorOnly = false;
      }
      if (data.sizeOnly === undefined) {
        data.sizeOnly === false;
      }
      if (data.logoOnly === undefined) {
        data.logoOnly = false;
      }
      if (data.typeError === undefined) {
        data.typeError = true;
      }

      resetInventoryDisplay(); // PC #52815
      if (data.typeOnly === true) {
        $('#typeselected').val(data.typeSelected);
        $('.addGiftRegButton').attr('data-dropdownValue', data.typeSelected);
        $('.addSingleReg').attr('data-dropdownValue', data.typeSelected);

        // PC #52815
        lcsSelectionChange(data.typeSelected);
      } else if (data.sizeOnly === true) {
        if (data.logoHtml === undefined) {
          data.logoHtml = '';
        }
        $('.lcsLogoWrapper').html(data.logoHtml);
        $('.lcsSizeWrapper').html(data.html);
        if (firstSelected === 1 || firstSelected === '1') {
          $('.selectedSize').html('');
          if (logoOne.toLowerCase() !== 'true') {
            $('.selectedLogo').html('');
          }
          $('#typeselected').val('');
        }
        if ($('.lcsSizeWrapper').length > 0) {
          var count = 0;
          $('.sizeOption').each(function () {
            var disabled = $(this).is(':disabled');
            if (disabled === false) {
              count = count + 1;
            }
          });
          if (count === 1) {
            $('.sizeOption').not(':disabled').click();
          }
        } else if ($('.lcsLogoWrapper').length > 0) {
          var count = 0;
          $('.logoOption').each(function () {
            var disabled = $(this).is(':disabled');
            if (disabled === false) {
              count = count + 1;
            }
          });
          if (count === 1) {
            $('.logoOption').not(':disabled').click();
          }
        }

        handleTypeCodeSlash(); // PC #52715
      } else if (data.logoOnly === true) {
        $('#typeselected').val('');
        $('.lcsLogoWrapper').html(data.html);
        if (firstSelected === 1 || firstSelected === '1') {
          if (sizeOne.toLowerCase() !== 'true') {
            $('.selectedLogo').html('');
          }
        }
        if ($('.lcsLogoWrapper').length > 0) {
          var count = 0;
          $('.logoOption').each(function () {
            var disabled = $(this).is(':disabled');
            if (disabled === false) {
              count = count + 1;
            }
          });
          if (count === 1) {
            $('.logoOption').not(':disabled').click();
          }
        }

        handleTypeCodeSlash(); // PC #52715
      } else if (data.typeError === true) {
        $('#errorModal').modal('show');
        $('#errorModal').focus();
      }
    },
  });
});
$(document).on('click', '.sizeOption', function (e) {
  e.preventDefault();
  var disabled = $(this).is(':disabled');
  if (disabled === true) {
    return false;
  }
  $('.sizeOption').removeClass('typeSelected');
  $(this).addClass('typeSelected');
  var merid = $(this).attr('data-merid');
  var sizeSelected = $(this).attr('data-size');
  $('#sizeSelected').val(sizeSelected);
  $('.selectedSize').html(sizeSelected);
  var sizeCode = $(this).attr('data-value');
  if (sizeCode === '') {
    sizeCode = '0';
  }
  $('#sizeCodeSelected').val(sizeCode);
  var colorSelected = $('#colorSelected').val();
  var colorCode = $('#colorCodeSelected').val();
  if (colorCode === '') {
    colorCode = '0';
  }
  var logoSelected = $('#logoSelected').val();
  var logoCode = $('#logoCodeSelected').val();
  if (logoCode === '') {
    logoCode = '0';
  }
  var showHex = 'True';
  var firstSelected = $('#firstSelected').val();
  if (
    firstSelected === undefined ||
    firstSelected.trim() === '' ||
    parseInt(firstSelected) >= 4 ||
    parseInt(firstSelected) <= 0
  ) {
    $('#firstSelected').val('2');
    firstSelected = 2;
  }
  $.ajax({
    type: 'POST',
    url: '//insitestore2.mbsbooks.com/uwmadison/MerchDetail/SizeTypeCode',
    dataType: 'json',
    data: {
      __RequestVerificationToken: token,
      merid: merid,
      colorSelected: colorSelected,
      colorCode: colorCode,
      sizeSelected: sizeSelected,
      sizeCode: sizeCode,
      logoSelected: logoSelected,
      logoCode: logoCode,
      firstSelected: firstSelected,
      showHex: showHex,
    },
    error: function (xhr) {
      $('#errorModal').modal('show');
      $('#errorModal').focus();
    },
    success: function (data, jqXHR) {
      if (data.typeOnly === undefined) {
        data.typeOnly = false;
      }
      if (data.colorOnly === undefined) {
        data.colorOnly = false;
      }
      if (data.sizeOnly === undefined) {
        data.sizeOnly === false;
      }
      if (data.logoOnly === undefined) {
        data.logoOnly = false;
      }
      if (data.typeError === undefined) {
        data.typeError = true;
      }

      resetInventoryDisplay(); // PC #52815
      if (data.typeOnly === true) {
        $('#typeselected').val(data.typeSelected);
        $('.addGiftRegButton').attr('data-dropdownValue', data.typeSelected);
        $('.addSingleReg').attr('data-dropdownValue', data.typeSelected);

        // PC #52815
        lcsSelectionChange(data.typeSelected);
      } else if (data.colorOnly === true) {
        $('#typeselected').val('');
        $('.lcsColorWrapper').html(data.html);
        if (firstSelected === 2 || firstSelected === '2') {
          $('.selectedColor').html('');
        }
        if ($('.lcsColorWrapper').length > 0) {
          var count = 0;
          $('.colorOption ').each(function () {
            var disabled = $(this).is(':disabled');
            if (disabled === false) {
              count = count + 1;
            }
          });
          if (count === 1) {
            $('.colorOption ').not(':disabled').click();
          }
        }

        handleTypeCodeSlash(); // PC #52715
      } else if (data.logoOnly === true) {
        $('#typeselected').val('');
        $('.lcsLogoWrapper').html(data.html);
        if (
          firstSelected === 1 ||
          firstSelected === '1' ||
          firstSelected === 2 ||
          firstSelected === '2'
        ) {
          $('.selectedLogo').html('');
        }
        if ($('.lcsLogoWrapper').length > 0) {
          var count = 0;
          $('.logoOption').each(function () {
            var disabled = $(this).is(':disabled');
            if (disabled === false) {
              count = count + 1;
            }
          });
          if (count === 1) {
            $('.logoOption').not(':disabled').click();
          }
        }

        handleTypeCodeSlash(); // PC #52715
      } else if (data.typeError === true) {
        $('#typeselected').val('');
        $('#errorModal').modal('show');
        $('#errorModal').focus();
      }
    },
  });
});
$(document).on('click', '.logoOption', function (e) {
  e.preventDefault();
  var disabled = $(this).is(':disabled');
  if (disabled === true) {
    return false;
  }
  $('.logoOption').removeClass('typeSelected');
  $(this).addClass('typeSelected');
  var merid = $(this).attr('data-merid');
  var logoSelected = $(this).attr('data-logo');
  $('#logoSelected').val(logoSelected);
  $('.selectedLogo').html(logoSelected);
  var logoCode = $(this).attr('data-value');
  if (logoCode === '') {
    logoCode = '0';
  }
  $('#logoCodeSelected').val(logoCode);
  var colorSelected = $('#colorSelected').val();
  var colorCode = $('#colorCodeSelected').val();
  if (colorCode === '') {
    colorCode = '0';
  }
  var sizeSelected = $('#sizeSelected').val();
  var sizeCode = $('#sizeCodeSelected').val();
  if (sizeCode === '') {
    sizeCode = '0';
  }
  var showHex = 'True';
  var firstSelected = $('#firstSelected').val();
  if (
    firstSelected === undefined ||
    firstSelected.trim() === '' ||
    parseInt(firstSelected) >= 4 ||
    parseInt(firstSelected) <= 0
  ) {
    $('#firstSelected').val('3');
    firstSelected = 3;
  }
  $.ajax({
    type: 'POST',
    url: '//insitestore2.mbsbooks.com/uwmadison/MerchDetail/LogoTypeCode',
    dataType: 'json',
    data: {
      __RequestVerificationToken: token,
      merid: merid,
      colorSelected: colorSelected,
      colorCode: colorCode,
      sizeSelected: sizeSelected,
      sizeCode: sizeCode,
      logoSelected: logoSelected,
      logoCode: logoCode,
      firstSelected: firstSelected,
      showHex: showHex,
    },
    error: function (xhr) {
      $('#errorModal').modal('show');
      $('#errorModal').focus();
    },
    success: function (data, jqXHR) {
      if (data.typeOnly === undefined) {
        data.typeOnly = false;
      }
      if (data.colorOnly === undefined) {
        data.colorOnly = false;
      }
      if (data.sizeOnly === undefined) {
        data.sizeOnly === false;
      }
      if (data.logoOnly === undefined) {
        data.logoOnly = false;
      }
      if (data.typeError === undefined) {
        data.typeError = true;
      }

      resetInventoryDisplay();
      if (data.typeOnly === true) {
        $('#typeselected').val(data.typeSelected);
        $('.addGiftRegButton').attr('data-dropdownValue', data.typeSelected);
        $('.addSingleReg').attr('data-dropdownValue', data.typeSelected);

        // PC #52815
        lcsSelectionChange(data.typeSelected);
      } else if (data.sizeOnly === true) {
        $('#typeselected').val('');
        $('.lcsSizeWrapper').html(data.html);
        if (firstSelected === 3 || firstSelected === '3') {
          $('.selectedSize').html('');
        }
        if ($('.lcsSizeWrapper').length > 0) {
          var count = 0;
          $('.sizeOption').each(function () {
            var disabled = $(this).is(':disabled');
            if (disabled === false) {
              count = count + 1;
            }
          });
          if (count === 1) {
            $('.sizeOption').not(':disabled').click();
          }
        }

        handleTypeCodeSlash(); // PC #52715
      } else if (data.colorOnly === true) {
        $('#typeselected').val('');
        $('.lcsColorWrapper').html(data.html);
        if (firstSelected === 3 || firstSelected === '3') {
          $('.selectedColor').html('');
        }
        if ($('.lcsColorWrapper').length > 0) {
          var count = 0;
          $('.colorOption ').each(function () {
            var disabled = $(this).is(':disabled');
            if (disabled === false) {
              count = count + 1;
            }
          });
          if (count === 1) {
            $('.colorOption ').not(':disabled').click();
          }
        }

        handleTypeCodeSlash(); // PC #52715
      } else if (data.typeError === true) {
        $('#typeselected').val('');
        $('#errorModal').modal('show');
        $('#errorModal').focus();
      }
    },
  });
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url.toLowerCase());
  if (!results) return '';
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
$(document).ready(function () {
  $('.addToCartTypes').click(function () {
    $('.merchSelectError').hide();
    $('.merchDisclaimerError').hide();
    var merid = $(this).attr('data-Id');
    var typeValue = $('#typeselected').val();
    var name = $(this).attr('data-name');
    var qty = $('#merchQTY').val();
    var istypeless = false;
    var disclaimer = $(this).attr('data-disclaimer');
    var isChecked = $('.merchDisclaimer').is(':checked');
    if (typeValue.trim() === '' || typeValue.trim() === '0') {
      $('.merchSelectError').show();
      $('.merchDisclaimerError').hide();
      return false;
    }
    if (disclaimer.toLowerCase() == 'true') {
      if (isChecked === false) {
        $('.merchDisclaimerError').show();
        $('.merchSelectError').hide();
        $('.merchDisclaimer').focus();
        return false;
      }
    }
    $('.hiddenForm').attr('data-form', merid);
    $.ajax({
      url: '//insitestore2.mbsbooks.com/uwmadison/shoppingCart/AddMerchItemQuick',
      data: {
        __RequestVerificationToken: token,
        merid: merid,
        typeValue: typeValue,
        qty: qty,
      },
      dataType: 'json',
      type: 'POST',
      error: function (xhr) {
        $('#errorModal').modal('show');
        $('#errorModal').focus();
      },
      success: function (data, jqXHR) {
        if (data.showForm == true) {
          if (debugItemForms) console.log('showForm = true 1');

          let price = $('#hiddenPriceVal').val();
          let totalPrice = price * qty;
          //Item Form
          $('.itemFormModalContent').html(data.modaldata);
          $('.itemFormTitle').html(name);
          $('#itemFormButton').val(merid);
          var colorDesc = $('.merchColorDesc').text();
          var sizeDesc = $('.merchSizeDesc').text();
          var logoDesc = $('.merchLogoDesc').text();
          var selectedColor = $('.selectedColor').text();
          var selectedSize = $('.selectedSize').text();
          var selectedLogo = $('.selectedLogo').text();
          $('#itemFormTypeCode').val(true);
          $('#itemFormType').val('single');
          $('#itemFormQty').val(qty);
          $('#itemFormCurrentPrice').val(formatUSD(totalPrice));
          $('#itemFormcolorDesc').val(colorDesc);
          $('#itemFormcolorValue').val(selectedColor);
          $('#itemFormlogoDesc').val(logoDesc);
          $('#itemFormlogoValue').val(selectedLogo);
          $('#itemFormsizeDesc').val(sizeDesc);
          $('#itemFormsizeValue').val(selectedSize);
          $('#itemFormSKU').val($('#hiddenSKU').val());
          $('#itemFormMerchImage').val($('#hiddenImg').val());
          $('#itemFormModal').modal('show');

          // GA4 - item form
          if (ga4.enabled) {
            if (ga4_items && ga4_items.length) {
              const ga4_item = ga4_items[0];
              const ga4_item_dc = ga4.copyItem(ga4_item);
              ga4_item_dc.quantity = parseInt(qty);

              var selectedLCS = ga4.lcsBuildString(
                selectedLogo,
                selectedColor,
                selectedSize,
              );

              if (selectedLCS && selectedLCS.length > 0)
                ga4_item_dc.item_category = ga4.safeTrim(selectedLCS);

              //if (ga4_item_dc._isWebSku) {
              //    ga4_item_dc.price = parseFloat(model.regularPrice);
              //    delete ga4_item_dc._isWebSku;
              //}

              // category2 = item form data
              //ga4_item_dc.item_category2 = '';

              // empty our temporary array
              ga4_items_temp = [];

              // push our deep copy to it
              // this deep copy in the temp array will be what gets sent when saving an item form successfully
              ga4_items_temp.push(ga4_item_dc);
            }
          }
          // end GA4 - item form

          return;
        } else {
          if (data.notype == true) {
            //Didn't selet type
            $('.merchSelectError').show();
            $('.merchDisclaimerError').hide();
            return;
          } else if (data.showCartModal == true) {
            //cart mismatch loyalty/merch
            $('.addedToCart').addClass('displayn');
            $('.addedToCart').removeClass('displayb');
            $('.cartTypeBody').html(data.cartType);
            $('#cartType').modal('show');
            return;
          } else if (data.LoyaltyModal == true) {
            //not enough points
            $('.addedToCart').addClass('displayn');
            $('.addedToCart').removeClass('displayb');
            $('#notEnough').modal('show');
            return;
          } else {
            var count = data.count;
            var total = data.total;
            total = parseFloat(Math.round(total * 100) / 100).toFixed(2);
            total = '$' + total;
            $('#ItemCount').text(count);
            $('#SubTotal').text(total);
            var shoppingURL =
              'http://insitestore2.mbsbooks.com/uwmadison/shoppingcart';
            var colorDesc = $('.merchColorDesc').text();
            var sizeDesc = $('.merchSizeDesc').text();
            var logoDesc = $('.merchLogoDesc').text();
            var selectedColor = $('.selectedColor').text();
            var selectedSize = $('.selectedSize').text();
            var selectedLogo = $('.selectedLogo').text();
            $('.addedToCartLCS').html(
              '<strong>' +
                colorDesc +
                ' </strong><span>' +
                selectedColor +
                '</span> <strong>' +
                sizeDesc +
                ' </strong><span>' +
                selectedSize +
                '</span> <strong>' +
                logoDesc +
                ' </strong><span>' +
                selectedLogo +
                '</span>',
            );
            $('.addedToCartLCS').css('margin-bottom', '10px');
            $('.addedToCartName').html($('.merchTitle').text());
            $('.addedToCartPrice').html($('.merchPriceCurrent').text());
            $('.addedToCartDeposit').html($('.merchDepositText').html());
            $('.addedToCartSKU').html(
              '<strong>Item: </strong>' + $('.itemSKU').text(),
            );
            $('.addedToCartQTY').html('<strong>Quantity: </strong>' + qty);

            /* Start - Handle added to cart image */
            // First clean the name of the product
            const cleanedName = $('.merchTitle')
              .text()
              .replace(/<\/?[^>]+(>|$)/g, ' ')
              .replace(/\s+/g, ' ')
              .trim();

            // Second, grab the source location of the image
            const imageSrcStr = $('.merchDetailImage').attr('src');

            // Third, create image element to insert into DOM
            const imageElement = document.createElement('img');
            imageElement.className = 'addedToCartImage img-responsive';
            imageElement.src = imageSrcStr;
            imageElement.alt = cleanedName;
            imageElement.ariaHidden = 'true';

            // Fourth, clean inner html and appendChild of imageElement
            document.querySelector('.addedToCartImageWrap').innerHTML = '';
            document
              .querySelector('.addedToCartImageWrap')
              .appendChild(imageElement);
            /* Done - Handle added to cart image */

            $('.addedToCartCheckout').attr('href', shoppingURL);
            $('.addedToCart').removeClass('displayn');
            $('.addedToCart').addClass('displayb');
            $('#addedToCart').modal('show');

            // GA4 event
            if (ga4.enabled) {
              if (ga4_items && ga4_items.length) {
                const items = [];
                const ga4_item = ga4_items[0];
                const ga4_item_dc = ga4.copyItem(ga4_item);
                ga4_item_dc.quantity = parseInt(qty);

                var selectedLCS = ga4.lcsBuildString(
                  selectedLogo,
                  selectedColor,
                  selectedSize,
                );

                if (selectedLCS && selectedLCS.length > 0)
                  ga4_item_dc.item_category = ga4.safeTrim(selectedLCS);

                if (ga4_item_dc._isWebSku) {
                  ga4_item_dc.price = parseFloat(model.regularPrice);
                  delete ga4_item_dc._isWebSku;
                }

                items.push(ga4_item_dc);

                if (lga4_module.add_to_cart.enabled) ga4.add_to_cart(items);
              }
            }
          }
        }
      },
    });
  });

  var disclaimer = getParameterByName('disclaimer').toLowerCase();
  if (disclaimer === 'true') {
    $('.merchDisclaimerError').show();
  }
  $('.merchThumbnail').each(function (e) {
    e = e + 1;
    $(this).attr('data-id', e);
  });
  $('.merchThumbnail').click(function () {
    var count = $(this).attr('data-count');
    var imageCircle = $('.imageCircle[data-count="' + count + '"]');
    var full = $(this).find('img').attr('data-full');
    var thumb = $(this).find('img').attr('src');
    var high = $(this).find('img').attr('data-high');
    var dataID = $(this).attr('data-id');
    $('.merchDetailImage').attr('src', full);
    $('.merchDetailImage').attr('data-high', high);
    $('.merchDetailImage').attr('data-thumb', thumb);
    $('.merchDetailImage').attr('data-id', dataID);
    $('.merchThumbnail').removeClass('opacity5');
    $('.merchThumbnail').removeClass('thumbSelected');
    $('.merchThumbnail').not(this).addClass('opacity5');
    $('.imageCircle').removeClass('circleActive');
    $('.imageCircle').removeClass('circleNotActive');
    $('.imageCircle').not(imageCircle).addClass('circleNotActive');
    $(imageCircle).addClass('circleActive');
    $(this).addClass('thumbSelected');
  });
  $('.merchDetailImage').click(function () {
    var width = $(window).width();
    if (width <= 767) {
      return false;
    }
    var full = $(this).attr('src');
    var high = $(this).attr('data-high');
    var thumb = $(this).attr('data-thumb');
    var altText = $(this).attr('alt');
    var dataID = $(this).attr('data-id');
    var image1 =
      '<img data-id="' +
      dataID +
      '" class="imageLightBoxBig img-responsive margin_auto" src="' +
      high +
      '" alt="' +
      altText +
      '" aria-hidden="true" />';
    $('.modalDetailImage').html('');
    $('.modalDetailThumbnail').html('');
    $('.modalDetailImage').prepend(image1);
    $('.merchThumbnail').each(function (e) {
      e = e + 1;
      $('.modalDetailImage').attr('data-count', e);
      var thumbSource = $(this).find('img').attr('src');
      var high = $(this).find('img').attr('data-high');
      var thumbAlt = $(this).find('img').attr('alt');
      var thumbHTML =
        '<img width="100" data-id="' +
        e +
        '" class="imageLightBoxSmall img-responsive img-thumbnail right5 verticalTop displayib" src="' +
        thumbSource +
        '" data-high="' +
        high +
        '" alt="' +
        thumbAlt +
        '"/>';
      $('.modalDetailThumbnail').append(thumbHTML);
    });
    $('.modalDetailThumbnail').append('<div class="clear"></div>');
    $('#imageLightBox').modal('show');
  });

  $('#imageLightBox').on('shown.bs.modal', function () {
    var height = $('.modalDetailImage').find('img').height();
    var height2 = $('.imageLightBoxLeft').height();
    var imageHeight = height / 2;
    var imageHeight = imageHeight - height2;
    $('.imageLightBoxLeft').css('margin-top', imageHeight);
    $('.imageLightBoxRight').css('margin-top', imageHeight);
  });
  $('.imageLightBoxLeft').click(function () {
    var dataID = $('.imageLightBoxBig').attr('data-id');
    var dataCount = $('.modalDetailImage').attr('data-count');
    var data = dataID - 1;
    if (dataID != 1) {
      var src = $('.modalDetailThumbnail')
        .find('[data-id="' + data + '"]')
        .attr('data-high');
      var newDataID = $('.modalDetailThumbnail')
        .find('[data-id="' + data + '"]')
        .attr('data-id');
      var newAltText = $('.modalDetailThumbnail')
        .find('[data-id="' + data + '"]')
        .attr('alt');
      $('.imageLightBoxBig').attr('src', src);
      $('.imageLightBoxBig').attr('alt', newAltText);
      $('.imageLightBoxBig').attr('data-id', newDataID);
    } else {
      var src = $('.modalDetailThumbnail')
        .find('[data-id="' + dataCount + '"]')
        .attr('data-high');
      var newDataID = $('.modalDetailThumbnail')
        .find('[data-id="' + dataCount + '"]')
        .attr('data-id');
      var newAltText = $('.modalDetailThumbnail')
        .find('[data-id="' + dataCount + '"]')
        .attr('alt');
      $('.imageLightBoxBig').attr('src', src);
      $('.imageLightBoxBig').attr('alt', newAltText);
      $('.imageLightBoxBig').attr('data-id', newDataID);
    }
  });
  $('.imageLightBoxRight').click(function () {
    var dataID = $('.imageLightBoxBig').attr('data-id');
    var dataCount = $('.modalDetailImage').attr('data-count');
    var data = parseInt(dataID);
    data = data + 1;
    if (dataID != dataCount) {
      var src = $('.modalDetailThumbnail')
        .find('[data-id="' + data + '"]')
        .attr('data-high');
      var newDataID = $('.modalDetailThumbnail')
        .find('[data-id="' + data + '"]')
        .attr('data-id');
      var newAltText = $('.modalDetailThumbnail')
        .find('[data-id="' + data + '"]')
        .attr('alt');
      $('.imageLightBoxBig').attr('src', src);
      $('.imageLightBoxBig').attr('alt', newAltText);
      $('.imageLightBoxBig').attr('data-id', newDataID);
    } else {
      var src = $('.modalDetailThumbnail')
        .find('[data-id="1"]')
        .attr('data-high');
      var newDataID = $('.modalDetailThumbnail')
        .find('[data-id="1"]')
        .attr('data-id');
      var newAltText = $('.modalDetailThumbnail')
        .find('[data-id="1"]')
        .attr('alt');
      $('.imageLightBoxBig').attr('src', src);
      $('.imageLightBoxBig').attr('alt', newAltText);
      $('.imageLightBoxBig').attr('data-id', newDataID);
    }
  });
  $(document).on('click', '.imageLightBoxSmall', function () {
    var source = $(this).attr('data-high');
    var altText = $(this).attr('alt');
    var dataID = $(this).attr('data-id');
    $('.imageLightBoxBig').attr('src', source);
    $('.imageLightBoxBig').attr('alt', altText);
    $('.imageLightBoxBig').attr('data-id', dataID);
  });
  $(window).resize(function () {
    var height = $('.modalDetailImage').find('img').height();
    var height2 = $('.imageLightBoxLeft').height();
    var imageHeight = height / 2;
    var imageHeight = imageHeight - height2;
    $('.imageLightBoxLeft').css('margin-top', imageHeight);
    $('.imageLightBoxRight').css('margin-top', imageHeight);
    if ($(window).width() > 991) {
      $('.imageLightBoxLeft').addClass('btn-lg');
      $('.imageLightBoxRight').addClass('btn-lg');
    } else {
      $('.imageLightBoxLeft').removeClass('btn-lg');
      $('.imageLightBoxRight').removeClass('btn-lg');
    }
  });
});

$(document).ready(function () {
  handleTypeCodeSlash();
});

// PC #52815
function handleTypeCodeSlash() {
  document.querySelectorAll('.typeCodeOption[disabled]').forEach((button) => {
    const width = button.clientWidth;
    const height = button.clientHeight;
    const angle = Math.atan(height / width) * (180 / Math.PI);

    button.style.setProperty('--slash-angle', `${-angle}deg`);
  });
}

// PC #52815
$(document).ready(function () {
  // PC #52826
  // Add check in the event that no selection is necessary, and the typecodes are already selected by default
  inventoryDisplayInitialLoad();

  bindLcsSelectionControls();
});

// PC #52815
function inventoryDisplayInitialLoad() {
  const lcsDataElements = $('.lcs-inventory-display');

  if (lcsDataElements && lcsDataElements.length == 1) {
    const mt_id = $(lcsDataElements[0]).attr('data-id');
    lcsSelectionChange(mt_id);
  }
}

// PC #52815
function resetInventoryDisplay() {
  $('.inventory-display-wrapper').addClass('force-hidden');
  $('.inventory-display-orb').attr('fill', '');
  $('.inventory-display-orb').attr('stroke', '');
  $('.inventory-display-orb').removeClass('in-stock low-stock no-stock');
  $('.inventory-display-text').attr('style', '');
  $('.inventory-display-text').removeClass('in-stock low-stock no-stock');
  $('.inventory-display-text').text('');
}

// PC #52815
function lcsSelectionChange(mt_id) {
  // First, reset the display
  if (mt_id == undefined || mt_id == '' || mt_id == null) return;

  // Find the proper hidden input based on mt_id
  const dataElement = $(`.lcs-inventory-display[data-id=${mt_id}]`);

  if (dataElement == undefined) {
    //console.log('dataElement not found for', mt_id);
    return;
  }

  //<input type="hidden" class="lcs-inventory-display" data-id="type.Id" data-message="type.inventoryDisplayMessage" data-textcolor="type.inventoryTextColor" data-orbcolor="type.inventoryOrbColor" data-class="type.inventoryClass" />

  const message = $(dataElement).attr('data-message');
  const textColor = $(dataElement).attr('data-textcolor');
  const orbColor = $(dataElement).attr('data-orbcolor');
  const mclass = $(dataElement).attr('data-class');

  if (message == undefined || message == null || message == '') {
    resetInventoryDisplay();
    return;
  }

  // Set the message text
  $('.inventory-display-text').text(message);

  // Set the message color
  $('.inventory-display-text').css('color', textColor);

  // Set the orb color
  $('.inventory-display-orb').attr('stroke', orbColor);
  $('.inventory-display-orb').attr('fill', orbColor);

  // Set the class
  $('.inventory-display-text').addClass(mclass);

  // Display it
  $('.inventory-display-wrapper').removeClass('force-hidden');
}

// PC #52815
function bindLcsSelectionControls() {
  $('.merchDropdown').change(function () {
    const selectedVal = $(this).find('option:selected').val();
    lcsSelectionChange(selectedVal);
  });
}
