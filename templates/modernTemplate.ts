const modernTemplate = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>{{pageTitle}}</title>
  <meta name="description" content="{{metaDescription}}">
  <meta name="keywords" content="{{metaKeywords}}">
  <meta name="author" content="{{metaAuthor}}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="shortcut icon" href="https://htmldemo.net/shome/shome/assets/img/favicon.ico" type="image/x-icon">
    
  
    
{{externalStyles}}

  <style>
{{customStyles}}
  </style>
</head>

<body data-aos-easing="ease" data-aos-duration="1200" data-aos-delay="0">

<div class="wrapper">

  <main class="main-content">

    <!-- HEADER / LOGO -->
    <div class="pb--10">
      <div class="container pt--0 pb--0">
        <div class="row">
          <div class="col-12">
            <div class="page-header-content">
              <h2 class="title" style="color:#000">
                <img src="{{brandLogo}}" width="150px" alt="Brand Logo">
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PRODUCT DETAILS -->
    <section class="product-area product-single-area" id="printContent">
      <div class="container" style="padding:5px 5px 5px 15px">
        <div class="row">
          <div class="col-12">
            <div class="product-single-item">
              <div class="row">

                <!-- PRODUCT IMAGES -->
                <div class="col-xl-6">
                  <div class="product-single-thumb">
                    
                    <!-- Main images slider -->
                    <div class="swiper-container single-product-thumb single-product-thumb-slider">
                      <div class="swiper-wrapper">
                        {{mainImages}}
                      </div>
                    </div>

                    <!-- Thumbnails -->
                    <div class="swiper-container single-product-nav single-product-nav-slider">
                      <div class="swiper-wrapper">
                        {{thumbnailImages}}
                      </div>
                    </div>

                  </div>
                </div>

                <!-- PRODUCT INFO -->
                <div class="col-xl-6">
                  <div class="product-single-info">

                    <div class="review-status" style="margin-top:40px">
                      <div class="product--info">

                        <h1 class="product--title">
                          {{productName}}
                        </h1>

                        <h2 class="product--sub-title">
                          {{productSubtitle}}
                        </h2>

                        <div class="product-detail">
                          <span class="product-label">Style Name:</span>
                          <span class="product-value">{{styleName}}</span>
                        </div>

                        <div class="product-detail">
                          <span class="product-label">Category:</span>
                          <span class="product-value">{{category}}</span>
                        </div>

                      </div>
                    </div>

                    <!-- SPECIFICATIONS TABLE -->
                    <div class="row">
                      <div class="block content--description-left">
                        <div class="product--properties panel">
                          <table class="product--properties-table">
                            <tbody>
                              {{specifications}}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div><!-- row -->
            </div>
          </div>
        </div>

        <!-- COMPANY DESCRIPTION SECTION -->
        <div class="row mt-5">
          <div class="col-12">

            <div class="elementor-widget-container">

              <div class="position-relative">

                <h4>{{companyTitle}}</h4>
                <p>{{companyDescription}}</p>

                <h4 class="mt-2">{{focusTitle}}</h4>
                <p>{{focusDescription}}</p>

             

               
                <ul class="custom-bullets">
                  {{bulletPoints}}
                </ul>

                <p>{{finalNote}}</p>

              </div>
              
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- PDF DOWNLOAD SECTION -->
    <div class="pdf-download-section">
      <div class="pdf-download-container mb-5 mt-5">
        <a href="{{pdfDownloadUrl}}" class="pdf-download-btn">
          <i class="fas fa-file-pdf"></i>
          {{pdfButtonText}}
        </a>
      </div>
    </div>

  </main>

  <!-- FOOTER -->
  <footer class="footer-area no-pdf" style="padding:5px 0;">
    <div class="container">

      <div class="row align-items-center text-center text-md-start">

        <div class="col-md-3 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start">
          <img src="{{footerLogo}}" width="70%" alt="Footer Logo">
        </div>

        <div class="col-md-5 text-center">
          <h1 class="footer-company-name mb-0" style="color:#fff">
            {{companyName}}
          </h1>
        </div>

        <div class="col-md-4 d-flex flex-column align-items-center align-items-md-end text-center text-md-end">
          <p class="mb-1 small"><strong><i class="fa fa-phone"></i></strong> 
            <a href="tel:{{contactPhone}}" style="color:#fff">{{contactPhone}}</a>
          </p>

          <p class="mb-1 small">
            <strong><i class="fa-brands fa-whatsapp"></i></strong>
            <a href="https://wa.me/{{contactWhatsapp}}" target="_blank" style="color:#fff">
              {{contactWhatsapp}}
            </a>
          </p>

          <p class="mb-0 small">
            <strong><i class="fa fa-envelope"></i></strong>  
            <a href="mailto:{{contactEmail}}" style="color:#fff">{{contactEmail}}</a>
          </p>
        </div>

      </div>

     

    </div>
  </footer>
  <div class="footer-bottom" style="background: #124294; padding: 15px 0; text-align: center;">
  <p style="text-align:center;color:#fff">{{footerCopyright}}</p>
</div>
</div>
<!-- CONFIRMATION MODAL -->
<div id="confirmationModal" 
  style="
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    background: rgba(0,0,0,0.6); 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    z-index: 9999;
  ">

  <div style="
      background: #fff; 
      padding: 25px; 
      border-radius: 10px; 
      width: 90%; 
      max-width: 400px; 
      text-align: center;
    ">

    <h2 style="margin-bottom: 15px;">Confirmation Required</h2>
    <p style="margin-bottom: 25px;">Do you want to view this landing page?</p>

    <button id="confirmYes"
      style="
        background: #0d6efd; 
        color: #fff; 
        padding: 10px 20px; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer;
        margin-right: 10px;
      ">
      Yes
    </button>

    <button id="confirmNo"
      style="
        background: #dc3545; 
        color: #fff; 
        padding: 10px 20px; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer;
      ">
      No
    </button>

  </div>

</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("confirmationModal");
  const yesBtn = document.getElementById("confirmYes");
  const noBtn = document.getElementById("confirmNo");

  yesBtn.onclick = () => modal.style.display = "none";
  noBtn.onclick = () => window.location.href = "https://google.com";
});
</script>
{{externalScripts}}
<script>
  // basic fallback initialiser (in case library initialisers need to run)
  window.__PRODUCT_ID__ = "{{productId}}";
</script>
</body>
</html>`;

export default modernTemplate;


