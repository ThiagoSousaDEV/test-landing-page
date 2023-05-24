<template>
  <section id="experiences">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 mb-4">
          <div class="title-content-two text-left">
            <div class="section-subtitle">
              <h4>Experiências</h4>
            </div>
            <div class="line-home"></div>
          </div>
        </div>
      </div>
    </div>
    <section class="w3l-passion-mid-sec py-3">
      <div class="container py-md-2 py-3" style="margin-bottom: 6rem">
        <div class="container">
          <div class="row w3l-passion-mid-grids">
            <div
              class="col-lg-6 passion-grid-item-info"
              style="margin-top: 1rem"
            >
              <div class="title-content-two">
                <div class="title-content-two text-left">
                  <div class="section-subtitle">
                    <h4>Aproveite a estadia para criar novas memórias</h4>
                  </div>
                </div>
              </div>
              <p class="mt-3 pe-lg-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium,
                <br /><br />
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores.
              </p>
              <a href="{{ Layout.languageUri(app.request) }}/about-us">
                <button
                  class="btn btn-style btn-primary btn-lg shadow"
                  style="
                    border-radius: 6px;
                    width: 180px;
                    height: 50px;
                    border-color: #2e6bc6;
                    background: #2e6bc6;
                    color: #fff;
                    margin-top: 2rem;
                    margin-bottom: 4rem;
                  "
                  type="submit"
                >
                  View All
                  <span class="mdi mdi-arrow-right"></span>
                </button>
              </a>
            </div>
            <div class="col-lg-6 w3hny-passion-item">
              <div class="row">
                <div class="d-flex col-lg-6 mb-lg-0 py-3">
                  <article
                    class="conquests d-flex flex-column w-100 shadow-lg p-4 text-left rounded"
                  >
                    <div>
                      <span class="mdi mdi-48px mdi-airballoon-outline"></span>
                      <h4>Experiência 1</h4>
                      <h3>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem totam rem ab illo veritatis et quasi.
                      </h3>
                    </div>
                  </article>
                </div>

                <div class="d-flex col-lg-6 mb-lg-0 py-3">
                  <article
                    class="conquests d-flex flex-column w-100 shadow-lg p-4 text-left rounded"
                  >
                    <div>
                      <span
                        class="mdi mdi-48px mdi-fruit-grapes-outline"
                      ></span>
                      <h4>Experiência 2</h4>
                      <h3>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem totam rem ab illo veritatis et quasi.
                      </h3>
                    </div>
                  </article>
                </div>

                <div class="d-flex col-lg-6 mb-lg-0 py-3">
                  <article
                    class="conquests d-flex flex-column w-100 shadow-lg p-4 text-left rounded"
                  >
                    <div>
                      <span class="mdi mdi-48px mdi-sail-boat"></span>
                      <h4>Experiência 3</h4>
                      <h3>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem totam rem ab illo veritatis et quasi.
                      </h3>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Experiences",
};
</script>
