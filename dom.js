console.log('Eventos')
let opciones = [];


const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    const input = document.getElementById('input')
    const busqueda = input.value

    const nuevaBusqueda = document.createElement('li')
    nuevaBusqueda.innerText = "Has buscado: " + busqueda;

    const box = document.getElementById('box')
    box.appendChild(nuevaBusqueda)
    console.log(nuevaBusqueda)
})




function myFunction() {
    var x = document.getElementById("myInput");
    document.getElementById("value").innerHTML = "Has buscado: " + x.value;
    console.log(document.getElementById("value").innerHTML = "Has buscado: " + x.value)
    }

    var x = 0;
    const array = Array();
    
    function addElement()
    {
     array[x] = document.getElementById("text1").value;
     alert("El elemento " + array[x] + " fue agregado en la posicion " + x);
     x++;
     document.getElementById("text1").value = "";
    }
    
    function muestraArray()
    {
       var e = "<hr/>";   
        
       for (var y=0; y<array.length; y++)
       {
         e += "En la posición " + y + " = " + "se encuentra tu elemento " + array[y] + "<br/>";
       }
       document.getElementById("Result").innerHTML = e;
    }
 