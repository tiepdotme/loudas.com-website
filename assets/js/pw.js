$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        $('#back-to-top').mouseover(function() {
            $('#back-to-top').tooltip('show');
        });

     $.ajaxSetup({ cache: false });
     $('#query').keyup(function(){
        $('#queryResult').html('');
        searchField = $('#query').val();
        expression = new RegExp(searchField, "i");
        $.getJSON('/assets/search.json', function(data) {
            $.each(data, function(key, value){
                if (value.url.search(expression) != -1 || value.content.search(expression) != -1 || value.title.search(expression) != -1) {
                    var n = value.content.search(expression)-50;
                    var excerpt = value.content.substring(n, n+300);
                    if(searchField!='') {
                        var highlight = excerpt.split(expression).join("<span class='shadow bg-primary text-white rounded px-1'>"+searchField+"<\/span>");
                        value.title = value.title.split(expression).join("<span class='shadow bg-primary text-white rounded px-1'>"+searchField+"<\/span>");
                    } else {
                        var highlight = excerpt;
                    }
                    $('#queryResult').append('<li class="list-group-item link-class"><img src="/assets/images/search-blue.svg" alt="search" class="searchIcon" /><a class="pl-5" href="'+value.url+'">'+value.title+'<\/a><span class="text-muted"> ...'+highlight+'... <\/span><a href="'+value.url+'">read more &rArr;<\/a><\/li>');
                }
            });
        });
     });

    $('#ModalSearch').on('shown.bs.modal', function() {
        $('#query').focus();
    });

    // register a service worker for offline content
    var now=Date.now();
    if ("serviceWorker" in navigator) {
         navigator.serviceWorker.register('/sw.js?'+now).then(function() {
             // console.log('CLIENT: service worker registration complete.');
            }, function () {
             console.log('CLIENT: service worker registration failure.');
            });
    } else {
        console.log('CLIENT: service worker is not supported.');
    }
    $('#lp_collection').DataTable( {
        "columnDefs": [ 
            { "orderable": false, "targets": 0 }
        ],
        "order": [[ 1, "asc" ]],
        "oLanguage": {
            "sSearch": "Search Albums:",
            "sLengthMenu": "Display _MENU_ Albums",
            "sInfo": "Showing _START_ to _END_ of _TOTAL_ Albums"
        },
        "drawCallback": function( settings ) {
            $('[data-toggle="tooltip"]').tooltip();
            $("table#lp_collection tr").hover(function () {
                $(this).find("td.album_name").removeClass('album_bg_gs').addClass('album_bg_nogs');
            }, function () {
                $(this).find("td.album_name").removeClass('album_bg_nogs').addClass('album_bg_gs');
            });
        }
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    $("table#lp_collection tr").hover(function () {
	    $(this).find("td.album_name").removeClass('album_bg_gs').addClass('album_bg_nogs');
    }, function () {
	    $(this).find("td.album_name").removeClass('album_bg_nogs').addClass('album_bg_gs');
    });
});

$(".navbar-brand").mouseover(function(){
        $(this).tooltip('show');
});
$(".searchIconT").mouseover(function(){
        $(this).tooltip('show');
});

$('a[data-mail]').on('click', function() {
        window.location = 'mailto:' + $(this).data('mail')+'@paulwillard.nz' + '?subject=Contact from website';
});

$('a[target="_blank"]').each(function() {
	$(this).attr('rel', 'noreferrer noopener');
})

$('img[rel="lightbox"]').on('click', function() {
    var url = $(this).attr('src').replace('thumbnails/','');
    $('#ModalImageLabel').html('Larger image ...');
    $('#lightboxModalBody').html('<img src="' + url +'" alt="" class="w-100" \/>');
    $('#lightboxModal').modal('show');
});

$('a[rel="lightbox"]').on('click', function() {
    var url = $(this).data('image').replace('thumbnails/','');
    $('#ModalImageLabel').html('Larger image ...');
    $('#lightboxModalBody').html('<img src="' + url +'" alt="" class="w-100" \/>');
    $('#lightboxModal').modal('show');
});

$('a[rel="tracklisting"]').on('click', function() {
    var spantext = $(this).find('div.tracks').clone();
    $('#lightboxModalBody').html(spantext);
    $('#ModalImageLabel').html('Track listing');
    $('#lightboxModal').modal('show');
});

$('tr[rel="tracklisting"]').on('click', function () {
    var spantext = $(this).find('div.tracks').clone();
    $('#lightboxModalBody').html(spantext);
    $('#ModalImageLabel').html('Track listing');
    $('#lightboxModal').modal('show');
});

var verifyCaptcha = function(response) {
    if(response.length == 0) {
    } else {
        var _el=$('#comment-form-submit');
        _el.removeAttr("disabled");
        _el.addClass('button-primary dark-blue-bg');
        _el.attr('aria-disabled', 'false');
        _el.attr('type', 'submit');
        $('#g-recaptcha-response').attr('name','fields[g-recaptcha-response]');
    }
};

// Static comments
(function ($) {
    var $comments = $('.js-comments');

    $('#comment-form').submit(function () {
        var form = this;

        $(form).addClass('disabled');
        $('#comment-form-submit').html('Posting ...');

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: $(this).serialize(),
            contentType: 'application/x-www-form-urlencoded',
            success: function (data) {
                $('#comment-form-submit').html('Submitted');
                $('.post__comments-form .js-notice').removeClass('bg-danger').addClass('bg-success');
                $('#comment-form fieldset').each(function(){$(this).addClass('hidden')});
                showAlert('<strong>Thanks for your comment!</strong> It will show on the site once it has been approved.');
            },
            error: function (err) {
                console.log(err);
                $('#comment-form-submit').html('Submit Comment');
                $('.post__comments-form .js-notice').removeClass('bg-success').addClass('bg-danger');
                showAlert('<strong>Sorry, there was an error with your submission.</strong> Please make sure all required fields have been completed and try again.');
                $(form).removeClass('disabled');
            }
        });

        return false;
    });

    function showAlert(message) {
        $('.post__comments-form .js-notice').removeClass('hidden');
        $('.post__comments-form .js-notice-text').html(message);
    }
})(jQuery);

var curyear = new Date().getFullYear();
console.log("%cAll code is copyright © Paul Willard " + curyear, "font: 2em sans-serif; color: yellow; background-color: red;");
console.log("%cAuthor: Paul Willard <paul@paulwillard.nz>", "font: 1.5em sans-serif; color: yellow; background-color: red;");
