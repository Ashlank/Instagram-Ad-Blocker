const matchs = {
  'es': 'Publicidad',
  'en': "Sponsored"
}

const lang = document.children[0].attributes.lang.value.slice(0,2)

const observer = new MutationObserver(mutations => {
  mutations.forEach((mutation) => {
    const spans = mutation.target.querySelectorAll('a span div span')
    if(spans.length) {
      spans.forEach((span) => {
        if(span.textContent === matchs[lang]) {
          const parent = span.closest('article')
          parent?.removeChild(parent.childNodes[0])
        }
      })
    }
  })
});

observer.observe(document.body, { childList: true, subtree: true });