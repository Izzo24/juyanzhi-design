/* =====================================================
   居研室內設計 — Shared Navigation & Footer
   Injected on DOMContentLoaded across all pages
   ===================================================== */
(function () {
  'use strict';

  // ── Detect repo subpath for GitHub Pages ──────────────
  var pathname = location.pathname;
  var match = pathname.match(/^(\/[^/]+\/juyanzhi-design)/);
  // ROOT: GitHub Pages 子路徑前綴；本地 file:// 或根目錄部署時為空字串
  var ROOT = match ? match[1] : '';

  // ── URL builder：本地用相對路徑，GitHub Pages 子路徑用前綴 ──
  function buildHref(filename) {
    return ROOT ? ROOT + '/' + filename : filename;
  }

  // ── Page detection ────────────────────────────────────
  function isPage(name) {
    if (name === 'index') return /\/$|\/index\.html$/.test(pathname) ||
      new RegExp('juyanzhi-design/?$').test(pathname) ||
      location.protocol === 'file:' && /index\.html$/.test(pathname);
    return pathname.indexOf(name + '.html') !== -1;
  }

  function navLink(href, label, page) {
    var active = isPage(page) ? ' class="active"' : '';
    return '<li><a href="' + buildHref(href) + '"' + active + '>' + label + '</a></li>';
  }

  // ── Inline styles ─────────────────────────────────────
  var css = document.createElement('style');
  css.textContent = [
    /* NAV */
    'body{padding-top:68px}',
    '.site-nav{position:fixed;top:0;left:0;right:0;z-index:999;background:rgba(245,242,237,.96);backdrop-filter:blur(10px);border-bottom:1px solid #D8D2C8;height:68px;display:flex;align-items:center}',
    '.nav-inner{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,4rem);display:flex;align-items:center;justify-content:space-between;width:100%}',
    '.nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none}',
    '.nav-links{display:flex;list-style:none;gap:0}',
    '.nav-links a{display:block;padding:.5rem 1.1rem;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:#4A4A46;transition:color .2s;white-space:nowrap}',
    '.nav-links a:hover,.nav-links a.active{color:#9B7B5C}',
    '.nav-cta{padding:.6rem 1.5rem;background:#9B7B5C;color:#fff;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;border:none;cursor:pointer;transition:background .2s;text-decoration:none;white-space:nowrap}',
    '.nav-cta:hover{background:#C4A882}',
    '.nav-hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:.5rem}',
    '.nav-hamburger span{display:block;width:22px;height:1.5px;background:#1A1A18;transition:all .3s}',
    /* Mobile */
    '@media(max-width:860px){',
    '.nav-links{display:none;position:absolute;top:68px;left:0;right:0;flex-direction:column;background:#F5F2ED;border-bottom:1px solid #D8D2C8;padding:1rem 0}',
    '.nav-links.open{display:flex}',
    '.nav-links a{padding:.9rem clamp(1.5rem,5vw,4rem)}',
    '.nav-cta{display:none}',
    '.nav-hamburger{display:flex}',
    '}',
    /* FOOTER */
    '.site-footer{background:#2B2B28;color:#EDE9E3;padding:clamp(4rem,8vw,6rem) clamp(1.5rem,5vw,4rem) 2rem}',
    '.footer-inner{max-width:1200px;margin:0 auto}',
    '.footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 2fr;gap:3rem;margin-bottom:4rem}',
    '@media(max-width:860px){.footer-top{grid-template-columns:1fr 1fr}}',
    '@media(max-width:540px){.footer-top{grid-template-columns:1fr}}',
    '.footer-logo-cn{font-family:Georgia,serif;font-size:1.3rem;color:#F5F2ED;letter-spacing:.06em}',
    '.footer-logo-en{font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:#8C8880;margin-top:.3rem;margin-bottom:1rem}',
    '.footer-tagline{font-size:.875rem;color:#8C8880;line-height:1.7;max-width:28ch}',
    '.footer-col h5{font-family:Georgia,serif;font-size:.8rem;letter-spacing:.15em;text-transform:uppercase;color:#BFB89F;margin-bottom:1.25rem}',
    '.footer-col ul{list-style:none}',
    '.footer-col ul li{margin-bottom:.6rem}',
    '.footer-col ul li a{font-size:.875rem;color:#8C8880;transition:color .2s}',
    '.footer-col ul li a:hover{color:#F5F2ED}',
    '.footer-contact p{font-size:.875rem;color:#8C8880;line-height:1.8}',
    '.footer-contact a{color:#C4A882}',
    '.footer-bottom{border-top:1px solid #4A4A46;padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}',
    '.footer-copy{font-size:.75rem;color:#6B6660}',
    '.footer-badges{display:flex;gap:1.5rem}',
    '.footer-badges a{font-size:.75rem;color:#6B6660;transition:color .2s}',
    '.footer-badges a:hover{color:#BFB89F}',
  ].join('');
  document.head.appendChild(css);

  // ── Logo SVG mark + HTML text（CIS 統一標準）─────────
  // Nav：亮底 → 深色 terra，footer → 淺色
  var logoSvg =
    '<svg viewBox="0 0 32 32" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="flex-shrink:0;color:#9B7B5C">' +
      '<polyline points="2,10 16,4 30,10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<polyline points="2,10 2,28 16,22 30,28 30,10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<line x1="16" y1="4" x2="16" y2="22" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' +
      '<line x1="2" y1="28" x2="30" y2="28" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' +
      '<circle cx="16" cy="15" r="1.5" fill="currentColor"/>' +
    '</svg>' +
    '<span style="display:flex;flex-direction:column;gap:2px">' +
      '<span style="font-family:Georgia,serif;font-size:15px;font-weight:600;color:#1A1A18;letter-spacing:.06em;line-height:1.1">居研室內設計</span>' +
      '<span style="font-size:9px;letter-spacing:.2em;color:#8C8880;text-transform:uppercase;font-family:Georgia,serif;line-height:1">Juyanzhi Interior Design</span>' +
    '</span>';

  // ── Nav HTML ──────────────────────────────────────────
  var navHtml = '<nav class="site-nav" role="navigation" aria-label="主選單">' +
    '<div class="nav-inner">' +
      '<a href="' + buildHref('index.html') + '" class="nav-logo">' + logoSvg + '</a>' +
      '<ul class="nav-links" id="navLinks">' +
        navLink('index.html', '首頁', 'index') +
        navLink('about.html', '關於我們', 'about') +
        navLink('projects.html', '設計作品', 'projects') +
        navLink('services.html', '服務項目', 'services') +
        navLink('contact.html', '聯絡我們', 'contact') +
      '</ul>' +
      '<a href="' + buildHref('contact.html') + '" class="nav-cta">預約諮詢</a>' +
      '<button class="nav-hamburger" id="navToggle" aria-label="開啟選單" aria-expanded="false" aria-controls="navLinks">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</div>' +
  '</nav>';

  // ── Footer HTML ───────────────────────────────────────
  var footerHtml = '<footer class="site-footer" role="contentinfo">' +
    '<div class="footer-inner">' +
      '<div class="footer-top">' +
        '<div>' +
          '<div style="display:flex;align-items:center;gap:10px;margin-bottom:.75rem">' +
            '<svg viewBox="0 0 32 32" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="flex-shrink:0;color:rgba(245,242,237,.8)">' +
              '<polyline points="2,10 16,4 30,10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' +
              '<polyline points="2,10 2,28 16,22 30,28 30,10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' +
              '<line x1="16" y1="4" x2="16" y2="22" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' +
              '<line x1="2" y1="28" x2="30" y2="28" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>' +
              '<circle cx="16" cy="15" r="1.5" fill="currentColor"/>' +
            '</svg>' +
            '<div>' +
              '<div class="footer-logo-cn" style="margin-bottom:0">居研室內設計</div>' +
              '<div class="footer-logo-en" style="margin-bottom:0">Juyanzhi Interior Design</div>' +
            '</div>' +
          '</div>' +
          '<p class="footer-tagline">以空間詮釋生活美學，打造屬於您的理想居所。</p>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h5>導航</h5>' +
          '<ul>' +
            '<li><a href="' + buildHref('index.html') + '">首頁</a></li>' +
            '<li><a href="' + buildHref('about.html') + '">關於我們</a></li>' +
            '<li><a href="' + buildHref('projects.html') + '">設計作品</a></li>' +
            '<li><a href="' + buildHref('services.html') + '">服務項目</a></li>' +
            '<li><a href="' + buildHref('contact.html') + '">聯絡我們</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h5>服務</h5>' +
          '<ul>' +
            '<li><a href="' + buildHref('services.html') + '#residential">住宅設計</a></li>' +
            '<li><a href="' + buildHref('services.html') + '#commercial">商業空間</a></li>' +
            '<li><a href="' + buildHref('services.html') + '#renovation">老屋翻新</a></li>' +
            '<li><a href="' + buildHref('services.html') + '#consultation">設計顧問</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-contact footer-col">' +
          '<h5>聯絡資訊</h5>' +
          '<p>台北市大安區仁愛路四段 112 號 3F<br>' +
          '<a href="tel:+886223456789">02-2345-6789</a><br>' +
          '<a href="mailto:studio@juyanzhi.com.tw">studio@juyanzhi.com.tw</a><br><br>' +
          '週一至週六 10:00 – 18:00</p>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<span class="footer-copy">© 2025 居研室內設計工作室 版權所有</span>' +
        '<div class="footer-badges">' +
          '<a href="#">隱私權政策</a>' +
          '<a href="#">服務條款</a>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</footer>';

  // ── Inject ────────────────────────────────────────────
  document.body.insertAdjacentHTML('afterbegin', navHtml);
  document.body.insertAdjacentHTML('beforeend', footerHtml);

  // ── Hamburger toggle ──────────────────────────────────
  var toggle = document.getElementById('navToggle');
  var links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // ── Fade-in on scroll ─────────────────────────────────
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-in').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('visible');
    });
  }

})();
