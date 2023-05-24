<template>
    <!--/inner-page-->
<div class="inner-banner py-5 pb-sm-0">
	<section class="w3l-breadcrumb text-left py-sm-5 pb-0">
		<div class="container">
			<div class="w3breadcrumb-gids">
				<div class="w3breadcrumb-right">
					<div class="breadcrumb-title">
						<h2>Apartamentos</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
<!--//inner-page-->
<div class="container p-4">
    <div class="row">
        <div class="col-12 mb-4">
            <div class="title-content-two text-left">
                <div class="section-title">
                    <h3 style="font-size:20px;font-weight:600">Propriedades</h3>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container py-5">
	<div class="row">
		<div class="col-lg-4 mb-lg-10" style="margin-bottom: 5rem;">
			<div class="product-grid8">
				<div id="bootstrapCarousel" class="carousel slide h-100" data-ride="carousel">

					<div class="carousel-inner h-100">
						<div class="carousel-item h-100 active">
							<img src="@/assets/img/apartamentos-home.png" class="d-block w-100" alt="Hotel Image">
						</div>
						<div class="carousel-item h-100">
							<img src="@/assets/img/apartamentos-home.png" class="d-block w-100" alt="Hotel Image">
						</div>
						<div class="carousel-item h-100">
							<img src="@/assets/img/apartamentos-home.png" class="d-block w-100" alt="Hotel Image">
						</div>
					</div>
					<a class="carousel-control-prev" href="#bootstrapCarousel" role="button" data-slide="prev">
						<span class="mdi mdi-36px mdi-chevron-left-circle"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#bootstrapCarousel" role="button" data-slide="next">
						<span class="mdi mdi-36px mdi-chevron-right-circle" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
				<div class="product-content">
					<div class="container">
						<h3 class="title">
							{% trans %}Nome da Rua, Apt P101{% endtrans %}
						</h3>
					</div>
					<div class="container">
						<div class="row">
							<div class="col-6">
								<h3 class="title-from">
									<span class="mdi mdi-bed-king-outline"> 2 </span>
									<span style="color: #EBF0F8;">| </span>
									<span class="mdi mdi-bed-king-outline"> 2</span>
									<span style="color: #EBF0F8;">| </span>
								</h3>
							</div>
							<div class="col-6">
								<h3 class="prince-from">
									<button type="button" class="btn">75, 00 €</button>
								</h3>
							</div>
						</div>
					</div>
					<div class="container">
						<div class="value-product">
							<a href="{{ Layout.languageUri(app.request) }}/apartment-page">
								<div class="p-3 font-title text-center text-white bg-brown py-2"
									style="font-size:24px;background-color:#2E6BC6;border-radius:14px;text-transform: uppercase;font-weight: bold; ">
									{% trans %}Reservar{% endtrans %}
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="line-apartament"></div>
	</div>
</div>
</template>

<style scoped>
/* Inner Page */

.inner-banner {
    background: url(@/assets/img/breadcrumb/img.png) no-repeat center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    position: relative;
    z-index: 0;
}

.inner-banner:before {
    content: "";
    background: rgba(35, 83, 175, 0.50);
    position: absolute;
    top: 0;
    min-height: 100%;
    left: 0;
    right: 0;
    z-index: -1;
}

.w3breadcrumb-right {
    text-align: left;
    padding-top: 2em;
}

.breadcrumb-title {
    text-align: left;
    padding-top: 2em;
    color: #fff;
    font-weight: 900;
    margin-left: 15px;
    text-transform: uppercase;
}


.breadcrumb-title h2 {
    font-weight: 900;
    text-transform: uppercase;
}

h2.inner-w3-title {
    font-size: 56px;
    line-height: 56px;
    font-weight: 700;
    text-transform: capitalize;
    color: #fff;
}

.inner-banner p.inner-page-para {
    color: #fff;
    opacity: 0.6;
    font-weight: 600;
    font-size: 15px;
    text-transform: capitalize;
    letter-spacing: 1px;
}

.breadcrumbs-custom-path {
    text-align: center;
    display: inline-block;

    padding: 6px 15px;
}

.breadcrumbs-custom-path li {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 700;
    color: #fff;
    text-transform: capitalize;
}

.breadcrumbs-custom-path li span {
    font-size: 12px;
}

.breadcrumbs-custom-path a,
.breadcrumbs-custom-path a:active,
.breadcrumbs-custom-path a:focus {
    color: var(--primary-color);
    opacity: 0.9;
}

.breadcrumbs-custom-path a:hover {
    color: var(--primary-color);
}

.breadcrumbs-custom-path li.active {
    color: #fff;
}

p.abinfo-para {
    max-width: 600px;
    margin: 0 auto;
}

.py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important
}


@media (max-width:992px) {
    .w3breadcrumb-gids {
        padding-top: 2em;
    }

}
</style>