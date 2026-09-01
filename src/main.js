import './style.css'
import instagramIcon from './assets/Instagram_Icon.svg'
import whatsappIcon from './assets/Whatsapp_Icon.svg'
import lumeLogo from './assets/Lume_Logo.svg'

const images = {
  hero: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1400&q=88',
  detail: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?auto=format&fit=crop&w=900&q=85',
  process: 'https://images.unsplash.com/photo-1511803574983-43bf1f387ece?auto=format&fit=crop&w=900&q=85',
}

const favicon = document.querySelector('#favicon')
if (favicon) favicon.href = lumeLogo

document.querySelector('#app').innerHTML = `
  <header class="site-header" data-header>
    <a class="wordmark" href="#inicio" aria-label="Lume manicure, início">
      <img class="brand-logo" src="${lumeLogo}" alt="" />
      <span class="brand-name">manicure</span>
    </a>

    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
      <span class="menu-toggle-label">Menu</span>
      <span class="menu-toggle-lines" aria-hidden="true"><i></i><i></i></span>
    </button>

    <nav class="main-nav" id="main-nav" aria-label="Navegação principal">
      <a href="#servicos">Serviços <span>01</span></a>
      <a href="#atelier">O espaço <span>02</span></a>
      <a href="#agenda">Agendar <span>03</span></a>
    </nav>

    <a class="header-cta" href="#agenda">Reservar horário <span aria-hidden="true">↗</span></a>
  </header>

  <main>
    <section class="hero section-shell" id="inicio">
      <div class="hero-copy reveal">
        <p class="eyebrow">manicure & nail art · são paulo</p>
        <h1>Suas mãos,<br /><i>uma assinatura.</i></h1>
        <p class="hero-intro">Um pequeno ritual de pausa, cor e cuidado. Manicures pensadas para acompanhar o seu ritmo, e dizer um pouco sobre você.</p>
        <div class="hero-actions">
          <a class="button button-dark" href="#agenda">Encontrar meu horário <span aria-hidden="true">↗</span></a>
          <a class="text-link" href="#servicos">Conheça os rituais <span aria-hidden="true">↓</span></a>
        </div>
        <div class="hero-meta">
          <span>atendimento com hora marcada</span>
          <span>térreo · vila madalena</span>
        </div>
      </div>

      <div class="hero-visual reveal reveal-delay-1">
        <div class="hero-image-frame">
          <img src="${images.hero}" alt="Profissional aplicando esmalte nas unhas de uma cliente" />
          <span class="image-stamp">feito<br /><strong>com</strong><br />calma</span>
        </div>
      </div>
    </section>

    <div class="ticker" aria-label="Especialidades da Lume manicure">
      <div class="ticker-track">
        <span>nail care</span><b>✳</b><span>cor autoral</span><b>✳</b><span>nail art</span><b>✳</b><span>pausa merecida</span><b>✳</b><span>nail care</span><b>✳</b><span>cor autoral</span><b>✳</b><span>nail art</span><b>✳</b><span>pausa merecida</span><b>✳</b>
      </div>
    </div>

    <section class="services section-shell" id="servicos">
      <div class="section-heading reveal">
        <p class="eyebrow">escolha o seu momento</p>
        <h2>Rituais feitos<br /><i>sob medida.</i></h2>
        <p>Do básico bem-feito ao detalhe que vira assunto, cada atendimento começa com uma conversa.</p>
      </div>

      <div class="service-grid">
        <article class="service-card service-card-featured reveal reveal-delay-1">
          <div class="card-topline"><span>mais pedido</span><span>01 / 04</span></div>
          <div class="service-card-icon icon-sun" aria-hidden="true">✳</div>
          <h3>Manicure<br /><i>lume</i></h3>
          <p>Cutilagem delicada, lixamento, hidratação e a cor que faz sentido hoje.</p>
          <div class="card-bottomline"><span>60 min</span><strong>R$ 85</strong></div>
        </article>

        <article class="service-card service-card-outline reveal reveal-delay-2">
          <div class="card-topline"><span>essencial</span><span>02 / 04</span></div>
          <div class="service-card-icon icon-wave" aria-hidden="true">⌁</div>
          <h3>Banho de<br /><i>gel</i></h3>
          <p>Estrutura e brilho para deixar a rotina mais prática sem perder a leveza.</p>
          <div class="card-bottomline"><span>90 min</span><strong>R$ 145</strong></div>
        </article>

        <article class="service-card service-card-photo reveal reveal-delay-3">
          <img src="${images.detail}" alt="Detalhe de unhas com esmalte vermelho e acabamento brilhante" loading="lazy" />
          <div class="service-photo-overlay"><span>03 / 04</span></div>
        </article>

        <article class="service-card service-card-accent reveal reveal-delay-4">
          <div class="card-topline"><span>para experimentar</span><span>04 / 04</span></div>
          <div class="service-card-icon icon-star" aria-hidden="true">✦</div>
          <h3>Detalhe<br /><i>autoral</i></h3>
          <p>Uma ideia, uma referência ou só vontade de sair do óbvio. A gente cria junto.</p>
          <div class="card-bottomline"><span>+ 30 min</span><strong>sob consulta</strong></div>
        </article>
      </div>
    </section>

    <section class="atelier section-shell" id="atelier">
      <div class="atelier-art reveal">
        <div class="atelier-image-wrap">
          <img src="${images.process}" alt="Mãos sendo cuidadas durante um atendimento de manicure" loading="lazy" />
        </div>
        <div class="atelier-circle" aria-hidden="true"><span>pausa</span><span>é parte</span><span>do cuidado</span></div>
      </div>
      <div class="atelier-copy reveal reveal-delay-1">
        <p class="eyebrow">a essência lume</p>
        <h2>Beleza que<br /><i>não corre.</i></h2>
        <p class="large-copy">Aqui, o tempo do cuidado importa tanto quanto o resultado. A Lume manicure nasceu para ser uma pausa no meio do dia, daquelas que você sente nas mãos e leva para o resto da semana.</p>
        <a class="button button-outline" href="#agenda">Conheça o espaço <span aria-hidden="true">↗</span></a>
        <div class="atelier-facts"><span><b>01</b> atendimento individual</span><span><b>02</b> produtos escolhidos a dedo</span><span><b>03</b> conversa sem pressa</span></div>
      </div>
    </section>

    <section class="gallery section-shell" aria-labelledby="gallery-title">
      <div class="gallery-heading reveal">
        <p class="eyebrow">do nosso caderno</p>
        <h2 id="gallery-title">Pequenos<br /><i>detalhes.</i></h2>
        <a class="circle-link" href="#agenda" aria-label="Agendar um horário">↗</a>
      </div>
      <div class="gallery-grid">
        <figure class="gallery-item gallery-item-wide reveal reveal-delay-1">
          <img src="${images.detail}" alt="Unhas vermelhas com acabamento brilhante" loading="lazy" />
        </figure>
        <figure class="gallery-item gallery-item-tall reveal reveal-delay-2">
          <img src="${images.hero}" alt="Atendimento de manicure em detalhe" loading="lazy" />
        </figure>
        <div class="gallery-note reveal reveal-delay-3">
          <p>O esmalte muda.<br /><i>O cuidado fica.</i></p>
        </div>
      </div>
    </section>

    <section class="booking section-shell" id="agenda">
      <div class="booking-intro reveal">
        <p class="eyebrow">vamos marcar?</p>
        <h2>Seu próximo<br /><i>ritual começa aqui.</i></h2>
        <p>Escolha uma data aproximada e a gente responde para confirmar o melhor horário.</p>
        <div class="booking-contact"><span>ou fale direto</span><a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a></div>
      </div>
      <form class="booking-form reveal reveal-delay-1" id="booking-form">
        <label for="name">Seu nome <span>*</span></label>
        <input id="name" name="name" type="text" autocomplete="name" placeholder="Como podemos te chamar?" required />
        <div class="form-row">
          <div>
            <label for="service">Ritual <span>*</span></label>
            <select id="service" name="service" required>
              <option value="" selected disabled>Escolha um serviço</option>
              <option>Manicure lume</option>
              <option>Banho de gel</option>
              <option>Detalhe autoral</option>
            </select>
          </div>
          <div>
            <label for="date">Melhor data <span>*</span></label>
            <input id="date" name="date" type="date" required />
          </div>
        </div>
        <label for="message">Alguma referência? <span class="optional">opcional</span></label>
        <textarea id="message" name="message" rows="3" placeholder="Pode contar o que você está imaginando..."></textarea>
        <button class="button button-dark form-submit" type="submit">Pedir disponibilidade <span aria-hidden="true">↗</span></button>
        <p class="form-feedback" role="status" aria-live="polite"></p>
      </form>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-main section-shell">
      <a class="wordmark wordmark-footer" href="#inicio" aria-label="Lume manicure, início">
        <img class="brand-logo" src="${lumeLogo}" alt="" />
        <span class="brand-name">manicure</span>
      </a>
      <p>para mãos que contam<br />suas próprias histórias.</p>
      <div class="footer-links"><a href="#servicos">Serviços</a><a href="#atelier">Espaço</a><a href="#agenda">Agendar</a></div>
      <div class="social-links" aria-label="Redes sociais">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><img src="${instagramIcon}" alt="" /></a>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" aria-label="WhatsApp"><img src="${whatsappIcon}" alt="" /></a>
      </div>
    </div>
    <div class="footer-bottom section-shell"><span>© 2026 Lume manicure</span><span>feito com calma, em São Paulo</span><a href="https://unsplash.com" target="_blank" rel="noreferrer">imagens via Unsplash ↗</a></div>
  </footer>
`

const header = document.querySelector('[data-header]')
const menuToggle = document.querySelector('.menu-toggle')
const mainNav = document.querySelector('#main-nav')

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  mainNav.classList.toggle('is-open', !isOpen)
  document.body.classList.toggle('menu-open', !isOpen)
})

document.querySelectorAll('.main-nav a, .header-cta').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false')
    mainNav.classList.remove('is-open')
    document.body.classList.remove('menu-open')
  })
})

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24)
updateHeader()
window.addEventListener('scroll', updateHeader, { passive: true })

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))

const form = document.querySelector('#booking-form')
const feedback = document.querySelector('.form-feedback')
const dateInput = document.querySelector('#date')
dateInput.min = new Date().toISOString().split('T')[0]

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = new FormData(form)
  const name = formData.get('name')
  const service = formData.get('service')
  feedback.textContent = `Obrigada, ${name}! Recebemos seu pedido para ${service.toLowerCase()}. Em breve a gente confirma por WhatsApp.`
  feedback.classList.add('is-visible')
  form.reset()
  dateInput.min = new Date().toISOString().split('T')[0]
})
