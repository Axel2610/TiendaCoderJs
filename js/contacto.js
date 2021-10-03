$(()=>{
    
    $("#inputEmail3").blur(function(){
        $("#inputEmail3").css("background-color", "#e1f7dc")
    })
     
    $("#consulta").blur(function(){
        $(this).css("background-color", "#e1f7dc");
    })

    $("#divAgregado").append(
        `<form>
        <div class="form-row">
            <div class="col">
                 <input type="text" class="form-control" id="inputNombre" placeholder="Nombre">
            </div>
            <div class="col">
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