document.addEventListener("DOMContentLoaded", function() {
  // 1. Initialize with specific security settings
  mermaid.initialize({ 
    startOnLoad: false, 
    theme: 'default',
    securityLevel: 'loose' 
  });

  const containers = document.querySelectorAll('.language-mermaid');

  containers.forEach((container, index) => {
    // 2. Extract and Clean Text
    // We use a temporary textarea to decode any HTML entities (like &gt; to >)
    let code = container.innerText.trim();
    const decoder = document.createElement('textarea');
    decoder.innerHTML = code;
    code = decoder.value;

    // 3. Create the replacement div
    const mermaidDiv = document.createElement('div');
    mermaidDiv.className = 'mermaid';
    mermaidDiv.id = 'mermaid-diagram-' + index; // Unique ID helps the parser
    mermaidDiv.textContent = code;

    // 4. Swap the elements
    container.parentNode.replaceChild(mermaidDiv, container);
  });

  // 5. Force Mermaid to run on the specific .mermaid class
  mermaid.run({
    querySelector: '.mermaid',
  });
});