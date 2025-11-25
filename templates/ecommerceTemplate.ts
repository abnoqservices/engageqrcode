const ecommerceTemplate = `<!DOCTYPE html>
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
</html>`;

export default ecommerceTemplate;