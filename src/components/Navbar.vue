<template>
<section id="header">
    <header>
      <nav>
        <a
          href="{{ Layout.languageUri(app.request) }}/"
          id="logo"
          class="navbar-brand"
        >
          <router-link to="/"
            ><img src="@/assets/img/logo-branco.png" alt=""
          /></router-link>
        </a>
        <i class="fas fa-bars" id="ham-menu"></i>
        <ul id="nav-bar">
          <li class="index-no">
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="teste">Home</router-link>
          </li>
          <li>
            <a href="{{ Layout.languageUri(app.request) }}/about-us"
              >Experiências</a
            >
          </li>
          <li>
            <a href="{{ Layout.languageUri(app.request) }}/blog">Blog</a>
          </li>
          <li class="">
            <a href="{{ Layout.languageUri(app.request) }}/contact">Contact</a>
          </li>
          <li class="">
            <a href="{{ Layout.languageUri(app.request) }}/membership"
              >Membership</a
            >
          </li>
        </ul>
      </nav>
    </header>
</section>
</template>