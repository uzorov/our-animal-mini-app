const Logo = () => (
    <img
        src={`${import.meta.env.BASE_URL}our-anim-logo.png`}
        alt="Наш Зверь"
        style={{ width: 140, height: "auto", objectFit: "contain" }}
    />
);

export default Logo;