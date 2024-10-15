// if else
var nilai: number = 50;

if (nilai >= 90){
    console.log("Grade A");
}else if (nilai >=60){
    console.log("Grade B");
}else {
    console.log("C");
}

var hero: string = "zilong"

switch (hero){
    case "nana":
        console.log("hero kesukaan");
    break
    case "zilong":
        console.log("kaka nya nana");
    break
    case "arlot":
        console.log("taroke nana");
    break
    default:
        console.log("Bapake nana");       
}

const Ipk: Number[] = [2, 2, 3, 2, 4];
for (let i = 0; i < Ipk.length; i++){
    if (i == 2){
        console.log(`nilai indexing ke 3 : ${Ipk[i]}`);
    }
}