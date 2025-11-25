const templates = {
  modern: `<!DOCTYPE html>
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
</html>`,

  ecommerce: `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{pageTitle}}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  {{externalStyles}}
  <style>{{customStyles}}</style>
</head>
<body>
  <div class="wrapper">
    <main class="main-content">
      <div class="pb--10" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); position: sticky; top: 0; z-index: 1000;">
        <div class="container py-3">
          <div class="row align-items-center">
            <div class="col-6">
              <h2 class="title" style="color:#fff; margin: 15px 0;">
                <img src="{{brandLogo}}" width="120px" alt="Brand Logo" style="filter: brightness(0) invert(1);">
              </h2>
            </div>
            <div class="col-6 text-end">
              <a href="{{pdfDownloadUrl}}" class="pdf-download-btn" style="display: inline-block; padding: 10px 20px; font-size: 14px; background:#fff; color:#667eea; border-radius:25px; text-decoration:none;">
                <i class="fas fa-file-pdf"></i> Download
              </a>
            </div>
          </div>
        </div>
      </div>
      <section style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 60px 0 40px;">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <div class="product--info">
                <h1 class="product--title" style="color: #fff; font-size: 3rem; margin-bottom: 15px;">{{productName}}</h1>
                <h2 class="product--sub-title" style="color: rgba(255,255,255,0.9); font-size: 1.5rem;">{{productSubtitle}}</h2>
                <div style="display: inline-flex; gap: 30px; background: rgba(255,255,255,0.15); padding: 15px 40px; border-radius: 50px; margin-top:20px;">
                  <div><span style="color: rgba(255,255,255,0.8);">Style:</span> <span style="color: #fff; font-weight: 600;">{{styleName}}</span></div>
                  <div><span style="color: rgba(255,255,255,0.8);">Category:</span> <span style="color: #fff; font-weight: 600;">{{category}}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="product-area product-single-area" style="margin-top: -40px;">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="product-single-item" style="background: #fff; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">
                <div class="row g-0">
                  <div class="col-xl-7" style="background: #f8f9fa; padding: 40px;">
                    <div class="product-single-thumb">
                      <div class="swiper-container single-product-thumb" style="border-radius: 15px; overflow: hidden;">
                        <div class="swiper-wrapper">{{mainImages}}</div>
                      </div>
                      <div class="swiper-container single-product-nav" style="padding: 20px 10px 0;">
                        <div class="swiper-wrapper">{{thumbnailImages}}</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-5" style="padding: 40px 30px;">
                    <div class="product-single-info">
                      <div style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 8px 20px; border-radius: 20px; font-size: 13px; font-weight: 600; margin-bottom: 25px;">
                        <i class="fas fa-star"></i> Premium Quality
                      </div>
                      <div class="row">
                        <div class="block content--description-left">
                          <h3 style="font-size: 1.5rem; margin-bottom: 20px; color: #333; border-bottom: 3px solid #667eea; display: inline-block; padding-bottom: 8px;">
                            <i class="fas fa-list-check"></i> Specifications
                          </h3>
                          <div class="product--properties panel" style="background: #f8f9fa; border-radius: 12px; padding: 20px;">
                            <table class="product--properties-table">
                              <tbody>{{specifications}}</tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div style="margin-top: 30px; padding: 25px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; text-align: center;">
                        <p style="color: #fff; margin-bottom: 15px; font-size: 16px;"><i class="fas fa-phone-volume"></i> Get in Touch</p>
                        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                          <a href="tel:{{contactPhone}}" style="background: #fff; color: #667eea; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600;">
                            <i class="fa fa-phone"></i> Call
                          </a>
                          <a href="https://wa.me/{{contactWhatsapp}}" target="_blank" style="background: #25D366; color: #fff; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600;">
                            <i class="fa-brands fa-whatsapp"></i> WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12">
              <div class="elementor-widget-container" style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 50px 40px; border-radius: 20px;">
                <div class="text-center mb-4">
                  <h4 style="font-size: 2rem; color: #333;">{{companyTitle}}</h4>
                </div>
                <p style="text-align: center; font-size: 1.1rem; color: #555;">{{companyDescription}}</p>
                <div class="text-center mb-4 mt-5">
                  <h4 style="font-size: 1.8rem; color: #333;">{{focusTitle}}</h4>
                </div>
                <p style="text-align: center; font-size: 1.05rem; color: #555;">{{focusDescription}}</p>
                <ul class="custom-bullets" style="background: #fff; padding: 30px; border-radius: 12px; margin: 40px auto; max-width: 600px;">
                  {{bulletPoints}}
                </ul>
                <p style="text-align: center; font-size: 1.05rem; color: #555; font-style: italic;">{{finalNote}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer-area" style="padding:40px 0; background: #1a1a2e;">
      
    <div class="container">
        <div class="row align-items-center text-center">
          <div class="col-md-4">
            <img src="{{footerLogo}}" width="120px" alt="Footer Logo" style="filter: brightness(0) invert(1);">
          </div>
          <div class="col-md-4">
            <h3 style="color:#fff; font-size: 1.8rem;">{{companyName}}</h3>
          </div>
          <div class="col-md-4">
            <p style="color:#fff; margin:5px 0;"><i class="fa fa-phone"></i> {{contactPhone}}</p>
            <p style="color:#fff; margin:5px 0;"><i class="fa fa-envelope"></i> {{contactEmail}}</p>
          </div>
         
        </div>
        
      </div>
    </footer>
         <div class="footer-bottom" style="background: #0f0f1a; padding: 15px 0; text-align: center;">
  <p style="text-align:center;color:#fff">{{footerCopyright}}</p>
</div>


  </div>
  {{externalScripts}}
</body>
</html>
  `,
  standerd:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{pageTitle}}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  {{externalStyles}}
  <style>{{customStyles}}</style>
</head>
<body>
  <div class="wrapper">
    <!-- Floating Header -->
    <header style="background: #fff; box-shadow: 0 2px 20px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 1000;">
      <div class="container py-3">
        <div class="row align-items-center">
          <div class="col-4">
            <img src="{{brandLogo}}" width="140px" alt="Brand Logo">
          </div>
          <div class="col-4 text-center">
            <div style="display: inline-flex; gap: 15px;">
              <span style="color: #667eea; font-weight: 600;">{{category}}</span>
              <span style="color: #ddd;">|</span>
              <span style="color: #764ba2; font-weight: 600;">{{styleName}}</span>
            </div>
          </div>
          <div class="col-4 text-end">
            <a href="{{pdfDownloadUrl}}" class="pdf-download-btn" style="display: inline-block; padding: 10px 24px; font-size: 14px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; border-radius: 25px; text-decoration: none; font-weight: 600;">
              <i class="fas fa-download"></i> PDF
            </a>
          </div>
        </div>
      </div>
    </header>

    <main class="main-content">
      <!-- Hero Section with Breadcrumb Style -->
      <section style="background: linear-gradient(to right, #f8f9fa 0%, #e9ecef 100%); padding: 30px 0;">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div style="display: inline-block; background: #fff; padding: 12px 25px; border-radius: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
                <span style="color: #667eea; font-weight: 600;">
                  <i class="fas fa-star"></i> Premium Quality Product
                </span>
              </div>
              <h1 style="color: #1a1a2e; font-size: 3.5rem; margin: 20px 0 10px; font-weight: 700;">{{productName}}</h1>
              <h2 style="color: #666; font-size: 1.4rem; font-weight: 400;">{{productSubtitle}}</h2>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Product Section - Side by Side -->
      <section class="product-area" style="padding: 60px 0; background: #fff;">
        <div class="container">
          <div class="row g-4">
            <!-- Left Column - Images -->
            <div class="col-lg-6">
              <div style="position: sticky; top: 100px;">
                <div class="product-single-thumb">
                  <div class="swiper-container single-product-thumb" style="border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.12);">
                    <div class="swiper-wrapper">{{mainImages}}</div>
                  </div>
                  <div class="swiper-container single-product-nav" style="padding: 20px 0;">
                    <div class="swiper-wrapper">{{thumbnailImages}}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column - Info & Specs -->
            <div class="col-lg-6">
              <div class="product-single-info">
                <!-- Specifications Card -->
                <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 20px; padding: 40px; margin-bottom: 30px; border-left: 5px solid #667eea;">
                  <h3 style="font-size: 1.8rem; margin-bottom: 25px; color: #1a1a2e; font-weight: 700;">
                    <i class="fas fa-cog"></i> Technical Specifications
                  </h3>
                  <div class="product--properties panel" style="background: #fff; border-radius: 15px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <table class="product--properties-table" style="width: 100%;">
                      <tbody>{{specifications}}</tbody>
                    </table>
                  </div>
                </div>

                <!-- Contact Card -->
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 20px; padding: 40px; box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);">
                  <h4 style="color: #fff; margin-bottom: 10px; font-size: 1.5rem; font-weight: 600;">
                    <i class="fas fa-headset"></i> Need More Information?
                  </h4>
                  <p style="color: rgba(255,255,255,0.9); margin-bottom: 25px;">Our team is ready to assist you with any questions.</p>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <a href="tel:{{contactPhone}}" style="background: #fff; color: #667eea; padding: 15px; border-radius: 15px; text-decoration: none; font-weight: 600; text-align: center; transition: all 0.3s;">
                      <i class="fa fa-phone"></i><br>Call Now
                    </a>
                    <a href="https://wa.me/{{contactWhatsapp}}" target="_blank" style="background: #25D366; color: #fff; padding: 15px; border-radius: 15px; text-decoration: none; font-weight: 600; text-align: center; transition: all 0.3s;">
                      <i class="fa-brands fa-whatsapp"></i><br>WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Company Information Section -->
      <section style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 80px 0; position: relative; overflow: hidden;">
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.1; background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px);"></div>
        <div class="container" style="position: relative; z-index: 1;">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div style="background: rgba(255,255,255,0.95); padding: 50px; border-radius: 25px; box-shadow: 0 20px 60px rgba(0,0,0,0.2);">
                <div class="text-center mb-4">
                  <div style="width: 80px; height: 4px; background: linear-gradient(to right, #667eea, #764ba2); margin: 0 auto 20px;"></div>
                  <h3 style="font-size: 2.5rem; color: #1a1a2e; font-weight: 700; margin-bottom: 15px;">{{companyTitle}}</h3>
                  <p style="font-size: 1.15rem; color: #555; line-height: 1.8;">{{companyDescription}}</p>
                </div>

                <div class="text-center my-5">
                  <div style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 15px 30px; border-radius: 30px;">
                    <h4 style="font-size: 1.6rem; color: #fff; margin: 0; font-weight: 600;">{{focusTitle}}</h4>
                  </div>
                </div>

                <p style="text-align: center; font-size: 1.1rem; color: #555; margin-bottom: 40px; line-height: 1.8;">{{focusDescription}}</p>

                <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 35px; border-radius: 15px; margin: 30px 0;">
                  <ul class="custom-bullets" style="list-style: none; padding: 0; margin: 0;">
                    {{bulletPoints}}
                  </ul>
                </div>

                <p style="text-align: center; font-size: 1.1rem; color: #667eea; font-weight: 600; font-style: italic; margin-top: 30px;">{{finalNote}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Modern Footer -->
    <footer style="background: #1a1a2e; padding: 50px 0 0;">
      <div class="container">
        <div class="row text-center text-md-start g-4">
          <div class="col-md-4">
            <img src="{{footerLogo}}" width="140px" alt="Footer Logo" style="filter: brightness(0) invert(1); margin-bottom: 20px;">
            <p style="color: rgba(255,255,255,0.7); font-size: 0.95rem;">Quality products and exceptional service.</p>
          </div>
          <div class="col-md-4 text-center">
            <h4 style="color: #fff; font-size: 1.6rem; margin-bottom: 15px; font-weight: 600;">{{companyName}}</h4>
            <div style="width: 60px; height: 3px; background: linear-gradient(to right, #667eea, #764ba2); margin: 0 auto;"></div>
          </div>
          <div class="col-md-4 text-md-end">
            <div style="margin-bottom: 10px;">
              <i class="fa fa-phone" style="color: #667eea; margin-right: 8px;"></i>
              <a href="tel:{{contactPhone}}" style="color: #fff; text-decoration: none;">{{contactPhone}}</a>
            </div>
            <div>
              <i class="fa fa-envelope" style="color: #764ba2; margin-right: 8px;"></i>
              <a href="mailto:{{contactEmail}}" style="color: #fff; text-decoration: none;">{{contactEmail}}</a>
            </div>
          </div>
        </div>
      </div>
      <div style="background: #0f0f1a; padding: 20px 0; margin-top: 40px; text-align: center;">
        <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 0.9rem;">{{footerCopyright}}</p>
      </div>
    </footer>
  </div>
  {{externalScripts}}
</body>
</html>`,
protemplete:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{pageTitle}}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  {{externalStyles}}
  <style>
    {{customStyles}}
    .thumbnail-vertical {
      display: flex;
      flex-direction: column;
      gap: 15px;
      max-height: 600px;
      overflow-y: auto;
      padding-right: 10px;
    }
    .thumbnail-vertical::-webkit-scrollbar {
      width: 6px;
    }
    .thumbnail-vertical::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    .thumbnail-vertical::-webkit-scrollbar-thumb {
      background: #667eea;
      border-radius: 10px;
    }
    .thumbnail-vertical .swiper-slide {
      cursor: pointer;
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.3s ease;
      border: 3px solid transparent;
    }
    .thumbnail-vertical .swiper-slide:hover {
      transform: scale(1.05);
      border-color: #667eea;
    }
    .thumbnail-vertical .swiper-slide.active {
      border-color: #764ba2;
      box-shadow: 0 5px 15px rgba(118, 75, 162, 0.4);
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <!-- Top Navigation Bar -->
    <nav style="background: linear-gradient(to right, #1a1a2e 0%, #16213e 100%); padding: 15px 0; border-bottom: 3px solid #667eea;">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6 col-md-3">
            <img src="{{brandLogo}}" width="130px" alt="Brand Logo" style="filter: brightness(0) invert(1);">
          </div>
          <div class="col-6 col-md-6 text-center d-none d-md-block">
            <div style="display: inline-flex; gap: 25px; align-items: center;">
              <div style="background: rgba(102, 126, 234, 0.2); padding: 8px 20px; border-radius: 20px; border: 1px solid rgba(102, 126, 234, 0.4);">
                <span style="color: rgba(255,255,255,0.7); font-size: 13px;">Category:</span>
                <span style="color: #fff; font-weight: 600; margin-left: 5px;">{{category}}</span>
              </div>
              <div style="background: rgba(118, 75, 162, 0.2); padding: 8px 20px; border-radius: 20px; border: 1px solid rgba(118, 75, 162, 0.4);">
                <span style="color: rgba(255,255,255,0.7); font-size: 13px;">Style:</span>
                <span style="color: #fff; font-weight: 600; margin-left: 5px;">{{styleName}}</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 text-end">
            <a href="{{pdfDownloadUrl}}" class="pdf-download-btn" style="display: inline-block; padding: 10px 20px; font-size: 14px; background: #667eea; color: #fff; border-radius: 20px; text-decoration: none; font-weight: 600; transition: all 0.3s;">
              <i class="fas fa-file-pdf"></i> Download PDF
            </a>
          </div>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <!-- Product Title Banner -->
      <section style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px 0; position: relative; overflow: hidden;">
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.1;">
          <div style="position: absolute; width: 500px; height: 500px; background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%); top: -250px; right: -100px;"></div>
          <div style="position: absolute; width: 400px; height: 400px; background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%); bottom: -200px; left: -100px;"></div>
        </div>
        <div class="container" style="position: relative; z-index: 1;">
          <div class="row">
            <div class="col-12">
              <div style="text-align: center;">
                <div style="display: inline-block; background: rgba(255,255,255,0.2); padding: 10px 25px; border-radius: 25px; margin-bottom: 20px; backdrop-filter: blur(10px);">
                  <i class="fas fa-award" style="color: #FFD700; margin-right: 8px;"></i>
                  <span style="color: #fff; font-weight: 600; font-size: 14px;">Premium Quality Certified</span>
                </div>
                <h1 style="color: #fff; font-size: 3.5rem; margin: 0 0 15px; font-weight: 800; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">{{productName}}</h1>
                <h2 style="color: rgba(255,255,255,0.95); font-size: 1.6rem; font-weight: 300; margin: 0;">{{productSubtitle}}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Product Gallery & Info -->
      <section style="padding: 60px 0; background: #f8f9fa;">
        <div class="container">
          <div class="row g-4">
            <!-- Image Gallery with Vertical Thumbnails -->
            <div class="col-lg-7">
              <div style="background: #fff; padding: 30px; border-radius: 25px; box-shadow: 0 10px 40px rgba(0,0,0,0.08);">
                <div class="row g-3">
                  <!-- Vertical Thumbnails -->
                  <div class="col-3 col-md-2">
                    <div class="swiper-container single-product-nav thumbnail-vertical">
                      <div class="swiper-wrapper" style="flex-direction: column;">
                        {{thumbnailImages}}
                      </div>
                    </div>
                  </div>
                  <!-- Main Image -->
                  <div class="col-9 col-md-10">
                    <div class="swiper-container single-product-thumb" style="border-radius: 15px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
                      <div class="swiper-wrapper">
                        {{mainImages}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product Information -->
            <div class="col-lg-5">
              <!-- Specifications -->
              <div style="background: #fff; padding: 35px; border-radius: 25px; box-shadow: 0 10px 40px rgba(0,0,0,0.08); margin-bottom: 25px;">
                <div style="display: flex; align-items: center; margin-bottom: 25px; padding-bottom: 20px; border-bottom: 2px solid #f0f0f0;">
                  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                    <i class="fas fa-info-circle" style="color: #fff; font-size: 24px;"></i>
                  </div>
                  <h3 style="font-size: 1.8rem; margin: 0; color: #1a1a2e; font-weight: 700;">Product Details</h3>
                </div>
                <div class="product--properties panel" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 15px; padding: 25px;">
                  <table class="product--properties-table" style="width: 100%;">
                    <tbody>{{specifications}}</tbody>
                  </table>
                </div>
              </div>

              <!-- Contact Section -->
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 35px; border-radius: 25px; box-shadow: 0 15px 50px rgba(102, 126, 234, 0.4); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
                <div style="position: absolute; bottom: -30px; left: -30px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
                <div style="position: relative; z-index: 1;">
                  <div style="text-align: center; margin-bottom: 25px;">
                    <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 15px; backdrop-filter: blur(10px);">
                      <i class="fas fa-headphones-alt" style="color: #fff; font-size: 28px;"></i>
                    </div>
                    <h4 style="color: #fff; margin: 0 0 10px; font-size: 1.6rem; font-weight: 700;">Get In Touch</h4>
                    <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 15px;">We're here to help you with any inquiries</p>
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 12px;">
                    <a href="tel:{{contactPhone}}" style="background: #fff; color: #667eea; padding: 16px 20px; border-radius: 15px; text-decoration: none; font-weight: 600; text-align: center; transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                      <i class="fa fa-phone" style="font-size: 18px;"></i>
                      <span>Call Us Now</span>
                    </a>
                    <a href="https://wa.me/{{contactWhatsapp}}" target="_blank" style="background: #25D366; color: #fff; padding: 16px 20px; border-radius: 15px; text-decoration: none; font-weight: 600; text-align: center; transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 10px; box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);">
                      <i class="fa-brands fa-whatsapp" style="font-size: 18px;"></i>
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Company Story Section -->
      <section style="padding: 80px 0; background: linear-gradient(to bottom, #fff 0%, #f8f9fa 100%);">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <div style="text-align: center; margin-bottom: 50px;">
                <div style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 12px 30px; border-radius: 30px; margin-bottom: 20px;">
                  <span style="color: #fff; font-weight: 600; font-size: 14px; letter-spacing: 1px;">ABOUT US</span>
                </div>
                <h3 style="font-size: 2.8rem; color: #1a1a2e; font-weight: 800; margin-bottom: 20px;">{{companyTitle}}</h3>
                <div style="width: 100px; height: 4px; background: linear-gradient(to right, #667eea, #764ba2); margin: 0 auto;"></div>
              </div>

              <div style="background: #fff; padding: 50px; border-radius: 25px; box-shadow: 0 10px 40px rgba(0,0,0,0.08); margin-bottom: 40px;">
                <p style="text-align: center; font-size: 1.15rem; color: #555; line-height: 1.9; margin: 0;">{{companyDescription}}</p>
              </div>

              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px; border-radius: 25px; margin-bottom: 40px; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.1; background: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px);"></div>
                <div style="position: relative; z-index: 1; text-align: center;">
                  <h4 style="font-size: 2rem; color: #fff; margin-bottom: 20px; font-weight: 700;">{{focusTitle}}</h4>
                  <p style="font-size: 1.1rem; color: rgba(255,255,255,0.95); line-height: 1.8; margin: 0;">{{focusDescription}}</p>
                </div>
              </div>

              <div style="background: #fff; padding: 45px; border-radius: 25px; box-shadow: 0 10px 40px rgba(0,0,0,0.08);">
                <ul class="custom-bullets" style="list-style: none; padding: 0; margin: 0 0 30px 0;">
                  {{bulletPoints}}
                </ul>
                <div style="text-align: center; padding: 25px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 15px;">
                  <p style="font-size: 1.15rem; color: #667eea; font-weight: 600; font-style: italic; margin: 0;">{{finalNote}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer style="background: linear-gradient(to bottom, #1a1a2e 0%, #0f0f1a 100%); padding: 60px 0 0; position: relative;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 5px; background: linear-gradient(to right, #667eea, #764ba2);"></div>
      <div class="container">
        <div class="row g-5">
          <div class="col-md-4 text-center text-md-start">
            <img src="{{footerLogo}}" width="150px" alt="Footer Logo" style="filter: brightness(0) invert(1); margin-bottom: 25px;">
            <p style="color: rgba(255,255,255,0.7); font-size: 15px; line-height: 1.7;">Delivering excellence in quality products and customer service.</p>
          </div>
          <div class="col-md-4 text-center">
            <h4 style="color: #fff; font-size: 2rem; margin-bottom: 20px; font-weight: 700;">{{companyName}}</h4>
            <div style="width: 80px; height: 3px; background: linear-gradient(to right, #667eea, #764ba2); margin: 0 auto;"></div>
          </div>
          <div class="col-md-4 text-center text-md-end">
            <h5 style="color: #fff; font-size: 1.2rem; margin-bottom: 20px; font-weight: 600;">Contact Information</h5>
            <div style="margin-bottom: 12px;">
              <a href="tel:{{contactPhone}}" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: all 0.3s; display: inline-flex; align-items: center; gap: 10px;">
                <i class="fa fa-phone" style="color: #667eea;"></i>
                <span>{{contactPhone}}</span>
              </a>
            </div>
            <div>
              <a href="mailto:{{contactEmail}}" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: all 0.3s; display: inline-flex; align-items: center; gap: 10px;">
                <i class="fa fa-envelope" style="color: #764ba2;"></i>
                <span>{{contactEmail}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style="background: #0f0f1a; padding: 25px 0; margin-top: 50px; border-top: 1px solid rgba(255,255,255,0.1);">
        <div class="container">
          <p style="text-align: center; color: rgba(255,255,255,0.6); margin: 0; font-size: 14px;">{{footerCopyright}}</p>
        </div>
      </div>
    </footer>
  </div>
  {{externalScripts}}
</body>
</html>`

  // Add more templates here...
};

export default templates;


