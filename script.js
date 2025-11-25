// Simple gallery lightbox
document.querySelectorAll('.thumb').forEach(t => {
  t.addEventListener('click', () => {
    const src = t.getAttribute('data-full') || t.querySelector('img').src;
    const lb = document.getElementById('lightbox'), img = document.getElementById('lightImg');
    img.src = src;
    lb.style.display = 'grid';
    document.body.style.overflow = 'hidden';
  });
});
function closeLight(){
  document.getElementById('lightbox').style.display='none';
  document.body.style.overflow = '';
}

// Basic form handling
const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  const btn = form.querySelector('button');
  
  status.style.display = 'block';
  status.textContent = 'Transmitting...';
  btn.style.opacity = '0.7';
  
  await new Promise(r => setTimeout(r, 1000));
  
  status.textContent = 'Request received. We will be in touch shortly.';
  btn.style.opacity = '1';
  form.reset();
});

// Entrance Animation
window.addEventListener('load', () => {
  document.querySelectorAll('.panel, header').forEach((p,i)=> {
    p.style.opacity = 0;
    p.style.transform = 'translateY(20px)';
    setTimeout(()=>{ 
      p.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'; 
      p.style.opacity=1; 
      p.style.transform='none' 
    }, 100 * i);
  });
});
