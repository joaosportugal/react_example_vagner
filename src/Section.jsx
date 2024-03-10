export default function Section(props) {

    const numeroDeArtigos = 25;
    function imprimirMensagem(mensagem) {
        return mensagem
    } 


    return <section style={{backgroundColor: props.colorBack, color: "#fff"}}>
        <h2>{props.nome}</h2>
        <span>{numeroDeArtigos}</span>
        <span>{imprimirMensagem("Olá Vagner")}</span>
    </section>
}