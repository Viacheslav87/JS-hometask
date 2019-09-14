function makeBuffer() {
 
    let phrase = "";
  
   return function(value){ 
     if (arguments.length >0) {
      phrase += value }
    return phrase;
   };
  
  };
  
  var buffer = makeBuffer();
  
  // добавить значения к буферу
  buffer('Замыкания');
  buffer(' Использовать');
  buffer(' Нужно!');
  
  // получить текущее значение
  alert( buffer() ); // Замыкания Использовать Нужно!
  //Буфер должен преобразовывать все данные к строковому типу:
  
  var buffer = makeBuffer();
  buffer(0);
  buffer(1);
  buffer(0);
  
  alert( buffer() ); // '010'
  



  // Буффер с функцией очистки
  //
  //
  function makeBuffer() {
 
    let phrase = "";
  
    function buffer(value){ 
     if (arguments.length >0) {
      phrase += value }
    return phrase;
   };
  buffer.clear = function(){phrase= "";}
  return buffer
  };
  
  var buffer = makeBuffer();
  
  // добавить значения к буферу
  buffer('Замыкания');
  buffer(' Использовать');
  buffer(' Нужно!');
  
  // получить текущее значение
  alert( buffer() ); // Замыкания Использовать Нужно!
  //Буфер должен преобразовывать все данные к строковому типу:
  
  var buffer = makeBuffer();
  buffer(0);
  buffer(1);
  buffer(0);
  
  alert( buffer() ); // '010'
  
 
