function login(){
    var u=document.getElementById("usuario").value;
    var c=document.getElementById("clave").value;
    i=1;
    usr="juan";
    cl="12345";
        if(u==usr && c==cl)
        {
            document.write("bienvenido al sistema")
        }
            else{
                document.write("acceso denegado ")
                }
        
    
}
function entrada(){
    var m=parseInt(document.getElementById("m").value)
    var suma=0
    var al=Math.pow(Math.PI, 3)/32
    for(let n=0;n<m; n++){
        var x=(Math.pow((-1),n))/(Math.pow(((2*n)+1),3))
        suma=suma+x
    }
    document.getElementById('r').innerHTML="el primero es"+al+"el segundo es"+suma
}