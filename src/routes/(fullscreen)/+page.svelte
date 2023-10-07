<style>
  .title {
    position: relative;
  }

  h1 {
    font-size: 600%;
    font-weight: bold;
    margin: 4rem 0;
  }
  h1, h2 {
    color: var(--color-logo);
    position: relative;
    z-index: 10;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline;
    margin: 0 4px;
  }
  li img {
    width: 2rem;
  }

  .logo-wide {
    position: absolute;
    width: 720px;
    left: -175px;
    top: -120px;
    border-radius: 10px;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 250%;
    }

    .logo-wide {
      width: 480px;
      left: -50px;
      top: -40px;
    }
  }

  @media (max-width:360px) {
    h1 {
      font-size: 225%;
      margin: 3rem 0;
    }

    .logo-wide {
      /* width: 340px; */
      width: 100vw;
      left: 0;
      top: -40px;
    }
  }
</style>

<div class="fullscreen">
  <div class="title">
    <img src="/sunset.jpg" alt="Sunset" class="logo-wide">
    <h1>Tu Song</h1>
    <h2>Songs to sing together with you!</h2>
    <!--
    <ul class="phone">
      <li>
        <a href="https://www.instagram.com/unaccessiblefilm" target="_blank" rel="noreferrer">
          <img src="/Instagram_Glyph_Gradient.png" alt="Instagram"
            title="Instagram">
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src="/f_logo_RGB-Blue_1024.png" alt="Facebook" title="Facebook">
        </a>
      </li>
    </ul>
    -->
  </div>
</div>
