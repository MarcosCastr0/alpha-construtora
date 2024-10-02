import PrimaryButton from "@/components/Buttons/PrimaryButton";

export default function RegisterProduct() {
    return (
        <>
            <section className="flex justify-center m-10">
                <form className="bg-white box-border h-120 w-120 px-20 py-10 rounded-xl shadow-2xl flex flex-col justify-evenly items-start gap-2 ">
                    <h1 className="text-dark text-2xl font-bold m-2">Cadastrar Produto</h1>
                    <div className="-">
                        <input className="px-4 p-4 bg-light rounded-md " type="text" placeholder="Nome *" name="nome" id="nome" />
                    </div>
                    <div className="campos">
                        <input className="px-4 p-4 bg-light rounded-md " type="text" placeholder="Marca *" name="marca" id="marca" />
                    </div>
                    <div className="campos">
                        <input className="px-4 p-4 bg-light rounded-md " type="text" placeholder="Modelo *" name="modelo" id="modelo" />

                    </div>
                    <div className="campos">
                        <input className="px-4 p-4 bg-light rounded-md " type="text" placeholder="Preço *" name="preco" id="preco" />

                    </div>
                    <p className="text-gray-500 text-extralight m-2">* campos obrigatórios</p>
                    <PrimaryButton
                        text="Cadastrar"
                        type="submit"
                    />
                </form>
            </section>
        </>
    );
}