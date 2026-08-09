
const views=[...document.querySelectorAll('.view')];
const toast=document.getElementById('toast');
const PRODUCT_DETAILS={"product-1": {"short": "کت زنانه با طراحی کلاسیک، برش تمیز و رنگ زرشکی عمیق؛ مناسب استایل رسمی و نیمه‌رسمی.", "description": "این کت با فرم ساختارمند و دوخت دقیق طراحی شده تا روی بدن ایستایی مرتب و حرفه‌ای داشته باشد. برای استفاده روزمره، محیط کار، قرارهای رسمی و ترکیب با شلوار پارچه‌ای یا جین مناسب است.", "colors": [["زرشکی", "#7e0e27"], ["مشکی", "#222222"], ["کرم", "#d9c5ae"]], "sizes": ["S", "M", "L", "XL"], "disabledSizes": ["XL"], "care": "شست‌وشوی خشک پیشنهاد می‌شود. از سفیدکننده استفاده نشود و اتوکشی با دمای پایین انجام شود.", "specs": {"دسته‌بندی": "کت زنانه", "جنسیت": "زنانه", "جنس پارچه": "فاستونی ترکیبی", "فرم": "Regular Fit", "فصل": "پاییز و زمستان", "قد لباس": "متوسط", "کد محصول": "AV-1028", "کشور تولید": "ایران"}, "delivery": "ارسال ۱ تا ۲ روز کاری", "return": "۷ روز امکان بازگشت", "sellerProducts": "۳۶", "sellerScore": "۴.۹", "sellerShip": "۱ روز"}, "product-2": {"short": "مانتوی کرم مینیمال با خطوط ساده و فرم آزاد برای استایل روزمره و شهری.", "description": "طراحی مینیمال این مانتو باعث می‌شود به‌راحتی با رنگ‌های خنثی و اکسسوری‌های مختلف ترکیب شود. پارچه سبک و فرم آزاد آن برای استفاده طولانی‌مدت مناسب است.", "colors": [["کرم", "#d8c7b4"], ["نسکافه‌ای", "#9d8068"], ["مشکی", "#242424"]], "sizes": ["36", "38", "40", "42", "44"], "disabledSizes": [], "care": "شست‌وشو با آب سرد و شوینده ملایم. برای حفظ فرم لباس، به‌صورت آویزان خشک شود.", "specs": {"دسته‌بندی": "مانتو", "جنسیت": "زنانه", "جنس پارچه": "لینن ترکیبی", "فرم": "Loose Fit", "فصل": "بهار و تابستان", "قد لباس": "بلند", "کد محصول": "NI-2140", "کشور تولید": "ایران"}, "delivery": "ارسال ۲ تا ۳ روز کاری", "return": "۷ روز امکان بازگشت", "sellerProducts": "۲۸", "sellerScore": "۴.۷", "sellerShip": "۲ روز"}, "product-3": {"short": "ست کژوال شهری با فرم راحت و مناسب استفاده روزانه.", "description": "این محصول برای حرکت راحت و استفاده روزمره طراحی شده است. برش ساده، پارچه تنفس‌پذیر و ترکیب رنگ کاربردی، آن را به انتخابی مناسب برای استایل خیابانی تبدیل می‌کند.", "colors": [["خاکستری", "#777777"], ["سفید", "#eeeeee"], ["سرمه‌ای", "#27364c"]], "sizes": ["S", "M", "L", "XL", "XXL"], "disabledSizes": ["S"], "care": "شست‌وشو با ماشین در دمای ۳۰ درجه. از خشک‌کن با حرارت بالا استفاده نشود.", "specs": {"دسته‌بندی": "ست روزمره", "جنسیت": "یونیسکس", "جنس پارچه": "پنبه", "فرم": "Relaxed Fit", "فصل": "چهارفصل", "نوع یقه": "گرد", "کد محصول": "MO-3187", "کشور تولید": "ترکیه"}, "delivery": "ارسال ۱ تا ۳ روز کاری", "return": "۷ روز امکان بازگشت", "sellerProducts": "۵۲", "sellerScore": "۴.۸", "sellerShip": "۱ تا ۲ روز"}, "product-4": {"short": "پیراهن مشکی مجلسی با فرم کشیده و جزئیات ظریف.", "description": "این پیراهن برای مهمانی‌ها و مراسم رسمی طراحی شده و با فرم متناسب و پارچه خوش‌افت، ظاهری تمیز و شیک ایجاد می‌کند.", "colors": [["مشکی", "#1d1d1d"], ["زرشکی", "#761c33"]], "sizes": ["36", "38", "40", "42"], "disabledSizes": ["36"], "care": "فقط خشکشویی. اتوکشی مستقیم روی پارچه انجام نشود.", "specs": {"دسته‌بندی": "پیراهن مجلسی", "جنسیت": "زنانه", "جنس پارچه": "کرپ", "فرم": "Slim Fit", "فصل": "چهارفصل", "قد لباس": "ماکسی", "کد محصول": "RO-4412", "کشور تولید": "ایران"}, "delivery": "ارسال ۲ روز کاری", "return": "تعویض سایز تا ۷ روز", "sellerProducts": "۱۹", "sellerScore": "۴.۹", "sellerShip": "۲ روز"}, "product-5": {"short": "کت جین روزمره با طراحی ساده و رنگ آبی قابل ترکیب.", "description": "کت جین کلاسیک با دوخت مقاوم و فرم استاندارد، برای استفاده روزانه و لایه‌سازی روی تی‌شرت، هودی یا پیراهن مناسب است.", "colors": [["آبی متوسط", "#52718c"], ["آبی تیره", "#2e465c"], ["ذغالی", "#4e5055"]], "sizes": ["S", "M", "L", "XL"], "disabledSizes": [], "care": "پشت‌ورو و با آب سرد شسته شود. برای جلوگیری از تغییر رنگ از شوینده ملایم استفاده کنید.", "specs": {"دسته‌بندی": "کت جین", "جنسیت": "یونیسکس", "جنس پارچه": "دنیم", "فرم": "Regular Fit", "فصل": "بهار و پاییز", "نوع بسته‌شدن": "دکمه‌ای", "کد محصول": "AR-5116", "کشور تولید": "ترکیه"}, "delivery": "ارسال ۱ تا ۲ روز کاری", "return": "۷ روز امکان بازگشت", "sellerProducts": "۴۴", "sellerScore": "۴.۶", "sellerShip": "۱ روز"}, "product-6": {"short": "استایل اسمارت‌کژوال با ظاهر مرتب و راحت برای محیط کار و قرارهای روزانه.", "description": "ترکیبی متعادل میان رسمی و روزمره که با برش تمیز و پارچه باکیفیت، برای موقعیت‌های مختلف قابل استفاده است.", "colors": [["کرم روشن", "#d8cdbd"], ["قهوه‌ای", "#70584a"], ["سرمه‌ای", "#25364e"]], "sizes": ["M", "L", "XL", "XXL"], "disabledSizes": ["XXL"], "care": "شست‌وشوی دستی یا برنامه لباس‌های ظریف. اتوکشی با حرارت کم.", "specs": {"دسته‌بندی": "اسمارت کژوال", "جنسیت": "مردانه", "جنس پارچه": "ویسکوز ترکیبی", "فرم": "Tailored Fit", "فصل": "چهارفصل", "نوع یقه": "برگردان", "کد محصول": "VA-6024", "کشور تولید": "ایران"}, "delivery": "ارسال ۲ تا ۳ روز کاری", "return": "۷ روز امکان بازگشت", "sellerProducts": "۳۱", "sellerScore": "۴.۸", "sellerShip": "۲ روز"}, "product-7": {"short": "هودی طوسی اورسایز با پارچه نرم و مناسب استایل اسپرت.", "description": "هودی راحت با فرم اورسایز، داخل نرم و جیب کاربردی که برای استفاده روزمره، دانشگاه، سفر و استایل خیابانی مناسب است.", "colors": [["طوسی", "#8b8b8b"], ["مشکی", "#252525"], ["سبز زیتونی", "#60654b"]], "sizes": ["S", "M", "L", "XL", "XXL"], "disabledSizes": [], "care": "در دمای ۳۰ درجه و پشت‌ورو شسته شود. از اتوکشی مستقیم روی چاپ یا جزئیات خودداری کنید.", "specs": {"دسته‌بندی": "هودی", "جنسیت": "یونیسکس", "جنس پارچه": "دورس پنبه‌ای", "فرم": "Oversized", "فصل": "پاییز و زمستان", "نوع آستین": "بلند", "کد محصول": "SL-7089", "کشور تولید": "ایران"}, "delivery": "ارسال ۱ تا ۲ روز کاری", "return": "۷ روز امکان بازگشت", "sellerProducts": "۶۳", "sellerScore": "۴.۷", "sellerShip": "۱ روز"}};
let activeProductId=null;
let selectedDetailColor='';
let selectedDetailSize='';

function showToast(message){
  if(!toast)return;
  toast.textContent=message;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer=setTimeout(()=>toast.classList.remove('show'),1600);
}

function go(id){
  views.forEach(view=>view.classList.toggle('active',view.id===id));
  if(id==='account') renderSavedProducts();
  if(id==='cart') renderCart();
  window.scrollTo({top:0,behavior:'smooth'});
}

document.addEventListener('click',event=>{
  const navTarget=event.target.closest('[data-go]');
  if(navTarget){
    event.preventDefault();
    go(navTarget.dataset.go);
    return;
  }

  const explicitDetail=event.target.closest('[data-product-detail]');
  if(explicitDetail){
    event.preventDefault();
    event.stopPropagation();
    openProductDetail(explicitDetail.dataset.productDetail);
    return;
  }

  const saveButton=event.target.closest('.save-product');
  if(saveButton){
    event.preventDefault();
    event.stopPropagation();
    toggleSaved(saveButton.dataset.saveId);
    return;
  }

  const addButton=event.target.closest('.add-cart-btn');
  if(addButton){
    event.preventDefault();
    event.stopPropagation();
    addToCart(addButton.dataset.cartId);
    return;
  }

  const quantityButton=event.target.closest('[data-qty-action]');
  if(quantityButton){
    const id=quantityButton.dataset.cartId;
    changeQuantity(id,quantityButton.dataset.qtyAction==='increase'?1:-1);
    return;
  }

  const removeButton=event.target.closest('[data-remove-cart]');
  if(removeButton){
    removeFromCart(removeButton.dataset.removeCart);
    return;
  }

  if(event.target.closest('#savedMenuRow')){
    document.getElementById('savedSection')?.scrollIntoView({behavior:'smooth',block:'start'});
    return;
  }

  const card=event.target.closest('.product-card');
  if(card && !event.target.closest('button,a')){
    openProductDetail(card.dataset.productId);
  }
});

const photoInput=document.getElementById('photoInput');
const preview=document.getElementById('photoPreview');
const content=document.getElementById('uploadContent');
const drop=document.getElementById('dropZone');
const removePhoto=document.getElementById('removePhoto');

function showFile(file){
  if(!file||!file.type.startsWith('image/'))return;
  const reader=new FileReader();
  reader.onload=()=>{
    preview.src=reader.result;
    preview.style.display='block';
    content.style.display='none';
    removePhoto.style.display='grid';
  };
  reader.readAsDataURL(file);
}

photoInput?.addEventListener('change',event=>showFile(event.target.files[0]));
removePhoto?.addEventListener('click',event=>{
  event.preventDefault();
  event.stopPropagation();
  preview.removeAttribute('src');
  preview.style.display='none';
  content.style.display='';
  removePhoto.style.display='none';
  photoInput.value='';
});
['dragenter','dragover'].forEach(name=>drop?.addEventListener(name,event=>{
  event.preventDefault();
  drop.classList.add('drag');
}));
['dragleave','drop'].forEach(name=>drop?.addEventListener(name,event=>{
  event.preventDefault();
  drop.classList.remove('drag');
}));
drop?.addEventListener('drop',event=>showFile(event.dataTransfer.files[0]));
document.getElementById('chooseClothes')?.addEventListener('click',()=>go('explore'));

const SAVE_KEY='toblink-saved-products-v1';
const CART_KEY='toblink-cart-v1';

function safeRead(key,fallback){
  try{
    const value=JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  }catch{
    return fallback;
  }
}

function toPersianNumber(value){
  return String(value).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
}

function formatMoney(value){
  return toPersianNumber(Number(value||0).toLocaleString('en-US'))+' تومان';
}

let savedProducts=new Set(Array.isArray(safeRead(SAVE_KEY,[]))?safeRead(SAVE_KEY,[]):[]);
let cart=safeRead(CART_KEY,{});
if(!cart||Array.isArray(cart)||typeof cart!=='object')cart={};

function writeSaved(){
  localStorage.setItem(SAVE_KEY,JSON.stringify([...savedProducts]));
}

function writeCart(){
  localStorage.setItem(CART_KEY,JSON.stringify(cart));
}

function getProductCard(productId){
  return document.querySelector(`#explore .product-card[data-product-id="${productId}"]`);
}

function getProductData(productId){
  const card=getProductCard(productId);
  if(!card)return null;
  return {
    id:productId,
    name:card.dataset.name||card.querySelector('h3')?.textContent.trim()||'محصول',
    shop:card.dataset.shop||card.querySelector('.shop')?.textContent.trim()||'فروشگاه',
    price:Number(card.dataset.price||0),
    image:card.dataset.image||card.querySelector('.product-image img')?.src||''
  };
}

function updateSavedUI(){
  document.querySelectorAll('.save-product').forEach(button=>{
    const isSaved=savedProducts.has(button.dataset.saveId);
    button.classList.toggle('saved',isSaved);
    button.setAttribute('aria-label',isSaved?'حذف از ذخیره‌شده‌ها':'ذخیره محصول');
    button.title=isSaved?'حذف از ذخیره‌شده‌ها':'ذخیره';
  });

  const detailSave=document.getElementById('detailSaveButton');
  if(detailSave && activeProductId){
    const isSaved=savedProducts.has(activeProductId);
    detailSave.classList.toggle('saved',isSaved);
    detailSave.setAttribute('aria-label',isSaved?'حذف از ذخیره‌شده‌ها':'ذخیره محصول');
  }

  const count=document.getElementById('savedCount');
  if(count)count.textContent=toPersianNumber(savedProducts.size);
}

function toggleSaved(productId){
  if(savedProducts.has(productId)){
    savedProducts.delete(productId);
    showToast('از ذخیره‌شده‌ها حذف شد');
  }else{
    savedProducts.add(productId);
    showToast('محصول ذخیره شد');
  }
  writeSaved();
  updateSavedUI();
  if(document.getElementById('account')?.classList.contains('active'))renderSavedProducts();
}

function renderSavedProducts(){
  const container=document.getElementById('savedProducts');
  const empty=document.getElementById('savedEmpty');
  if(!container||!empty)return;

  container.innerHTML='';
  [...savedProducts].forEach(id=>{
    const original=getProductCard(id);
    if(!original)return;
    const clone=original.cloneNode(true);
    clone.classList.add('account-saved-card');
    container.appendChild(clone);
  });

  empty.classList.toggle('hidden',container.children.length>0);
  updateSavedUI();
  updateCartUI();
}

function cartCount(){
  return Object.values(cart).reduce((sum,quantity)=>sum+Number(quantity||0),0);
}

function updateCartUI(){
  const count=cartCount();
  const headerCount=document.getElementById('headerCartCount');
  const accountCount=document.getElementById('accountCartCount');

  if(headerCount){
    headerCount.textContent=toPersianNumber(count);
    headerCount.classList.toggle('is-zero',count===0);
  }
  if(accountCount)accountCount.textContent=toPersianNumber(count);

  document.querySelectorAll('.add-cart-btn').forEach(button=>{
    const quantity=Number(cart[button.dataset.cartId]||0);
    button.classList.toggle('in-cart',quantity>0);
    button.textContent=quantity>0?'افزودن دوباره':'افزودن به سبد';
  });
}

function addToCart(productId){
  cart[productId]=Number(cart[productId]||0)+1;
  writeCart();
  updateCartUI();
  showToast('به سبد خرید اضافه شد');
}

function changeQuantity(productId,delta){
  const next=Number(cart[productId]||0)+delta;
  if(next<=0)delete cart[productId];
  else cart[productId]=next;
  writeCart();
  updateCartUI();
  renderCart();
}

function removeFromCart(productId){
  delete cart[productId];
  writeCart();
  updateCartUI();
  renderCart();
  showToast('از سبد خرید حذف شد');
}

function renderCart(){
  const container=document.getElementById('cartItems');
  const empty=document.getElementById('cartEmpty');
  if(!container||!empty)return;

  container.innerHTML='';
  let total=0;
  let count=0;

  Object.entries(cart).forEach(([id,quantity])=>{
    const product=getProductData(id);
    if(!product)return;
    quantity=Number(quantity||0);
    if(quantity<1)return;

    total+=product.price*quantity;
    count+=quantity;

    const item=document.createElement('article');
    item.className='cart-item';
    item.innerHTML=`
      <img class="cart-item-image" src="${product.image}" alt="${product.name}">
      <div class="cart-item-copy">
        <div class="cart-item-shop">${product.shop}</div>
        <h3 class="cart-item-title">${product.name}</h3>
        <div class="cart-item-price">${formatMoney(product.price)}</div>
      </div>
      <div class="cart-item-controls">
        <div class="qty-control">
          <button type="button" data-qty-action="decrease" data-cart-id="${id}" aria-label="کم کردن">−</button>
          <span>${toPersianNumber(quantity)}</span>
          <button type="button" data-qty-action="increase" data-cart-id="${id}" aria-label="اضافه کردن">+</button>
        </div>
        <button type="button" class="remove-cart-item" data-remove-cart="${id}">حذف</button>
      </div>`;
    container.appendChild(item);
  });

  empty.classList.toggle('hidden',container.children.length>0);
  document.getElementById('summaryCount').textContent=toPersianNumber(count);
  document.getElementById('summarySubtotal').textContent=formatMoney(total);
  document.getElementById('summaryTotal').textContent=formatMoney(total);

  const checkout=document.getElementById('checkoutButton');
  if(checkout)checkout.disabled=count===0;
}

function openProductDetail(productId){
  const product=getProductData(productId);
  const details=PRODUCT_DETAILS[productId];
  if(!product||!details)return;

  activeProductId=productId;
  selectedDetailColor=details.colors?.[0]?.[0]||'';
  selectedDetailSize=details.sizes?.find(size=>!details.disabledSizes?.includes(size))||'';

  document.getElementById('detailImage').src=product.image;
  document.getElementById('detailImage').alt=product.name;
  document.getElementById('detailShop').textContent=product.shop;
  document.getElementById('detailTitle').textContent=product.name;
  document.getElementById('detailPrice').textContent=formatMoney(product.price);
  document.getElementById('detailShortDescription').textContent=details.short||'';
  document.getElementById('detailDescription').textContent=details.description||'';
  document.getElementById('detailCare').textContent=details.care||'';
  document.getElementById('detailDelivery').textContent=details.delivery||'ارسال سریع';
  document.getElementById('detailReturn').textContent=details.return||'امکان بازگشت کالا';
  document.getElementById('detailSellerName').textContent=product.shop;
  document.getElementById('detailSellerInitial').textContent=(product.shop||'T').trim().charAt(0);
  document.getElementById('detailSellerProducts').textContent=toPersianNumber(details.sellerProducts||'۰');
  document.getElementById('detailSellerScore').textContent=toPersianNumber(details.sellerScore||'۰');
  document.getElementById('detailSellerShip').textContent=details.sellerShip||'۱ تا ۲ روز';

  renderDetailColors(details.colors||[]);
  renderDetailSizes(details.sizes||[],details.disabledSizes||[]);
  renderDetailSpecs(details.specs||{});
  updateSavedUI();
  go('productDetail');
}

function renderDetailColors(colors){
  const container=document.getElementById('detailColors');
  container.innerHTML='';
  colors.forEach(([label,value],index)=>{
    const button=document.createElement('button');
    button.type='button';
    button.className='color-option'+(index===0?' active':'');
    button.style.background=value;
    button.title=label;
    button.setAttribute('aria-label',label);
    button.addEventListener('click',()=>{
      selectedDetailColor=label;
      container.querySelectorAll('.color-option').forEach(item=>item.classList.remove('active'));
      button.classList.add('active');
      document.getElementById('selectedColorLabel').textContent=label;
    });
    container.appendChild(button);
  });
  document.getElementById('selectedColorLabel').textContent=colors[0]?.[0]||'';
}

function renderDetailSizes(sizes,disabledSizes){
  const container=document.getElementById('detailSizes');
  container.innerHTML='';
  sizes.forEach(size=>{
    const button=document.createElement('button');
    button.type='button';
    button.className='size-option'+(size===selectedDetailSize?' active':'');
    button.textContent=size;
    button.disabled=disabledSizes.includes(size);
    button.addEventListener('click',()=>{
      if(button.disabled)return;
      selectedDetailSize=size;
      container.querySelectorAll('.size-option').forEach(item=>item.classList.remove('active'));
      button.classList.add('active');
    });
    container.appendChild(button);
  });
}

function renderDetailSpecs(specs){
  const container=document.getElementById('detailSpecs');
  container.innerHTML='';
  Object.entries(specs).forEach(([label,value])=>{
    const item=document.createElement('div');
    item.className='product-spec-item';
    item.innerHTML=`<span>${label}</span><strong>${value}</strong>`;
    container.appendChild(item);
  });
}

document.getElementById('detailSaveButton')?.addEventListener('click',()=>{
  if(activeProductId)toggleSaved(activeProductId);
});

document.getElementById('detailAddCart')?.addEventListener('click',()=>{
  if(!activeProductId)return;
  if(!selectedDetailSize){
    showToast('لطفاً سایز را انتخاب کنید');
    return;
  }
  addToCart(activeProductId);
});

document.getElementById('checkoutButton')?.addEventListener('click',()=>{
  if(cartCount()===0)return;
  showToast('مرحله پرداخت در نسخه بعدی فعال می‌شود.');
});

document.querySelector('.size-guide-button')?.addEventListener('click',()=>{
  showToast('راهنمای سایز در مرحله بعد اضافه می‌شود.');
});

updateSavedUI();
updateCartUI();
