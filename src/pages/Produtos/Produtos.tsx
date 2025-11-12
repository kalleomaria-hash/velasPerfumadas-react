import './Produtos.css';
import banner from '../../assets/img/folha-outono.jpg'
import card_1 from '../../assets/img/Captura de tela 2025-09-24 164054.png'
import card_2 from '../../assets/img/Captura de tela 2025-09-24 164111.png'
import card_3 from '../../assets/img/Captura de tela 2025-09-24 164128.png'
import card_4 from '../../assets/img/Captura de tela 2025-09-24 164141.png'
import { useEffect, useState } from 'react';
import type { Vela } from '../../types/vela';
import { getVelas } from '../../services/velasService';

export default function Produtos() {

    const [velas, setVela] = useState<Vela[]>([]);

    const fatchVela = async () => {
        try {
            const dados = await getVelas();
            console.log('Dados retornados de API: ', dados);
            setVela(dados);
        } catch (error) {
            console.error("Erro ao executar getVela", error)
        }
    }

    useEffect(() => {
        fatchVela();
    }, [])


    return (
        <>
            <main>
                <img className="banner" src={banner}/>
                <section className="cardis">

                    {
                        velas.map((b: Vela) => (
                            <div className="card_produto">
                                <h2>{b.nome}</h2>
                                <img src={`http://localhost:3000/static/${b.imagens[0]}`} />
                                <span>{b.preco}</span>
                            </div>
                        ))
                    }

                </section>
                <h1 className="acessivel">Pagina de Produtos de Outono</h1>

            </main>
        </>
    )
}