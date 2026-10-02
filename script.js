const P={
wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3 17.7 6.3 21l6.3-6.3a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
phone:'<path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/>',
mail:'<path d="M3 5h18v14H3zm1.8 1.8L12 12.5l7.2-5.7" fill="none" stroke="currentColor" stroke-width="2"/>',
pin:'<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>',
arrow:'<path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
check:'<path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',
home:'<path d="M3 11 12 3l9 8v10h-6v-6H9v6H3z"/>',
hammer:'<path d="M3 21l8-8 2 2-8 8zM13 4l4-2 5 5-2 4-3-1-5-5z"/>',
brush:'<path d="M18 2l4 4-9 9-4-4zM8 13c-3 0-4 2-4 4 0 2-1 3-2 4 4 1 8 0 9-4z"/>',
roof:'<path d="M2 12 12 3l10 9h-3v9H5v-9zm8 9v-5h4v5z"/>',
tools:'<path d="M4 4l5 3-1.5 2.5L3 7zM20 4l-6 6 3 3 6-6a4 4 0 0 0-3-3zM10 11l-7 9 1 1 9-7z"/>',
shield:'<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/>',
star:'<path d="m12 2 3 6.5 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21l1.5-7L2 9.3l7-.8z"/>',
eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zm10 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>',
clock:'<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5h-2v6l5 3 1-1.7-4-2.3z"/>',
cog:'<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-1-6h2l.6 3 2 .8 2.6-1.7 1.4 1.4-1.7 2.6.8 2 3 .6v2l-3 .6-.8 2 1.7 2.6-1.4 1.4-2.6-1.7-2 .8-.6 3h-2l-.6-3-2-.8-2.6 1.7-1.4-1.4 1.7-2.6-.8-2-3-.6v-2l3-.6.8-2L4.6 6.5 6 5.1l2.6 1.7 2-.8z"/>',
menu:'<path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
spark:'<path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z"/>'};
document.querySelectorAll('[data-i]').forEach(e=>{const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 24 24');s.setAttribute('class','ico');s.setAttribute('fill','currentColor');s.innerHTML=P[e.dataset.i]||'';e.replaceWith(s)});
const b=document.querySelector('.burger');if(b)b.onclick=()=>b.closest('.navbar').classList.toggle('open');
const f=document.querySelector('form.f');if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);const body=encodeURIComponent(`Name: ${d.get('first')} ${d.get('last')}\nPhone: ${d.get('phone')}\nEmail: ${d.get('email')}\n\n${d.get('msg')}`);location.href=`mailto:handyhandshomerepair@gmail.com?subject=Repair%20Request&body=${body}`};
