(function(){"use strict";const l={videoElement:"ytd-playlist-video-renderer",videoElementsContainer:"ytd-playlist-video-list-renderer #contents",timestampContainer:"ytd-thumbnail-overlay-time-status-renderer",metadataContainer:{main:".immersive-header-content .metadata-action-bar",fallback:"ytd-playlist-sidebar-renderer #items"},statsContainer:{main:".metadata-stats yt-formatted-string",fallback:"#stats yt-formatted-string"},designAnchor:{old:"ytd-playlist-sidebar-renderer",new:"ytd-playlist-header-renderer"}},r=()=>{f();const n=60;let e=0,t=setInterval(()=>{e>=n&&clearInterval(t),document.querySelector(l.timestampContainer)&&g()===h()&&(clearInterval(t),C()),e++},1e3)},f=()=>{const n=document.querySelector(d()?"#ytpdc-playlist-summary-new":"#ytpdc-playlist-summary-old");if(n){const e=document.createElement("div");e.style.minHeight="128px",e.style.width="100%",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.textContent="Calculating...",n.innerHTML="",n.appendChild(e)}},g=()=>v(p()).filter(e=>e===null).length,h=()=>{const n=["[Private video]","[Deleted video]","[Unavailable]","[Video unavailable]","[Restricted video]","[Age restricted]"],e=document.querySelectorAll("a#video-title");let t=0;return e.forEach(o=>{n.includes(o.title)&&t++}),t},C=()=>{w(),b(),x();const n=p(),e=v(n),t=e.reduce((a,m)=>a+m),o=S(t),i=E({timestamps:e,playlistDuration:o});D(i)},w=()=>{window.ytpdc||(window.ytpdc={playlistObserver:!1,interPlaylistNavigation:!1})},b=()=>{if(window.ytpdc.playlistObserver)return;window.ytpdc.playlistObserver=!0;const n=new MutationObserver(t=>{r()}),e=document.querySelector(l.videoElementsContainer);e&&n.observe(e,{childList:!0})},x=()=>{window.ytpdc.interPlaylistNavigation||(window.ytpdc.interPlaylistNavigation=!0,document.addEventListener("yt-navigate-finish",()=>r(),!1))},p=()=>[...document.querySelector(l.videoElementsContainer).getElementsByTagName(l.videoElement)],v=n=>n.map(e=>{if(!e)return null;const t=e.querySelector(l.timestampContainer);if(!t)return null;const o=t.innerText;return o?T(o):null}),S=n=>{let e=n;const t=`${Math.floor(e/3600)}`.padStart(2,"0");e%=3600;const o=`${Math.floor(e/60)}`.padStart(2,"0"),i=`${e%60}`.padStart(2,"0");return`${t}:${o}:${i}`},E=({timestamps:n,playlistDuration:e})=>{const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="start",t.style.minHeight="128px",t.style.margin="16px 0px",t.style.padding="16px",t.style.borderRadius="16px",t.style.background="rgba(255,255,255,0.2)",t.style.fontSize="1.5rem",d()||(P()||(t.style.background="rgba(0,0,0,0.8)"),t.style.color="white");const o=c("Total duration:",`${e}`,"#86efac");t.appendChild(o);const i=c("Videos counted:",`${n.length}`,"#fdba74");t.appendChild(i);const a=N(),m=c("Videos not counted:",`${a?a-n.length:"N/A"}`,"#fca5a5");if(t.appendChild(m),n.length>=100){const s=document.createElement("div");s.style.marginTop="16px",s.style.display="flex",s.style.flexDirection="row",s.style.alignItems="center";const u=document.createElement("div");u.style.color="#000",u.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1Zm-.5 5a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2h-.5ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd"/></svg>',s.appendChild(u);const y=document.createElement("p");y.style.paddingLeft="8px",y.textContent="Scroll down to count more videos",s.appendChild(y),t.appendChild(s)}return t},T=n=>{let e=n.split(":").map(i=>parseInt(i,10)),t=0,o=1;for(;e.length>0;){let i=e.pop();isNaN(i)||(t+=o*i,o*=60)}return t},c=(n,e,t="#facc15")=>{const o=document.createElement("div");o.style.margin="8px 0px",o.style.display="flex",o.style.flexDirection="row",o.style.justifyContent="between";const i=document.createElement("p");i.textContent=n;const a=document.createElement("p");return a.style.color=t,a.style.fontWeight=700,a.style.paddingLeft="8px",a.textContent=e,o.appendChild(i),o.appendChild(a),o},D=n=>{const e=d();let t=document.querySelector(e?l.metadataContainer.main:l.metadataContainer.fallback);if(!t)return null;const o=document.querySelector(e?"#ytpdc-playlist-summary-new":"#ytpdc-playlist-summary-old");o&&o.parentNode.removeChild(o),n.id=e?"ytpdc-playlist-summary-new":"ytpdc-playlist-summary-old",t.parentNode.insertBefore(n,t.nextSibling)},N=()=>{const n=document.querySelector(d()?l.statsContainer.main:l.statsContainer.fallback);return n?parseInt(n.innerText.replace(/\D/g,"")):null},P=()=>document.documentElement.getAttribute("dark")!==null,d=()=>{const n=document.querySelector(l.designAnchor.new),e=document.querySelector(l.designAnchor.old);return n&&e.getAttribute("hidden")!==null};document.readyState!=="loading"?r():document.addEventListener("DOMContentLoaded",()=>{r()})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnJhcnkuanMiLCIuLi8uLi9zcmMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25maWcgPSB7XG4gIHZpZGVvRWxlbWVudDogXCJ5dGQtcGxheWxpc3QtdmlkZW8tcmVuZGVyZXJcIixcbiAgdmlkZW9FbGVtZW50c0NvbnRhaW5lcjogXCJ5dGQtcGxheWxpc3QtdmlkZW8tbGlzdC1yZW5kZXJlciAjY29udGVudHNcIixcbiAgdGltZXN0YW1wQ29udGFpbmVyOiBcInl0ZC10aHVtYm5haWwtb3ZlcmxheS10aW1lLXN0YXR1cy1yZW5kZXJlclwiLFxuICBtZXRhZGF0YUNvbnRhaW5lcjoge1xuICAgIG1haW46IFwiLmltbWVyc2l2ZS1oZWFkZXItY29udGVudCAubWV0YWRhdGEtYWN0aW9uLWJhclwiLFxuICAgIGZhbGxiYWNrOiBcInl0ZC1wbGF5bGlzdC1zaWRlYmFyLXJlbmRlcmVyICNpdGVtc1wiXG4gIH0sXG4gIHN0YXRzQ29udGFpbmVyOiB7XG4gICAgbWFpbjogXCIubWV0YWRhdGEtc3RhdHMgeXQtZm9ybWF0dGVkLXN0cmluZ1wiLFxuICAgIGZhbGxiYWNrOiBcIiNzdGF0cyB5dC1mb3JtYXR0ZWQtc3RyaW5nXCJcbiAgfSxcbiAgLy8gRGVzaWduIGFuY2hvciA9IEVsZW1lbnQgdGhhdCBoZWxwcyBkaXN0aW5ndWlzaCBiZXR3ZWVuIG9sZCAmIG5ldyBsYXlvdXRcbiAgZGVzaWduQW5jaG9yOiB7XG4gICAgb2xkOiBcInl0ZC1wbGF5bGlzdC1zaWRlYmFyLXJlbmRlcmVyXCIsXG4gICAgbmV3OiBcInl0ZC1wbGF5bGlzdC1oZWFkZXItcmVuZGVyZXJcIlxuICB9XG59O1xuXG5jb25zdCBwb2xsUGxheWxpc3RSZWFkeSA9ICgpID0+IHtcbiAgZGlzcGxheUxvYWRlcigpO1xuXG4gIGNvbnN0IG1heFBvbGxDb3VudCA9IDYwO1xuICBsZXQgcG9sbENvdW50ID0gMDtcblxuICBsZXQgcGxheWxpc3RQb2xsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmIChwb2xsQ291bnQgPj0gbWF4UG9sbENvdW50KSBjbGVhckludGVydmFsKHBsYXlsaXN0UG9sbCk7XG5cbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy50aW1lc3RhbXBDb250YWluZXIpICYmXG4gICAgICBjb3VudFVuYXZhaWxhYmxlVGltZXN0YW1wcygpID09PSBjb3VudFVuYXZhaWxhYmxlVmlkZW9zKClcbiAgICApIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwocGxheWxpc3RQb2xsKTtcbiAgICAgIHByb2Nlc3NQbGF5bGlzdCgpO1xuICAgIH1cblxuICAgIHBvbGxDb3VudCsrO1xuICB9LCAxMDAwKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlMb2FkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXlsaXN0U3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgaXNOZXdEZXNpZ24oKVxuICAgICAgPyBcIiN5dHBkYy1wbGF5bGlzdC1zdW1tYXJ5LW5ld1wiXG4gICAgICA6IFwiI3l0cGRjLXBsYXlsaXN0LXN1bW1hcnktb2xkXCJcbiAgKTtcblxuICBpZiAocGxheWxpc3RTdW1tYXJ5KSB7XG4gICAgY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9hZGluZy5zdHlsZS5taW5IZWlnaHQgPSBcIjEyOHB4XCI7XG4gICAgbG9hZGluZy5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGxvYWRpbmcuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuICAgIGxvYWRpbmcuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgbG9hZGluZy50ZXh0Q29udGVudCA9IFwiQ2FsY3VsYXRpbmcuLi5cIjtcblxuICAgIHBsYXlsaXN0U3VtbWFyeS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHBsYXlsaXN0U3VtbWFyeS5hcHBlbmRDaGlsZChsb2FkaW5nKTtcbiAgfVxufTtcblxuY29uc3QgY291bnRVbmF2YWlsYWJsZVRpbWVzdGFtcHMgPSAoKSA9PiB7XG4gIGNvbnN0IHRpbWVzdGFtcHMgPSBnZXRUaW1lc3RhbXBzKGdldFZpZGVvcygpKTtcbiAgcmV0dXJuIHRpbWVzdGFtcHMuZmlsdGVyKCh0aW1lc3RhbXApID0+IHRpbWVzdGFtcCA9PT0gbnVsbCkubGVuZ3RoO1xufTtcblxuY29uc3QgY291bnRVbmF2YWlsYWJsZVZpZGVvcyA9ICgpID0+IHtcbiAgY29uc3QgdW5hdmFpbGFibGVWaWRlb1RpdGxlcyA9IFtcbiAgICBcIltQcml2YXRlIHZpZGVvXVwiLFxuICAgIFwiW0RlbGV0ZWQgdmlkZW9dXCIsXG4gICAgXCJbVW5hdmFpbGFibGVdXCIsXG4gICAgXCJbVmlkZW8gdW5hdmFpbGFibGVdXCIsXG4gICAgXCJbUmVzdHJpY3RlZCB2aWRlb11cIixcbiAgICBcIltBZ2UgcmVzdHJpY3RlZF1cIlxuICBdO1xuXG4gIGNvbnN0IHZpZGVvVGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImEjdmlkZW8tdGl0bGVcIik7XG5cbiAgbGV0IHVuYXZhaWxhYmxlVmlkZW9zQ291bnQgPSAwO1xuXG4gIHZpZGVvVGl0bGVzLmZvckVhY2goKHZpZGVvVGl0bGUpID0+IHtcbiAgICBpZiAodW5hdmFpbGFibGVWaWRlb1RpdGxlcy5pbmNsdWRlcyh2aWRlb1RpdGxlLnRpdGxlKSkge1xuICAgICAgdW5hdmFpbGFibGVWaWRlb3NDb3VudCsrO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHVuYXZhaWxhYmxlVmlkZW9zQ291bnQ7XG59O1xuXG5jb25zdCBwcm9jZXNzUGxheWxpc3QgPSAoKSA9PiB7XG4gIGNvbmZpZ3VyZVBhZ2UoKTtcbiAgc2V0dXBQbGF5bGlzdE9ic2VydmVyKCk7XG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgY29uc3QgdmlkZW9zID0gZ2V0VmlkZW9zKCk7XG4gIGNvbnN0IHRpbWVzdGFtcHMgPSBnZXRUaW1lc3RhbXBzKHZpZGVvcyk7XG4gIGNvbnN0IHRvdGFsRHVyYXRpb25JblNlY29uZHMgPSB0aW1lc3RhbXBzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuICBjb25zdCBwbGF5bGlzdER1cmF0aW9uID0gZm9ybWF0VGltZXN0YW1wKHRvdGFsRHVyYXRpb25JblNlY29uZHMpO1xuICBjb25zdCBwbGF5bGlzdFN1bW1hcnkgPSBjcmVhdGVQbGF5bGlzdFN1bW1hcnkoe1xuICAgIHRpbWVzdGFtcHMsXG4gICAgcGxheWxpc3REdXJhdGlvblxuICB9KTtcbiAgYWRkU3VtbWFyeVRvUGFnZShwbGF5bGlzdFN1bW1hcnkpO1xufTtcblxuY29uc3QgY29uZmlndXJlUGFnZSA9ICgpID0+IHtcbiAgaWYgKHdpbmRvdy55dHBkYykgcmV0dXJuO1xuICB3aW5kb3cueXRwZGMgPSB7IHBsYXlsaXN0T2JzZXJ2ZXI6IGZhbHNlLCBpbnRlclBsYXlsaXN0TmF2aWdhdGlvbjogZmFsc2UgfTtcbn07XG5cbmNvbnN0IHNldHVwUGxheWxpc3RPYnNlcnZlciA9ICgpID0+IHtcbiAgaWYgKHdpbmRvdy55dHBkYy5wbGF5bGlzdE9ic2VydmVyKSByZXR1cm47XG4gIHdpbmRvdy55dHBkYy5wbGF5bGlzdE9ic2VydmVyID0gdHJ1ZTtcblxuICBjb25zdCBwbGF5bGlzdE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKF8pID0+IHtcbiAgICBwb2xsUGxheWxpc3RSZWFkeSgpO1xuICB9KTtcblxuICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcudmlkZW9FbGVtZW50c0NvbnRhaW5lcik7XG4gIGlmICh0YXJnZXROb2RlKSB7XG4gICAgcGxheWxpc3RPYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICB9XG59O1xuXG5jb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBpZiAoIXdpbmRvdy55dHBkYy5pbnRlclBsYXlsaXN0TmF2aWdhdGlvbikge1xuICAgIHdpbmRvdy55dHBkYy5pbnRlclBsYXlsaXN0TmF2aWdhdGlvbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwieXQtbmF2aWdhdGUtZmluaXNoXCIsXG4gICAgICAoKSA9PiBwb2xsUGxheWxpc3RSZWFkeSgpLFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBnZXRWaWRlb3MgPSAoKSA9PiB7XG4gIGNvbnN0IHZpZGVvRWxlbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGNvbmZpZy52aWRlb0VsZW1lbnRzQ29udGFpbmVyXG4gICk7XG4gIGNvbnN0IHZpZGVvcyA9IHZpZGVvRWxlbWVudHNDb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXG4gICAgY29uZmlnLnZpZGVvRWxlbWVudFxuICApO1xuICByZXR1cm4gWy4uLnZpZGVvc107XG59O1xuXG5jb25zdCBnZXRUaW1lc3RhbXBzID0gKHZpZGVvcykgPT4ge1xuICByZXR1cm4gdmlkZW9zLm1hcCgodmlkZW8pID0+IHtcbiAgICBpZiAoIXZpZGVvKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHRpbWVzdGFtcENvbnRhaW5lciA9IHZpZGVvLnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnRpbWVzdGFtcENvbnRhaW5lcik7XG4gICAgaWYgKCF0aW1lc3RhbXBDb250YWluZXIpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgZm9ybWF0dGVkVGltZXN0YW1wID0gdGltZXN0YW1wQ29udGFpbmVyLmlubmVyVGV4dDtcbiAgICBpZiAoIWZvcm1hdHRlZFRpbWVzdGFtcCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCB0aW1lc3RhbXAgPSB1bmZvcm1hdFRpbWVzdGFtcChmb3JtYXR0ZWRUaW1lc3RhbXApO1xuICAgIHJldHVybiB0aW1lc3RhbXA7XG4gIH0pO1xufTtcblxuY29uc3QgZm9ybWF0VGltZXN0YW1wID0gKHRpbWVzdGFtcCkgPT4ge1xuICBsZXQgdG90YWxTZWNvbmRzID0gdGltZXN0YW1wO1xuICBjb25zdCBob3VycyA9IGAke01hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gMzYwMCl9YC5wYWRTdGFydCgyLCBcIjBcIik7XG4gIHRvdGFsU2Vjb25kcyAlPSAzNjAwO1xuICBjb25zdCBtaW51dGVzID0gYCR7TWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyA2MCl9YC5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IHNlY29uZHMgPSBgJHt0b3RhbFNlY29uZHMgJSA2MH1gLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xufTtcblxuY29uc3QgY3JlYXRlUGxheWxpc3RTdW1tYXJ5ID0gKHsgdGltZXN0YW1wcywgcGxheWxpc3REdXJhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHN1bW1hcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIFN0eWxlcyBmb3IgbmV3IGRlc2lnblxuICBzdW1tYXJ5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgc3VtbWFyeUNvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgc3VtbWFyeUNvbnRhaW5lci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG4gIHN1bW1hcnlDb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwic3RhcnRcIjtcbiAgc3VtbWFyeUNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSBcIjEyOHB4XCI7XG4gIHN1bW1hcnlDb250YWluZXIuc3R5bGUubWFyZ2luID0gXCIxNnB4IDBweFwiO1xuICBzdW1tYXJ5Q29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSBcIjE2cHhcIjtcbiAgc3VtbWFyeUNvbnRhaW5lci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE2cHhcIjtcbiAgc3VtbWFyeUNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMilcIjtcbiAgc3VtbWFyeUNvbnRhaW5lci5zdHlsZS5mb250U2l6ZSA9IFwiMS41cmVtXCI7XG5cbiAgLy8gRmFsbGJhY2sgc3R5bGVzIGZvciBvbGQgZGVzaWduXG4gIGlmICghaXNOZXdEZXNpZ24oKSkge1xuICAgIGlmIChpc0RhcmtNb2RlKCkpIHtcbiAgICAgIHN1bW1hcnlDb250YWluZXIuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bW1hcnlDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwwLjgpXCI7XG4gICAgICBzdW1tYXJ5Q29udGFpbmVyLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRvdGFsIER1cmF0aW9uXG4gIGNvbnN0IHRvdGFsRHVyYXRpb24gPSBjcmVhdGVTdW1tYXJ5SXRlbShcbiAgICBcIlRvdGFsIGR1cmF0aW9uOlwiLFxuICAgIGAke3BsYXlsaXN0RHVyYXRpb259YCxcbiAgICBcIiM4NmVmYWNcIlxuICApO1xuICBzdW1tYXJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvdGFsRHVyYXRpb24pO1xuXG4gIC8vIFZpZGVvcyBjb3VudGVkXG4gIGNvbnN0IHZpZGVvc0NvdW50ZWQgPSBjcmVhdGVTdW1tYXJ5SXRlbShcbiAgICBcIlZpZGVvcyBjb3VudGVkOlwiLFxuICAgIGAke3RpbWVzdGFtcHMubGVuZ3RofWAsXG4gICAgXCIjZmRiYTc0XCJcbiAgKTtcbiAgc3VtbWFyeUNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWRlb3NDb3VudGVkKTtcblxuICAvLyBWaWRlb3Mgbm90IGNvdW50ZWRcbiAgY29uc3QgdG90YWxWaWRlb3NJblBsYXlsaXN0ID0gY291bnRUb3RhbFZpZGVvc0luUGxheWxpc3QoKTtcbiAgY29uc3QgdmlkZW9zTm90Q291bnRlZCA9IGNyZWF0ZVN1bW1hcnlJdGVtKFxuICAgIFwiVmlkZW9zIG5vdCBjb3VudGVkOlwiLFxuICAgIGAke1xuICAgICAgdG90YWxWaWRlb3NJblBsYXlsaXN0ID8gdG90YWxWaWRlb3NJblBsYXlsaXN0IC0gdGltZXN0YW1wcy5sZW5ndGggOiBcIk4vQVwiXG4gICAgfWAsXG4gICAgXCIjZmNhNWE1XCJcbiAgKTtcbiAgc3VtbWFyeUNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWRlb3NOb3RDb3VudGVkKTtcblxuICAvLyBUb29sdGlwXG4gIGlmICh0aW1lc3RhbXBzLmxlbmd0aCA+PSAxMDApIHtcbiAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b29sdGlwLnN0eWxlLm1hcmdpblRvcCA9IFwiMTZweFwiO1xuICAgIHRvb2x0aXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRvb2x0aXAuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgdG9vbHRpcC5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcblxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGljb24uc3R5bGUuY29sb3IgPSBcIiMwMDBcIjtcbiAgICBpY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCJ3aGl0ZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyIDFDNS45MjUgMSAxIDUuOTI1IDEgMTJzNC45MjUgMTEgMTEgMTFzMTEtNC45MjUgMTEtMTFTMTguMDc1IDEgMTIgMVptLS41IDVhMSAxIDAgMSAwIDAgMmguNWExIDEgMCAxIDAgMC0yaC0uNVpNMTAgMTBhMSAxIDAgMSAwIDAgMmgxdjNoLTFhMSAxIDAgMSAwIDAgMmg0YTEgMSAwIDEgMCAwLTJoLTF2LTRhMSAxIDAgMCAwLTEtMWgtMlpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPjwvc3ZnPmA7XG4gICAgdG9vbHRpcC5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIGNvbnN0IHRvb2x0aXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9vbHRpcFRleHQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjhweFwiO1xuICAgIHRvb2x0aXBUZXh0LnRleHRDb250ZW50ID0gXCJTY3JvbGwgZG93biB0byBjb3VudCBtb3JlIHZpZGVvc1wiO1xuICAgIHRvb2x0aXAuYXBwZW5kQ2hpbGQodG9vbHRpcFRleHQpO1xuXG4gICAgc3VtbWFyeUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sdGlwKTtcbiAgfVxuXG4gIHJldHVybiBzdW1tYXJ5Q29udGFpbmVyO1xufTtcblxuY29uc3QgdW5mb3JtYXRUaW1lc3RhbXAgPSAoZm9ybWF0dGVkVGltZXN0YW1wKSA9PiB7XG4gIGxldCB0aW1lQ29tcG9uZW50cyA9IGZvcm1hdHRlZFRpbWVzdGFtcFxuICAgIC5zcGxpdChcIjpcIilcbiAgICAubWFwKCh0aW1lQ29tcG9uZW50KSA9PiBwYXJzZUludCh0aW1lQ29tcG9uZW50LCAxMCkpO1xuXG4gIGxldCBzZWNvbmRzID0gMDtcbiAgbGV0IG1pbnV0ZXMgPSAxO1xuXG4gIHdoaWxlICh0aW1lQ29tcG9uZW50cy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHRpbWVDb21wb25lbnQgPSB0aW1lQ29tcG9uZW50cy5wb3AoKTtcbiAgICBpZiAoaXNOYU4odGltZUNvbXBvbmVudCkpIGNvbnRpbnVlO1xuXG4gICAgc2Vjb25kcyArPSBtaW51dGVzICogdGltZUNvbXBvbmVudDtcbiAgICBtaW51dGVzICo9IDYwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHM7XG59O1xuXG5jb25zdCBjcmVhdGVTdW1tYXJ5SXRlbSA9IChsYWJlbCwgdmFsdWUsIHZhbHVlQ29sb3IgPSBcIiNmYWNjMTVcIikgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc3R5bGUubWFyZ2luID0gXCI4cHggMHB4XCI7XG4gIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGNvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgY29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJiZXR3ZWVuXCI7XG5cbiAgY29uc3QgbGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGFiZWxDb250YWluZXIudGV4dENvbnRlbnQgPSBsYWJlbDtcblxuICBjb25zdCB2YWx1ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB2YWx1ZUNvbnRhaW5lci5zdHlsZS5jb2xvciA9IHZhbHVlQ29sb3I7XG4gIHZhbHVlQ29udGFpbmVyLnN0eWxlLmZvbnRXZWlnaHQgPSA3MDA7XG4gIHZhbHVlQ29udGFpbmVyLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI4cHhcIjtcbiAgdmFsdWVDb250YWluZXIudGV4dENvbnRlbnQgPSB2YWx1ZTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxDb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmFsdWVDb250YWluZXIpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5jb25zdCBhZGRTdW1tYXJ5VG9QYWdlID0gKHN1bW1hcnkpID0+IHtcbiAgY29uc3QgbmV3RGVzaWduID0gaXNOZXdEZXNpZ24oKTtcblxuICBsZXQgbWV0YWRhdGFTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBuZXdEZXNpZ25cbiAgICAgID8gY29uZmlnLm1ldGFkYXRhQ29udGFpbmVyLm1haW5cbiAgICAgIDogY29uZmlnLm1ldGFkYXRhQ29udGFpbmVyLmZhbGxiYWNrXG4gICk7XG4gIGlmICghbWV0YWRhdGFTZWN0aW9uKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBwcmV2aW91c1N1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIG5ld0Rlc2lnbiA/IFwiI3l0cGRjLXBsYXlsaXN0LXN1bW1hcnktbmV3XCIgOiBcIiN5dHBkYy1wbGF5bGlzdC1zdW1tYXJ5LW9sZFwiXG4gICk7XG5cbiAgaWYgKHByZXZpb3VzU3VtbWFyeSkge1xuICAgIHByZXZpb3VzU3VtbWFyeS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHByZXZpb3VzU3VtbWFyeSk7XG4gIH1cblxuICBzdW1tYXJ5LmlkID0gbmV3RGVzaWduXG4gICAgPyBcInl0cGRjLXBsYXlsaXN0LXN1bW1hcnktbmV3XCJcbiAgICA6IFwieXRwZGMtcGxheWxpc3Qtc3VtbWFyeS1vbGRcIjtcblxuICBtZXRhZGF0YVNlY3Rpb24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3VtbWFyeSwgbWV0YWRhdGFTZWN0aW9uLm5leHRTaWJsaW5nKTtcbn07XG5cbmNvbnN0IGNvdW50VG90YWxWaWRlb3NJblBsYXlsaXN0ID0gKCkgPT4ge1xuICBjb25zdCB0b3RhbFZpZGVvc1N0YXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGlzTmV3RGVzaWduKCkgPyBjb25maWcuc3RhdHNDb250YWluZXIubWFpbiA6IGNvbmZpZy5zdGF0c0NvbnRhaW5lci5mYWxsYmFja1xuICApO1xuXG4gIGlmICghdG90YWxWaWRlb3NTdGF0KSByZXR1cm4gbnVsbDtcblxuICBjb25zdCB0b3RhbFZpZGVvQ291bnQgPSBwYXJzZUludChcbiAgICB0b3RhbFZpZGVvc1N0YXQuaW5uZXJUZXh0LnJlcGxhY2UoL1xcRC9nLCBcIlwiKVxuICApO1xuXG4gIHJldHVybiB0b3RhbFZpZGVvQ291bnQ7XG59O1xuXG5jb25zdCBpc0RhcmtNb2RlID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhcmtcIikgIT09IG51bGw7XG59O1xuXG5jb25zdCBpc05ld0Rlc2lnbiA9ICgpID0+IHtcbiAgY29uc3QgbmV3RGVzaWduQW5jaG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuZGVzaWduQW5jaG9yLm5ldyk7XG4gIGNvbnN0IG9sZERlc2lnbkFuY2hvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmRlc2lnbkFuY2hvci5vbGQpO1xuXG4gIGNvbnN0IGlzTmV3RGVzaWduID1cbiAgICBuZXdEZXNpZ25BbmNob3IgJiYgb2xkRGVzaWduQW5jaG9yLmdldEF0dHJpYnV0ZShcImhpZGRlblwiKSAhPT0gbnVsbDtcblxuICByZXR1cm4gaXNOZXdEZXNpZ247XG59O1xuXG5leHBvcnQgeyBwb2xsUGxheWxpc3RSZWFkeSB9O1xuIiwiaW1wb3J0IHsgcG9sbFBsYXlsaXN0UmVhZHkgfSBmcm9tIFwiLi9saWJyYXJ5XCI7XG5cbi8vIEVudHJ5LXBvaW50XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpIHtcbiAgcG9sbFBsYXlsaXN0UmVhZHkoKTtcbn0gZWxzZSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBwb2xsUGxheWxpc3RSZWFkeSgpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjb25maWciLCJwb2xsUGxheWxpc3RSZWFkeSIsImRpc3BsYXlMb2FkZXIiLCJtYXhQb2xsQ291bnQiLCJwb2xsQ291bnQiLCJwbGF5bGlzdFBvbGwiLCJjb3VudFVuYXZhaWxhYmxlVGltZXN0YW1wcyIsImNvdW50VW5hdmFpbGFibGVWaWRlb3MiLCJwcm9jZXNzUGxheWxpc3QiLCJwbGF5bGlzdFN1bW1hcnkiLCJpc05ld0Rlc2lnbiIsImxvYWRpbmciLCJnZXRUaW1lc3RhbXBzIiwiZ2V0VmlkZW9zIiwidGltZXN0YW1wIiwidW5hdmFpbGFibGVWaWRlb1RpdGxlcyIsInZpZGVvVGl0bGVzIiwidW5hdmFpbGFibGVWaWRlb3NDb3VudCIsInZpZGVvVGl0bGUiLCJjb25maWd1cmVQYWdlIiwic2V0dXBQbGF5bGlzdE9ic2VydmVyIiwic2V0dXBFdmVudExpc3RlbmVycyIsInZpZGVvcyIsInRpbWVzdGFtcHMiLCJ0b3RhbER1cmF0aW9uSW5TZWNvbmRzIiwiYiIsInBsYXlsaXN0RHVyYXRpb24iLCJmb3JtYXRUaW1lc3RhbXAiLCJjcmVhdGVQbGF5bGlzdFN1bW1hcnkiLCJhZGRTdW1tYXJ5VG9QYWdlIiwicGxheWxpc3RPYnNlcnZlciIsIl8iLCJ0YXJnZXROb2RlIiwidmlkZW8iLCJ0aW1lc3RhbXBDb250YWluZXIiLCJmb3JtYXR0ZWRUaW1lc3RhbXAiLCJ1bmZvcm1hdFRpbWVzdGFtcCIsInRvdGFsU2Vjb25kcyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJzdW1tYXJ5Q29udGFpbmVyIiwiaXNEYXJrTW9kZSIsInRvdGFsRHVyYXRpb24iLCJjcmVhdGVTdW1tYXJ5SXRlbSIsInZpZGVvc0NvdW50ZWQiLCJ0b3RhbFZpZGVvc0luUGxheWxpc3QiLCJjb3VudFRvdGFsVmlkZW9zSW5QbGF5bGlzdCIsInZpZGVvc05vdENvdW50ZWQiLCJ0b29sdGlwIiwiaWNvbiIsInRvb2x0aXBUZXh0IiwidGltZUNvbXBvbmVudHMiLCJ0aW1lQ29tcG9uZW50IiwibGFiZWwiLCJ2YWx1ZSIsInZhbHVlQ29sb3IiLCJjb250YWluZXIiLCJsYWJlbENvbnRhaW5lciIsInZhbHVlQ29udGFpbmVyIiwic3VtbWFyeSIsIm5ld0Rlc2lnbiIsIm1ldGFkYXRhU2VjdGlvbiIsInByZXZpb3VzU3VtbWFyeSIsInRvdGFsVmlkZW9zU3RhdCIsIm5ld0Rlc2lnbkFuY2hv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
