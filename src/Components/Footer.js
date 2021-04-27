import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Footer.css";

function Footer() {
  return (
    <>
      <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
        <footer>
          <div class="row my-5 justify-content-center py-4">
            <div class="col-11">
              <div class="row">
                <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto">
                  <h3 class="mb-md-0 mb-5">AOFFIS.</h3>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 class="mb-3 mb-lg-4 bold-text ">
                    <b>CONTACT</b>
                  </h6>
                  <p class="mb-1">aoffis.ntp@gmail.com</p>
                  <p class="mb-1">aoffis_</p>
                  <p class="mb-1">facebook</p>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 class="mb-3 mb-lg-4 mt-sm-0 mt-5">
                    <b>ADDRESS</b>
                  </h6>
                  <p class="mb-1">21/471 Ramkramheng 142 </p>
                  <p class="mb-1">Bangkok 10240</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
