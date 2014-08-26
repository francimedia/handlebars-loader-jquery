var handlebarsLoader = function() {

    var templatePath = 'templates/',
        templateExtension = '.hbs';

    jQuery.fn.extend({
        render: function(path, data) {

            var source = $.ajax({
                url: templatePath + path + templateExtension,
                cache: true,
                async: false
            });

            var template = Handlebars.compile(source.responseText);
            var html = template(data);
            $(this).html(html);

            return html;
        }
    });
};


$(function() {
    handlebarsLoader();

    /* Usage:
     * $('#target').render('template_name', {
     *    key: value
     * }):
     */

});