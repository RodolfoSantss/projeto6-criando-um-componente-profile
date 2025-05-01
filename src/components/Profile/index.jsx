import "./style.css"

export default function Profile({nome,idade,profissão,imagen}){
    return(
        <div className="profile">
            <div className="components">
            <h2>Nome:{nome}</h2>
            <p><strong>idade:</strong> {idade}</p>
            <p><strong>Profissão</strong> {profissão}</p>
            <img src={imagen}/>
            <button className="btn">Ver Perfil</button>
            </div>
        </div>
    )
}