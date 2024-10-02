export default function RegisterProduct() {
    return (
        <>
            <section>
                <form className="formulario">
                    <div className="campos">
                        <input className="px-4 p-4 rounded-md " type="text" placeholder="Nome *" name="nome" id="nome"/>
                    </div>
                    <div className="campos">
                    <input className="px-4 p-4 rounded-md " type="text" placeholder="Marca *" name="marca" id="marca"/>
                    </div>
                    <div className="campos">
                    <input className="px-4 p-4 rounded-md " type="text" placeholder="Modelo *" name="modelo" id="modelo"/>

                    </div>
                    <div className="campos">
                    <input className="px-4 p-4 rounded-md " type="text" placeholder="Preço *" name="preco" id="preco"/>

                    </div>
                    <p className="campos-obrigatorios">* campos obrigatórios</p>
                    <a href="#" className="botao" id="botao">Enviar</a>
                </form>
            </section>
        </>
    );
}