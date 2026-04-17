import { CorporateLayout } from '../../../components/shared/design-system/CorporateLayout'
import { CorporateBrand } from '../../../components/shared/design-system/CorporateBrand'
import { Button } from '../../../components/shared/ui/button'
import { useNavigate } from 'react-router-dom'
import { ShieldAlert, Terminal as TerminalIcon } from 'lucide-react'

export default function RHSecretList() {
  const navigate = useNavigate()
  
  const rawData = {
    "flag": "SecureFlag{OParametroCertoAsVezesAjuda}",
    "captura1": {
      "usuario": "levi.farias",
      "hash": "7abf11935960fc499dbb5055fea98cb7"
    },
    "captura2": {
      "usuario": "carlos.mota",
      "hash": "c61024d89f8d48812dc6cde58cfc1ae4664f5fc44e5f7b95f2cdaab6baefeaad"
    }
  }

  return (
    <CorporateLayout 
      companyName="Yaldabaoth Resources - Internal"
      showThemeToggle={true}
      maxWidth="lg"
    >
      <div className="space-y-6">
        <CorporateBrand 
          companyName="Yaldabaoth"
          companySubtitle="System Data Dump"
          serverTypeText="Servidor de RH Corporativo"
        />

        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 p-4 rounded-lg flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 text-red-600 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-red-800 dark:text-red-200 uppercase tracking-wider">Acesso Restrito</p>
            <p className="text-xs text-red-700 dark:text-red-300">Você está visualizando um despejo de dados brutos do sistema legado.</p>
          </div>
        </div>

        <div className="bg-black text-green-400 p-6 rounded-xl font-mono text-sm overflow-auto shadow-2xl border border-green-500/20 max-h-[500px]">
          <div className="flex items-center gap-2 mb-4 border-b border-green-500/10 pb-2">
            <TerminalIcon className="h-4 w-4" />
            <span className="text-xs uppercase">Internal_DB_Dump_v2.0.sh</span>
          </div>
          <pre className="whitespace-pre-wrap leading-relaxed">
            {JSON.stringify(rawData, null, 2)}
          </pre>
        </div>

        <div className="flex justify-center">
          <Button variant="ghost" onClick={() => navigate('/rh/dashboard')}>
            Voltar ao Painel
          </Button>
        </div>
      </div>
    </CorporateLayout>
  )
}
