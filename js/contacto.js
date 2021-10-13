$(() => {

    $("#inputEmail3").blur(function () {
        $("#inputEmail3").css("background-color", "#e1f7dc")
    })

    $("#inputTelefono").blur(function () {
        $("#inputTelefono").css("background-color", "#e1f7dc")
    })

    $("#consulta").blur(function () {
        $(this).css("background-color", "#e1f7dc");
    })

    $("#divAgregado").append(
        `<form>
        <div class="row">
            <div class="col-6">
                 <input type="text" class="form-control" id="inputNombre" placeholder="Nombre">
            </div>
            <div class="col-6">
                 <input type="text" class="form-control" id="inputApellido" placeholder="Apellido">
            </div>
        </div>
        </form>`)

    $("#inputNombre").blur(function () {
        $("#inputNombre").css("background-color", "#e1f7dc");
    })

    $("#inputApellido").blur(function () {
        $("#inputApellido").css("background-color", "#e1f7dc");
    })


    const URLGET = "https://jsonplaceholder.typicode.com/posts/1/comments"
    $("#botonClientes").click(() => {
        $.get(URLGET, function (respuesta, estado) {
            if (estado === "success") {
                let misDatos = respuesta;
                for (const dato of misDatos) {
                    $("#divComentarios").prepend(`
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${dato.email}</h5>
                                    <p class="card-text">${dato.body}</p>
                                    <p class="card-text"><small class="text-muted">${dato.name}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>`);
                }
            }
        });
    });




})