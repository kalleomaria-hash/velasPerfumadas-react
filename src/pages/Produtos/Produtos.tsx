import './Produtos.css';
import logo from '../../assets/img/Logo.png'
import card_1 from '../../assets/img/Captura de tela 2025-09-24 164054.png'
import card_2 from '../../assets/img/Captura de tela 2025-09-24 164111.png'
import card_3 from '../../assets/img/Captura de tela 2025-09-24 164128.png'
import card_4 from '../../assets/img/Captura de tela 2025-09-24 164141.png'
import { useEffect, useState } from 'react';
import type { Vela } from '../../types/vela';
import { getVelas } from '../../services/velasService';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrossel from '../../components/Carrossel/Carrossel';

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
            <header>
                <div className="container_cabecalho">
                    <div className="pagina_produtos">
                        <img src="./img/Captura de tela 2025-09-25 142058.png" alt="" />
                    </div>

                    <div className="colecao">
                        <p>Coleção</p>
                        <p>Cadastro</p>
                        <svg xmlns={logo} viewBox="0 0 640 640">
                            <path fill="currentColor"
                                d="M448 272C448 174.8 369.2 96 272 96C174.8 96 96 174.8 96 272C96 369.2 174.8 448 272 448C369.2 448 448 369.2 448 272zM407.3 430C371 461.2 323.7 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272C480 323.7 461.2 371 430 407.3L571.3 548.7C577.5 554.9 577.5 565.1 571.3 571.3C565.1 577.5 554.9 577.5 548.7 571.3L407.3 430z" />
                        </svg>
                    </div>
                </div>
            </header>
            <main>

                <Carrossel />

                <section className="cardis">

                    {
                        velas.map((b: Vela) => (
                            <CardProduto
                                key={b.id}
                                nome={b.nome}
                                imagem={b.imagens[0] ?? ""}
                                preco={b.preco}
                            />
                        ))
                    }

                </section>
                <h1 className="acessivel">Pagina de Produtos de Outono</h1>

            </main>
        </>
    )
}