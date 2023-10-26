
$(document).ready(function() {
    const totalSlides = $(".boxInfo").length;
    let currentSlide = 1;
    let isMobile = false; // Inicialmente, não estamos em um dispositivo móvel
    
    // Função para verificar o tamanho da tela
    function checkScreenWidth() {
      isMobile = window.innerWidth < 1100; // Use o ponto de interrupção desejado (768 pixels)
    
      // Mostra ou oculta os botões "Anterior" e "Próximo" com base na largura da tela
      if (isMobile) {
        $(".prev, .next").show();
      } else {
        $(".prev, .next").hide();
      }
    
      // Atualize os cartões de acordo com o tamanho da tela
      if (isMobile) {
        $(".boxInfo").hide();
        $(`.card-${currentSlide}`).show();
      } else {
        $(".boxInfo").show();
      }
      
      // Atualize o número do slide
      $(".slide-number").text(currentSlide);
    }
    
    // Execute a verificação ao carregar a página
    checkScreenWidth();
    
    // Atualize a tela ao redimensionar a janela
    $(window).resize(checkScreenWidth);
    
    // Funções para avançar e retroceder os slides
    function nextSlide() {
      currentSlide++;
      if (currentSlide > totalSlides) {
        currentSlide = 1;
      }
      $(`.boxInfo`).hide();
      $(`.card-${currentSlide}`).show();
      
      // Atualize o número do slide
      $(".slide-number").text(currentSlide);
    }
    
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 1) {
        currentSlide = totalSlides;
      }
      $(`.boxInfo`).hide();
      $(`.card-${currentSlide}`).show();
      
      // Atualize o número do slide
      $(".slide-number").text(currentSlide);
    }
    
    // Eventos de clique para os botões "Anterior" e "Próximo" apenas em dispositivos móveis
    $(".prev").click(function() {
      if (isMobile) {
        prevSlide();
      }
    });
    
    $(".next").click(function() {
      if (isMobile) {
        nextSlide();
      }
    });
  });
  