// Remove any 'await' keyword as it is not needed here
document.addEventListener("DOMContentLoaded", function() {
  mermaid.initialize({ 
    startOnLoad: false, 
    theme: 'default',
    securityLevel: 'loose' 
  });

  // Convert Jekyll/Rouge blocks to Mermaid-compatible divs
  const codeBlocks = document.querySelectorAll('pre.language-mermaid');
  codeBlocks.forEach((block) => {
    const code = block.innerText;
    const container = document.createElement('div');
    container.className = 'mermaid';
    container.textContent = code;
    block.parentNode.replaceChild(container, block);
  });

  // Execute rendering manually
  mermaid.run();
});