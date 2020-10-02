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
    });

    $('.devourBtn').click(event => {
        const id = $(event.target).data('burger-id');
        $.ajax('/api/burgers/' + id, {
            type: 'PUT'
        }).then(response => {
            location.reload();
        })
    });

});