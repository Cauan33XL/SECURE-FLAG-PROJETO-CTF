import { RHInternalLayout } from '../components/RHInternalLayout'
import { User, Briefcase, CreditCard, MapPin, Save, AlertCircle, Terminal } from 'lucide-react'
import { useState } from 'react'

export default function EmployeeRegister() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <RHInternalLayout>
      <div className="space-y-8">
        <div className="flex items-center gap-3 border-b-2 border-gray-900 dark:border-white/10 pb-4">
          <Terminal className="h-6 w-6 text-green-600" />
          <h2 className="text-xl font-black uppercase tracking-tighter text-gray-900 dark:text-gray-100">
            ENTRADA_DE_DADOS_COLABORADOR
          </h2>
        </div>

        <div className="max-w-4xl">
          <div className="bg-white dark:bg-[#0a0a0a] border-l-4 border-green-600 shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-neutral-900/30">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <User className="h-3 w-3" /> NOVO_REGISTRO_V6
              </h3>
            </div>

            <div className="p-8">
              {isSuccess && (
                <div className="mb-8 p-4 bg-green-900/10 border border-green-600/30 text-green-700 text-sm font-bold flex items-center gap-3">
                  <div className="h-2 w-2 bg-green-600 rounded-full animate-ping"></div>
                  SEU AUMENTO SERÁ CREDITADO NO PRÓXIMO PAGAMENTO!
                </div>
              )}

              <form onSubmit={handleRegister} className="space-y-8 font-mono">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <InputGroup 
                    label="ID_NOME_COMPLETO" 
                    placeholder="DIGITE_O_NOME" 
                    icon={<User className="h-4 w-4" />}
                  />
                  <InputGroup 
                    label="REF_REGISTRO_CPF" 
                    placeholder="000.000.000-00" 
                    icon={<CreditCard className="h-4 w-4" />}
                  />
                  <InputGroup 
                    label="ROLE_CARGO_SISTEMA" 
                    placeholder="EX: ANALISTA_SECURITY" 
                    icon={<Briefcase className="h-4 w-4" />}
                  />
                  <InputGroup 
                    label="VAL_SALARIO_BASE" 
                    placeholder="R$ 0.000,00" 
                    icon={<CreditCard className="h-4 w-4" />}
                  />
                  <InputGroup 
                    label="LOC_DEPARTAMENTO" 
                    placeholder="EX: TI_INFRASTRUCTURE" 
                    icon={<MapPin className="h-4 w-4" />}
                  />
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">STATE_CONTRATO</label>
                    <select className="w-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 p-3 text-xs focus:border-green-600 outline-none appearance-none cursor-pointer">
                      <option>ACTIVE_FULL</option>
                      <option>PENDING_AUDIT</option>
                      <option>TEMP_CONTRACT</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[9px] text-gray-400 uppercase font-black">
                    <AlertCircle className="h-3 w-3" />
                    <span>Integridade_SSL_Ativa</span>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-[#111] hover:bg-green-600 text-green-500 hover:text-white px-10 py-3 text-xs font-black transition-all border border-green-600/20"
                  >
                    {isSubmitting ? 'PROCESSANDO_DADOS...' : 'SALVAR_REGISTRO'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </RHInternalLayout>
  )
}

function InputGroup({ label, placeholder, icon }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
        {icon} {label}
      </label>
      <input 
        type="text"
        placeholder={placeholder}
        className="w-full bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 p-3 text-xs focus:border-green-600 outline-none transition-all placeholder:opacity-30"
        required
      />
    </div>
  )
}
