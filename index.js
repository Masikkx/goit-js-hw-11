import{a as u,S as d,i}from"./assets/vendor-Cm9gDZN8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="52775931-16083de2a094930dd1fb1c03d",p={key:m,image_type:"photo",orientation:"horizontal",safesearch:!0};async function y(s){return(await u.get(f,{params:{...p,q:s}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <ul class="info">
          <li><b>Likes:</b> ${t.likes}</li>
          <li><b>Views:</b> ${t.views}</li>
          <li><b>Comments:</b> ${t.comments}</li>
          <li><b>Downloads:</b> ${t.downloads}</li>
        </ul>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const S=document.querySelector(".form"),q=document.querySelector('input[name="search-text"]');S.addEventListener("submit",async s=>{s.preventDefault();const o=q.value.trim();if(!o){i.warning({message:"Please enter a search term!",position:"topRight"});return}b(),L();try{const t=await y(o);if(t.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}catch(t){i.error({message:"An error occurred while fetching images.",position:"topRight"}),console.error(t)}finally{w()}});
//# sourceMappingURL=index.js.map
