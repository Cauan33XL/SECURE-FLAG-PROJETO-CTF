import { RHInternalLayout } from '../components/RHInternalLayout'
import { 
  Activity, 
  Database, 
  Server, 
  Cpu,
  ArrowRight,
  Monitor
} from 'lucide-react'

export default function RHDashboard() {
  return (
    <RHInternalLayout>
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-1 bg-green-600 w-12"></div>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Resumo_Operacional</h2>
        </div>

        {/* Technical Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <TechStat 
            label="NODES_ATIVOS" 
            value="142" 
            sub="Status: 100%" 
            icon={<Server className="h-4 w-4" />} 
          />
          <TechStat 
            label="PAYROLL_BUFFER" 
            value="R$ 842.5K" 
            sub="Sync: OK" 
            icon={<Database className="h-4 w-4" />} 
          />
          <TechStat 
            label="AI_THREAT_LVL" 
            value="ESTÁVEL" 
            sub="Risk: 0.02%" 
            icon={<Cpu className="h-4 w-4" />} 
          />
          <TechStat 
            label="REDE_LATÊNCIA" 
            value="14ms" 
            sub="Região: BR-SP" 
            icon={<Activity className="h-4 w-4" />} 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Visualizer */}
          <div className="lg:col-span-2 bg-white dark:bg-[#0a0a0a] border-l-4 border-green-600 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-black text-gray-500 uppercase flex items-center gap-2">
                <Monitor className="h-3 w-3" /> Monitoramento_Fluxo_RH
              </h3>
              <span className="text-[10px] bg-green-900/10 text-green-600 px-2 py-0.5 font-bold">LIVE_FEED</span>
            </div>
            
            <div className="relative h-64 w-full flex items-end gap-1.5 px-2 bg-gray-50 dark:bg-neutral-900/30 p-4 rounded border border-dashed border-gray-200 dark:border-white/5">
              {[30, 50, 40, 60, 75, 80, 70, 85, 90, 100, 95, 110].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-green-600/20 border-t-2 border-green-600"
                  style={{ height: `${h}%` }}
                ></div>
              ))}
              <div className="absolute inset-x-0 top-1/2 border-t border-green-500/10 dashed h-0"></div>
            </div>
          </div>

          {/* System Queue */}
          <div className="bg-[#111] p-6 text-green-500 space-y-4 shadow-xl border-t-4 border-gray-800">
            <h3 className="text-[10px] font-black uppercase text-gray-500">Fila_De_Processamento</h3>
            <div className="space-y-3 font-mono">
              <QueueItem id="JOB_772" status="WAIT" />
              <QueueItem id="JOB_773" status="PEND" />
              <QueueItem id="DB_SYNC_01" status="DONE" />
              <QueueItem id="FLAG_CHK" status="FAIL" />
              <QueueItem id="ADM_ROOT" status="AUTH" />
            </div>
            <button className="w-full mt-4 py-2 border border-green-900 text-[10px] font-bold hover:bg-green-900/20 transition-all flex items-center justify-center gap-2">
              EXECUTAR_BATCH <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </RHInternalLayout>
  )
}

function TechStat({ label, value, sub, icon }: any) {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 p-4 flex flex-col justify-between hover:border-green-600 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{label}</span>
        <div className="text-green-600 opacity-50">{icon}</div>
      </div>
      <div>
        <p className="text-xl font-black text-gray-900 dark:text-gray-100 mb-0.5">{value}</p>
        <p className="text-[9px] text-gray-500 font-bold uppercase">{sub}</p>
      </div>
    </div>
  )
}

function QueueItem({ id, status }: any) {
  const colors: any = {
    'WAIT': 'text-gray-400',
    'PEND': 'text-gray-500',
    'DONE': 'text-green-500',
    'FAIL': 'text-gray-700',
    'AUTH': 'text-green-700'
  }
  return (
    <div className="flex items-center justify-between text-[11px] border-b border-white/5 pb-2">
      <span className="opacity-70">{id}</span>
      <span className={`font-black ${colors[status]}`}>[{status}]</span>
    </div>
  )
}
