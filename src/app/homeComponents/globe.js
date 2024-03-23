"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import './globe.css'

export default function Globe() {

    const canvasRef = useRef();

    useEffect(() => {
        let phi = 0;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 225 * 2,
            height: 225 * 2,
            phi: 0,
            theta: 0,
            opacity: 0.72,
            dark: 1,
            diffuse: 2.25,
            mapSamples: 4500,
            mapBrightness: 12,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0, 1, 0.6353],
            glowColor: [0, 1, 0.6353],
            markers: [
                // longitude latitude
                { location: [23.8103, 90.4125], size: 0.1 },   // Dhaka
                { location: [-33.8688, 151.2093], size: 0.08 }, // Sydney
                { location: [24.7136, 46.6753], size: 0.06 },   // Saudi Arabia
                { location: [31.9038, 35.2034], size: 0.085 },   // Palestine
                { location: [39.9334, 32.8597], size: 0.06 },   // Turkey
                { location: [1.3521, 103.8198], size: 0.06 },   // Singapore
                { location: [55.7558, 37.6176], size: 0.06 },    // Russia
                { location: [40.7128, -74.006], size: 0.02 },    // New York
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.01;
            }
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div className="globe">
            <canvas
                ref={canvasRef}
                style={{ width: 225, height: 225, maxWidth: "100%", aspectRatio: 1 }}
            />
        </div>
    );
}