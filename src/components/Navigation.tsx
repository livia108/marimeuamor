import React from 'react';
import {
  Calendar,
  Camera,
  Scale,
  Calculator,
  Utensils,
  BookOpen,
  CalendarDays,
  History,
  User,
  Barcode,
  Sparkles,
} from 'lucide-react';
import { UserProfile } from '../types';

export type TabId =
  | 'meu-dia'
  | 'scanner'
  | 'barcode'
  | 'sem-balanca'
  | 'calculadora'
  | 'marmitas'
  | 'receitas'
  | 'planejamento'
  | 'historico'
  | 'perfil';

interface NavigationProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
  user: UserProfile;
  onOpenQuickScan: () => void;
  onOpenRegistrarGramas?: () => void;
  onOpenAuth?: () => void;
  isLoggedIn?: boolean;
}

export const Header: React.FC<NavigationProps> = ({
  activeTab,
  onSelectTab,
  user,
  onOpenQuickScan,
  onOpenRegistrarGramas,
  onOpenAuth,
  isLoggedIn = false,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#09070D]/90 backdrop-blur-md border-b border-[#33263F] px-4 sm:px-6 py-3 transition-colors">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-0">
        {/* Zone 1: Single text wordmark */}
        <button
          onClick={() => onSelectTab('meu-dia')}
          className="flex items-center gap-2 sm:gap-2.5 text-left group focus:outline-none cursor-pointer min-w-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#6D28D9] via-[#8B5CF6] to-[#EC4899] p-0.5 flex items-center justify-center shadow-lg shadow-[#8B5CF6]/20 shrink-0">
            <div className="w-full h-full rounded-full bg-[#100C16] flex items-center justify-center">
              <span className="text-[11px] sm:text-xs font-bold text-[#A78BFA]">OLK</span>
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="font-heading text-sm sm:text-lg font-bold tracking-tight text-[#F8F5FC] group-hover:text-[#A78BFA] transition-colors truncate">
                Our Little Kitchen
              </span>
              <span className="text-xs text-[#EC4899] shrink-0">💜</span>
            </div>
          </div>
        </button>

        {/* Zone 2: Navigation Links for Desktop — segunda linha, rolagem horizontal se não couber */}
        <nav className="hidden lg:flex w-full order-3 items-center justify-center gap-1 xl:gap-1.5 mt-2.5 pt-2.5 border-t border-[#33263F]/60 overflow-x-auto no-scrollbar">
          <button
            onClick={() => onSelectTab('meu-dia')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'meu-dia'
                ? 'bg-[#18121F] text-[#F8F5FC] border border-[#8B5CF6]/50 text-[#A78BFA]'
                : 'text-[#B8AFC4] hover:text-[#F8F5FC] hover:bg-[#18121F]/60'
            }`}
          >
            Meu Dia
          </button>
          <button
            onClick={() => onSelectTab('scanner')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'scanner'
                ? 'bg-[#18121F] text-[#F8F5FC] border border-[#8B5CF6]/50 text-[#A78BFA]'
                : 'text-[#B8AFC4] hover:text-[#F8F5FC] hover:bg-[#18121F]/60'
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-[#EC4899]" />
            Scanner IA
          </button>
          <button
            onClick={() => onSelectTab('barcode')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'barcode'
                ? 'bg-[#18121F] text-[#F8F5FC] border border-[#8B5CF6]/50 text-[#A78BFA]'
                : 'text-[#B8AFC4] hover:text-[#F8F5FC] hover:bg-[#18121F]/60'
            }`}
          >
            <Barcode className="w-3.5 h-3.5 text-[#A78BFA]" />
            Código de Barras
          </button>
          <button
            onClick={() => onSelectTab('sem-balanca')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'sem-balanca'
                ? 'bg-[#18121F] text-[#F8F5FC] border border-[#8B5CF6]/50 text-[#A78BFA]'
                : 'text-[#B8AFC4] hover:text-[#F8F5FC] hover:bg-[#18121F]/60'
            }`}
          >
            Sem Balança
          </button>
          <button
            onClick={() => onSelectTab('calculadora')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'calculadora'
                ? 'bg-[#18121F] text-[#F8F5FC] border border-[#8B5CF6]/50 text-[#A78BFA]'
                : 'text-[#B8AFC4] hover:text-[#F8F5FC] hover:bg-[#18121F]/60'
            }`}
          >
            Calculadora
          </button>
          <button
            onClick={() => onSelectTab('marmitas')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'marmitas'
                ? 'bg-[#18121F] text-[#F8F5FC] border border-[#8B5CF6]/50 text-[#A78BFA]'
                : 'text-[#B8AFC4] hover:text-[#F8F5FC] hover:bg-[#18121F]/60'
            }`}
          >
            Marmitas
          </button>
          <button
            onClick={() => onSelectTab('receitas')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'receitas'
                ? 'bg-[#18121F] text-[#F8F5FC] border border-[#8B5CF6]/50 text-[#A78BFA]'
                : 'text-[#B8AFC4] hover:text-[#F8F5FC] hover:bg-[#18121F]/60'
            }`}
          >
            Receitas
          </button>
          <button
            onClick={() => onSelectTab('planejamento')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'planejamento'
                ? 'bg-[#18121F] text-[#F8F5FC] border border-[#8B5CF6]/50 text-[#A78BFA]'
                : 'text-[#B8AFC4] hover:text-[#F8F5FC] hover:bg-[#18121F]/60'
            }`}
          >
            Planejamento
          </button>
          <button
            onClick={() => onSelectTab('historico')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'historico'
                ? 'bg-[#18121F] text-[#F8F5FC] border border-[#8B5CF6]/50 text-[#A78BFA]'
                : 'text-[#B8AFC4] hover:text-[#F8F5FC] hover:bg-[#18121F]/60'
            }`}
          >
            Histórico
          </button>
        </nav>

        {/* Zone 3: Actions & Profile */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 order-2">
          {onOpenRegistrarGramas && (
            <button
              onClick={onOpenRegistrarGramas}
              className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-1.5 rounded-xl bg-[#18121F] hover:bg-[#22192C] text-[#A78BFA] border border-[#8B5CF6]/50 hover:border-[#8B5CF6] text-xs font-semibold shadow-sm transition-all active:scale-[0.98] cursor-pointer"
              title="Colocar em Gramas"
            >
              <Scale className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span className="hidden sm:inline">Colocar em Gramas</span>
            </button>
          )}

          <button
            onClick={onOpenQuickScan}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#7C3AED] hover:to-[#A78BFA] text-white text-xs font-semibold shadow-md shadow-[#8B5CF6]/25 transition-all active:scale-[0.98] cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5 text-white" />
            <span className="hidden md:inline">Fotografar Refeição</span>
            <span className="md:hidden">Foto</span>
          </button>

          {onOpenAuth && (
            <button
              onClick={onOpenAuth}
              className={`flex items-center gap-1.5 p-2 sm:px-2.5 sm:py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                isLoggedIn
                  ? 'bg-[#18121F] text-emerald-300 border-emerald-500/30 hover:border-emerald-400/60'
                  : 'bg-[#18121F] text-amber-200 border-amber-500/40 hover:border-amber-400'
              }`}
              title={isLoggedIn ? 'Sessão ativa — trocar perfil ou sair' : 'Entrar no espaço compartilhado'}
            >
              <User className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isLoggedIn ? 'Conta' : 'Entrar'}</span>
            </button>
          )}

          <button
            onClick={() => onSelectTab('perfil')}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer shrink-0 ${
              activeTab === 'perfil'
                ? 'border-[#EC4899] ring-2 ring-[#EC4899]/30 bg-[#18121F]'
                : 'border-[#33263F] bg-[#18121F] hover:border-[#8B5CF6]'
            }`}
            title={`Perfil de ${user.name || 'Mari'}`}
          >
            <span className="text-xs font-bold text-[#F472B6]">
              {(user.name || 'Mari').charAt(0).toUpperCase()}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export const MobileTabBar: React.FC<NavigationProps> = ({
  activeTab,
  onSelectTab,
  user,
  onOpenQuickScan,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#100C16]/95 backdrop-blur-md border-t border-[#33263F] px-2 py-1.5 pb-safe shadow-2xl">
      <div className="grid grid-cols-5 items-center justify-around max-w-md mx-auto">
        <button
          onClick={() => onSelectTab('meu-dia')}
          className={`flex flex-col items-center justify-center py-1 transition-colors min-h-[44px] cursor-pointer ${
            activeTab === 'meu-dia' ? 'text-[#A78BFA]' : 'text-[#B8AFC4] hover:text-[#F8F5FC]'
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Meu Dia</span>
        </button>

        <button
          onClick={() => onSelectTab('sem-balanca')}
          className={`flex flex-col items-center justify-center py-1 transition-colors min-h-[44px] cursor-pointer ${
            activeTab === 'sem-balanca' ? 'text-[#A78BFA]' : 'text-[#B8AFC4] hover:text-[#F8F5FC]'
          }`}
        >
          <Scale className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Sem Balança</span>
        </button>

        {/* Floating Center Action Button */}
        <div className="flex items-center justify-center -mt-5">
          <button
            onClick={onOpenQuickScan}
            aria-label="Fotografar prato com IA"
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#6D28D9] via-[#8B5CF6] to-[#EC4899] text-white flex items-center justify-center shadow-lg shadow-[#8B5CF6]/40 active:scale-95 transition-transform cursor-pointer"
          >
            <Camera className="w-5 h-5 text-white" />
          </button>
        </div>

        <button
          onClick={() => onSelectTab('marmitas')}
          className={`flex flex-col items-center justify-center py-1 transition-colors min-h-[44px] cursor-pointer ${
            activeTab === 'marmitas' ? 'text-[#A78BFA]' : 'text-[#B8AFC4] hover:text-[#F8F5FC]'
          }`}
        >
          <Utensils className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Marmitas</span>
        </button>

        <button
          onClick={() => onSelectTab('perfil')}
          className={`flex flex-col items-center justify-center py-1 transition-colors min-h-[44px] cursor-pointer ${
            activeTab === 'perfil' ? 'text-[#EC4899]' : 'text-[#B8AFC4] hover:text-[#F8F5FC]'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">
            {(user.name || 'Mari').split(' ')[0]}
          </span>
        </button>
      </div>
    </div>
  );
};
