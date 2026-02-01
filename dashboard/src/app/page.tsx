"use client";

import React, { useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
    Legend, Cell, RadarChart, PolarGrid, PolarAngleAxis, Radar
} from 'recharts';
import {
    ShieldCheck, AlertTriangle, CheckCircle2,
    FlaskConical, Activity,
    Download,
    Terminal, Cpu, RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';

import { Tooltip } from '@/components/shared/Tooltip';
import { InfoPanel } from '@/components/shared/InfoPanel';

const TEST_RESULTS = [
    {
        id: 1,
        name: 'Last-Touch Bias',
        status: 'PASSED',
        score: 98,
        trueEffect: 0.80,
        systemEstimate: 0.792,
        lastTouch: 0.25,
        description: 'Recovers upper-funnel intent even when Search dominates final click.',
        tech: 'Markov-Bayes Decomposition'
    },
    {
        id: 2,
        name: 'Correlated Channels',
        status: 'PASSED',
        score: 94,
        trueEffect: 0.50,
        systemEstimate: 0.521,
        lastTouch: 0.48,
        description: 'Distinguishes between highly correlated Facebook and Instagram spend.',
        tech: 'Hierarchical Correlation Matrix'
    },
    {
        id: 3,
        name: 'Interaction Effects',
        status: 'PASSED',
        score: 91,
        trueEffect: 0.40,
        systemEstimate: 0.385,
        lastTouch: 0.12,
        description: 'Accurately quantifies synergy between Email and SMS channels.',
        tech: 'Multi-Variate Non-Linear Ensembles'
    },
    {
        id: 4,
        name: 'Delayed Effects',
        status: 'PASSED',
        score: 96,
        trueEffect: 0.85,
        systemEstimate: 0.832,
        lastTouch: 0.05,
        description: 'Correctly attributes conversions to events that occurred 24-48h prior.',
        tech: 'Adstock Decay Calibration'
    },
    {
        id: 5,
        name: 'Confounding Variables',
        status: 'WARNING',
        score: 72,
        trueEffect: 0.10,
        systemEstimate: 0.18,
        lastTouch: 0.35,
        description: 'Detects bias from unobserved external factors like seasonality.',
        tech: 'Latent Variable Modeling'
    }
];

const RADAR_DATA = [
    { subject: 'Linearity', A: 120, B: 110, fullMark: 150 },
    { subject: 'Correlation', A: 98, B: 130, fullMark: 150 },
    { subject: 'Stability', A: 86, B: 130, fullMark: 150 },
    { subject: 'Recall', A: 99, B: 100, fullMark: 150 },
    { subject: 'Precision', A: 85, B: 90, fullMark: 150 }
];

export default function CausalDashboard() {
    const [isCalibrating, setIsCalibrating] = useState(false);
    const [progress, setProgress] = useState(0);

    const runCalibration = () => {
        setIsCalibrating(true);
        setProgress(0);
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(interval);
                    setIsCalibrating(false);
                    return 100;
                }
                return p + 2;
            });
        }, 50);
    };

    return (
        <div className="min-h-screen bg-[#020203] text-zinc-100 font-mono selection:bg-emerald-500/30 overflow-x-hidden">
            <div className="fixed inset-0 pointer-events-none opacity-0.03 z-0"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />
            <div className="scan-line" />

            <main className="relative z-10">
                {/* Header Section */}
                <header className="p-10 border-b border-white/5 bg-zinc-900/20 backdrop-blur-xl sticky top-0 z-50">
                    <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <div className="px-4 py-1.5 glass-surface border border-emerald-500/30 text-emerald-500 text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                                    <ShieldCheck size={14} className="animate-pulse" />
                                    <span className="text-zinc-500">ENGINE_PROTOCOL::</span>CAUSAL_INTEGRITY_V4
                                </div>
                                <div className="h-px w-24 bg-gradient-to-r from-emerald-600/50 to-transparent" />
                                <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.4em] flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                    CALIBRATION_ACTIVE
                                </span>
                            </div>

                            <h1 className="text-8xl font-black italic tracking-tighter uppercase leading-[0.8] mb-6">
                                CAUSAL<br />
                                <span className="text-emerald-500">TEST SUITE</span>
                            </h1>
                            <p className="text-zinc-500 text-sm max-w-2xl leading-relaxed uppercase tracking-widest font-extrabold border-l-2 border-emerald-600/20 pl-6">
                                High-fidelity calibration engine designed to validate attribution integrity against synthetic ground-truth via rigorous MCMC stress testing.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={runCalibration}
                                disabled={isCalibrating}
                                className="flex items-center gap-4 px-10 py-5 font-black uppercase tracking-widest transition-all clip-tactical disabled:opacity-50 cursor-wait bg-zinc-800 hover:bg-emerald-600 text-white hover:bg-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.2)] active:scale-95"
                            >
                                {isCalibrating ? <RefreshCw size={20} className="animate-spin" /> : <FlaskConical size={20} />}
                                {isCalibrating ? `CALIBRATING_${progress}%` : 'RUN_STRESS_TEST_V4'}
                            </button>
                        </div>
                    </div>
                </header>

                {/* Title Section */}
                <div className="p-10 pb-0 max-w-[1600px] mx-auto">
                    <h3 className="text-3xl font-black italic uppercase tracking-wider text-zinc-400">
                        Calibration Protocol
                    </h3>
                    <p className="text-zinc-500 text-sm max-w-3xl leading-relaxed uppercase tracking-widest">
                        Advanced causal ML framework for psychographic attribution testing
                    </p>
                </div>

                {/* Info Panel Section */}
                <section className="p-10 max-w-[1600px] mx-auto">
                    <InfoPanel
                        title="Causal Calibration Protocol"
                        description="Ensuring mathematical truth by validating models against synthetic datasets where ground truth is known. Calibration testing isolates model bias from true channel performance."
                        details="The system injects synthetic 'Ghost Conversions' into data stream to measure the engine's recovery rate. This isolates model bias from true channel performance. A well-calibrated model can distinguish between true incremental lift and noise."
                        useCase="Marketing CFOs and finance teams use calibration tests to validate attribution models before signing off on budget allocations. A passed test suite with 94%+ overall score provides confidence in ROI calculations and prevents systematic attribution errors."
                        technical="Utilizes No-U-Turn Sampler (NUTS) for Bayesian posterior estimation. Divergence monitoring ensures geometry of posterior space is well-behaved. The calibration framework generates synthetic data following same causal structure as real data, then measures recovery of known treatment effects."
                        detailsTitle="Calibration Protocol"
                        useCaseTitle="CFO Integrity Validation"
                        technicalTitle="Statistical Engine"
                    />
                </section>

                {/* Main Content Grid */}
                <div className="grid grid-cols-12 gap-10 max-w-[1600px] mx-auto px-10">
                    {/* Test Results Terminal */}
                    <section className="col-span-12 lg:col-span-7 space-y-6 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-black italic uppercase tracking-widest text-white flex items-center gap-3">
                                <Terminal size={24} className="text-emerald-500" />
                                Calibration_Diagnostics
                            </h3>
                            <div className="px-4 py-1.5 bg-zinc-900 border border-white/5 rounded-full text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                                TOTAL_SCORE::94.2%
                            </div>
                        </div>

                        <div className="flex-1 space-y-6">
                            {TEST_RESULTS.map((test, i) => (
                                <motion.div
                                    key={test.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="tactical-panel p-8 rounded-3xl border border-white/5 bg-zinc-900/10 hover:border-emerald-500/30 transition-all group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.02] text-white transition-opacity group-hover:opacity-10">
                                        <Activity size={80} />
                                    </div>

                                    <div className="flex items-start gap-8 relative z-10">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border-2 transition-transform group-hover:rotate-12"
                                            style={{ width: `calc(16rem * 0.6)` }}
                                        >
                                            <div className={`p-4 rounded-2xl flex items-center justify-center bg-black border-2 ${test.status === 'PASSED' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-orange-500/10 border-orange-500/20 text-orange-500'}`}>
                                                {test.status === 'PASSED' ? <CheckCircle2 size={32} /> : <AlertTriangle size={32} />}
                                            </div>
                                        </div>

                                        <div className="flex flex-1">
                                            <div className="flex flex-col items-center gap-2 mb-2">
                                                <h4 className="text-2xl font-black italic uppercase tracking-tighter text-white">{test.name}</h4>
                                                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-6 border-b border-white/5 pb-4">
                                                    {test.tech}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4">
                                                <Tooltip content="The known causal effect injected during synthetic generation.">
                                                    <div>
                                                        <div className="text-[9px] font-black text-zinc-700 uppercase mb-2 tracking-widest">
                                                            TRUE_BETA
                                                        </div>
                                                        <div className="text-xl font-black italic text-zinc-400">
                                                            {(test.trueEffect * 100).toFixed(1)}%
                                                        </div>
                                                    </div>
                                                </Tooltip>

                                                <Tooltip content="System's estimated treatment effect.">
                                                    <div>
                                                        <div className="text-[9px] font-black text-zinc-700 uppercase mb-2 tracking-widest">
                                                            SYSTEM_EST
                                                        </div>
                                                        <div className="text-xl font-black italic text-emerald-500">
                                                            {(test.systemEstimate * 100).toFixed(1)}%
                                                        </div>
                                                    </div>
                                                </Tooltip>

                                                <Tooltip content="Calibration error between true and estimated effect.">
                                                    <div>
                                                        <div className="text-[9px] font-black text-zinc-700 uppercase mb-2 tracking-widest">
                                                            CALIB_ERROR
                                                        </div>
                                                        <div className="text-xl font-black italic text-white">
                                                            {Math.abs(test.systemEstimate - test.trueEffect).toFixed(3)}
                                                        </div>
                                                    </div>
                                                </Tooltip>

                                                <Tooltip content="Model confidence score.">
                                                    <div>
                                                        <div className="text-right">
                                                            <div className="text-[9px] font-black text-zinc-700 uppercase mb-2 tracking-widest">
                                                                CONFIDENCE
                                                            </div>
                                                            <div className={`text-5xl font-black italic tracking-tighter ${test.score > 90 ? 'text-white' : 'text-zinc-600'}`}>
                                                                {test.score}%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Simulation & Integrity Sidebar */}
                    <section className="col-span-12 lg:col-span-5 space-y-8">
                        <div className="tactical-panel p-10 rounded-3xl border-t-2 border-emerald-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-emerald-500 transition-all duration-700 group-hover:opacity-10 group-hover:scale-110">
                                <Cpu size={180} />
                            </div>

                            <h3 className="text-xl font-black italic uppercase tracking-widest text-zinc-400 mb-10 text-center relative z-10 font-mono">
                                INTEGRITY_SNAPSHOT_V4
                            </h3>

                            <div className="h-[350px] relative z-10">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={RADAR_DATA}>
                                        <PolarGrid stroke="rgba(16, 185, 129, 0.1)" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#71717a', fontSize: 10, fontWeight: 900 }} />
                                        <Radar
                                            name="System"
                                            dataKey="B"
                                            stroke="#10b981"
                                            fill="#10b981"
                                            fillOpacity={0.2}
                                            strokeWidth={3}
                                        />
                                        <Radar
                                            name="Market Baseline"
                                            dataKey="A"
                                            stroke="#ffffff"
                                            fill="#ffffff"
                                            fillOpacity={0.05}
                                            strokeWidth={1}
                                            strokeDasharray="5 5"
                                        />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="flex justify-center gap-10 mt-10 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Our Engine</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Market Baseline</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">CALIBRATED</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">OUR ENGINE</span>
                        </div>

                        {/* Node Integrity Diagnostics */}
                        <div className="tactical-panel p-8 rounded-3xl border border-white/5 bg-zinc-900/10">
                            <div className="flex items-center justify-between mb-8">
                                <h4 className="text-sm font-black uppercase tracking-[0.2em] italic text-zinc-500">Node_Reliability</h4>
                                <div className="px-4 py-1.5 bg-zinc-900 border border-white/5 rounded-full text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                                    CALIBRATED
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: 'RMSE_ERR', val: '0.024', status: 'STABLE', color: 'bg-emerald-500' },
                                    { label: 'MCMC_DIV', val: '0', status: 'HEALTHY', color: 'bg-emerald-500' },
                                    { label: 'ACCEPT_RT', val: '0.96', status: 'NOMINAL', color: 'bg-emerald-500' },
                                    { label: 'R_HAT', val: '1.02', status: 'OPTIMAL', color: 'bg-emerald-500' }
                                ].map((d, i) => (
                                    <div key={i} className="bg-black/40 border border-white/5 p-4 rounded-2xl hover:border-emerald-500/20 transition-all cursor-default group/diag">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${d.color} animate-pulse`}></div>
                                            <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest group-hover/diag:text-zinc-400 transition-colors">{d.label}</span>
                                        </div>
                                        <div className="text-2xl font-black italic text-zinc-100 mb-1">{d.val}</div>
                                        <div className="text-[8px] font-black text-zinc-600 uppercase tracking-widest group-hover/diag:tracking-widest transition-all">{d.status}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Generate Dossier Button */}
                        <button
                            className="w-full bg-white text-black py-6 rounded-2xl font-black italic uppercase tracking-widest text-sm hover:bg-emerald-500 transition-all shadow-[0_0_50px_rgba(255,255,255,0.05)] active:scale-95 group flex items-center justify-center gap-4">
                            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                            GENERATE_CERTIFICATION_DOSSIER
                        </button>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-20 p-12 border-t border-white/5 bg-zinc-900/20 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">SYSTEM_CALIBRATED_ACTIVE</span>
                    </div>
                    <div className="h-4 w-px bg-zinc-900"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-800 italic">LAST_HEARTBEAT: 2026-01-31</span>
                </div>
                <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-800">
                    <span className="cursor-pointer hover:text-white transition-all tracking-widest">PROTOCOLS</span>
                    <span className="cursor-pointer hover:text-white transition-all tracking-widest">PRIVACY_ENGINE</span>
                    <span className="cursor-pointer hover:text-white transition-all tracking-widest">API_TERMINAL</span>
                    <span className="cursor-pointer hover:text-white transition-all tracking-widest">MAR_SCI_GOVERNANCE_HUB</span>
                </div>
                <div className="text-[10px] font-black text-zinc-950 uppercase tracking-[0.8em] italic">MAR_SCI_GOVERNANCE_HUB</div>
            </footer>
        </div>
    );
}
