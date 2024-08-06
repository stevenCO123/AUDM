const codigos = ["1234", "9999", ""];
const documentos = ["1234", "9999",""];
const claves = ["1234", "9999",""];
const usuarios = ["Monte", "Barra", "Anonimo"];
const img_usuarios = ["../img/miguel.png", "../img/balagan.png", "../img/OIP.png"]

const _inventario = [
    [
        ["silla", "2"],
        ["mesas", "6"],
        ["meregen", "2"]
    ],
    [
        ["carne", "1"],
        ["vegetales", "4"],
        ["frutas", "1"]
    ],
    [
        ["portatiles", "15"],
        ["mesas", "8"],
        ["salsas", "1"]
    ]
]

function validar() {
    let codigo = document.getElementById("codigo").value;
    let documento = document.getElementById("documento").value;
    let clave = document.getElementById("clave").value;

    for (let i = 0; i < 3; i++) {
        if (codigo === codigos[i] && documento === documentos[i] && clave === claves[i]){
            window.location.assign("../html/menu.html");
            localStorage.setItem("ident", i);
        }
        else{
            //en caso de que no este en la base de datos lo mandaria  a
            //otra pagina indicando error pero eso cuando sepamos usar base de datos
            console.log('nivel' + i + 'no');
        }
    }
}

function usuario() {
    let ident = localStorage.getItem("ident")
    for (let i=0; i < 3; i++){
        if (ident == i) {
            document.getElementById("nom_usuario").innerText = usuarios[i];
            document.getElementById("img_usuario").src = img_usuarios[i];

        }
    }
}

function inv() {
    let titulo = document.getElementsByTagName('title')[0].innerText;
    switch (titulo) {
        case 'sala 115':
            for (let x = 0; x < 3; x++){
                let elemtId = "elemt_" + x;
                let cantId = "cant_" + x
                document.getElementById(elemtId).innerText = _inventario[0][x][0]; //z,x,y
                document.getElementById(cantId).innerText = _inventario[0][x][1];

            }
            break;
        case "sala 220":
            for (let x = 0; x < 3; x++){
                let elemtId = "elemt_" + x;
                let cantId = "cant_" + x
                document.getElementById(elemtId).innerText = _inventario[1][x][0]; //z,x,y
                document.getElementById(cantId).innerText = _inventario[1][x][1];

            }
            break;
        case "sala 210":
            for (let x = 0; x < 3; x++){
                let elemtId = "elemt_" + x;
                let cantId = "cant_" + x
                document.getElementById(elemtId).innerText = _inventario[2][x][0]; //z,x,y
                document.getElementById(cantId).innerText = _inventario[2][x][1];
            }
            break;
        case "inventario":
            let i=0;
            for (let z = 0; z < 3; z++){
                for(let x = 0; x < 3; x++){
                    let elemtId = "elemt_" + i;
                    let cantId = "cant_" + i;
                    i++;
                    document.getElementById(elemtId).innerText = _inventario[z][x][0]; //z,x,y
                    document.getElementById(cantId).innerText = _inventario[z][x][1];
                }
            }
            break;
        default:
            console.log('si esta viendo esto es porque javascritp es mas problematico que...');
            break;
    }
}


