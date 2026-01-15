document.addEventListener("DOMContentLoaded", function() {
  mermaid.initialize({ 
    startOnLoad: false, 
    theme: 'default',
    securityLevel: 'loose' 
  });

  // 1. Target the outermost container Jekyll creates
  // This is usually a div with class 'language-mermaid'
  const containers = document.querySelectorAll('.language-mermaid');

  containers.forEach((container) => {
    // 2. Extract the raw text from the code/pre inside
    // Using .innerText on the container gets the text from all children
    const code = container.innerText;

    // 3. Create the clean Mermaid div
    const mermaidDiv = document.createElement('div');
    mermaidDiv.className = 'mermaid';
    mermaidDiv.textContent = code;

    // 4. Replace the entire Jekyll block with the new Mermaid div
    container.parentNode.replaceChild(mermaidDiv, container);
  });

  // 5. Execute rendering
  mermaid.run();
});