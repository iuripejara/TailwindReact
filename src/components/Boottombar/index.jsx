import { FiAlertOctagon, FiArchive, FiEdit3, FiFileText, FiInbox, FiMenu, FiTrash2, FiX } from "react-icons/fi";
import Butto from "./Buntton";
import { useState } from "react";

const iconsinline = "inline mb-1 sm:mr-2"
const smOnlyText = "hidden sm:inline"

export default function BottonBar (){
    const [isMenuOpen,setIsMenuOpen] = useState (false)

    return(
       <div className="w-full flex gap-1 items-end relative md:hidden">
            <Butto>
                <FiEdit3 className={iconsinline}/> 
                <span className={smOnlyText}>escrever</span> 
            </Butto>
            <Butto active>
                <FiInbox className={iconsinline} />
                <span className={smOnlyText}>Caixa de Entrada</span>
            </Butto>
            <Butto>
                <FiFileText className={iconsinline} />
                <span className={smOnlyText}>Rascunhos</span>
            </Butto>
            <Butto onClick={() => setIsMenuOpen(state => !state)}>
                {isMenuOpen ? (
            <>
                <FiX className={iconsinline} />
                <span className={smOnlyText}>Fechar</span>
            </>
            ) : (
            <>
                <FiMenu className={iconsinline} />
                <span className={smOnlyText}>Mais</span>
            </>
            )}
            </Butto>
            <div
                className={`
                    ${isMenuOpen ? "absolute" : "hidden"} 
                    right-0 bottom-12 flex flex-col gap-2 w-40
                `}
            >
                <Butto>
                    <FiArchive className="inline mr-2 mb-1" />
                    Arquivados
                </Butto>
                <Butto>
                    <FiAlertOctagon className="inline mr-2 mb-1" />
                    Spam
                </Butto>
                <Butto>
                    <FiTrash2 className="inline mr-2 mb-1" />
                    Lixeira
                </Butto>
            </div>
       </div>
    )
}