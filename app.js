const cats=['All',...new Set(PRODUCTS.map(p=>p.category))];let cat='All',q='';
const $=s=>document.querySelector(s),g=$('#grid');
function chips(){$('#chips').innerHTML=cats.map(c=>`<button class="chip ${c===cat?'on':''}" data-c="${c}">${c}</button>`).join('')}
function show(){const L=PRODUCTS.filter(p=>(cat==='All'||p.category===cat)&&p.name.toLowerCase().includes(q));
g.innerHTML=L.length?L.map(p=>`<article class="card"><img src="${p.image}" alt="${p.name}" loading="lazy" data-id="${p.id}" style="background:${p.bg}"><div class="info"><div class="tag">${p.category}</div><h3>${p.name}</h3><div class="row"><span class="price">${p.price?'₹'+p.price.toLocaleString('en-IN'):'Price on request'}</span><button class="btn sm" data-e="${p.id}">Enquire</button></div></div></article>`).join(''):'<div class="empty">No cars match your search.</div>'}
$('#chips').onclick=e=>{if(e.target.dataset.c){cat=e.target.dataset.c;chips();show()}};
$('#q').oninput=e=>{q=e.target.value.toLowerCase().trim();show()};
g.onclick=e=>{const id=e.target.dataset.id||e.target.dataset.e;if(!id)return;const p=PRODUCTS.find(x=>x.id==id);
if(e.target.dataset.id){$('#lb img').src=p.image;$('#lb p').textContent=p.name;$('#lb').classList.add('on')}
else{location.href='mailto:?subject='+encodeURIComponent('Enquiry: '+p.name)}};
$('#lb').onclick=()=>$('#lb').classList.remove('on');
chips();show();
