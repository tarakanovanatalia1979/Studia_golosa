const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.position = 'absolute'; nav.style.top = '74px'; nav.style.left = '20px'; nav.style.right = '20px';
    nav.style.background = '#fff'; nav.style.padding = '20px'; nav.style.borderRadius = '20px'; nav.style.flexDirection = 'column'; nav.style.boxShadow = '0 20px 60px rgba(45,45,45,.12)';
  });
}

const revealItems = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
revealItems.forEach(el=>io.observe(el));

const cookie = document.getElementById('cookieBanner');
const ok = document.getElementById('cookieOk');
if (!localStorage.getItem('golosaCookieOk')) cookie?.classList.add('show');
ok?.addEventListener('click',()=>{ localStorage.setItem('golosaCookieOk','1'); cookie.classList.remove('show'); });

const form = document.getElementById('leadForm');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name'); const phone = data.get('phone'); const msg = data.get('message') || '';
  const text = encodeURIComponent(`Здравствуйте! Хочу записаться на занятие в студию Голоса.%0AИмя: ${name}%0AТелефон: ${phone}%0AКомментарий: ${msg}`);
  window.open(`https://wa.me/79178547439?text=${text}`, '_blank');
});

const lessonCarousel = document.querySelector('.lesson-carousel');
if (lessonCarousel) {
  const track = lessonCarousel.querySelector('.carousel-track');
  const prev = lessonCarousel.querySelector('.carousel-prev');
  const next = lessonCarousel.querySelector('.carousel-next');
  const step = () => Math.max(280, Math.floor(track.clientWidth * 0.72));
  prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
}
