document.addEventListener("DOMContentLoaded", function() {
  mermaid.initialize({ 
    startOnLoad: false, 
    theme: 'default',
    securityLevel: 'loose' 
  });

  // Target the specific wrapper Jekyll creates
  const containers = document.querySelectorAll('.language-mermaid');

  containers.forEach((container) => {
    // .innerText safely gets only the text, ignoring the <code> tags
    const code = container.innerText.trim();

    const mermaidDiv = document.createElement('div');
    mermaidDiv.className = 'mermaid';
    mermaidDiv.textContent = code;

    // Replace the entire highlighter block with the Mermaid div
    container.parentNode.replaceChild(mermaidDiv, container);
  });

  // Run the parser on the new .mermaid divs
  mermaid.run();
});