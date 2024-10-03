import AlternativeButton from "@/components/Buttons/AlternativeButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Link } from "react-router-dom";
import Imagem1 from "@/app/assets/images/Imagem1.jpeg";

export default function Sobre() {
    return (
        <>
            <section className="bg-gradient">
                <div className="flex flex-col w-full flex-wrap items-center p-10 lg:flex-row ">
                    <div className="flex-flex-col px-4 text-center mb-5  lg:w-1/2 gap-4 lg:text-left">
                        <p className="text-primary m-1 font-bold lg:text-2xl">Tudo que você procura</p>
                        <h1 className="text-light m-1 text-2xl font-bold lg:text-5xl">Compre produtos da melhor qualidade para sua casa</h1>
                        <p className="text-primary font-bold mb-2 lg:text-2xl">Produtos nacionais e importados para você obter o melhor desempenho e mandar bem.</p>

                        <div className="flex flex-col m-5 gap-4 lg:flex-row justify-evenly">
                            <Link className="w-full" to="/Store">
                                <PrimaryButton
                                    text="Ir para a loja"
                                />
                            </Link>

                            <AlternativeButton
                                text="Ver carrinho"
                            />
                        </div>
                    </div>
                    <div className="flex items-center w-full flex-col lg:w-1/2">
                        <img className="border-8 max-w-sm lg:max-w-xl border-primary" src={Imagem1.src} alt="Imagem 1" />
                    </div>
                    <div className=" grid grid-row-3 content-around divide-y divide-dark lg:grid-cols-3 lg:divide-x divide-dark lg:divide-y-0 border-2 border-l-0 border-t-0 border-b-8 py-20 px-10 border-primary bg-light shadow-xl rounded-xl  lg:w-full lg:mx-40 transform translate-y-[30%] lg:translate-y-[50%]">
                        <div className="text-center align-middle p-5">
                            <h1 className="text-dark text-2xl font-bold mb-2 lg:text-5xl">+ 95000</h1>
                            <p className="text-dark text-lg font-md mb-2 lg:text-2xl">Produtos vendidos</p>
                        </div>
                        <div className="text-center align-middle p-5">
                            <h1 className="text-dark text-2xl font-bold mb-2 lg:text-5xl">+ 60000</h1>
                            <p className="text-dark text-lg font-md mb-2 lg:text-2xl">Vendedores ativos</p>
                        </div>
                        <div className="text-center align-middle p-5">
                            <h1 className="text-dark text-2xl font-bold mb-2 lg:text-5xl">25</h1>
                            <p className="text-dark text-lg font-md mb-2 lg:text-2xl">Países</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h1>Comprar por categorias</h1>
                <div>
                    <div>
                        <img src="" alt="" />
                        <h3>Contrução e Reforma</h3>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Elétrica</h3>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Ferramentas</h3>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Iluminação</h3>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Cozinha</h3>
                    </div>
                </div>
            </section>
        </>
    );
}