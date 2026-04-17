import { RHInternalLayout } from '../components/RHInternalLayout'
import { Database, Search, Terminal, AlertTriangle, ShieldCheck } from 'lucide-react'

export default function SecretAudit() {
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
    <RHInternalLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-gray-900 dark:border-white/10 pb-4">
          <Database className="h-6 w-6 text-green-600" />
          <h2 className="text-xl font-black uppercase tracking-tighter text-gray-900 dark:text-gray-100">
            AUDITORIA_DB_LEGACY_DUMP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-black border-l-4 border-green-600 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                <span className="text-[10px] font-bold text-green-500 uppercase flex items-center gap-2">
                  <AlertTriangle className="h-3 w-3" /> AVISO_LOG_DESCONTINUADO
                </span>
                <span className="text-[9px] text-gray-500 font-mono">HASH_VER: LEGACY_v2</span>
              </div>
              <div className="font-mono text-[13px] leading-relaxed text-green-400 overflow-auto max-h-[400px]">
                <div className="text-gray-600 mb-2">// Query: SELECT * FROM rh_secret_vault WHERE status = 'COMPR'</div>
                <pre>{JSON.stringify(rawData, null, 2)}</pre>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 p-4 rounded text-[11px] font-mono">
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <ShieldCheck className="h-4 w-4" /> <span>VERIFICAÇÃO_INTEGRIDADE_OK</span>
              </div>
              <p className="text-gray-500 uppercase">
                Os hashes acima foram extraídos do módulo de compensação. 
                Nenhuma alteração detectada nos últimos 432 dias.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-neutral-900/50 p-4 border border-gray-200 dark:border-white/5">
              <h3 className="text-[10px] font-black mb-3 flex items-center gap-2 text-gray-500 uppercase">
                <Terminal className="h-3 w-3" /> Console_Comandos
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 text-[10px] font-bold bg-white dark:bg-black border border-gray-200 dark:border-white/10 hover:border-green-600 transition-all uppercase">
                  &gt; FORÇAR_REINDEXAÇÃO
                </button>
                <button className="w-full text-left p-2 text-[10px] font-bold bg-white dark:bg-black border border-gray-200 dark:border-white/10 hover:border-green-600 transition-all uppercase">
                  &gt; LIMPAR_CACHE_DUMP
                </button>
                <button className="w-full text-left p-2 text-[10px] font-bold bg-white dark:bg-black border border-gray-200 dark:border-white/10 hover:border-gray-600 text-gray-600 transition-all uppercase">
                  &gt; DELETAR_REGISTRO_CRÍTICO
                </button>
              </div>
            </div>

            <div className="p-4 border border-green-500/20 bg-green-500/5 flex flex-col items-center justify-center text-center space-y-2">
              <Search className="h-6 w-6 text-green-600 opacity-50" />
              <p className="text-[10px] text-green-600 font-bold uppercase">Busca_Avançada_Desativada</p>
              <p className="text-[9px] text-green-600 opacity-70">Contate o administrador para acesso ao módulo SQL Search.</p>
            </div>
          </div>
        </div>
      </div>
    </RHInternalLayout>
  )
}
