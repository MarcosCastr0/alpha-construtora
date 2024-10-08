import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Link } from "react-router-dom";

export default function RegisterProduct() {
    return (
        <>
            <section className="flex justify-center m-10">
                <form className="bg-white box-border h-120 w-120 px-20 py-10 rounded-xl shadow-2xl flex flex-col justify-evenly items-start gap-2 ">
                    <h1 className="text-dark text-2xl font-bold m-2">Login</h1>
                    <input className="outline-primary px-4 p-4 bg-light rounded-md " type="text" placeholder="Email " name="email" id="email" />
                    <input className="px-4 p-4 mb-8 bg-light rounded-md " type="text" placeholder="Senha " name="senha" id="senha" />
                    <PrimaryButton
                        text="Entrar"
                        type="submit"
                        className="lg:w-full"
                    />
                    <Link className="w-full text-center" to="/RegisterUser">
                        <a className="text-blue-600 underline mt-2 cursor-pointer">Primeiro acesso?</a>
                    </Link>
                </form>
            </section>
        </>
    );
}