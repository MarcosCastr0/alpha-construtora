import AlternativeButton from "./Buttons/AlternativeButton";
import PrimaryButton from "./Buttons/PrimaryButton";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Link } from "react-router-dom";

export default function Card(props: { item: any; }) {

    const item = props.item;

    return (
        <div className="py-15 px-10 max-w-md max-h-lg m-4 bg-white rounded-md shadow-xl items-center">
            <img className="m-2 w-full" src={item.imagem} />
            <h3 className="text-dark m-2 text-md font-bold text-center">{item.nome}</h3>
            <p className="text-dark text-base font-medium text-center">{item.marca}</p>
            <p className="text-dark text-base font-medium text-center">{item.unidades}</p>
            <h1 className="text-dark text-2xl font-bold text-center">{item.preco}</h1>
            <div className="flex flex-row m-3">
                <PrimaryButton
                    text="Comprar agora"
                />
                <Link className="w-1/3" to="">
                    <AlternativeButton
                        icon={<AddShoppingCartOutlinedIcon />}
                    />
                </Link>
            </div>
        </div>
    );
}