const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `<div class="footer">
    <footer class="border-top mt-3" style="background-color: #7e989c;">
        <div class="container">
            <div class="row py-3" id="txt-font-11">
                <div class="col-12 col-md-4 text-center">
                    &copy; 2021 Copyright SDPerfumery.lk<br> All Rights Reserved.<br> ABN 22 222 222 222
                </div>
                <div class="col-12 col-md-4 text-center">
                    <a href="../../html/infoPages/privacyPolicy.html" class="text-decoration-none text-dark">
                        Privacy policy
                    </a><br>
                    <a href="../../html/infoPages/termsConditions.html" class="text-decoration-none text-dark">
                        Terms and conditions
                    </a><br>
                    <a href="../../html/infoPages/exchangeRequest.html" class="text-decoration-none text-dark">
                        Exchange request
                    </a><br>
                </div>
                <div class="col-12 col-md-4 text-center">
                    <a href="payment.html" class="text-decoration-none text-dark">
                        Payment method:
                    </a><br>
                    <a href="#"><img src="../../img/payment/afterpay.png" style="max-height: 20px;"></a>
                    <a href="#"><img src="../../img/payment/paypal.png" style="max-height: 20px; border-radius: 10%;"></a>
                    <a href="#"><img src="../../img/payment/master.png" style="max-height: 20px; border-radius: 10%;"></a>
                    <a href="#"><img src="../../img/payment/visa.png" style="max-height: 20px; border-radius: 10%;"></a>
                    <br>
                    <a href="follow.html" class="text-decoration-none text-dark">
                        Follow us:
                    </a><br>
                    <!-- <a href="#"><img src="../../img/followUs/email.png" style="max-height: 20px;"></a>
                    <a href="#"><img src="../../img/followUs/face.png" style="max-height: 20px; border-radius: 10%;"></a>
                    <a href="#"><img src="../../img/followUs/insta.png" style="max-height: 20px; border-radius: 10%;"></a>
                    <a href="#"><img src="../../img/followUs/zap.png" style="max-height: 20px; border-radius: 10%;"></a> -->
                </div>
            </div>
        </div>
    </footer>
</div>`
}

createFooter();