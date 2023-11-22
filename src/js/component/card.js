import React from "react";//1.importar react

//2.crear un componente,las funciones siempre empiezan en  Mayúscula(camelCase)
//los componentes se escriben en PascalCase => BotonLogin
function  Card() {
    return(
        <div ClassName="card" style={{width:"18 rem"}}>
        <img src="../../img/rigo-baby.jpg" ClassName="card-img-top" alt="..."/>
        <div ClassName="card-body">
          <h5 ClassName="card-title">Card title</h5>
          <p ClassName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" className="btn btn-primary">Find Out More!</button>
        </div>
      </div>
    )
}  

//llamar sería (<Card/>)


export default Card;//3.exportar