import styles from "./styles.module.scss";
import { Navbar } from "@/shared/components/Navbar";
import { Wrapper } from "@/shared/components/Wrapper";
import { PageTitle } from "@/shared/components/PageTitle";
import { SectionTitle } from "@/shared/components/SectionTitle";
import { SectionTitleSmall } from "@/shared/components/SectionTitleSmall";
import { SubTitle } from "@/shared/components/SubTitle";
import { Footer } from "@/shared/components/Footer";

import classNames from "classnames/bind";

import Image from "next/image";

import img1 from "@/app/assets/images/services-and-pricing/1.jpg";
import img2 from "@/app/assets/images/services-and-pricing/2.jpeg";
import img3 from "@/app/assets/images/services-and-pricing/3.jpeg";
import img4 from "@/app/assets/images/services-and-pricing/4.jpeg";
import img5 from "@/app/assets/images/services-and-pricing/5.jpg";
import img6 from "@/app/assets/images/services-and-pricing/6.png";

const cx = classNames.bind(styles);

export default function ServicesAndPricingPage() {
  return (
    <>
      <Navbar />
      <main className={styles["services-and-pricing"]}>
        <Wrapper>
          <PageTitle>Services & Pricing</PageTitle>
          <SubTitle className={styles["services-and-pricing-sub-title"]}>
            Our Bar Packages – Designed for Every Event
          </SubTitle>
          <div className={styles["services-and-pricing-content"]}>
            <div className={cx("flex-spb-c", "services-and-pricing-content-item")}>
              <div className={styles["services-and-pricing-content-item__img"]}>
                <Image src={img1} alt="img1" />
              </div>
              <div className={styles["services-and-pricing-content-item__desc"]}>
                <SectionTitle className={styles["services-and-pricing-content-item__desc-title"]}>
                  1. The Essential Sip Package
                </SectionTitle>
                <SubTitle className={styles["services-and-pricing-content-item__desc-sub-title"]}>
                  Perfect for intimate gatherings or casual celebrations
                </SubTitle>
                <ul className={styles["services-and-pricing-content-item__desc-list"]}>
                  <li>5 hours of service</li>
                  <li>2 custom cocktails + classic drinks (beer, wine, soft drinks)</li>
                  <li>Professional bartender</li>
                  <li>Bar setup & breakdown</li>
                  <li>Disposable glassware and napkins</li>
                </ul>
              </div>
            </div>
            <div className={cx("flex-spb-c", "services-and-pricing-content-item")}>
              <div className={styles["services-and-pricing-content-item__img"]}>
                <Image src={img2} alt="img2" />
              </div>
              <div className={styles["services-and-pricing-content-item__desc"]}>
                <SectionTitle className={styles["services-and-pricing-content-item__desc-title"]}>
                  2. The Signature Sip Package
                </SectionTitle>
                <SubTitle className={styles["services-and-pricing-content-item__desc-sub-title"]}>
                  For weddings, corporate events, or larger celebrations
                </SubTitle>
                <ul className={styles["services-and-pricing-content-item__desc-list"]}>
                  <li>5-6 hours of service</li>
                  <li>4 custom cocktails+ classic drinks</li>
                  <li>2 professional bartenders</li>
                  <li>Elegant bar setup with premium glassware and napkins</li>
                  <li>Customized drink signage</li>
                </ul>
              </div>
            </div>
            <div className={cx("flex-spb-c", "services-and-pricing-content-item")}>
              <div className={styles["services-and-pricing-content-item__img"]}>
                <Image src={img3} alt="img3" />
              </div>
              <div className={styles["services-and-pricing-content-item__desc"]}>
                <SectionTitle className={styles["services-and-pricing-content-item__desc-title"]}>
                  3. The Luxe Sip Package
                </SectionTitle>
                <SubTitle className={styles["services-and-pricing-content-item__desc-sub-title"]}>
                  Elevate your event with our all-inclusive, luxury bar experience
                </SubTitle>
                <ul className={styles["services-and-pricing-content-item__desc-list"]}>
                  <li>6-7 hours of service</li>
                  <li>6 signature cocktails crafted to your theme</li>
                  <li>3 professional bartenders + bar manager</li>
                  <li>Bar décor to match your event</li>
                  <li>Premium glassware, accessories, and napkins</li>
                  <li>Signature drink consultation</li>
                  <li>Personalized cocktail menu display</li>
                </ul>
              </div>
            </div>
            <div className={cx("flex-spb-c", "services-and-pricing-content-item")}>
              <div className={styles["services-and-pricing-content-item__img"]}>
                <Image src={img4} alt="img4" />
              </div>
              <div className={styles["services-and-pricing-content-item__desc"]}>
                <SectionTitle className={styles["services-and-pricing-content-item__desc-title"]}>
                  4. The Degustation Experience Package
                </SectionTitle>
                <SubTitle className={styles["services-and-pricing-content-item__desc-sub-title"]}>
                  Perfect for private events, corporate gatherings, or special celebrations, this package offers a
                  guided tasting experience led by a knowledgeable speaker.
                </SubTitle>
                <ul className={styles["services-and-pricing-content-item__desc-list"]}>
                  <li>2-3 hours of curated spirit tastings (whiskey, rum, gin, vodka, or tequila)</li>
                  <li>
                    Expert speaker introduces each spirit, discussing its origin, flavor profile, and perfect serve
                  </li>
                  <li>Tastings paired with small bites for enhanced flavor appreciation</li>
                  <li>
                    Professional presentation setup, including tasting glasses, napkins, and educational materials
                  </li>
                  <li>Interactive Q&A session with the speaker</li>
                  <li>Ideal for groups of 10 to 50 guests</li>
                </ul>
              </div>
            </div>
            <div className={cx("flex-spb-c", "services-and-pricing-content-item")}>
              <div className={styles["services-and-pricing-content-item__img"]}>
                <Image src={img5} alt="img5" />
              </div>
              <div className={styles["services-and-pricing-content-item__desc"]}>
                <SectionTitle className={styles["services-and-pricing-content-item__desc-title"]}>
                  5. Guest Bartender Experience with Manuk Grigoryan
                </SectionTitle>
                <SubTitle className={styles["services-and-pricing-content-item__desc-sub-title"]}>
                  Enhance your venue’s offerings with an exclusive guest shift by renowned bartender-mixologist Manuk
                  Grigoryan. Perfect for creating a unique and memorable event that your guests will love!
                </SubTitle>
                <ul className={styles["services-and-pricing-content-item__desc-list"]}>
                  <li>
                    <b>Signature Cocktail Showcase:</b>&nbsp; Manuk will craft a special menu of signature cocktails,
                    combining classic techniques with modern flair to excite your clientele.
                  </li>
                  <li>
                    <b>Custom Food Pairing:</b>&nbsp;Collaborate with your kitchen team to develop food pairings that
                    perfectly complement Manuk&#39;s cocktail creations, providing an integrated dining experience.
                  </li>
                  <li>
                    <b>Engaging Storytelling:</b>&nbsp;Each cocktail comes with a backstory, allowing guests to enjoy
                    not just the drinks but the inspirations behind them.
                  </li>
                  <li>
                    <b>Guaranteed WOW Effect:</b>&nbsp;Manuk’s charisma and mixology skills will ensure an unforgettable
                    experience that keeps guests talking long after the event.
                  </li>
                  <li>
                    <b>Event Photoshoot:</b>&nbsp;Capture the magic of the evening with a professional photoshoot,
                    providing you with stunning images to promote future events.
                  </li>
                  <li>
                    <b>Instagram Promotion:</b>&nbsp;We’ll promote the guest shift on our Instagram, sharing highlights
                    and tagging your venue to increase visibility and engagement.
                  </li>
                  <li>
                    <b>Professional & Safe Service:</b>&nbsp;All services are delivered by licensed and insured
                    professionals, ensuring a safe and enjoyable experience for everyone.
                  </li>
                </ul>
              </div>
            </div>
            <div className={cx("flex-spb-c", "services-and-pricing-content-item")}>
              <div className={styles["services-and-pricing-content-item__img"]}>
                <Image src={img6} alt="img6" />
              </div>
              <div className={styles["services-and-pricing-content-item__desc"]}>
                <SectionTitleSmall className={styles["services-and-pricing-content-item__desc-title"]}>
                  Add-Ons & Upgrades:
                </SectionTitleSmall>
                <ul className={styles["services-and-pricing-content-item__desc-list"]}>
                  <li>
                    <b>Additional hours of service:</b>&nbsp;$110/hour
                  </li>
                  <li>
                    <b>Lost or broken glass:</b>&nbsp;$5/each
                  </li>
                  <li>
                    <b>Liquor procurement service:</b>&nbsp;Starting at $150 (plus the cost of alcohol)
                  </li>
                  <li>
                    <b>Champagne tower:</b>&nbsp;starting at $500(including champagne)
                  </li>
                  <li>
                    <b>Specialty glassware (vintage, themed):</b>&nbsp;ask for pricing
                  </li>
                  <li>
                    <b>Craft mocktail bar:</b>&nbsp;$350 (up to 50 guests)
                  </li>
                  <li>
                    <b>Hookah Service:</b>&nbsp;$300 (with 3 hookahs, additional at $100 each)
                  </li>
                </ul>
                <p className={styles["services-and-pricing-content-item__desc-text"]}>
                  We also offer <b>promo codes, discounts and gifts,</b> call us find out more: (747) 332-7603
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}
