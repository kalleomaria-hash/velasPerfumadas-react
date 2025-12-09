import './Produtos.css';
import card_1 from '../../assets/img/Captura de tela 2025-09-24 164054.png'
import card_2 from '../../assets/img/Captura de tela 2025-09-24 164111.png'
import card_3 from '../../assets/img/Captura de tela 2025-09-24 164128.png'
import card_4 from '../../assets/img/Captura de tela 2025-09-24 164141.png'
import { useEffect, useState } from 'react';
import type { Vela } from '../../types/vela';
import { getVelas } from '../../services/velasService';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrossel from '../../components/Carrossel/Carrossel';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useLocation, useParams } from 'react-router-dom';

export default function Produtos() {

    const [velas, setVela] = useState<Vela[]>([]);
    const location = useLocation();
    const { categoria } = useParams<{ categoria: string }>();

    const parametrosPesquisados = new URLSearchParams(location.search);
    const termo_pesquisado = parametrosPesquisados.get('query');

    const fatchVela = async () => {
        try {
            const dados = await getVelas();
            if (categoria) {
                const dados_filtrados = dados.filter(b =>
                    b.categorias.some(cat =>
                        cat.toLowerCase() === categoria.toLowerCase()));
                setVela(dados_filtrados);
            }
            else if (termo_pesquisado) {
                const dados_filtrados = dados.filter(b =>
                    b.nome.toLowerCase()
                        .includes(termo_pesquisado.toLowerCase()) ||
                    b.descricao.toLowerCase()
                        .includes(termo_pesquisado.toLowerCase()) ||
                    b.categorias.some(cat => cat.toLowerCase()
                        .includes(termo_pesquisado
                            .toLowerCase()))
                )
                setVela(dados_filtrados)
            } else
                console.log('Dados retornados de API: ', dados);
            setVela(dados);
        } catch (error) {
            console.error("Erro ao executar getVela", error)
        }
    }

    useEffect(() => {
        fatchVela();
        console.log("Termo pesquisado: ", termo_pesquisado);
    }, [termo_pesquisado])


    return (
        <>
            <Header />

            <main>

                <Carrossel />
                <span className='Filtro'>
                    {
                        categoria
                            ? categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase()
                            : termo_pesquisado
                                ? `Resultados para: ${termo_pesquisado}`
                                : "Nenhum filtro aplicado"
                    }
                </span>

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

            <Footer />
        </>
    )
}