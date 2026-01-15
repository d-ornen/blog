document.addEventListener("DOMContentLoaded", function() {
  // 1. Initialize Mermaid
  mermaid.initialize({ 
    startOnLoad: false, 
    theme: 'default'
  });

  // 2. Select the blocks Jekyll created
  const codeBlocks = document.querySelectorAll('pre.language-mermaid');

  codeBlocks.forEach((block) => {
    // Extract raw text and ignore the <span> tags Rouge might have added
    const code = block.innerText; 
    const container = document.createElement('div');
    container.className = 'mermaid';
    container.textContent = code;
    
    block.parentNode.replaceChild(container, block);
  });

  // 3. Render
  mermaid.run();
});