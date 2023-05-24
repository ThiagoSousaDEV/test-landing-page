<template>
       <section id="blog">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 mb-4">
                    <div class="title-content-two text-left">
                        <div class="section-subtitle">
                            <h4>Blog</h4>
                        </div>
                        <div class="line-home"></div>
                        <div class="section-title">
                            <h3 style="font-weight: 300;color:#4B4B4B;text-transform:initial">Lorem ipsum
                                dolor sit amet,Stet clita kasd gubergren, no sea takimata sanctus est is the lorem ipsum
                                dolor sit amet. sed diam nonumy ut labore et dolore s the magna aliquyam.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container text-center">
            <div class="row">
                <div class="col-lg-4 mb-lg-10" style="margin-bottom: 8rem;">
                    <div class="blog-home">
                        <div class="blog-home">
                            <a href="{{ Layout.languageUri(app.request) }}/blog-post">
                                <img class="pic-1" src="@/assets/img/blog-post-home.png">
                            </a>
                        </div>
                        <div class="blog-home-content">
                            <div class="container">
                                <h3 class="title">
                                   Título do Artigo
                                </h3>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-6">
                                        <h3 class="title-from">
                                            <small style="color:#B0B0B4">
                                                Autor | dd/mm/aaa
                                            </small>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-lg-10" style="margin-bottom: 8rem;">
                    <div class="blog-home">
                        <div class="blog-home">
                            <a href="{{ Layout.languageUri(app.request) }}/blog-post">
                                <img class="pic-1" src="@/assets/img/blog-post-home.png">
                            </a>
                        </div>
                        <div class="blog-home-content">
                            <div class="container">
                                <h3 class="title">
                                   Título do Artigo
                                </h3>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-6">
                                        <h3 class="title-from">
                                            <small style="color:#B0B0B4">
                                                Autor | dd/mm/aaa
                                            </small>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-lg-10" style="margin-bottom: 8rem;">
                    <div class="blog-home">
                        <div class="blog-home">
                            <a href="{{ Layout.languageUri(app.request) }}/blog-post">
                                <img class="pic-1" src="@/assets/img/blog-post-home.png">
                            </a>
                        </div>
                        <div class="blog-home-content">
                            <div class="container">
                                <h3 class="title">
                                   Título do Artigo
                                </h3>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-6">
                                        <h3 class="title-from">
                                            <small style="color:#B0B0B4">
                                                Autor | dd/mm/aaa
                                            </small>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="{{ Layout.languageUri(app.request) }}/blog">
                <button class="btn btn-style btn-primary btn-lg shadow"
                    style="border-radius:6px;width: 180px;height:50px;border-color: #2E6BC6;background: #2E6BC6;color:#fff;margin-top:2rem;margin-bottom:4rem"
                    type="submit">Read All 
                    <span class="mdi mdi-arrow-right"></span>
                </button>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: "Blog"
}
</script>