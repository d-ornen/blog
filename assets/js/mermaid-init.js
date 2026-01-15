// assets/js/mermaid-init.js
document.addEventListener("DOMContentLoaded", function() {
  // 1. Initialize Mermaid
  mermaid.initialize({ 
    startOnLoad: false, // We control the render manually for better stability
    theme: 'default',
    securityLevel: 'loose'
  });

  // 2. Find all Jekyll-rendered mermaid blocks
  const codeBlocks = document.querySelectorAll('pre.language-mermaid');

  codeBlocks.forEach((block) => {
    const code = block.querySelector('code').innerText;
    const container = document.createElement('div');
    container.className = 'mermaid';
    container.textContent = code;
    
    // Replace the <pre> block with our new <div>
    block.parentNode.replaceChild(container, block);
  });

  // 3. Tell Mermaid to run now that the DOM is ready and cleaned
  mermaid.run();
});