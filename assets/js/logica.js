let asignarEventos = ()=>{

    let elBotonPOO = document.getElementById('btnPOO');
    elBotonPOO.addEventListener('click', verDatos);
    
    let elBotonPOO2 = document.getElementById('btnPOO2');
    elBotonPOO2.addEventListener('click', verDatos2);
    
};

let verDatos =()=>{
    var nombre='david';
    console.log('Contenido de la variable nombre:', nombre);
    console.log('El tipo de datos de l variable nombre : ', typeof nombre);

    var arregloNombres = ['Alejandro', 'Carlos', 'Daisy','Daniela'];
    console.log('Contenido del arregloNombres: ', arregloNombres);
    console.log('Contenido de la posicion 2 del arreglo', arregloNombres[2]);
    console.log('El tipo de datos del arreglo del nombre es: ', typeof arregloNombres);

    var objetoPersona = {
        //Propiedades
        nombre:'David',
        apellido:'Villacura',
        oficio:'Profesor',
        id:'161234567',


        //Métodos
        saludar: () =>{
            console.log('Hola mundo');
                },
        decirNombre:function(){
            console.log('Me llamo: ', this.nombre, ' ', this.apellido);
        }
    }
    console.log ('Contenido del ObjetoPersona: ', objetoPersona);
    console.log('El tipo de datos del objetoPersona es: ', typeof objetoPersona);
    console.log('El nombre alamacenado en el objeto es: ', objetoPersona["nombre"]); //notacion corchete
    console.log('El nombre alamacenado en el objeto es: ', objetoPersona.nombre); //notacion punto
    objetoPersona.saludar();
    objetoPersona.decirNombre();
 }


 let verDatos2 = ()=>{

let objetoDavid = new Object();
objetoDavid.id = '123';
objetoDavid.nombre = 'david';
objetoDavid.apellido = 'villacura';
objetoDavid.oficio = 'profesor';
objetoDavid.saludar = (ciudad)=>{
    console.log('Hola a tofos en la ciudad de ', ciudad);
     }
     console.log('el nombre alamacenado en el objeto es: ', objetoDavid.nombre);
     console.log('el apellido alamacenado en el objeto es: ', objetoDavid.apellido);
     objetoDavid.saludar('Santiago');
    }

 