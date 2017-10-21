$(document).ready(function() {
    for (var i = 1; i <= 151; i++) {
    $('#pokemon').append("<img id='"+i+"' src=http://pokeapi.co/media/img/"+i+".png>")
    console.log(i);
    }

    $(document).on("click", "img", function(){
      var pokedex = $(this).attr("id");
      $.get("http://pokeapi.co/api/v1/pokemon/"+pokedex+"/", function(pokemon){
        var html_str = "";
          html_str += "<h4>Name</h4>";
          html_str += pokemon.name;
          html_str += "<h4>Types</h4>";
          html_str += "<ul>";
        for(var i = 0; i < pokemon.types.length; i++){
          html_str += "<li>" + pokemon.types[i].name + "</li>";}
          html_str += "<h4>Height</h4>";
          html_str += pokemon.height;
          html_str += "<h4>Weight</h4>";
          html_str += pokemon.weight;
          html_str += "</ul>";


        $("#card").html('<h2>POKEDEX</h2>' + "<img src=http://pokeapi.co/media/img/"+pokedex+".png>" + html_str);
      });
    });
});
