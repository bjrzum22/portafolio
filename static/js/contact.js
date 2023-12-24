
$(document).ready(function () {
    $('.form').submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var data = form.serialize();
        $.ajax({
            url: '/msm',
            type: 'POST',
            data: data,
            beforeSend: function () {
                form.find('.form-group').slideUp();
                form.append('<div class="alert alert--loading">Enviando mensaje</div>');
                //estilos de la alerta
                form.find('.alert--loading').slideDown();
                //css de la alerta
                form.find('.alert--loading').css({
                    'background-color': '#fff',
                    'color': '#000',
                    'border': '1px solid #000',
                    'font-size': '1.5em',
                    'text-align': 'center',
                    'padding': '1em',
                    'margin-top': '1em'
                });

            },
            success: function (response) {
                form.find('.alert--loading').hide();
                if (response == 1) {
                    form.append('<div class="alert alert--success">Mensaje enviado correctamente</div>');
                    form.find('.alert--success').slideDown();
                    form.find('.alert--success').css({
                        'background-color': '#fff',
                        'color': '#080',
                        'border': '1px solid #000',
                        'font-size': '1.5em',
                        'text-align': 'center',
                        'padding': '1em',
                        'margin-top': '1em'
                    });
                } else {
                    form.append('<div class="alert alert--error">Error al enviar mensaje</div>');
                    form.find('.alert--error').slideDown();
                    form.find('.alert--error').css({
                        'background-color': '#fff',
                        'color': '#f00',
                        'border': '1px solid #000',
                        'font-size': '1.5em',
                        'text-align': 'center',
                        'padding': '1em',
                        'margin-top': '1em'
                    });
                }
            }
        });
    });
});