import './Header.css';
import logo from '../../assets/img/Logo.png';

export default function Header() {
    return (
        <>
            <header>
                <div className="container_cabecalho">
                    <img className="logo" src={logo} alt="" />
                    <div className="pagina_produtos" id="pagina_produtos">

                        <svg className="lupa_k" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640">
                            <path fill="currentColor"
                                d="M448 272C448 174.8 369.2 96 272 96C174.8 96 96 174.8 96 272C96 369.2 174.8 448 272 448C369.2 448 448 369.2 448 272zM407.3 430C371 461.2 323.7 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272C480 323.7 461.2 371 430 407.3L571.3 548.7C577.5 554.9 577.5 565.1 571.3 571.3C565.1 577.5 554.9 577.5 548.7 571.3L407.3 430z" />
                        </svg>
                        <div className="box_busca">
                            <input className="campo_busca" type="text" name="" id="" />
                        </div>

                        <div className="colecao" id="colecao">
                            <p>Home</p>
                        </div>

                    </div>
                    <a className="menu_barras" id="menu_barras">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640">
                            <path fill="currentColor"
                                d="M96 144C96 135.2 103.2 128 112 128L528 128C536.8 128 544 135.2 544 144C544 152.8 536.8 160 528 160L112 160C103.2 160 96 152.8 96 144zM96 320C96 311.2 103.2 304 112 304L528 304C536.8 304 544 311.2 544 320C544 328.8 536.8 336 528 336L112 336C103.2 336 96 328.8 96 320zM544 496C544 504.8 536.8 512 528 512L112 512C103.2 512 96 504.8 96 496C96 487.2 103.2 480 112 480L528 480C536.8 480 544 487.2 544 496z" />
                        </svg>
                    </a>

                </div>
            </header>
        </>
    )
}
