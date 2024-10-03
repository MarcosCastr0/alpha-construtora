import Card from "@/components/Card";

const item1 = {
    imagem:
      "https://m.media-amazon.com/images/I/51wT3niO1rL._AC_SX679_.jpg",
    nome: "Bosch Furadeira de Impacto GSB 450 RE 450W 127V",
    marca: "Bosch",
    unidades: "100 unidades",
    preco: "R$ 219,90",
  };
  
  const item2 = {
    imagem:
      "https://m.media-amazon.com/images/I/61jGIghS-SL._AC_SX679_.jpg",
    nome: "Inversor Para Solda Com Eletrodo E Tig, 150 A, Com Display Digital 127 V~ - 220 V~.",
    marca: "Vonder",
    unidades: "80 unidades",
    preco: "R$ 682,09",
  };
  
  const item3 = {
    imagem:
      "https://m.media-amazon.com/images/I/612L9RHxR4L._AC_SX679_.jpg",
    nome: "Bosch Esmerilhadeira GWS 700, 710W 127V, Azul",
    marca: "Bosch",
    unidades: "120 unidades",
    preco: "R$ 359,90",
  };

  const item4 = {
    imagem:
      "https://m.media-amazon.com/images/I/51t-eXQUhpL._AC_SX679_.jpg",
    nome: "Bosch Serra mármore a seco GDC 150 TITAN 1500W 127V",
    marca: "Bosch",
    unidades: "70 unidades",
    preco: "R$ 439,90",
  };
  
  const itens = [item1, item2, item3, item4];

  export default function Store(){
    return(
        <>
            <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:px-40">
                {itens.map(function(item,index){
                    return <Card key={index} item={item} />;
                })}
            </div>
        </>
    )
  }