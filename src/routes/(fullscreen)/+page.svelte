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
    user-select: none;
  }
  h1 > svg {
    fill: white;
    margin-right: 2px;
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

<svelte:head>
  <title>Tu Song</title>
</svelte:head>

<div class="fullscreen">
  <div class="title">
    <img src="/sunset.jpg" alt="Sunset" class="logo-wide">
      <h1>Tu So<svg xmlns="http://www.w3.org/2000/svg" height="0.667em" viewBox="0 0 512 512">
        <path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/>
      </svg>g</h1>
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
