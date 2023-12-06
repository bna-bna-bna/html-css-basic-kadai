$(window).on('load scroll',(e) =>{
if(e.type === 'load'){
  $('.box').text('loadイベントが発生しました')
  console.log('loadイベントが発生しました');
}
if(e.type === 'scroll'){
  $('.box').text('scrollイベントが発生しました')
}
console.log('scrollイベントが発生しました');
});

