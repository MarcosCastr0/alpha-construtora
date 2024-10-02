export default function RegisterProduct() {
    return (
        <>
            <section>
                <form className="formulario">
                    <div className="campos">
                        <input className="px-4 p-4 rounded-md " type="text" placeholder="Email *" name="email" id="email" />
                    </div>
                    <div className="campos">
                        <input className="px-4 p-4 rounded-md " type="text" placeholder="Senha *" name="senha" id="senha" />
                    </div>

                    <a href="#" className="botao" id="botao">Login</a>
                </form>
            </section>
        </>
    );
}