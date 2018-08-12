//Definicion de variables globales.
var palette = document.getElementById('paleta');
var pixelGrid = document.getElementById('grilla-pixeles');
var statusMouse = false;

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    document.getElementById('indicador-de-color').style.backgroundColor = colorActual;
  })
);

//Crea la paleta de colores.
function colorPaletteMaker(){
  for (var i = 0; i < nombreColores.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = nombreColores[i];
    newDiv.classList.add('color-paleta');
    paleta.appendChild(newDiv);    
  }
}

//Crea la grilla de pixeles.
function pixelsGridMaker(){
  for (var i = 0; i < 1750; i++) {
    var newPix = document.createElement('div');
    pixelGrid.appendChild(newPix);    
  }
}

//Setea el selector de color dependiendo del color que seleccionemos en la paleta.
function colorSelect(){
  for (var i = 0; i < nombreColores.length; i++) {
    var colors = document.getElementsByClassName('color-paleta');
    colors[i].addEventListener('click', function(e){
      document.getElementById('indicador-de-color').style.backgroundColor = e.target.style.backgroundColor;
    })
  }
}

//Pinta el pixel segun corresponda. La primera funcion responde de acuerdo a la accion que se realice sobre la grilla (click o mouseover). La segunda se crea para no repetir código. Es la encargada de cambiar el color del pixel.
function paintPixel(){
  pixelGrid.addEventListener('click', function(e){
    paint(e);
    })          
  pixelGrid.addEventListener('mouseover', function(e){
    if(statusMouse){
      paint(e);
    }  
  })  
}
function paint(e) {
  e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
}

//Cambia el valor de la variable "statusMouse" dependiendo si el boton esta presionado o no.
function mouseStatus(){    
  pixelGrid.addEventListener('mousedown', function() {
    statusMouse = true;
  });
  document.addEventListener('mouseup', function() {
    statusMouse = false;
  });
}

 //Al presionar el boton "Borrar Todo" cambia el backgroundColor de todos los pixeles a su valor original ("white") en una animación de 1 segundo.
$(document).ready(function() {
  var $grid = $('#grilla-pixeles').children('div');
  var $delete = $('#borrar');
  $delete.click(function(){
    $grid.animate({'background-color':'white'}, 1000);     
    $('body').css('background-image','url()');
  });
});

//Toma el id del elemento clickeado, y lo convierte en variable y lo pasa como parametro a la funcion cargarSuperheroe(). Tambien modifica la imagen de fondo, segun corresponda.
$(document).ready(function() {
  var $superHeroes = $('.imgs').find('img');
  $superHeroes.click(function(e){
    cargarSuperheroe(eval(e.target.id));    
    $('body').css('background-image','url(img/'+ e.target.id +'.jpg)');
  })
});

//Al presionar el botón "Guardar" ejecuta la función guardarPixelArt().
$(document).ready(function() {
  $('#guardar').click(guardarPixelArt);
});

//Despues de agregar un imput para seleccionar un color personalizado, setea ese color como color de fondo predeterminado en la grilla.
function changeBGColor(){
  var fondoPersonalizado = document.getElementById('fondo-personalizado');
  fondoPersonalizado.addEventListener('change', 
    (function() {
      var bgColor = fondoPersonalizado.value;
      var pixeles = pixelGrid.getElementsByTagName('div');
      for (let i = 0; i < pixeles.length; i++) {
        pixeles[i].style.backgroundColor = bgColor;        
      }    
    })
  );
}

colorPaletteMaker();
pixelsGridMaker();
colorSelect();
paintPixel();
mouseStatus();
changeBGColor()
