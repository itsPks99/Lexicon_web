import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './StatisticsSection.css';

gsap.registerPlugin(ScrollTrigger);

const statisticsData = [
    { id: 1, value: 25, label: "years of experience" },
    { id: 2, value: 30, label: "OEM tech partners" },
    { id: 3, value: 150, label: "large IT projects with partnerships" },
    { id: 4, value: 75, label: "certified tech experts" }
];

const StatisticsSection = () => {
    const numberRefs = useRef([]);

    useEffect(() => {
        numberRefs.current.forEach((el, index) => {
            if (el) {
                gsap.fromTo(el, { innerText: 0 }, {
                    innerText: statisticsData[index].value,
                    duration: 3,
                    ease: "power3.out",
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                    onUpdate: function () {
                        el.innerText = Math.floor(el.innerText) + '+';
                    }
                });
            }
        });
    }, []);

    return (
        <section className="statistics-section">
            <div className="statistics-container">
                {statisticsData.map((item, index) => (
                    <div className="stat-card" key={item.id}>
                        <h3 ref={el => numberRefs.current[index] = el}>0</h3>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatisticsSection;
