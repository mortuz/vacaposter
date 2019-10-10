$(function () {
    $("#btnSave").click(function () {
        html2canvas(document.getElementById('widget'), {
            dpi: 300,
            scale: 20,
        }).then(function(canvas) {
            theCanvas = canvas;
            document.body.appendChild(canvas);

            // Convert and download as image 
            // Canvas2Image.saveAsPNG(canvas, 500, 200);
            $("#img-out").html(canvas);
        });

    });

    $('.profimg').on('click', function() {
        $('#image').click();
    })

    $('#image').on('change', function(e) {
        // alert(1);
        var file = $(this)[0].files[0];

        // console.log($(this)[0].files[0])
        var reader = new FileReader();

        reader.addEventListener("load", function () {
            $('.profimg').attr('src', reader.result);
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    })
}); 