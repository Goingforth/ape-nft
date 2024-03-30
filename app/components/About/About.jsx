"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { useResize } from "../Hooks/use-resize";
import {
  aboutMobile,
  aboutTablet,
  aboutDesktop,
} from "../../image/about/index";
import Ticker from "../Ticker/Ticker";
import IconSharp from "../IconSharp/IconSharp";

const About = () => {
  const { isMobile, isTablet, isDesktop } = useResize();
  return (
    <section>
      <section className={styles.container}>
        <div className={styles.title}>
          a Story that started with
          <span className={styles.titleSpan}>one simple ape</span>
        </div>

        {isMobile ? (
          <div className={styles.infoFirst}>
            <p>WHO GOT</p> <p>FED UP WITH BORING</p> <p>AND HYPOCRITIC</p>
            <p>COMMONPLACE THIS IS</p> <p>HOW THE IDEA OF</p>
            <p>ESCAPING AND DYNAMIC</p>
            <p>JOURNEY ON THE YACHT</p>
          </div>
        ) : (
          <div className={styles.infoFirst}>
            WHO GOT FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW
            THE IDEA OF ESCAPING AND DYNAMIC JOURNEY ON THE <p>YACHT</p>
          </div>
        )}
        <div className={styles.iconX} style={{ width: "36", height: "36" }}>
          <IconSharp width={isDesktop ? 36 : 24} height={isDesktop ? 36 : 24} />
        </div>
        <div className={styles.infoTwo}>
          EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS ARE
          RANDOMLY GENERATED BY USERS
        </div>

        <Image
          priority
          src={isDesktop ? aboutDesktop : isMobile ? aboutMobile : aboutTablet}
          alt='aboutMobile'
          className={styles.imageAbout}
        />
      </section>
      <Ticker />
    </section>
  );
};

export default About;
