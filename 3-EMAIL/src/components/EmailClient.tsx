import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Badge } from './ui/badge'
import { ScrollArea } from './ui/scroll-area'
import {
Crown,
Inbox,
Send,
LogOut,
Moon,
Sun,
X,
Brain,
Shield,
Clock
} from 'lucide-react'
interface Email {
id: string
from: string
fromName: string
to?: string
toName?: string
subject: string
preview: string
time: string
isRead: boolean
hasAttachment: boolean
priority: 'high' | 'normal' | 'low'
fullContent: string
isSuspicious?: boolean
}
// Função para criar emails da caixa de entrada (9 totais, completos)
const createMockInboxEmails = (userName: string): Email[] => [
//Primeira Flag Phishing seção Recebidos
 {
id: '1',
from: 'seg.info@secure-auth-portal.com',
fromName: 'Equipe de Segurança da Informação',
subject: 'SecureFlag{ProtejaSuasSenhas} - Ação Urgente: Verificação de Segurança de conta',
preview: `Prezado Sebastião Santos, Detectamos atividade incomum em sua conta corporativa...`,
time: 'há 1 hora',
isRead: false,
hasAttachment: true,
priority: 'high',
fullContent: `Prezado Sebastião Santos,

Detectamos atividade incomum em sua conta corporativa. Para sua segurança, por favor, verifique os detalhes da sua conta imediatamente clicando no link abaixo.

[Verificar Conta Agora]

A falha em fazer isso dentro de 24 horas resultará na suspensão da conta.

Atenciosamente,
Equipe de Segurança da Informação`,
isSuspicious: true
  },
  {
id: '2',
from: 'lucas.rocha@corp.example.com',
fromName: 'Lucas Rocha',
subject: 'Relatório de progresso — Projeto 1',
preview: `Prezado ${userName}, Segue resumo do progresso do Projeto 1...`,
time: 'há 2 horas',
isRead: true,
hasAttachment: false,
priority: 'normal',
fullContent: `Prezado ${userName},\n\nSegue o relatório de progresso do Projeto 1 no portal de projetos. Todas as metas previstas para o período foram registradas na seção de entregáveis.\n\nDestaques desta semana:\n- Conclusão da fase de análise\n- Início dos testes de integração\n- Ajustes no cronograma conforme priorização\n\nPróximos passos serão discutidos na reunião de segunda-feira (ver calendário corporativo).\n\nCordialmente,\nLucas Rocha`,
isSuspicious: false
  },
  {
id: '3',
from: 'seguranca@corp.example.com',
fromName: 'Equipe de Segurança',
subject: 'Notificação: Verificação de manutenção programada',
preview: 'Informação sobre manutenção programada e verificação de atividade na conta...',
time: 'há 3 horas',
isRead: true,
hasAttachment: false,
priority: 'normal',
fullContent: `Olá ${userName},\n\nInformamos que haverá uma verificação de manutenção programada nos sistemas de conta. Caso seja necessário, pediremos que confirme sua identidade por meio do portal seguro da empresa. Não solicitaremos senhas por e-mail nem enlaces externos.\n\nSe tiver dúvidas, abra um chamado via central de serviços (Service Desk) ou contate a equipe de segurança pelo ramal interno.\n\nAtenciosamente,\nEquipe de Segurança — Corp`,
isSuspicious: false
  },
  {
id: '4',
from: 'francisco.neto@corp.example.com',
fromName: 'Francisco Neto',
subject: 'Relatório financeiro mensal disponível',
preview: `Caro ${userName}, O relatório financeiro mensal está disponível no portal...`,
time: 'há 4 horas',
isRead: true,
hasAttachment: false,
priority: 'normal',
fullContent: `Caro ${userName},\n\nO relatório financeiro mensal foi publicado no portal financeiro interno. Por favor, acesse a pasta "Relatórios Mensais" e revise os dados antes da reunião programada.\n\nResumo executivo disponível na primeira página do relatório no portal.\n\nAtenciosamente,\nFrancisco Neto\nFinanceiro`,
isSuspicious: false
  },
  {
id: '5',
from: 'paulo.almeida@corp.example.com',
fromName: 'Paulo Almeida',
subject: 'Reunião de equipe — Agenda atualizada',
preview: `Olá ${userName}, Atualizei a agenda para a reunião de equipe...`,
time: 'há 5 horas',
isRead: true,
hasAttachment: false,
priority: 'normal',
fullContent: `Olá ${userName},\n\nAtualizei a agenda para a reunião de equipe de amanhã. Novos itens:\n1. Discussão de metas Q4\n2. Apresentação de novos colaboradores\n3. Feedback do cliente principal\n\nA reunião está agendada no calendário corporativo; o link de participação está disponível no evento.\n\nAbraços,\nPaulo Almeida\nRH`,
isSuspicious: false
  },
  {
id: '6',
from: 'clara.florence@corp.example.com',
fromName: 'Clara Florence',
subject: 'Proposta de parceria — Solicitação de reunião',
preview: `Prezado ${userName}, Gostaria de discutir uma proposta de parceria...`,
time: 'há 1 dia',
isRead: true,
hasAttachment: false,
priority: 'normal',
fullContent: `Prezado ${userName},\n\nGostaria de agendar uma conversa para apresentar uma proposta de parceria com a Empresa XYZ. O resumo executivo está disponível no portal de parcerias. Podemos marcar uma call para discutir detalhes e próximos passos.\n\nCordialmente,\nClara Florence\nParcerias`,
isSuspicious: false
  },
  {
id: '7',
from: 'suporte@corp.example.com',
fromName: 'Suporte',
subject: 'Notificação: Transação pendente — ação via portal',
preview: 'Você tem uma transação pendente que exige confirmação via portal interno...',
time: 'há 2 dias',
isRead: true,
hasAttachment: false,
priority: 'normal',
fullContent: `Olá ${userName},\n\nUma transação registrada em seu perfil encontra-se pendente de confirmação. Para sua segurança, confirme ou revise a transação diretamente no portal transacional interno (Acesse: https://intranet.corp.example.com/transactions). Não solicite nem compartilhe informações sensíveis por e-mail.\n\nSe precisar de suporte, abra um chamado na central de serviços.\n\nAtenciosamente,\nSuporte`,
isSuspicious: false
  },
  {
id: '8',
from: 'sebastiao.santos@corp.example.com',
fromName: 'Sebastião Santos',
subject: 'Feedback sobre o relatório trimestral',
preview: `Caro ${userName}, Excelente trabalho no relatório trimestral...`,
time: 'há 3 dias',
isRead: true,
hasAttachment: false,
priority: 'normal',
fullContent: `Caro ${userName},\n\nExcelente trabalho no relatório trimestral. Os números estão alinhados e a análise é precisa.\n\nSugestão: incluir mais gráficos na próxima versão para facilitar a apresentação.\n\nParabéns pelo ótimo trabalho!\nSebastião Santos\nDiretoria`,
isSuspicious: false
  },
  {
id: '9',
from: 'auditoria@corp.example.com',
fromName: 'Auditoria Interna',
subject: 'Auditoria anual — Solicitação de documentos',
preview: `Prezado ${userName}, Solicitamos documentos para a auditoria anual...`,
time: 'há 4 dias',
isRead: true,
hasAttachment: false,
priority: 'normal',
fullContent: `Prezado ${userName},\n\nPara a auditoria anual, solicitamos que envie os seguintes documentos através do portal seguro de auditoria:\n1. Extratos bancários (período solicitado)\n2. Contratos de fornecedores relevantes\n3. Relatórios de conformidade\n\nPrazo para envio: 15/11/2025\n\nFaça o upload pelo portal de auditoria interno: https://intranet.corp.example.com/auditoria\n\nAtenciosamente,\nAuditoria Interna`,
isSuspicious: false
  }
]
//Segunda Flag Phishing seção Enviados
const createMockSentEmails = (userEmail: string, userName: string): Email[] => [
  {
id: 's1',
from: userEmail,
fromName: `${userName} (Você)`,
to: 'equipe@yaldabaothbank.com, rh@yaldabaothbank.com',
toName: 'Equipe Yaldabaoth',
subject: 'URGENTE: Ação Necessária para Ajuste Salarial',
preview: 'Olá a todos, Para garantir que o próximo ajuste salarial seja processado corretamente, todos...',
time: 'há 2 horas',
isRead: false, // <-- primeiro enviado NÃO LIDO
hasAttachment: true,
priority: 'high',
fullContent: `Prezada Equipe Yaldabaoth,\n\nPara garantir que o próximo ajuste salarial seja processado corretamente, todos precisam atualizar suas informações de cadastro no portal de RH até o final do dia. \n\nPor favor, use o link abaixo para acessar o portal e confirmar seus dados: https://yaldabaoth-sistema-rh-ctf.vercel.app/ Qualquer problema, me avisem.\n\nAtenciosamente,\n${userName}`,
isSuspicious: true
  }
]
interface EmailClientProps {
userEmail: string
onLogout: () => void
}
// Hook para efeito de digitação
const useTypewriter = (text: string, speed: number = 30) => {
const [displayText, setDisplayText] = useState('')
const [isTyping, setIsTyping] = useState(false)
useEffect(() => {
// Reset completo quando o texto muda
setDisplayText('')
setIsTyping(false)
if (!text) return
setIsTyping(true)
let index = 0
const timer = setInterval(() => {
if (index < text.length) {
setDisplayText(text.slice(0, index + 1))
index++
      } else {
setIsTyping(false)
clearInterval(timer)
      }
    }, speed)
return () => clearInterval(timer)
  }, [text, speed])
return { displayText, isTyping }
}
export function EmailClient({ userEmail, onLogout }: EmailClientProps) {
// Extrair primeiro nome do usuário do email
const firstName = userEmail.split('@')[0].split('.')[0]
const userName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
const userInitials = userName.substring(0, 2).toUpperCase()
const [selectedEmail, setSelectedEmail] = useState<Email | null>(null)
const [inboxEmails, setInboxEmails] = useState(() => createMockInboxEmails(userName))
const [sentEmails, setSentEmails] = useState(() => createMockSentEmails(userEmail, userName))
const [isDarkMode, setIsDarkMode] = useState(() => {
try {
return localStorage.getItem('theme') === 'dark'
    } catch {
return false
    }
  })
const [selectedFolder, setSelectedFolder] = useState('inbox')
const [isAnalyzing, setIsAnalyzing] = useState(false)
const [aiAnalysisText, setAiAnalysisText] = useState('')
const [showAnalysis, setShowAnalysis] = useState(false)
const { displayText, isTyping } = useTypewriter(aiAnalysisText, 25)
// Gerenciar tema escuro
useEffect(() => {
if (isDarkMode) {
document.documentElement.classList.add('dark')
    } else {
document.documentElement.classList.remove('dark')
    }
try {
localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    } catch {
// ignore
    }
  }, [isDarkMode])
const toggleTheme = () => {
setIsDarkMode(!isDarkMode)
  }
const currentEmails = selectedFolder === 'inbox' ? inboxEmails : sentEmails
// marca como lido para inbox ou sent conforme folder
const markAsRead = (emailId: string, folder: 'inbox' | 'sent') => {
if (folder === 'inbox') {
setInboxEmails(inboxEmails.map(email =>
email.id === emailId ? { ...email, isRead: true } : email
      ))
    } else {
setSentEmails(sentEmails.map(email =>
email.id === emailId ? { ...email, isRead: true } : email
      ))
    }
  }
const handleEmailSelect = (email: Email) => {
// Limpar completamente a análise anterior antes de selecionar novo email
setShowAnalysis(false)
setAiAnalysisText('')
setIsAnalyzing(false)
// Pequeno delay para garantir que a limpeza aconteça antes da seleção
setTimeout(() => {
setSelectedEmail(email)
if (!email.isRead) {
// marcar o email como lido no folder atual
markAsRead(email.id, selectedFolder as 'inbox' | 'sent')
      }
    }, 10)
  }
const generateAiAnalysis = (email: Email) => {
// Limpar completamente qualquer análise anterior
setAiAnalysisText('')
setShowAnalysis(false)
setIsAnalyzing(true)
// Pequeno delay antes de mostrar a nova análise
setTimeout(() => {
setShowAnalysis(true)
    }, 200)
// Simular delay de processamento
setTimeout(() => {
  let suspicionType;
  if (email.isSuspicious) {
    // Lógica para escolher o tipo de phishing baseado no ID do email
    if (email.id === '1') {
      suspicionType = 'phishing1';
    } else if (email.id === 's1') {
      suspicionType = 'phishing2';
    } else {
      suspicionType = 'phishing1'; // Default para outros suspeitos
    }
  } else {
    suspicionType = 'safe';
  }
  switch (suspicionType) {
    
     //Flag Número 01
    case 'phishing1':
      setAiAnalysisText(`🚨 ALERTA DE SEGURANÇA CORPORATIVA - TENTATIVA DE PHISHING DETECTADA ⚠️

O e-mail é suspeito devido ao link fornecido. O primeiro link 'Verificar Conta Agora' parece ser
um link encurtado ou disfarçado, algo muito comum em ataques de phishing para ocultar o destino real.
O segundo link, embora contenha 'seg.info@secure-auth-portal.com', que não é o domínio oficial esperado
do banco Yaldabaoth '@yaldabaothbank.com'. Além disso, a urgência imposta ("dentro de 24 horas resultará
na suspensão da conta.") é uma tática de pressão para fazer o usuário agir sem pensar e cair no phishing.`);
      break;
    
    //Flag Número 02
      case 'phishing2':
      setAiAnalysisText(`🚨 ALERTA DE SEGURANÇA CORPORATIVA - TENTATIVA DE PHISHING DETECTADA ⚠️

O e-mail é suspeito devido ao link fornecido e ao conteúdo tendencioso do email manipulado. 
O primeiro link 'https://yaldabaoth-sistema-rh-ctf.vercel.app/' parece ser um link encurtado 
ou disfarçado, o que é uma tática comum em ataques de phishing para ocultar o destino real.
O segundo link, embora contenha 'yaldabaoth-sistema-rh-ctf', usa '.vercel.app', que não é o 
domínio oficial esperado para sistema de RH da empresa Yaldabaoth Bank. Além disso, a urgência
imposta ('até o final do dia') é uma tática para pressionar o usuário a agir sem pensar.`);
      break;


    case 'safe':
      setAiAnalysisText(`✅ COMUNICAÇÃO CORPORATIVA SEGURA
Este email passou por todas as verificações de segurança:
🔍 VALIDAÇÕES REALIZADAS:
• Remetente autenticado: Domínio corporativo verificado
• Conteúdo apropriado para ambiente empresarial
• Sem solicitações de dados sensíveis
• Links internos ou ausentes (seguros)
• Linguagem profissional padrão
• Contexto corporativo legítimo
• Sem elementos de pressão temporal
✅ INDICADORES DE SEGURANÇA:
• Comunicação interna legítima
• Remetente conhecido da organização
• Conteúdo alinhado com políticas corporativas
• Sem características de engenharia social
• Aprovado pelos filtros de segurança
🛡️ CLASSIFICAÇÃO: COMUNICAÇÃO SEGURA
Tipo: Email corporativo legítimo
Nível de risco: BAIXO (0% probabilidade)
Aprovado para interação normal conforme políticas.`);
      break;
    default:
      setAiAnalysisText(`Análise não disponível.`);
  }
  setIsAnalyzing(false);
}, 1500)
  }
const unreadCount = inboxEmails.filter(email => !email.isRead).length
const sentUnreadCount = sentEmails.filter(email => !email.isRead).length
return (
<div className="h-screen bg-white dark:bg-gray-900 flex overflow-hidden">
{/* PAINEL 1: Navegação Lateral - FIXO */}
<div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col flex-shrink-0">
{/* Header da Sidebar */}
<div className="p-6 border-b border-gray-200 dark:border-gray-700">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-[var(--corporate-primary)] rounded-lg">
<Crown className="h-5 w-5 text-white" />
</div>
<div>
<h1 className="font-bold text-[var(--corporate-text-primary)]">
                Yaldabaoth
</h1>
<p className="text-xs text-[var(--corporate-text-secondary)]">
                Ficticious Bank
</p>
</div>
</div>
{/* Botão de Tema */}
<Button
variant="outline"
size="sm"
onClick={toggleTheme}
className="w-full mb-4 transition-all duration-200"
>
{isDarkMode ? (
<>
<Sun className="h-4 w-4 mr-2" />
                Modo Claro
</>
            ) : (
<>
<Moon className="h-4 w-4 mr-2" />
                Modo Escuro
</>
            )}
</Button>
</div>
{/* Lista de Navegação */}
<div className="flex-1 p-4">
<nav className="space-y-2">
<Button
variant={selectedFolder === 'inbox' ? 'default' : 'ghost'}
className={`w-full justify-start transition-all duration-200 ${selectedFolder === 'inbox'
                ? 'bg-[var(--corporate-primary)] text-white hover:bg-[var(--corporate-primary-dark)]'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
onClick={() => {
setSelectedFolder('inbox')
setSelectedEmail(null)
setShowAnalysis(false)
setAiAnalysisText('')
setIsAnalyzing(false)
              }}
>
<Inbox className="h-4 w-4 mr-3" />
              Caixa de Entrada
{unreadCount > 0 && (
<Badge className="ml-auto bg-blue-500 text-white">
{unreadCount}
</Badge>
              )}
</Button>
<Button
variant={selectedFolder === 'sent' ? 'default' : 'ghost'}
className={`w-full justify-start transition-all duration-200 ${selectedFolder === 'sent'
                ? 'bg-[var(--corporate-primary)] text-white hover:bg-[var(--corporate-primary-dark)]'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
onClick={() => {
setSelectedFolder('sent')
setSelectedEmail(null)
setShowAnalysis(false)
setAiAnalysisText('')
setIsAnalyzing(false)
              }}
>
<Send className="h-4 w-4 mr-3" />
              Enviados
{sentUnreadCount > 0 && (
<Badge className="ml-auto bg-blue-500 text-white">
{sentUnreadCount}
</Badge>
              )}
</Button>
</nav>
</div>
{/* Perfil do Usuário */}
<div className="p-4 border-t border-gray-200 dark:border-gray-700">
<div className="flex items-center gap-3 mb-4">
<Avatar className="h-10 w-10">
<AvatarFallback>{userInitials}</AvatarFallback>
</Avatar>
<div className="flex-1 min-w-0">
<p className="font-medium text-[var(--corporate-text-primary)] truncate">
{userName}
</p>
<p className="text-xs text-[var(--corporate-text-secondary)] truncate">
{userEmail}
</p>
</div>
</div>
<Button
variant="outline"
size="sm"
onClick={onLogout}
className="w-full transition-all duration-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600"
>
<LogOut className="h-4 w-4 mr-2" />
            Sair
</Button>
</div>
</div>
{/* PAINEL 2: Lista de Emails - ROLÁVEL */}
<div className="w-96 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col flex-shrink-0">
{/* Header da Lista - FIXO */}
<div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
<h2 className="text-xl font-semibold text-[var(--corporate-text-primary)] mb-1">
{selectedFolder === 'inbox' ? 'Caixa de Entrada' : 'Enviados'}
</h2>
<p className="text-sm text-[var(--corporate-text-secondary)]">
{currentEmails.length} mensagens
</p>
</div>
{/* Lista de Emails - ROLÁVEL */}
<div className="flex-1 overflow-hidden">
<ScrollArea className="h-full">
<div className="p-2">
{currentEmails.map((email) => (
<div
key={email.id}
className={`p-4 mb-1 rounded-lg cursor-pointer transition-all duration-200 border transform hover:scale-[1.02] ${
selectedEmail?.id === email.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 scale-[1.02]'
                      : 'bg-white dark:bg-gray-700 border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 hover:shadow-md'
} ${!email.isRead ? 'font-medium' : ''}`}
onClick={() => handleEmailSelect(email)}
>
<div className="flex items-start gap-3">
{/* Indicador de não lido */}
<div className="mt-2">
{!email.isRead && selectedFolder === 'inbox' && (
<div className="w-2 h-2 bg-[var(--corporate-primary)] rounded-full animate-pulse"></div>
                      )}
{/* Para a pasta Enviados não mostramos o ponto pequeno aqui;
                          o badge na navegação lateral indica os envios não lidos */}
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h4 className={`text-sm truncate ${!email.isRead ? 'font-bold' : 'font-medium'} text-[var(--corporate-text-primary)]`}>
{email.fromName}
</h4>
<span className="text-xs text-[var(--corporate-text-muted)] ml-2 flex-shrink-0">
{email.time}
</span>
</div>
<h5 className={`text-sm mb-1 truncate ${!email.isRead ? 'font-semibold' : 'font-medium'} text-[var(--corporate-text-primary)]`}>
{email.subject}
</h5>
<p className="text-sm text-[var(--corporate-text-secondary)] line-clamp-2 leading-relaxed">
{email.preview}
</p>
<div className="flex items-center gap-2 mt-2">
{email.hasAttachment && (
<Brain className="h-3 w-3 text-[var(--corporate-text-muted)]" />
                        )}
{email.priority === 'high' && (
<Clock className="h-3 w-3 text-blue-500" />
                        )}
</div>
</div>
</div>
</div>
              ))}
</div>
</ScrollArea>
</div>
</div>
{/* PAINEL 3: Visualização de Email */}
<div className="flex-1 bg-gray-100 dark:bg-gray-900 flex flex-col overflow-hidden">
{selectedEmail ? (
<>
{/* Header do Email - FIXO */}
<div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
{/* Seção de Remetente/Destinatário */}
<div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
<div className="flex items-center justify-between text-sm text-[var(--corporate-text-secondary)]">
<div>
<span className="font-medium">De: </span>
<span>{selectedEmail.fromName} ({selectedEmail.from})</span>
</div>
{selectedEmail.to && (
<div>
<span className="font-medium">Para: </span>
<span>{selectedEmail.toName} ({selectedEmail.to})</span>
</div>
                  )}
</div>
</div>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<Avatar className="h-10 w-10">
<AvatarFallback>
{selectedEmail.fromName.split(' ').map(n => n[0]).join('').substring(0, 2)}
</AvatarFallback>
</Avatar>
<div>
<h3 className="font-semibold text-[var(--corporate-text-primary)]">
{selectedEmail.fromName}
</h3>
<p className="text-sm text-[var(--corporate-text-secondary)]">
{selectedEmail.from}
</p>
</div>
</div>
<div className="flex items-center gap-2">
<Button
variant="ghost"
size="sm"
onClick={() => {
setSelectedEmail(null)
setShowAnalysis(false)
setAiAnalysisText('')
setIsAnalyzing(false)
                    }}
className="hover:bg-gray-100 transition-all duration-200"
>
<X className="h-4 w-4" />
</Button>
</div>
</div>
<div className="mb-2">
<h2 className="text-xl font-semibold text-[var(--corporate-text-primary)] mb-1">
{selectedEmail.subject}
</h2>
<p className="text-sm text-[var(--corporate-text-secondary)]">
{selectedFolder === 'inbox' ? 'Recebido' : 'Enviado'} {selectedEmail.time}
</p>
</div>
</div>
{/* Conteúdo do Email - ROLÁVEL */}
<div className="flex-1 overflow-hidden">
<ScrollArea className="h-full p-6">
<div className="max-w-none">
<div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm transition-all duration-200 hover:shadow-md">
<div className="whitespace-pre-line text-[var(--corporate-text-primary)] leading-relaxed">
{selectedEmail.fullContent}
</div>
{/* Seção de Análise IA */}
<div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<Brain className="h-5 w-5 text-[var(--corporate-text-muted)]" />
<div className="flex-1">
<p className="font-medium text-[var(--corporate-text-primary)]">
                              Análise de Segurança por IA
</p>
<p className="text-sm text-[var(--corporate-text-secondary)]">
                              Verificar se o email é seguro ou suspeito
</p>
</div>
</div>
<Button
variant="outline"
size="sm"
disabled={isAnalyzing}
className="transition-all duration-200 hover:bg-[var(--corporate-primary)] hover:text-white"
onClick={() => generateAiAnalysis(selectedEmail)}
>
{isAnalyzing ? (
<>
<Shield className="h-4 w-4 mr-2 animate-spin" />
                              Analisando...
</>
                          ) : (
<>
<Brain className="h-4 w-4 mr-2" />
                              Verificar E-mail com IA
</>
                          )}
</Button>
</div>
</div>
{/* Resultado da Análise */}
{showAnalysis && (
<div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700 transition-all duration-500 ease-in-out">
<div className="flex items-start gap-3 mb-3">
<Brain className="h-5 w-5 text-blue-600 mt-1" />
<div>
<h4 className="font-medium text-blue-900 dark:text-blue-100">
                              Relatório de Análise de Segurança
</h4>
<p className="text-sm text-blue-700 dark:text-blue-200">
{isAnalyzing ? 'Processando análise...' : 'Análise concluída'}
</p>
</div>
</div>
<div className="bg-white dark:bg-gray-800 rounded p-4 border">
<pre className="whitespace-pre-wrap text-sm font-mono text-[var(--corporate-text-primary)] leading-relaxed">
{displayText}
{isTyping && <span className="animate-pulse">|</span>}
</pre>
</div>
</div>
                    )}
</div>
</div>
</ScrollArea>
</div>
</>
        ) : (
<div className="flex-1 flex items-center justify-center">
<div className="text-center text-[var(--corporate-text-secondary)]">
<Crown className="h-16 w-16 mx-auto mb-4 opacity-20" />
<h3 className="text-lg font-medium mb-2">Nenhum email selecionado</h3>
<p>Selecione um email da lista para visualizar seu conteúdo</p>
</div>
</div>
        )}
</div>
</div>
  )
}