
// Simple form handler: build mailto link to send booking (since hosting static)
function submitBooking(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const email=document.getElementById('email').value.trim();
  const pkg=document.getElementById('package').value.trim();
  const date=document.getElementById('date').value.trim();
  const notes=document.getElementById('notes').value.trim();
  if(!name || !phone || !email){ alert('Please fill name, phone and email'); return; }
  const subject = encodeURIComponent('Booking Request - STUDIO SEVEN');
  const body = encodeURIComponent(`Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0APackage: ${pkg}%0APreferred Date: ${date}%0ANotes: ${notes}`);
  const mail = `mailto:studio.seven@example.com?subject=${subject}&body=${body}`;
  window.location.href = mail;
}

// small gallery image placeholders (use your images by replacing src)
document.addEventListener('DOMContentLoaded', ()=>{
  const gallery = document.getElementById('gallery');
  if(!gallery) return;
  for(let i=1;i<=8;i++){
    const img = document.createElement('img');
    img.src = 'assets/images/placeholder'+i+'.jpg';
    img.alt = 'Studio Sample '+i;
    gallery.appendChild(img);
  }
});
