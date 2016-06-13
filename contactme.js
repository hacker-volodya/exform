/**
 * Created by deflate on 05.10.15.
 */

jQuery(document).on('ready pjax:end', function () {
    $('.contactme').submit(contact);
    $('.contactme').find('.info-error,.info-success').hide();
});

function contact(e, pointer) {
    var form = $(this);
    if (e !== undefined) {
        e.preventDefault();
    }
    else{
        form = $(pointer);
    }
    $.ajax({
        url: form.attr('action'),
        type: "POST",
        data: form.serialize(),
        cache: false,
        success: function () {
            if (form.data('success') !== undefined) {
            	form.find('.info-error').hide();
                form.find('.info-success').show();
            }
        },
        error: function () {
            if (form.data('error') !== undefined) {
            	form.find('.info-success').hide();
                form.find('.info-error').show();
            }
        }
    });
    return false;
}
