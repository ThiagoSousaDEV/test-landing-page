<template>
     <section id="reviews" style="margin-top: 8rem;">
        <div class="container text-center">
            <div class="line-reviews"></div>
            <div class="section-subtitle">
                <h4>Os nossos hóspedes</h4>
            </div>
            <div id="testimonial-slider" class="owl-carousel">
                <div class="testimonial">
                    <div class="pic">
                        <img src="@/assets/img/pic-testimonial.png" />
                    </div>
                    <p class="description">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
                    </p>
                    <h3 class="testimonial-title">
                        - John Doe
                    </h3>
                    <h3 class="testimonial-subtitle">
                        <small>ABC Company</small>
                    </h3>
                    <a href="{{ Layout.languageUri(app.request) }}/apartments">
                        <button class="btn btn-style btn-primary btn-lg shadow"
                            style="border-radius:6px;width: 180px;height:50px;border-color: #2E6BC6;background: #2E6BC6;color:#fff;margin-top:2rem;margin-bottom:4rem"
                            type="submit">View All
                            <span class="mdi mdi-arrow-right"></span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: "Review",
    data() {
        return {
            
        }
    }
}
</script>
