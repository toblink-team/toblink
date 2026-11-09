let P=[
{id:1,n:'بلیزر زرشکی Tailored',s:'Maison N',p:2890000,c:['ترند','کت','رسمی'],i:'./assets/toblink-asset-3.jpg',z:['S','M','L'],o:['زرشکی','مشکی']},
{id:2,n:'پیراهن کرم مینیمال',s:'Nava Studio',p:1640000,c:['جدید','پیراهن','مینیمال','زیر۲'],i:'./assets/toblink-asset-4.jpg',z:['M','L'],o:['کرم','سفید']},
{id:3,n:'شلوار راسته مشکی',s:'Line 08',p:1980000,c:['شلوار','مینیمال','زیر۲'],i:'./assets/toblink-asset-5.jpg',z:['36','38','40'],o:['مشکی']},
{id:4,n:'کت کوتاه خاکی',s:'Atelier S',p:2450000,c:['جدید','کت','مینیمال'],i:'./assets/toblink-asset-6.jpg',z:['S','M'],o:['خاکی']},
{id:5,n:'ست استریت طوسی',s:'RAW',p:2190000,c:['ترند','استریت'],i:'./assets/toblink-asset-7.jpg',z:['M','L'],o:['طوسی']},
{id:6,n:'پیراهن مشکی شب',s:'Noir Room',p:3290000,c:['پیراهن','رسمی','ترند'],i:'./assets/toblink-asset-8.jpg',z:['S','M','L'],o:['مشکی']},
{id:7,n:'جین آبی Relaxed',s:'DENIM Lab',p:1840000,c:['شلوار','استریت','زیر۲'],i:'./assets/toblink-asset-2.jpg',z:['28','30','32'],o:['آبی']},
{id:8,n:'کت کرم ساختارمند',s:'Maison N',p:3140000,c:['کت','رسمی','مینیمال'],i:'./assets/toblink-asset-3.jpg',z:['S','M','L'],o:['کرم']},
{id:9,n:'پیراهن راه‌راه روزمره',s:'Nava Studio',p:1490000,c:['پیراهن','جدید','زیر۲'],i:'./assets/toblink-asset-4.jpg',z:['M','L'],o:['آبی','سفید']},
{id:10,n:'شلوار پارچه‌ای زیتونی',s:'Atelier S',p:1760000,c:['شلوار','مینیمال','زیر۲'],i:'./assets/toblink-asset-5.jpg',z:['36','38','40'],o:['زیتونی']},
{id:11,n:'بلیزر مشکی Oversized',s:'Line 08',p:2790000,c:['کت','ترند','استریت'],i:'./assets/toblink-asset-6.jpg',z:['M','L'],o:['مشکی']},
{id:12,n:'تاپ کرم Ribbed',s:'RAW',p:980000,c:['جدید','مینیمال','زیر۲'],i:'./assets/toblink-asset-7.jpg',z:['S','M','L'],o:['کرم','مشکی']}
];

let S=[
['Maison N','M','Tailoring • Minimal'],
['Nava Studio','N','Everyday • Clean'],
['Line 08','08','Urban • Essential'],
['Atelier S','S','Modern • Soft'],
['RAW','R','Street • Relaxed'],
['Noir Room','NR','Evening • Formal'],
['DENIM Lab','DL','Denim • Casual']
];

const SAVE_KEY='toblink-saved-v2';
let F='همه';
let selected=P[0];
let saved=new Set();
let toastTimer;

try{
  const raw=JSON.parse(localStorage.getItem(SAVE_KEY)||'[]');
  if(Array.isArray(raw)) saved=new Set(raw.map(Number));
}catch{}

const byId=id=>document.getElementById(id);
const money=x=>new Intl.NumberFormat('fa-IR').format(x)+' تومان';

function persistSaved(){
  try{localStorage.setItem(SAVE_KEY,JSON.stringify([...saved]));}catch{}
}

function go(id){
  document.querySelectorAll('.page').forEach(el=>el.classList.remove('on'));
  byId(id)?.classList.add('on');
  document.querySelectorAll('[data-p]').forEach(el=>el.classList.toggle('on',el.dataset.p===id));
  if(id==='explore') renderProducts();
  if(id==='saved') renderSaved();
  if(id==='fit') renderSelected();
  window.scrollTo({top:0,behavior:'smooth'});
}

function card(p){
  return `<article class="card" onclick="openProduct(${p.id})">
    <div class="pic">
      <img src="${p.i}" alt="${p.n}">
      <button class="heart ${saved.has(p.id)?'on':''}" aria-label="ذخیره" onclick="event.stopPropagation();save(${p.id})">
  ${saved.has(p.id)
    ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 21s-7-4.6-9.5-7.3C-.6 10.4.7 5 5.7 4.2 8.2 3.8 10.6 5 12 7c1.4-2 3.8-3.2 6.3-2.8 5 .8 6.3 6.2 3.2 9.5C19 16.4 12 21 12 21z"/></svg>'
    : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6c-2.1-2.1-5.5-2.1-7.6 0L12 5.8l-1.2-1.2c-2.1-2.1-5.5-2.1-7.6 0s-2.1 5.5 0 7.6L12 21l8.8-8.8c2.1-2.1 2.1-5.5 0-7.6z"/></svg>'
  }
</button>
    </div>
    <div class="info">
      <div class="small">${p.s}</div>
      <h4>${p.n}</h4>
      <div class="row"><div class="price">${money(p.p)}</div><button class="try" onclick="event.stopPropagation();tryIt(${p.id})">پرو کن</button></div>
    </div>
  </article>`;
}

function renderProducts(){
  const search=byId('search');
  const q=(search?.value||'').trim().toLowerCase();
  const list=P.filter(p=>{
    const filterMatch=F==='همه'||p.c.includes(F);
    const haystack=(p.n+' '+p.s+' '+p.c.join(' ')+' '+p.o.join(' ')).toLowerCase();
    return filterMatch&&(!q||haystack.includes(q));
  });
  const grid=byId('grid');
  if(grid) grid.innerHTML=list.length?list.map(card).join(''):'<div class="emptyState">چیزی با این فیلتر پیدا نکردیم.</div>';
}

function filter(button){
  document.querySelectorAll('[data-f]').forEach(el=>el.classList.remove('on'));
  button.classList.add('on');
  F=button.dataset.f||'همه';
  renderProducts();
}

async function save(id){
  const supabase=window.__TOBLINK_SUPABASE__;
  const user=window.__TOBLINK_USER__;
  const product=P.find(x=>x.id===id);

  if(!user){
    window.location.href='./auth';
    return;
  }

  if(!supabase || !product?.dbId){
    toast('خطا در اتصال به حساب');
    return;
  }

  const wasSaved=saved.has(id);

  if(wasSaved){
    const {error}=await supabase
      .from('saved_products')
      .delete()
      .eq('user_id',user.id)
      .eq('product_id',product.dbId);

    if(error){
      console.error(error);
      toast('حذف از ذخیره‌ها انجام نشد');
      return;
    }

    saved.delete(id);
  }else{
    const {error}=await supabase
      .from('saved_products')
      .insert({
        user_id:user.id,
        product_id:product.dbId
      });

    if(error){
      console.error(error);
      toast('ذخیره انجام نشد');
      return;
    }

    saved.add(id);
  }

  const badge=byId('badge');
  if(badge) badge.textContent=String(saved.size);

  renderProducts();
  renderSaved();

  toast(saved.has(id)?'ذخیره شد':'از ذخیره‌ها حذف شد');
}

function renderSaved(){
  const grid=byId('savedGrid');
  if(!grid) return;
  const list=P.filter(p=>saved.has(p.id));
  grid.innerHTML=list.length?list.map(card).join(''):'<div class="emptyState">هنوز چیزی ذخیره نکردی.<br><button class="btn outline" style="margin-top:12px" onclick="go(\'explore\')">برو اکسپلور</button></div>';
}

function openProduct(id){
  const p=P.find(x=>x.id===id);
  if(!p) return;
  closeM('storeModal');
  const detail=byId('detail');
  detail.innerHTML=`
    <div class="detailimg"><img src="${p.i}" alt="${p.n}"></div>
    <div>
      <button class="storeLink" onclick="openStore('${p.s}')">${p.s} ← فروشگاه</button>
      <h2>${p.n}</h2>
      <div class="bigprice">${money(p.p)}</div>
      <b class="optionLabel">سایز</b>
      <div class="opts" style="margin:7px 0 14px">${p.z.map((x,i)=>`<button class="opt ${i?'':'on'}" onclick="pick(this)">${x}</button>`).join('')}</div>
      <b class="optionLabel">رنگ</b>
      <div class="opts" style="margin-top:7px">${p.o.map((x,i)=>`<button class="opt ${i?'':'on'}" onclick="pick(this)">${x}</button>`).join('')}</div>
      <p>این محصول توسط ${p.s} ارائه می‌شود. موجودی، قیمت نهایی، ارسال و مرجوعی توسط خود فروشگاه انجام می‌شود.</p>
      <div class="detailacts">
        <button class="btn soft" onclick="tryIt(${p.id});closeM('productModal')">✦ پرو با AI</button>
        <button class="btn outline" onclick="save(${p.id})">
  ${saved.has(p.id)
    ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style="vertical-align:middle;margin-left:6px"><path d="M12 21s-7-4.6-9.5-7.3C-.6 10.4.7 5 5.7 4.2 8.2 3.8 10.6 5 12 7c1.4-2 3.8-3.2 6.3-2.8 5 .8 6.3 6.2 3.2 9.5C19 16.4 12 21 12 21z"/></svg> ذخیره شده'
    : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" style="vertical-align:middle;margin-left:6px"><path d="M20.8 4.6c-2.1-2.1-5.5-2.1-7.6 0L12 5.8l-1.2-1.2c-2.1-2.1-5.5-2.1-7.6 0s-2.1 5.5 0 7.6L12 21l8.8-8.8c2.1-2.1 2.1-5.5 0-7.6z"/></svg> ذخیره'
  }
</button>
        <button class="buy" onclick="buy(${p.id})">خرید از فروشگاه ←</button>
      </div>
      <p class="refText">خرید در سایت فروشگاه انجام می‌شود و لینک دارای شناسه referral اختصاصی Toblink خواهد بود.</p>
    </div>`;
  openM('productModal');
}

function pick(button){
  [...button.parentElement.children].forEach(el=>el.classList.remove('on'));
  button.classList.add('on');
}

function tryIt(id){
  selected=P.find(x=>x.id===id)||P[0];
  renderSelected();
  go('fit');
}

function renderSelected(){
  const box=byId('selected');
  if(!box) return;
  box.innerHTML=`<img src="${selected.i}" alt="${selected.n}"><div><b>${selected.n}</b><span>${selected.s} • ${money(selected.p)}</span></div>`;
}

function photo(event){
  const file=event.target.files?.[0];
  if(!file||!file.type.startsWith('image/')) return;
  const preview=byId('preview');
  preview.src=URL.createObjectURL(file);
  preview.style.display='block';
  byId('empty').style.display='none';
  byId('result').classList.remove('on');
  byId('removePhoto').style.display='block';
}

function removeUserPhoto(){
  const input=byId('file');
  const preview=byId('preview');
  if(preview.src?.startsWith('blob:')) URL.revokeObjectURL(preview.src);
  preview.removeAttribute('src');
  preview.style.display='none';
  byId('empty').style.display='block';
  byId('result').classList.remove('on');
  byId('removePhoto').style.display='none';
  if(input) input.value='';
  toast('عکس حذف شد');
}

function generate(){
  const preview=byId('preview');
  if(!preview?.getAttribute('src')){toast('اول یک عکس اضافه کن');return;}
  byId('result').classList.add('on');
  toast('رابط آماده است؛ مرحله بعد اتصال API پرو واقعی است');
}

function openStore(name){
  const s=S.find(x=>x[0]===name)||[name,name[0],'Fashion Store'];
  const products=P.filter(p=>p.s===name);
  closeM('productModal');
  const body=byId('storeBody');
  body.innerHTML=`
    <div class="storeHero"><div class="logo">${s[1]}</div><div><h2>${s[0]}</h2><small>${s[2]} • فروشگاه تاییدشده Toblink</small></div></div>
    <div class="storeMeta"><span>${new Intl.NumberFormat('fa-IR').format(products.length)} محصول</span><span>پرو با AI فعال</span><span>خرید از سایت فروشگاه</span></div>
    <div class="storeProducts">${products.length?products.map(card).join(''):'<div class="emptyState">محصولی برای نمایش نیست.</div>'}</div>`;
  openM('storeModal');
}

async function buy(id){
  const p=P.find(x=>x.id===id);
  if(!p) return;

  const supabase=window.__TOBLINK_SUPABASE__;
  const user=window.__TOBLINK_USER__ || null;

  if(!supabase || !p.dbId || !p.storeDbId){
    toast('خطا در ثبت خرید');
    return;
  }

  const ref='tbl_'+Date.now().toString(36);

  const {error}=await supabase
    .from('referrals')
    .insert({
      referral_code:ref,
      user_id:user?.id || null,
      product_id:p.dbId,
      store_id:p.storeDbId
    });

  if(error){
    console.error(error);
    toast('ثبت referral انجام نشد');
    return;
  }

  const separator=p.u.includes('?')?'&':'?';
  const targetUrl=`${p.u}${separator}ref=${encodeURIComponent(ref)}`;

  window.location.href=targetUrl;
}

function openSeller(){openM('sellerModal');}
function openM(id){byId(id)?.classList.add('on');document.body.style.overflow='hidden';}
function closeM(id){byId(id)?.classList.remove('on');if(!document.querySelector('.modalbg.on'))document.body.style.overflow='';}
function backdrop(event,id){if(event.target.id===id)closeM(id);}
function toast(text){
  const el=byId('toast');
  if(!el) return;
  el.textContent=text;
  el.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove('on'),2100);
}

function initialize(){
  const badge=byId('badge');
  if(badge) badge.textContent=String(saved.size);
  const trends=byId('trends');
  if(trends) trends.innerHTML=P.slice(0,3).map(p=>`<div class="trend" onclick="openProduct(${p.id})"><img src="${p.i}" alt="${p.n}"><div><b>${p.n}</b><span>${p.s}</span></div><em>${new Intl.NumberFormat('fa-IR').format(Math.round(p.p/1000))}K</em></div>`).join('');
  const stores=byId('stores');
  if(stores) stores.innerHTML=S.slice(0,5).map(s=>`<div class="store" onclick="openStore('${s[0]}')"><div class="logo">${s[1]}</div><div><b>${s[0]}</b><span>${s[2]}</span></div></div>`).join('');
  renderProducts();
  renderSelected();
  renderSaved();
}

async function loadDataFromSupabase(){
  try{
    const key =
      'sb_publishable_b5irJaX3iD6H4zW36jHT7w_UUSzBvIN';

    const headers={
      apikey:key,
      Authorization:`Bearer ${key}`
    };

    const [productsResponse,storesResponse]=await Promise.all([
      fetch(
        'https://ukiuzvglukmzsyqdnlrs.supabase.co/rest/v1/products?select=id,store_id,name,price,image_url,product_url,category,style,colors,sizes,is_promoted,stores(name)&is_available=eq.true',
        {headers}
      ),
      fetch(
        'https://ukiuzvglukmzsyqdnlrs.supabase.co/rest/v1/stores?select=id,name,description,is_verified,is_active&is_active=eq.true',
        {headers}
      )
    ]);

    if(!productsResponse.ok || !storesResponse.ok){
      throw new Error('Supabase request failed');
    }

    const productData=await productsResponse.json();
    const storeData=await storesResponse.json();

    if(Array.isArray(productData) && productData.length){
      P=productData.map((row,index)=>({
        id:index+1000,
        dbId:row.id,
storeDbId:row.store_id,
        n:row.name,
        s:row.stores?.name || 'Toblink Store',
        p:Number(row.price),
        c:[
          row.category,
          row.style,
          row.is_promoted ? 'ترند' : null
        ].filter(Boolean),
        i:row.image_url || './assets/toblink-asset-3.jpg',
        z:row.sizes || [],
        o:row.colors || [],
        u:row.product_url || '#'
      }));

      selected=P[0];
    }

    if(Array.isArray(storeData) && storeData.length){
      S=storeData.map(row=>[
        row.name,
        row.name
          .split(' ')
          .map(word=>word[0])
          .join('')
          .toUpperCase()
          .slice(0,2),
        row.description || 'Fashion Store'
      ]);
    }

  }catch(error){
    console.error('Supabase data error:',error);
  }

  initialize();
}

loadDataFromSupabase();
function updateProfileUser(user){
  const nameEl = document.getElementById('profile-user-name');
  const emailEl = document.getElementById('profile-user-email');

  if(!nameEl || !emailEl) return;

  if(user){
    const fullName =
      user.user_metadata?.full_name ||
      user.email?.split('@')[0] ||
      'کاربر Toblink';

    nameEl.textContent = fullName;
    emailEl.textContent = user.email || '';
  }else{
    nameEl.textContent = 'وارد حساب شو';
    emailEl.textContent = '';
  }
}

window.addEventListener('toblink-auth', (event)=>{
  updateProfileUser(event.detail?.user || null);
  loadSavedFromSupabase();
});
async function loadSavedFromSupabase(){
  const supabase=window.__TOBLINK_SUPABASE__;
  const user=window.__TOBLINK_USER__;

  if(!supabase || !user || !P.length) return;

  const {data,error}=await supabase
    .from('saved_products')
    .select('product_id')
    .eq('user_id',user.id);

  if(error){
    console.error('Saved products load error:',error);
    return;
  }

  saved.clear();

  for(const row of data || []){
    const product=P.find(p=>p.dbId===row.product_id);
    if(product) saved.add(product.id);
  }

  const badge=byId('badge');
  if(badge) badge.textContent=String(saved.size);

  renderProducts();
  renderSaved();
}

if(window.__TOBLINK_USER__ !== undefined){
  updateProfileUser(window.__TOBLINK_USER__);
}