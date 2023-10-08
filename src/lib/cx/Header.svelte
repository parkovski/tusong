<script>
  function closeMenu() {
    document.getElementById('menu-check').checked = false;
    return true;
  }

  function menuKeyDown(e) {
    if (e.key === 'Enter') {
      closeMenu();
    }
  }
</script>

<style>
  #menu-check {
    display: none;
  }
  #menu-check:checked + #menu-button > span {
    transform: rotate(45deg);
  }
  #menu-check:checked + #menu-button > span::before {
    top: 0;
    transform: rotate(0deg);
  }
  #menu-check:checked + #menu-button > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu-check:checked ~ #menu {
    left: 0;
  }

  #menu-button {
    position: absolute;
    top: 1.5rem;
    left: 12px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 1;
  }

  #menu-button > span,
  #menu-button > span::before,
  #menu-button > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--color-header-text);
    transition-duration: .25s;
  }
  #menu-button > span::before {
    content: '';
    top: -8px;
  }
  #menu-button > span::after {
    content: '';
    top: 8px;
  }

  header {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 3.5rem;
    background: var(--color-header-bg);
    color: var(--color-header-text);
    padding: .25rem 40px;
    font-size: 125%;
    z-index: 100;
  }

  #menu {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    width: 200px;
    height: 100%;
    margin: 0;
    padding: 3rem 0;
    list-style: none;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    transition-duration: .25s;
    line-height: 1;
    background: var(--color-menu-bg);
  }

  #menu > li {
    padding: 4px 8px;
    transition-duration: .25s;
  }

  .phone-home {
    display: block;
    margin-top: 4px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover, a:hover svg {
    color: #492932;
    transition-duration: 500ms;
  }

  a:hover svg {
    fill: #492932;
  }

  a.nounderline:hover {
    text-decoration: none;
  }

  a svg {
    fill: var(--color-header-text);
    margin-right: 1px;
  }

  img.badge {
    display: inline;
    width: 2rem;
    margin-right: .125rem;
  }

  @media (min-width: 640px) {
    header {
      padding: .25rem 8px;
    }
    .phone-home {
      display: none;
    }
    #menu-button {
      display: none;
    }
    #menu {
      position: relative;
      left: 0;
      width: 100%;
      display: flex;
      gap: 4px;
      transition-duration: 0s;
      padding: 0;
      box-shadow: none;
      background: none;
    }
    #menu > li:not(:first-child) {
      padding-top: .6667rem;
    }
    /*#menu > li:last-child {
      position: absolute;
      right: 0;
      padding-top: .5rem;
    }*/
    img.badge {
      margin-right: 0.5rem;
    }
  }

  img.logo {
    height: 2em;
    vertical-align: middle;
    margin-right: .5ex;
  }
</style>

<header>
  <input id="menu-check" type="checkbox">
  <label id="menu-button" for="menu-check">
    <span></span>
  </label>
  <a href="/" class="phone-home nounderline">
    <img src="/favicon.png" class="logo" alt="Logo">Tu So<svg xmlns="http://www.w3.org/2000/svg" height="0.667em" viewBox="0 0 512 512">
      <path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/>
    </svg>g
  </a>
  <ul id="menu" role="navigation" on:click={closeMenu} on:keydown={menuKeyDown}>
    <li><a href="/" class="nounderline">
        <span class="phone">Home</span>
        <span class="nophone">
          <img src="/favicon.png" class="logo" alt="Logo"
            title="Home">Tu So<svg xmlns="http://www.w3.org/2000/svg" height="0.667em" viewBox="0 0 512 512">
            <path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/>
          </svg>g
        </span>
    </a></li>
    <li><a href="/songs">Songs</a></li>
    <li><a href="/updates">Updates</a></li>
    <li><a href="/about">About</a></li>
    <!--
    <li>
      <a href="https://www.instagram.com/unaccessiblefilm" target="_blank"
        rel="noreferrer">
        <img src="/Instagram_Glyph_Gradient.png" alt="Instagram" class="badge"
          title="Instagram">
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <img src="/f_logo_RGB-Blue_1024.png" alt="Facebook" class="badge"
          title="Facebook">
      </a>
    </li>
    -->
  </ul>
</header>
