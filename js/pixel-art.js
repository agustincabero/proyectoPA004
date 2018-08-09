var palette = document.getElementById('paleta');
var pixelGrid = document.getElementById('grilla-pixeles');
var status;

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

function colorPaletteMaker(){
  for (var i = 0; i < nombreColores.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.style.backgroundColor = nombreColores[i];
    newDiv.classList.add('color-paleta');
    paleta.appendChild(newDiv);    
  }
}

function pixelsGridMaker(){
  for (var i = 0; i < 1750; i++) {
    var newPix = document.createElement('div');
    newPix.classList.add('pixel');
    pixelGrid.appendChild(newPix);    
  }
}

function colorSelect(){
  for (var i = 0; i < nombreColores.length; i++) {
    var colors = document.getElementsByClassName('color-paleta');
    colors[i].addEventListener('click', function(e){
      document.getElementById('indicador-de-color').style.backgroundColor = e.target.style.backgroundColor;
    })
  }
}

function paintPixel(){
  for (var i = 0; i < 1750; i++) {
    var pixels = document.getElementsByClassName('pixel');
    pixels[i].addEventListener('click', function(e){
      e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
    })
    if(status){      
      pixels[i].addEventListener('mouseover', function(e){
      e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
      })   
    }   
  }
}

//TODO hacer que funcione esto! Cambia la variable de forma local, pero no global.
function mouseStatus(){
  var grid = document.getElementById('grilla-pixeles');  
  grid.addEventListener('mousedown', function() {
    status = true;
    console.log(status);
  })
  window.addEventListener('mouseup', function() {
    status = false;
    console.log(status);
  })
}

colorPaletteMaker();
pixelsGridMaker();
colorSelect();
paintPixel();
mouseStatus();
