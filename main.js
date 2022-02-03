new WOW().init()
//REGISTRASION (need help)

$("#register").click(function () {
    
    $("#Sign-in_or_Register").text('REGISTER');
    $(".signin-input:last-child").before(
        '<input class="signin-input" type="text" placeholder="Username" />'
    );
    $(".signin-input:last-child").after(
        '<input class="signin-input" type="email" placeholder="Email" />'
    );
    // $(".signin-input").css({"margin-bottom": "2%"},{"margin-left": "-5%"})

    $('.password-generator').css('display', 'flex')
})
$("#sign-in").click(function () {
    $("#Sign-in_or_Register").text('Sign in');
    $(".login-password").remove()
    $(".signin-top").after('<div class="login-password"><input type="text" placeholder="Name" class="signin-input"><input type="password" placeholder="Password" class="signin-input"></div>')
    $('.password-generator').css('display', 'none')
})


//SCROLL UP BUTTON
window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 200) {
        $('#scrollUp').css('display', 'block')
        $('#scrollUp').addClass('flip')
        $('#scrollUp').click(function () {
            document.documentElement.scrollTop = 0
        })

    }
    else {
        $('#scrollUp').css('display', 'none')
    }

});

//PASSWORD GENERATOR
$('#password-range').change(function () {
    $('#range-value').text($('#password-range').val())
})

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'
]
var numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0
]
var simbols = [
    '#', '&', '$', '!', '%', '(', ')'
]
$('.password-generator_button').click(function () {
    var result = [];//create array for output
    //checked chexbox inputs by id
    if ($('#the-letters').is(':checked')) {
        result = result.concat(alphabet)

    }
    if ($('#simbols').is(':checked')) {
        result = result.concat(simbols)

    }

    if ($('#numbers').is(':checked')) {
        result = result.concat(numbers)

    }
    console.clear()
    //shuffle - mix array function
    function shuffle(arra1) {
        var ctr = arra1.length, temp, index;

        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
    result = shuffle(result)
    console.log(result)
    var output = '';
    var PassLength = $('#password-range').val()
    for (var i = 0; i < PassLength; i++) {
        // Take random number in result( array ) xPassLength
        var randomNumber = Math.round(Math.random() * result.length)
        if (randomNumber == result.length) {
            randomNumber = randomNumber - 1
        }
        else{
           output += result[randomNumber]
           console.log(randomNumber) 
        }
        
    }
    
    if (PassLength == 0) {
        $('#show-password').text('How many caracters will be in the password?')
    }
    else if ($('#numbers').is(":checked") || $('#the-letters').is(":checked") || $('#simbols:checked').is(":checked")) {
        $('#show-password').text(output)
    }
    else {
        $('#show-password').text('Please check parametrs')
    }
})

// ADAPTIC...
    if (window.innerWidth < 900) {
        $('.img').remove()
        $('.content').css('width', '100%')
    }

//EXPEREMENTAL PLACE
$(".b1").click(function(){
    $(".experement-place").css('background','red')
})
$(".b2").click(function(){
    $(".experement-place").css('background','rgb(170, 255, 0)')
})
$(".b3").click(function(){
    $(".experement-place").css('background','aqua')
})
$(".b4").click(function(){
    $(".experement-place").css('background','rgb(4, 0, 216)')
})
$(".b5").click(function(){
    $(".experement-place").css('background','rgb(255, 0, 200)')
})
$(".b6").click(function(){
    $(".experement-place").css('background','linear-gradient(black, gray)')
})
$(".b7").click(function(){
    $(".experement-place").css('background','linear-gradient(rgb(218, 245, 166), green)')
})
$(".b8").click(function(){
    $(".experement-place").css('background','linear-gradient(aqua, rgb(36, 0, 197))')
})
// SLIDER(in experemental place)
$('.place').slick({
    //slidesToShow: 2,   3 slides show 
    arrows: true,  // not arrows
                  // dots not . . . . .(not working?)
    autoplay: true,  // autoplay yes
    autoplaySpeed: 2500,  // delay in autoplay 0.5s
    speed: 3000, // speed 3s
    prevArrow: $('.slick-prev'),//class previus arrow in html
    nextArrow: $('.slick-next'),//class next arrow in html
})

$(document).on('keydown', (event) => {
    var key = event.key
    if (key != "Shift" && key != "Backspace") {
        
    var readKeyboardShortcut = $('.read-keyboard-shortcut').val()
    readKeyboardShortcut += key
    $('.read-keyboard-shortcut').val(readKeyboardShortcut)

    }
    else{
        console.log('NoNoNo')
    }
    if ($('.read-keyboard-shortcut').val() == '</-/>') {
        console.log('yea')
    }
})