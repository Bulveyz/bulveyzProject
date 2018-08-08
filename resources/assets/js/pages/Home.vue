<template>
    <div>
        <!-- Promo -->
        <section class="js-parallax-header">
            <div class="container u-overlay__inner u-ver-center u-content-space">
                <div class="row  justify-content-center justify-content-lg-start">
                    <div class="col-12 col-lg-6">
                        <div class="text-center text-lg-left text-white">
                            <h1 class="display-md-6 display-lg-4 mb-3">
                                Time to create your stylish website
                            </h1>
                            <p class="text-uppercase u-letter-spacing-sm mb-3">Creating the highest quality web
                                applications of any level of complexity</p>
                            <a class="btn btn-primary" href="services.html">
                                Activate <i class="fas fa-arrow-alt-circle-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Promo -->

        <!-- Clouds -->
        <section class="d-none d-lg-block clouds"></section>
        <!-- End Clouds -->

        <section class="u-content-space-md">
            <div class="container p-5 p-lg-0">
                <titler class="u-content-space-md" title="Our Service"></titler>

                <!-- Order Freebace Sites -->
                <div class="row u-content-space-md">
                    <div class="col-lg-6">
                        <h2 class="title-letter-spacing mb-5 mb-4">Free Sites</h2>
                        <p>
                            You can choose a free template with functionality and start your website today.
                        </p>
                        <p>
                            We provide free templates with working functionality such as blogs, shops, galleries and
                            others.
                        </p>
                    </div>

                    <div class="col-lg-6">
                        <overlay-hover data-aos="fade-left" img="img/another/demo_page.png">
                            <b-button href="/demo" variant="primary">Demo</b-button>
                        </overlay-hover>
                    </div>
                </div>
                <!-- End Freebace Sites Block -->

                <!-- Oreder Sites Block -->
                <div class="row">
                    <div class="col-lg-6">
                        <h2 class="title-letter-spacing mb-5 mb-4">Site Order</h2>
                        <p>
                            Order the site for any of your ideas. We will execute the site of any complexity.
                        </p>
                        <p>
                            <i class="fa fa-bug mr-1"></i> The site will work without a single bug or lag.
                        </p>
                        <p>
                            <i style="font-size: 20px;" class="fa fa-mobile-phone mr-1"></i> All our websites are
                            responsive to all devices by default, free of charge.
                        </p>
                        <p>
                            <i class="fa fa-dollar mr-1"></i> We adequately assess his work without overcharging.
                        </p>
                        <p>
                            <i class="fa fa-lock mr-1"></i> Each order begins with the acceptance of the contract, all
                            the conditions are transparent and you can see for yourself.
                        </p>
                    </div>
                    <div class="col-lg-6 pt-0 pt-lg-4">
                        <hover-overlay data-aos="fade-left" :hover="false" img="img/another/deal.jpg">
                            <b-button variant="primary" herf="/order">To order a website</b-button>
                        </hover-overlay>
                    </div>
                </div>
                <!-- End Oreder Sites Block -->
            </div>
        </section>

        <!-- Counter Block -->
        <section class="counter u-content-space-md">
            <div class="row justify-content-center text-white pt-1 pt-md-9">
                <div class="col-md-4 text-center">
                    <h1>
                        <count-to v-is-in-view-port="loler" ref="stat1" :autoplay="false" :startVal="0" :endVal="13"
                                  :duration="2000"></count-to>
                    </h1>
                    <h2 class="font-weight-light text-uppercase">Projects</h2>
                </div>
                <div class="col-md-4 text-center">
                    <h1>
                        <count-to v-is-in-view-port="loler" ref="stat2" :autoplay="false" :startVal="0" :endVal="143"
                                  :duration="2000"></count-to>
                    </h1>
                    <h2 class="font-weight-light text-uppercase">Accounts</h2>
                </div>
                <div class="col-md-4 text-center">
                    <h1>
                        <count-to v-is-in-view-port="loler" ref="stat3" :autoplay="false" :startVal="0" :endVal="65"
                                  :duration="2000"></count-to>
                    </h1>
                    <h2 class="font-weight-light text-uppercase">Orders</h2>
                </div>
            </div>
        </section>
        <!-- End Counter Block -->

        <!-- Plugin Make Block -->
        <section class="u-content-space-md">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 pb-2 pb-lg-0">
                        <h2 class="title-letter-spacing mb-5 mb-4">Custom Components <sup>
                            <b-badge size="sm" variant="danger" pill>New</b-badge>
                        </sup></h2>
                        <p>
                            You do not need to order only websites.
                        </p>
                        <p>
                            You can order a custom vue component, plugin or even your own library.
                        </p>
                        <b-btn href="/order" variant="primary">Create Plugin</b-btn>
                    </div>
                    <div class="col-lg-6 d-flex justify-content-center d-lg-block">
                        <img data-aos="fade-left" class="img-fluid float-lg-right" src="img/another/vue.png" alt="Vue logo">
                    </div>
                </div>
            </div>
        </section>
        <!-- End Plugin Make Block -->

        <!-- Subscribe -->
        <section class="subscribe mb-2">
            <div class="container text-center pt-7">
                <div class="row justify-content-center">
                    <h3 class="font-weight-light mb-lg-9 display-6">
                        Subscribe to get the latest Updates, Products and Freebies
                    </h3>
                    <b-input-group data-aos="fade-up" class="w-lg-50 px-4 px-md-0 rounded">
                        <b-form-input class="py-3" placeholder="Enter you email address"></b-form-input>
                        <b-input-group-append>
                            <b-btn variant="primary">Subscribe</b-btn>
                        </b-input-group-append>
                    </b-input-group>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import HoverOverlay from "../components/HoverOverlay";
  import countTo from 'vue-count-to';

  export default {
    name: "Home",
    components: {HoverOverlay, countTo},
    methods: {
      loler() {
        this.$refs.stat1.start();
        this.$refs.stat2.start();
        this.$refs.stat3.start();
      }
    }
  }
</script>

<style scoped>

</style>