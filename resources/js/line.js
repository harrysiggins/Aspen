
const $line = $('.line').clone();
const numLines = 191;

for (i = 0; i < numLines; i++) {
  const new_line = $line.clone();
  $('.border').append(new_line);
}

$('.border .line').each(function(i) {
  $(this).addClass("line" + (i+1))
});
