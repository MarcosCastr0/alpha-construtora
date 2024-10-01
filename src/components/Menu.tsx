import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecundaryButton from "@/components/Buttons/SecundaryButton";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import TertiaryButton from "@/components/Buttons/TertiaryButton"
import HamburguerButton from "@/components/Buttons/HamburguerButton";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Menu() {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    function checkMenu() {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    };

    return (
        <>
            <div className="w-full h-20 bg-light shadow-md px-10 m-auto flex justify-between items-center lg:px-40 ">
                <img className="w-20" src="" alt="Logo da Empresa" />

                <div className="hidden lg:flex items-center gap-4">
                    <TertiaryButton
                        text="Sobre"
                    />
                    <TertiaryButton
                        text="Loja"
                    />
                    <SecundaryButton
                        text="Cadastrar Produto"
                        icon={<ControlPointOutlinedIcon />}
                    />

                    <PrimaryButton
                        text="Conta"
                        icon={<AccountCircleOutlinedIcon />}
                        type="button"
                        onclick={() => alert("Clicou na conta")}
                    />
                </div>

                <div className="flex lg:hidden">
                    <Button onClick={checkMenu}>
                        {
                            showMenu ? (<HighlightOffRoundedIcon className="text-primary" />) : (<HamburguerButton />)
                        }
                    </Button>
                </div>
            </div>
            {showMenu && (
                <div className="bg-light w-full h-[24vh] shadow-md top-20 lg:hidden " >
                    <div className="flex flex-col gap-2 px-10">
                        <TertiaryButton
                            text="Sobre"
                        />
                        <TertiaryButton
                            text="Loja"
                        />
                        <SecundaryButton
                            text="Cadastrar Produto"
                            icon={<ControlPointOutlinedIcon />}
                        />

                        <PrimaryButton
                            text="Conta"
                            icon={<AccountCircleOutlinedIcon />}
                            type="button"
                            onclick={() => alert("Clicou na conta")}
                        />
                    </div>
                </div>
            )}
        </>
    )
}