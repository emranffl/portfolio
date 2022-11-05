
$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top,
        elementBottom = elementTop + $(this).outerHeight(),
        viewportTop = $(window).scrollTop(),
        viewportBottom = viewportTop + $(window).height()

    return elementTop > viewportTop && elementBottom < viewportBottom
}

$(document).ready(function () {

    $('video').each(function (index, videoElement) {
        $(videoElement).click(() => { videoElement.requestFullscreen() })

        videoElement.addEventListener(
            'fullscreenchange',
            function (event) {
                if (!document.fullscreenElement) {
                    videoElement.pause()
                }
            }, false
        )

        $(window).scroll(function () {
            if ($(videoElement).isInViewport() == false && videoElement.paused == false) {
                videoElement.pause()
                videoElement.currentTime = 0
            }
        })
    })


    /*------ video player related function ends -------*/


    $('.r-more').each(function () {
        $(this).click(() => {
            $(this).parent().children('p').removeClass('text-truncate')
            $(this).addClass('d-none')
        })
    })

})


/*============================== document onload =============================*/


function search() {
    $('#search-box').keypress(function (e) {
        //Enter key
        if (e.which == 13) {
            return false;
        }
    })

    if ($('#title:checked').length == 0 && $('#tag:checked').length == 0)
        $('#title').click()


    $('#search-box').on('keyup', function () {
        var input = $(this).val().toLowerCase(),
            flag = false,
            count = 0,
            length = 0

        if ($('#title:checked').length > 0) {

            $(".project-title").each(function () {

                var value = $(this).text().toLowerCase()
                $(this).closest('.project-item')[value.indexOf(input) !== -1 ? 'show' : 'hide']()

                if ($(this).is(':hidden')) {
                    count++
                }
            })
            length = $(".project-title").length
        } else {
            $(".tags").each(function () {

                var value = $(this).text().toLowerCase()
                $(this).closest('.project-item')[value.indexOf(input) !== -1 ? 'show' : 'hide']()

                if ($(this).is(':hidden')) {
                    count++
                }
            })
            length = $(".tags").length
        }

        if (count == length) {
            $('#nullMatch').removeClass('d-none')
            $('#nullMatch').addClass('d-block')

            $("#nullMatch").html("'" + $('#search-box').val() + "'" + " doesn't match any results")
        } else if (count != length && $('#search-box').val() != "") {
            $('#nullMatch').removeClass('d-none')
            $('#nullMatch').addClass('d-block')
            if (length - count == 1)
                $("#nullMatch").html("1 result matched")
            else
                $("#nullMatch").html(length - count + " results matched")
        } else {
            $('#nullMatch').removeClass('d-block')
            $('#nullMatch').addClass('d-none')
        }
    })
}

function onSearch() { $('#search-box').trigger('keyup') }

function tagClicked() {
    $('#search-box').val('')
    onSearch()
    $('#search-box').click()
    $('#search-box').focus()
}

/*-------- search related function ends ----------*/