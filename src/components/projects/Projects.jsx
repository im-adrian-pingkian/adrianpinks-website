import React, { useState } from "react";
import Filter from "./Filter";
import "./Projects.css";
import { AiOutlineGithub  } from "react-icons/ai";
import { LiaExternalLinkAltSolid } from "react-icons/lia";


import { motion } from "framer-motion"; 

const Projects = () => {
    const [items, setItems] = useState(Filter);
    const [activeFilter, setActiveFilter] = useState(0);

    const filterItems = (categoryItem) => { 
        const updatedItems = Filter.filter((curElem) => {
            if (Array.isArray(categoryItem)) {
                return categoryItem.some(category => curElem.category.includes(category));
            }
            return curElem.category.includes(categoryItem);
        });

        setItems(updatedItems);
    };

    return (
        <section className="portfolio container section" id="portfolio">
            <h2 className="section__title">All Projects</h2>

            <div className="portfolio__filters">
                <span className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { setItems(Filter); setActiveFilter(0); }}>
                    Works
                </span>
                <span className={activeFilter === 1 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems(["Frontend", "Backend"]); setActiveFilter(1); }}>
                    Development
                </span>
                <span className={activeFilter === 2 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Design"); setActiveFilter(2); }}>
                    Design
                </span>
                <span className={activeFilter === 3 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Video Edits"); setActiveFilter(3); }}>
                    Certificates
                </span>                
            </div>

            <div className="portfolio__container grid">
                {items.map((elem) => {
                    const { id, image, title, category, urlfigma, urlgithub } = elem;

                    return (
                        <motion.div
                            animate={{ opacity: 1, rotateY: 0 }}
                            initial={{ opacity: 0, rotateY: 90 }}
                            exit={{ opacity: 0, rotateY: 90 }}
                            transition={{ duration: 0.5 }}
                            className="portfolio__card"
                            key={id}>
                            <div className="portfolio__thumbnail">
                                <img src={ image } alt="" className="portfolio__img" height="267" />
                                <div className="portfolio__mask"></div>
                            </div>

                            <h3 className="portfolio__title">{ title }</h3>
                            <div className="portfolio__category-container">
                                {category.map((cat, index) => (
                                    <span key={index} className="portfolio__category">{cat}</span>
                                ))}
                            </div>

                            {/* Button container */}
                            <div className="portfolio__buttons">
                                <a href={ urlfigma } target="_blank" rel="noreferrer" className="portfolio__button">
                                    <LiaExternalLinkAltSolid />
                                </a>
                                <a href={ urlgithub } target="_blank" rel="noreferrer" className="portfolio__github-button">
                                    <AiOutlineGithub />
                                </a> 
                                <a href="/works" className="portfolio__vs-button">View Study</a> {/* Redirect to a new page */}
                            </div>
                        </motion.div>

                    );
                })}
            </div>
        </section>
    );
};

export default Projects;