document.querySelectorAll('a.scroll-link').forEach(anchor => 
{
    anchor.addEventListener('click', function(e) 
    {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) 
        {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Rola suavemente para o elemento alvo
            });
        }
    });
});

