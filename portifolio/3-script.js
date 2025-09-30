// small utilities
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    // dark mode toggle (salva no localStorage)
    const themeBtn = document.getElementById('themeToggle');
    function setTheme(isDark){
      if(isDark){
        document.documentElement.classList.add('dark');
        themeBtn.textContent = '☀️';
        themeBtn.setAttribute('aria-pressed','true');
      } else {
        document.documentElement.classList.remove('dark');
        themeBtn.textContent = '🌙';
        themeBtn.setAttribute('aria-pressed','false');
      }
      localStorage.setItem('prefersDark', isDark ? '1' : '0');
    }
    themeBtn.addEventListener('click', ()=> setTheme(localStorage.getItem('prefersDark') !== '1'));
    // initialize
    setTheme(localStorage.getItem('prefersDark') === '1');

    // form handler (envia mailto como fallback)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name || !email || !message){
        formStatus.textContent = 'Por favor, preencha todos os campos.';
        return;
      }
      // aqui você pode integrar com um backend (ex: Formspree, Netlify Forms, ou API própria)
      // fallback: abrir email no cliente
      const subject = encodeURIComponent('Contato via portfólio — ' + name);
      const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:seu.email@exemplo.com?subject=${subject}&body=${body}`;
      formStatus.textContent = 'Abrindo seu cliente de email...';
    });

    // smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const target = document.querySelector(a.getAttribute('href'));
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
        }
      })
    })

