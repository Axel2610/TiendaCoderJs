$(()=>{
    
    $("#inputEmail3").blur(function(){
        $("#inputEmail3").css("background-color", "#e1f7dc")
    })

    $("#inputTelefono").blur(function(){
        $("#inputTelefono").css("background-color", "#e1f7dc")
    })
     
    $("#consulta").blur(function(){
        $(this).css("background-color", "#e1f7dc");
    })

    $("#consulta").delay(1500).slideUp(2000).slideDown(2000);

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

    $("#inputNombre").blur(function(){
        $("#inputNombre").css("background-color", "#e1f7dc");
    })

    $("#inputApellido").blur(function(){
        $("#inputApellido").css("background-color", "#e1f7dc");
    })

    
}
)