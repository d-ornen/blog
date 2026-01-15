document.addEventListener("DOMContentLoaded", function() {
  mermaid.initialize({ 
    startOnLoad: false, 
    theme: 'default'
  });

  const codeBlocks = document.querySelectorAll('pre.language-mermaid');
  codeBlocks.forEach((block) => {
    const code = block.innerText; // Raw text only
    const container = document.createElement('div');
    container.className = 'mermaid';
    container.textContent = code;
    block.parentNode.replaceChild(container, block);
  });

  mermaid.run();
});