function popup(){
    /*
        ! O primeiro parâmetro você coloca a URL que o popup vai abrir, se for em Django use {% url 'url_que_deseja' %},
        ! o segundo pode deixar em branco só com o '', mas precisa ter, não deixa sem, se não ele não abre, e;
        ! o terceiro são as configurações da janela, existem mais, mas coloquei só as mais relevantes:
            - WIDTH e HEIGHT são a largura e altura da janela, respectivamente e;
            - LEFT é o tanto de espaço que ele tem do canto esquerdo, como se fosse o margin do CSS, coloquei bastante
            para ele ficar bem no canto direito, também tem o TOP para colocar espaço em cima, mas eu não especifiquei
            então ele fica como 0, daí do jeito que ele está aí, vai ficar no canto superior direito da tela
    */
    window.open('popup.html', '', 'width= 500, height= 500, left= 900')
}