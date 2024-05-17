const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
    const xPos = event. offsetX
    const YPos = event. offsetY
    const SpanEl = document.createElement("Span");
    SpanEl.style.left = xPos + "px";
    SpanEl.style.top = YPos + "px";
    const size = Math.random()*100;
    SpanEl.style.wdth = size + "px";
    SpanEl.style.height = size + "px";
    bodyEl.appendChild(SpanEl);
    setTimeout(()=>{
SpanEl.remove();
    }, 3000)
});