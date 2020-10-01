$(document).ready(function () {

    $('form').submit(event => {
        event.preventDefault();
        const newBurger = {
            name: $('#name').val().trim()
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(() => {
            console.log('created!');

            location.reload();
        })
    })

});