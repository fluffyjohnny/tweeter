$(() => {
  
 // hover over Tweet button
 const $button =$('form button');
 $button.mouseenter(() => {
   $button.css('box-shadow', '8px 5px #D3D3D3');
   $button.css('background-color', '#191970');
   $button.css('transition', '.4s');
 })
 $button.mouseleave(() => {
   $button.css('box-shadow', 'none');
   $button.css('background-color', '#4056A1');
   $button.css('transition', '.4s');
 })


});

 