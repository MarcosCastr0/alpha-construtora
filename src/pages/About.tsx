import AlternativeButton from "@/components/Buttons/AlternativeButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Menu from "@/components/Menu";

export default function Sobre(){
    return(
        <>
            <Menu/>
            <div className="bg-gradient">
                <div className="flex flex-col flex-wrap items-center p-5 lg:px-40 lg:flex-row xl:h-[50vh]">
                    <div className="flex-flex-col px-4 text-center mb-5 lg:w-1/2 gap-4 lg:text-left">
                        <p className="text-primary font-bold lg:text-2xl">Tudo que você procura</p>
                        <h1 className="text-light text-2xl font-bold lg:text-5xl">Compre produtos da melhor qualidade para sua casa</h1>
                        <p className="text-primary font-bold mb-2 lg:text-2xl">Produtos nacionais e importados para você obter o melhor desempenho e mandar bem.</p>

                        <div className="flex flex-col gap-4 lg:flex-row">
                            <PrimaryButton
                                text="Ir para a loja"
                            />

                            <AlternativeButton
                                text="Ver carrinho"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-1/2">
                        <img className="border-8 border-primary" src="" alt="Imagem 1" />
                    </div>
                </div>
            </div>
        </>
    );
}