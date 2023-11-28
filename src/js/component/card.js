import React from "react";//1.importar react
import Sandia from "../../img/Sandia.jpg";


//2.crear un componente,las funciones siempre empiezan en  Mayúscula(camelCase)
//los componentes se escriben en PascalCase => BotonLogin
function  Card() {
    return(
        <div className="card mt-4 w-100" style={{width:"18rem"}}>
            <img src={Sandia} ClassName="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <button type="button" className="btn btn-primary">Find Out More!</button>
          </div>
        </div>
    )
}  

//llamar sería (<Card/>)


export default Card;//3.exportar