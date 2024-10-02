import { FiAlertOctagon, FiArchive, FiEdit3, FiFileText, FiInbox, FiSend, FiTrash2 } from "react-icons/fi";
import WriteButton from "./writeButton";
import Button from "./button";

const iconsinline = "inline mr-1 mb-1"

export default function Sidebar() {
    return(
        <aside className="hidden md:flex flex-col items-start gap-2 grow-0 shrink basis-48">
            <WriteButton>
                <FiEdit3 className={iconsinline}/> 
                Escrever 
            </WriteButton>
            <Button active>
               <FiInbox className={iconsinline}/>
               Caixa de Entrada
            </Button>
            <Button>
               <FiSend className={iconsinline} /> Enviados
            </Button>
            <Button>
                <FiFileText className={iconsinline}/> Rascunhos
            </Button>
            <Button>
                <FiArchive className={iconsinline}/> Arquivados
            </Button>
            <Button>
                <FiAlertOctagon className={iconsinline}/> Spam
            </Button>
            <Button>
               <FiTrash2 className={iconsinline}/> Lixeira
            </Button>
        </aside>
    )
}