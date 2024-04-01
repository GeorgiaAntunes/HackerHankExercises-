function catAndMouse(x, y, z) {
    let catA = x;
    let catB = y;
    let mouse = z;
   
    let catAtoMouse = Math.abs(mouse - catA);
    let catBtoMouse = Math.abs(mouse - catB);
   
    if( catAtoMouse > catBtoMouse){
       return "Cat B";
    } else if( catAtoMouse < catBtoMouse){
       return "Cat A";
    } else {
       return "Mouse C";
    }
   }

//Math.abs(-1234) no javascript retorna sempre o numero absoluto, significa que sempre será positivo
catAndMouse(1,2,3);

catAndMouse(1,3,2);