import React, { useState, useEffect } from 'react';
import { 
    User, Lock, Eye, EyeOff, 
    Sun, Moon, ArrowRight, ShieldCheck 
} from 'lucide-react';

export default function Login() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Estados del formulario
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Sincronizar Modo Oscuro
    useEffect(() => {
        if (isDarkMode) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Manejador del submit
    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
        setIsLoading(false);
        console.log('Autenticando usuario:', username);
        }, 1500);
    };

    return (
        <div className={`min-h-screen font-sans ${isDarkMode ? 'dark' : ''}`}>
        {/* Contenedor Principal Layout Dividido */}
        <div className="flex min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300">
            
            {/* Panel Izquierdo: Branding (Oculto en móviles) */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] text-white p-12 flex-col justify-between overflow-hidden">
            {/* Círculos decorativos de fondo */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#3B82F6]/50 rounded-full blur-3xl"></div>

            {/* Logo Superior (Sin Contenedor) */}
            <div className="relative z-10 flex items-center gap-3">
                <img 
                src="Logo_LunaVet.png" 
                alt="Logo LunaVet" 
                className="w-12 h-12 object-contain drop-shadow-md"
                onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/1864/1864509.png"; // Fallback gatito
                }}
                />
                <h1 className="text-2xl font-bold tracking-tight">LunaVet</h1>
            </div>

            {/* Texto Central */}
            <div className="relative z-10 max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-sm font-medium mb-6 backdrop-blur-sm">
                <ShieldCheck size={16} />
                Acceso Seguro
                </div>
                <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                Lleva tu clínica al <br />
                <span className="text-blue-200">siguiente nivel.</span>
                </h2>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                El sistema integral diseñado exclusivamente para el cuidado, administración y bienestar de tus pacientes y tu negocio.
                </p>
            </div>

            {/* Footer Izquierdo */}
            <div className="relative z-10 flex items-center gap-4 text-blue-200 text-sm">
                <p>© 2026 Desarrollado por <strong>JOZ Team</strong></p>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <p>V 1.0.0</p>
            </div>
            </div>

            {/* Panel Derecho: Formulario de Login */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 relative">
            
            {/* Botón Theme Toggle Flotante */}
            <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="absolute top-8 right-8 p-3 rounded-xl bg-[#FFFFFF] dark:bg-[#1E293B] text-[#64748B] dark:text-[#94A3B8] border border-black/10 dark:border-white/5 hover:text-[#3B82F6] dark:hover:text-[#3B82F6] shadow-sm transition-all duration-200 z-10"
                aria-label="Alternar modo oscuro"
            >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="w-full max-w-md flex flex-col items-center">
                
                {/* Header Formulario (Visible solo en móvil) */}
                <div className="flex items-center gap-3 mb-10 lg:hidden justify-center w-full">
                <img 
                    src="Logo_LunaVet.png" 
                    alt="Logo LunaVet" 
                    className="w-12 h-12 object-contain drop-shadow-md"
                    onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = "https://cdn-icons-png.flaticon.com/512/1864/1864509.png"; 
                    }}
                />
                <h1 className="text-3xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">LunaVet</h1>
                </div>

                {/* Bloque Central Centrado: Imagen Prueba + Textos */}
                <div className="text-center mb-8 flex flex-col items-center">
                
                {/* Imagen Decorativa con Aura */}
                <div className="relative mb-6">
                    {/* Aura (Cambia de intensidad/color según el tema) */}
                    <div className="absolute -inset-8 rounded-full blur-[24px] bg-[#3B82F6]/30 dark:bg-[#3B82F6]/50 animate-pulse"></div>
                    {/* Imagen */}
                    <img 
                    src="Cat_c.png" 
                    alt="Imagen de Bienvenida" 
                    className="relative z-10 w-24 h-24 object-cover rounded-full drop-shadow-xl border-2 border-[#FFFFFF] dark:border-[#1E293B]"
                    onError={(e) => { 
                        e.target.onerror = null; 
                        // Fallback visual estilo anime para la previsualización
                        e.target.src = "https://i.pinimg.com/736x/80/cb/09/80cb09eb583ea2cd092576bde139c8eb.jpg"; 
                    }}
                    />
                </div>

                <h2 className="text-3xl font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2 flex items-center justify-center gap-2">
                    ¡Hola de nuevo! 👋
                </h2>
                <p className="text-[#64748B] dark:text-[#94A3B8]">
                    Ingresa tus credenciales para acceder al sistema.
                </p>
                </div>

                {/* Contenedor del Formulario con Aura */}
                <div className="relative w-full">
                {/* Aura del Contenedor */}
                <div className="absolute -inset-2 rounded-[16px] blur-xl bg-[#3B82F6]/20 dark:bg-[#3B82F6]/30 animate-pulse"></div>
                
                {/* Tarjeta del Formulario */}
                <div className="relative bg-[#FFFFFF] dark:bg-[#1E293B] p-8 rounded-[12px] border border-black/10 dark:border-white/5 shadow-sm transition-colors duration-300 w-full">
                    <form onSubmit={handleLogin} className="space-y-6">
                    
                    {/* Input Usuario */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC] block text-left">
                        Usuario
                        </label>
                        <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B] dark:text-[#94A3B8]">
                            <User size={20} />
                        </div>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="ej: admin.vet"
                            className="w-full pl-11 pr-4 py-3 bg-[#F8FAFC] dark:bg-[#0F172A] border border-black/10 dark:border-white/10 rounded-[12px] text-[#0F172A] dark:text-[#F8FAFC] placeholder-[#64748B]/50 dark:placeholder-[#94A3B8]/50 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-[#3B82F6] transition-all"
                            required
                        />
                        </div>
                    </div>

                    {/* Input Contraseña */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                            Contraseña
                        </label>
                        <a href="#" className="text-sm font-medium text-[#3B82F6] hover:text-[#2563EB] hover:underline transition-colors">
                            ¿La olvidaste?
                        </a>
                        </div>
                        <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B] dark:text-[#94A3B8]">
                            <Lock size={20} />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full pl-11 pr-12 py-3 bg-[#F8FAFC] dark:bg-[#0F172A] border border-black/10 dark:border-white/10 rounded-[12px] text-[#0F172A] dark:text-[#F8FAFC] placeholder-[#64748B]/50 dark:placeholder-[#94A3B8]/50 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:border-[#3B82F6] transition-all"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#64748B] dark:text-[#94A3B8] hover:text-[#3B82F6] transition-colors"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                        </div>
                    </div>

                    {/* Checkbox Recordarme */}
                    <div className="flex items-center text-left">
                        <input
                        id="remember-me"
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[#3B82F6] focus:ring-[#3B82F6] bg-[#F8FAFC] dark:bg-[#0F172A] dark:border-white/10"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-[#64748B] dark:text-[#94A3B8] cursor-pointer">
                        Mantener sesión iniciada
                        </label>
                    </div>

                    {/* Botón Submit */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-[12px] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_20px_-5px_rgba(59,130,246,0.4)] dark:shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)] group"
                    >
                        {isLoading ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                        <>
                            <span>Iniciar Sesión</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                        )}
                    </button>
                    </form>
                </div>
                </div>

                {/* Texto Soporte */}
                <p className="mt-8 text-center text-sm text-[#64748B] dark:text-[#94A3B8]">
                ¿Problemas para acceder? Contacta a{' '}
                <a href="#" className="font-medium text-[#3B82F6] hover:underline">
                    soporte técnico
                </a>.
                </p>

            </div>
            </div>

        </div>
        </div>
    );
}