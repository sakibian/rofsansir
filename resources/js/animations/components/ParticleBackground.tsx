import React, { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../utils/animationPresets';

interface ParticleBackgroundProps {
    particleCount?: number;
    className?: string;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
    particleCount = 50,
    className = '',
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (prefersReducedMotion()) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Wrap around edges
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        // Create particles
        const particles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        const animate = () => {
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.save();
                        ctx.globalAlpha = (100 - distance) / 100 * 0.2;
                        ctx.strokeStyle = particle.color;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                        ctx.restore();
                    }
                });
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [particleCount]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{ zIndex: 1 }}
        />
    );
};

// Floating geometric shapes component
export const FloatingShapes: React.FC<{
    shapeCount?: number;
    className?: string;
}> = ({ shapeCount = 8, className = '' }) => {
    const shapes = Array.from({ length: shapeCount }, (_, i) => ({
        id: i,
        delay: i * 2,
        duration: 15 + Math.random() * 10,
    }));

    if (prefersReducedMotion()) return null;

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {shapes.map((shape) => (
                <div
                    key={shape.id}
                    className="absolute opacity-10 animate-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${shape.delay}s`,
                        animationDuration: `${shape.duration}s`,
                    }}
                >
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-navy/20 rounded-lg transform rotate-45" />
                </div>
            ))}
        </div>
    );
};

// Animated gradient background
export const AnimatedGradientBackground: React.FC<{
    className?: string;
    colors?: string[];
}> = ({
    className = '',
    colors = ['from-brand-blue/5', 'via-brand-navy/5', 'from-brand-blue/5']
}) => {
    return (
        <div className={`absolute inset-0 animate-gradient ${className}`}>
            <div className={`w-full h-full bg-gradient-to-br ${colors.join(' ')}`} />
        </div>
    );
};

export default ParticleBackground;
