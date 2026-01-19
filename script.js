const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const downloadZip = document.getElementById('download-zip');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
  themeToggle.textContent = body.classList.contains('dark-theme') ? 'Tema Chiaro' : 'Tema Scuro';
});

// Download project as ZIP
if (downloadZip) {
  downloadZip.addEventListener('click', async () => {
    const zip = new JSZip();
    
    try {
      // Add HTML file
      const htmlResponse = await fetch('index.html');
      if (!htmlResponse.ok) throw new Error('Failed to fetch index.html');
      const htmlContent = await htmlResponse.text();
      zip.file('index.html', htmlContent);
      
      // Add CSS file
      const cssResponse = await fetch('style.css');
      if (!cssResponse.ok) throw new Error('Failed to fetch style.css');
      const cssContent = await cssResponse.text();
      zip.file('style.css', cssContent);
      
      // Add JS file
      const jsResponse = await fetch('script.js');
      if (!jsResponse.ok) throw new Error('Failed to fetch script.js');
      const jsContent = await jsResponse.text();
      zip.file('script.js', jsContent);
      
      // Add README
      const readmeResponse = await fetch('README.md');
      if (!readmeResponse.ok) throw new Error('Failed to fetch README.md');
      const readmeContent = await readmeResponse.text();
      zip.file('README.md', readmeContent);
      
      // Add images folder
      const images = ['src/adam.jpg', 'src/html.png', 'src/meskv.png', 'src/snake.png', 'src/GIF.gif', 'batman.gif'];
      const srcFolder = zip.folder('src');
      
      for (const imagePath of images) {
        try {
          const imageResponse = await fetch(imagePath);
          if (imageResponse.ok) {
            const imageBlob = await imageResponse.blob();
            const fileName = imagePath.includes('/') ? imagePath.split('/')[1] : imagePath;
            if (imagePath.startsWith('src/')) {
              srcFolder.file(fileName, imageBlob);
            } else {
              zip.file(fileName, imageBlob);
            }
          }
        } catch (error) {
          console.error(`Could not add ${imagePath}: ${error.message}`);
        }
      }
      
      // Generate ZIP file
      const content = await zip.generateAsync({ type: 'blob' });
      
      // Create download link
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'mesk-progetti.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
      
    } catch (error) {
      console.error('Error creating ZIP:', error);
      alert('Errore durante la creazione del file ZIP. Verifica la connessione e riprova.');
    }
  });
}