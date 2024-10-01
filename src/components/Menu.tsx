import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecundaryButton from "@/components/Buttons/SecundaryButton";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import TertiaryButton from "@/components/Buttons/TertiaryButton"


export default function Menu() {
    return (
        <>
            <div className="w-full h-20 bg-light shadow-md px-10 m-auto flex justify-between items-center lg:px-40 ">
                <img className="w-20" src="" alt="Logo da Empresa" />

                <div className="lg:flex items-center gap-4">
                    <TertiaryButton
                        text="Sobre"
                    />
                    <TertiaryButton
                        text="Loja"
                    />
                    <SecundaryButton
                        text="Cadastrar Produto"
                        icon={<ControlPointOutlinedIcon/>}
                    />

                    <PrimaryButton
                        text="Conta"
                        icon={<AccountCircleOutlinedIcon />}
                        type="button"
                        onclick={() => alert("Clicou na conta")}
                    />
                </div>
            </div>
        </>
    )
}