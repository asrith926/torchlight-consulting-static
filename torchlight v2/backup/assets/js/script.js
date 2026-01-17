// Torchlight Consulting - Modern Interactive JavaScript
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    
    // Font loading check and fallback
    loadAndVerifyFonts();
    
    // Initialize animations and interactions
    initializeAnimations();
    initializeNavigation();
    initializeForm();
    
    function loadAndVerifyFonts() {
        // Create a test element to check if fonts are loaded
        const testElement = document.createElement('div');
        testElement.style.fontFamily = 'proxima-nova, Manrope';
        testElement.style.fontSize = '16px';
        testElement.style.position = 'absolute';
        testElement.style.visibility = 'hidden';
        testElement.innerHTML = 'Font Test';
        document.body.appendChild(testElement);
        
        // Check font loading with timeout
        let attempts = 0;
        const maxAttempts = 50;
        
        function checkFont() {
            attempts++;
            const computedFont = window.getComputedStyle(testElement).fontFamily;
            
            if (computedFont.includes('proxima-nova') || computedFont.includes('Manrope') || attempts >= maxAttempts) {
                document.body.removeChild(testElement);
                console.log('Font loaded:', computedFont);
                
                // Force re-render of text elements
                const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button');
                textElements.forEach(el => {
                    el.style.fontFamily = 'var(--font-family-sans)';
                });
            } else {
                setTimeout(checkFont, 100);
            }
        }
        
        setTimeout(checkFont, 100);
    }
    
    function initializeAnimations() {
        // Subtle hero text fade animations - opacity only, no movement
        const heroTimeline = gsap.timeline();
        
        heroTimeline
            .from('.hero-portrait-image', {
                opacity: 0,
                scale: 0.8,
                duration: 1.5,
                ease: 'power2.out',
                delay: 0.5
            })
            .from('.hero-tagline', {
                opacity: 0,
                y: 30,
                duration: 1.2,
                ease: 'power2.out',
                delay: 1
            }, 0)
            .from('.hero-speech-bubble', {
                opacity: 0,
                y: 20,
                scale: 0.95,
                duration: 1,
                ease: 'power2.out',
                delay: 1.8
            }, 0);


        // Section headers animation
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header.children, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });
        });

        // About section animations
        gsap.from('.about-text .text-large', {
            scrollTrigger: {
                trigger: '.about-text',
                start: 'top 75%'
            },
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.about-details p', {
            scrollTrigger: {
                trigger: '.about-details',
                start: 'top 75%'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });

        gsap.from('.achievement-item', {
            scrollTrigger: {
                trigger: '.about-achievements',
                start: 'top 75%'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });

        // Philosophy section animation
        gsap.from('.philosophy-quote', {
            scrollTrigger: {
                trigger: '.philosophy',
                start: 'top 70%'
            },
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: 'power3.out'
        });

        gsap.from('.philosophy-mission', {
            scrollTrigger: {
                trigger: '.philosophy-mission',
                start: 'top 80%'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });

        // Architecture cards animation
        gsap.from('.architecture-card', {
            scrollTrigger: {
                trigger: '.architectures-grid',
                start: 'top 75%'
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });

        // Timeline animation
        gsap.utils.toArray('.timeline-item').forEach((item, index) => {
            const marker = item.querySelector('.marker-dot');
            const content = item.querySelector('.timeline-content');
            
            // Marker animation
            gsap.from(marker, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%'
                },
                scale: 0,
                duration: 0.5,
                ease: 'back.out(1.7)'
            });
            
            // Content animation
            gsap.from(content.children, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 75%'
                },
                opacity: 0,
                x: 50,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out'
            });
        });

        // Service items hover animation
        gsap.utils.toArray('.service-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    y: -5,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        // Contact section animation
        gsap.from('.contact-info > *', {
            scrollTrigger: {
                trigger: '.contact-info',
                start: 'top 75%'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });

        gsap.from('.contact-form-container', {
            scrollTrigger: {
                trigger: '.contact-form-container',
                start: 'top 75%'
            },
            opacity: 0,
            x: 50,
            duration: 1,
            ease: 'power3.out'
        });

        // Parallax effect on scroll
        gsap.to('.gradient-layer', {
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            yPercent: -50,
            ease: 'none'
        });

        // Achievement numbers counter animation
        gsap.utils.toArray('.achievement-number').forEach(number => {
            const finalValue = number.textContent;
            const numericValue = parseInt(finalValue.replace(/\D/g, ''));
            
            if (!isNaN(numericValue)) {
                gsap.from(number, {
                    scrollTrigger: {
                        trigger: number,
                        start: 'top 80%'
                    },
                    innerHTML: 0,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: 'power2.out',
                    onUpdate: function() {
                        const currentValue = Math.round(this.targets()[0].innerHTML);
                        if (finalValue.includes('+')) {
                            number.innerHTML = currentValue + '+';
                        } else {
                            number.innerHTML = currentValue;
                        }
                    }
                });
            }
        });
    }

    function initializeNavigation() {
        // Smooth scrolling for navigation links
        gsap.utils.toArray('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    gsap.to(window, {
                        duration: 1.2,
                        scrollTo: {
                            y: targetElement,
                            offsetY: 80
                        },
                        ease: 'power3.inOut'
                    });
                }
            });
        });

        // Header scroll effects
        let lastScrollY = 0;
        const header = document.querySelector('.header');
        
        ScrollTrigger.create({
            start: 'top -80',
            end: 'max',
            onUpdate: (self) => {
                const currentScrollY = self.scroll();
                
                if (currentScrollY > 100) {
                    gsap.to(header, {
                        backgroundColor: 'rgba(10, 10, 10, 0.95)',
                        backdropFilter: 'blur(20px)',
                        duration: 0.3
                    });
                } else {
                    gsap.to(header, {
                        backgroundColor: 'rgba(10, 10, 10, 0.8)',
                        backdropFilter: 'blur(20px)',
                        duration: 0.3
                    });
                }
                
                // Hide/show header on scroll direction
                if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    gsap.to(header, {
                        y: -80,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                } else {
                    gsap.to(header, {
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
                
                lastScrollY = currentScrollY;
            }
        });

        // Mobile menu toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileMenuToggle && navLinks) {
            let isMenuOpen = false;
            
            mobileMenuToggle.addEventListener('click', function() {
                isMenuOpen = !isMenuOpen;
                
                if (isMenuOpen) {
                    // Open menu animation
                    gsap.set(navLinks, { display: 'flex', opacity: 0, y: -20 });
                    gsap.to(navLinks, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                    
                    // Hamburger animation
                    gsap.to(mobileMenuToggle.children[0], {
                        rotation: 45,
                        y: 6,
                        duration: 0.3
                    });
                    gsap.to(mobileMenuToggle.children[1], {
                        opacity: 0,
                        duration: 0.3
                    });
                    gsap.to(mobileMenuToggle.children[2], {
                        rotation: -45,
                        y: -6,
                        duration: 0.3
                    });
                } else {
                    // Close menu animation
                    gsap.to(navLinks, {
                        opacity: 0,
                        y: -20,
                        duration: 0.3,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.set(navLinks, { display: 'none' });
                        }
                    });
                    
                    // Reset hamburger
                    gsap.to(mobileMenuToggle.children, {
                        rotation: 0,
                        y: 0,
                        opacity: 1,
                        duration: 0.3
                    });
                }
            });
        }
    }

    function initializeForm() {
        const form = document.getElementById('consultation-form');
        
        if (form) {
            // Form field animations
            gsap.utils.toArray('.form-group').forEach((group, index) => {
                const input = group.querySelector('input, select, textarea');
                const label = group.querySelector('label');
                
                if (input && label) {
                    input.addEventListener('focus', () => {
                        gsap.to(label, {
                            color: '#4a9eff',
                            scale: 0.95,
                            duration: 0.2,
                            ease: 'power2.out'
                        });
                        
                        gsap.to(input, {
                            borderColor: '#4a9eff',
                            boxShadow: '0 0 0 3px rgba(74, 158, 255, 0.1)',
                            duration: 0.2,
                            ease: 'power2.out'
                        });
                    });
                    
                    input.addEventListener('blur', () => {
                        if (!input.value) {
                            gsap.to(label, {
                                color: '#ffffff',
                                scale: 1,
                                duration: 0.2,
                                ease: 'power2.out'
                            });
                        }
                        
                        gsap.to(input, {
                            borderColor: '#333333',
                            boxShadow: 'none',
                            duration: 0.2,
                            ease: 'power2.out'
                        });
                    });
                }
                
                // Stagger form field reveals
                gsap.from(group, {
                    scrollTrigger: {
                        trigger: form,
                        start: 'top 80%'
                    },
                    opacity: 0,
                    y: 30,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'power3.out'
                });
            });

            // Form submission
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitButton = form.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                // Button loading animation
                gsap.to(submitButton, {
                    scale: 0.95,
                    duration: 0.1,
                    ease: 'power2.out',
                    onComplete: () => {
                        submitButton.textContent = 'Sending...';
                        submitButton.disabled = true;
                        
                        // Simulate form submission
                        setTimeout(() => {
                            // Success animation
                            gsap.to(submitButton, {
                                backgroundColor: '#10b981',
                                duration: 0.3,
                                ease: 'power2.out',
                                onComplete: () => {
                                    submitButton.textContent = 'Message Sent!';
                                    
                                    // Reset after delay
                                    setTimeout(() => {
                                        gsap.to(submitButton, {
                                            backgroundColor: '#4a9eff',
                                            scale: 1,
                                            duration: 0.3,
                                            ease: 'power2.out',
                                            onComplete: () => {
                                                submitButton.textContent = originalText;
                                                submitButton.disabled = false;
                                                form.reset();
                                            }
                                        });
                                    }, 2000);
                                }
                            });
                        }, 1500);
                    }
                });
            });
        }
    }

    // Organic Fluid Blob Effect
    const fluidBlob = document.querySelector('.fluid-blob');
    const gradientLayer = document.querySelector('.gradient-layer');
    
    // Multiple blob points for organic shape
    let blobPoints = [];
    let targetX = 50, targetY = 50;
    let mouseX = 50, mouseY = 50;
    
    // Initialize multiple blob points
    for (let i = 0; i < 6; i++) {
        blobPoints.push({
            x: 50,
            y: 50,
            targetX: 50,
            targetY: 50,
            size: 200 + Math.random() * 300,
            speed: 0.02 + Math.random() * 0.08,
            phase: Math.random() * Math.PI * 2,
            amplitude: 50 + Math.random() * 100
        });
    }
    
    document.addEventListener('mousemove', (e) => {
        targetX = (e.clientX / window.innerWidth) * 100;
        targetY = (e.clientY / window.innerHeight) * 100;
        
        // Each blob point follows with different characteristics
        blobPoints.forEach((point, i) => {
            const delay = i * 0.1;
            point.targetX = targetX + Math.sin(Date.now() * 0.001 + point.phase) * point.amplitude * 0.3;
            point.targetY = targetY + Math.cos(Date.now() * 0.0012 + point.phase) * point.amplitude * 0.3;
        });
    });
    
    function animateOrganicBlob() {
        // Smooth interpolation for main position
        mouseX += (targetX - mouseX) * 0.08;
        mouseY += (targetY - mouseY) * 0.08;
        
        if (fluidBlob) {
            // Create complex organic shape with multiple overlapping ellipses
            let blobBackground = '';
            
            blobPoints.forEach((point, i) => {
                // Smooth interpolation for each point
                point.x += (point.targetX - point.x) * point.speed;
                point.y += (point.targetY - point.y) * point.speed;
                
                // Organic size variation
                const time = Date.now() * 0.001;
                const dynamicSize = point.size + Math.sin(time + point.phase) * 50;
                const scaleX = 1 + Math.sin(time * 0.7 + point.phase) * 0.4;
                const scaleY = 1 + Math.cos(time * 0.5 + point.phase) * 0.4;
                
                // Color based on position and time - Vibrant like Scion
                const colorPhase = (time + i) * 0.5;
                const colors = [
                    `rgba(139, 92, 246, ${0.15 + Math.sin(colorPhase) * 0.08})`,
                    `rgba(244, 114, 182, ${0.12 + Math.cos(colorPhase + 1) * 0.06})`,
                    `rgba(6, 182, 212, ${0.1 + Math.sin(colorPhase + 2) * 0.05})`,
                    `rgba(245, 158, 11, ${0.08 + Math.cos(colorPhase + 3) * 0.04})`,
                    `rgba(16, 185, 129, ${0.06 + Math.sin(colorPhase + 4) * 0.03})`
                ];
                
                const color = colors[i % colors.length];
                
                blobBackground += `
                    radial-gradient(
                        ${dynamicSize * scaleX}px ${dynamicSize * scaleY}px at ${point.x}% ${point.y}%,
                        ${color} 0%,
                        transparent 70%
                    )${i < blobPoints.length - 1 ? ',' : ''}
                `;
            });
            
            fluidBlob.style.background = blobBackground;
            
            // Dynamic effects based on movement
            const movement = Math.abs(targetX - mouseX) + Math.abs(targetY - mouseY);
            const dynamicBlur = 2 + movement * 0.1;
            const dynamicOpacity = 0.6 + movement * 0.01;
            
            fluidBlob.style.filter = `blur(${dynamicBlur}px)`;
            fluidBlob.style.opacity = Math.min(dynamicOpacity, 0.8);
            
            // Enhance background gradient
            if (gradientLayer) {
                const intensity = 1.3 + movement * 0.02;
                const brightness = 1.1 + movement * 0.01;
                gradientLayer.style.filter = `saturate(${intensity}) brightness(${brightness})`;
                gradientLayer.style.backgroundPosition = `${mouseX}% ${mouseY}%`;
            }
        }
        
        requestAnimationFrame(animateOrganicBlob);
    }
    
    // Start the organic blob animation
    animateOrganicBlob();
    
    // Enhanced interaction on hover
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mouseenter', () => {
            blobPoints.forEach(point => {
                point.amplitude *= 1.5;
                point.speed *= 1.3;
            });
        });
        
        hero.addEventListener('mouseleave', () => {
            blobPoints.forEach(point => {
                point.amplitude /= 1.5;
                point.speed /= 1.3;
            });
        });
    }
    
    // Click creates a burst effect
    document.addEventListener('click', (e) => {
        const clickX = (e.clientX / window.innerWidth) * 100;
        const clickY = (e.clientY / window.innerHeight) * 100;
        
        // Add a temporary blob point at click location
        const burstBlob = {
            x: clickX,
            y: clickY,
            targetX: clickX,
            targetY: clickY,
            size: 300,
            speed: 0.1,
            phase: 0,
            amplitude: 0,
            life: 1.0
        };
        
        blobPoints.push(burstBlob);
        
        // Animate the burst blob
        const burstAnimation = () => {
            burstBlob.life -= 0.02;
            burstBlob.size += 10;
            
            if (burstBlob.life <= 0) {
                const index = blobPoints.indexOf(burstBlob);
                if (index > -1) blobPoints.splice(index, 1);
            } else {
                requestAnimationFrame(burstAnimation);
            }
        };
        
        burstAnimation();
    });

    // Add some interactive hover effects
    gsap.utils.toArray('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Architecture cards now use clean, non-interactive design

    // Gradient background intensity variation on scroll
    ScrollTrigger.create({
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => {
            const progress = self.progress;
            const intensity = 0.05 + (progress * 0.15); // Vary from 0.05 to 0.2
            
            gsap.to('.gradient-layer', {
                opacity: intensity,
                duration: 0.5,
                ease: 'none'
            });
        }
    });

    console.log('Torchlight Consulting - Advanced animations initialized');
});

// Additional utility functions
function createRippleEffect(element, x, y) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(74, 158, 255, 0.3);
        transform: scale(0);
        left: ${x - rect.left - size / 2}px;
        top: ${y - rect.top - size / 2}px;
        width: ${size}px;
        height: ${size}px;
        pointer-events: none;
    `;
    
    element.appendChild(ripple);
    
    gsap.to(ripple, {
        scale: 2,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => ripple.remove()
    });
}

// Add ripple effect to primary buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-primary')) {
        createRippleEffect(e.target, e.clientX, e.clientY);
    }
});

// Performance optimization: Reduce animations on slower devices
if (navigator.hardwareConcurrency <= 4) {
    ScrollTrigger.config({
        ignoreMobileResize: true,
        autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
    });
}

// Utility function to debounce resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Mobile and performance detection utilities
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isLowPerformanceDevice = navigator.hardwareConcurrency <= 4 || isMobile;

// Three.js Shader Animation
class ShaderAnimation {
    constructor(container) {
        this.container = container;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.uniforms = null;
        this.animationId = null;
        this.isDestroyed = false;
        this.resizeHandler = null;
        
        this.init();
    }
    
    init() {
        if (!this.container || !window.THREE) {
            console.warn('Three.js not loaded or container not found');
            return;
        }
        
        // Vertex shader
        const vertexShader = `
            void main() {
                gl_Position = vec4( position, 1.0 );
            }
        `;

        // Fragment shader  
        const fragmentShader = `
            #define TWO_PI 6.2831853072
            #define PI 3.14159265359

            precision highp float;
            uniform vec2 resolution;
            uniform float time;

            void main(void) {
                vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
                float t = time*0.05;
                float lineWidth = 0.002;

                vec3 color = vec3(0.0);
                for(int j = 0; j < 3; j++){
                    for(int i=0; i < 5; i++){
                        color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
                    }
                }
                
                gl_FragColor = vec4(color[0],color[1],color[2],1.0);
            }
        `;

        // Initialize Three.js scene
        this.camera = new THREE.Camera();
        this.camera.position.z = 1;

        this.scene = new THREE.Scene();
        const geometry = new THREE.PlaneGeometry(2, 2);

        this.uniforms = {
            time: { type: "f", value: 1.0 },
            resolution: { type: "v2", value: new THREE.Vector2() },
        };

        const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
        });

        const mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);

        this.renderer = new THREE.WebGLRenderer({ 
            antialias: !isMobile, // Disable antialiasing on mobile for performance
            alpha: true,
            powerPreference: isMobile ? 'low-power' : 'high-performance'
        });
        
        // Adaptive pixel ratio based on device capability
        const maxPixelRatio = isMobile ? 1 : 2;
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
        
        // Set initial size
        this.handleResize();
        
        this.container.appendChild(this.renderer.domElement);

        // Handle window resize with debouncing
        this.resizeHandler = debounce(this.handleResize.bind(this), 100);
        window.addEventListener("resize", this.resizeHandler, false);
        
        // Handle orientation change on mobile
        if (isMobile) {
            window.addEventListener("orientationchange", () => {
                // Delay to allow orientation change to complete
                setTimeout(this.resizeHandler, 200);
            }, false);
        }

        // Start animation
        this.animate();
        
        // Store geometry and material for cleanup
        this.geometry = geometry;
        this.material = material;
    }
    
    handleResize() {
        if (this.isDestroyed) return;
        
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        
        this.renderer.setSize(width, height);
        this.uniforms.resolution.value.x = width;
        this.uniforms.resolution.value.y = height;
    }
    
    animate() {
        if (this.isDestroyed) return;
        
        this.animationId = requestAnimationFrame(this.animate.bind(this));
        
        // Adaptive animation speed based on device performance
        const timeIncrement = isMobile ? 0.03 : 0.05; // Slower on mobile
        this.uniforms.time.value += timeIncrement;
        
        this.renderer.render(this.scene, this.camera);
    }
    
    destroy() {
        this.isDestroyed = true;
        
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        window.removeEventListener("resize", this.resizeHandler);
        
        if (isMobile) {
            window.removeEventListener("orientationchange", this.resizeHandler);
        }
        
        if (this.container && this.renderer && this.renderer.domElement) {
            this.container.removeChild(this.renderer.domElement);
        }
        
        if (this.renderer) {
            this.renderer.dispose();
        }
        
        if (this.geometry) {
            this.geometry.dispose();
        }
        
        if (this.material) {
            this.material.dispose();
        }
    }
}

// Initialize shader animations
let philosophyShaderAnimation = null;
let heroShaderAnimation = null;

// Function to initialize shader animations
function initializeShaderAnimations() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || !window.THREE) {
        console.log('Shader animations disabled:', prefersReducedMotion ? 'reduced motion preference' : 'Three.js not available');
        return;
    }
    
    // Always initialize hero section shader (highest priority)
    const heroShaderContainer = document.querySelector('.hero-shader-container');
    if (heroShaderContainer) {
        heroShaderAnimation = new ShaderAnimation(heroShaderContainer);
        console.log('Hero shader animation initialized');
    }
    
    // Initialize philosophy shader based on device capability  
    const philosophyShaderContainer = document.querySelector('.philosophy-shader-container');
    if (philosophyShaderContainer && !isLowPerformanceDevice) {
        // Only on higher-performance devices
        philosophyShaderAnimation = new ShaderAnimation(philosophyShaderContainer);
        console.log('Philosophy shader animation initialized');
    } else if (philosophyShaderContainer) {
        console.log('Philosophy shader animation skipped for performance optimization');
    }
    
    // Additional check for very low memory devices
    if (navigator.deviceMemory && navigator.deviceMemory < 4) {
        console.log('Low memory device detected, disabling philosophy shader');
        if (philosophyShaderAnimation) {
            philosophyShaderAnimation.destroy();
            philosophyShaderAnimation = null;
        }
    }
}

// Initialize shaders when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeShaderAnimations);
} else {
    initializeShaderAnimations();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (philosophyShaderAnimation) {
        philosophyShaderAnimation.destroy();
    }
    if (heroShaderAnimation) {
        heroShaderAnimation.destroy();
    }
});

// Stripe Integration
const stripe = Stripe('pk_test_51QcWLTJJ33NzLH8h2rXb5gTSFLvVvSKDq0gRAH8EFD4z4wgkUIZJYcUTq5JB8lGnmXbUYFMc4Y4NpJMYtTvNO59t00tgJD2VEv'); // Replace with your publishable key

function initializeStripe() {
    const payButton = document.getElementById('pay-now-btn');
    
    if (payButton) {
        payButton.addEventListener('click', async () => {
            try {
                // Disable button during processing
                payButton.disabled = true;
                payButton.textContent = 'Processing...';
                
                // Create checkout session
                const response = await fetch('/api/create-checkout-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        priceId: 'price_1QcWLTJJ33NzLH8h2rXb5gTSFLvVvSKDq0gRAH8EFD4z4wgkUIZJYcUTq5JB8lGnmXbUYFMc4Y4NpJMYtTvNO59t00tgJD2VEv', // Replace with your price ID
                        successUrl: window.location.origin + '/success.html',
                        cancelUrl: window.location.origin + '/cancel.html'
                    })
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const session = await response.json();
                
                // Redirect to Stripe Checkout
                const result = await stripe.redirectToCheckout({
                    sessionId: session.id
                });
                
                if (result.error) {
                    console.error('Stripe error:', result.error);
                    alert('Payment failed. Please try again.');
                }
            } catch (error) {
                console.error('Payment error:', error);
                alert('Payment failed. Please try again.');
            } finally {
                // Re-enable button
                payButton.disabled = false;
                payButton.textContent = 'Pay Now';
            }
        });
    }
}

// Initialize Stripe when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeStripe);
} else {
    initializeStripe();
}