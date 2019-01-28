console.log("Hola mundo con typescript");
console.log("tsc -w *.ts");


// C:\xampp\htdocs\xampp\Curso udemy Mjs\video 149 Compilación  Transpilación automática\js

//string 
    let cadena:string|number = "Hola mundo :v ";
    cadena=25;
    console.log(cadena);

//number
    let numero:number=12;
    console.log(numero);

//booleano
    let verdadero_falso:boolean=false;
    console.log(verdadero_falso);

//any / cualquier cosa
    let cualquiera:any="hola q tal :v";
    console.log(cualquiera);


//arrays
    // let lenguajes:Array<any>=["php","js","ruby"];
    let lenguajes:Array<string>=["php","js","ruby"];
    console.log(lenguajes);

    //coleccion
    // let years:any[]=[12,11,10,9,8,7,6,5,4,3,2,1,0];
    let years:number[]=[12,11,10,9,8,7,6,5,4,3,2,1,0];
    console.log(years);


//let vs var 
    var numero1 = 10;
    var numero2 = 12;

    if (numero1 ==10) {
        let numero1 = 44;
        var numero2 = 55;
        console.log(numero1,numero2);
    }
    console.log(numero1,numero2);



