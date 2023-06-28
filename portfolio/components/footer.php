 <!-- background particles loading div -->
 <div id="particles-js" style="height: 100%; position: fixed; top: 0%; right: 0%; bottom: 0%; left: 0%; z-index: -1;"></div>



 <!-- Messenger Chat Plugin Code -->
 <!-- <div id="fb-root"></div>
    <script>
        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v10.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script> -->

 <!-- Your Chat Plugin code -->
 <!-- <div class="fb-customerchat" attribution="page_inbox" page_id="227564397625624">
    </div> -->



 <script src="<?php echo $relativePath; ?>js/libraries/jquery-3.4.1.min.js"></script>

 <!-- particles.js loading script -->
 <script type="module">
   /*-------------------------- imports -------------------------*/

   import load from '<?php echo $relativePath; ?>js/libraries/particles.js'

   /*-------------------------- variables -------------------------*/

   let config_FilePath = '<?php echo $relativePath; ?>js/libraries/particles-config.json'


   /*-------------------------- functions -------------------------*/


   $(document).ready(function() {

     // background particles loader
     load('particles-js', config_FilePath, function(err) {
       if (err)
         console.log(err)

       // logs if succeeds loading particles
       console.log("Background particles loaded!")
     })
   })
 </script>

 <!-- fiverr script -->
 <script id='fiverr-seller-widget-script-bdee3c18-fd7d-4371-bf3a-6ca8714d57f3' src='https://widgets.fiverr.com/api/v1/seller/emranffl?widget_id=bdee3c18-fd7d-4371-bf3a-6ca8714d57f3' data-config='{"category_name":"Programming \u0026 Tech"}'></script>

 </body>

 </html>