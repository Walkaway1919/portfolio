import './Logo.scss';
export const Logo = ({img, alt }) => {
    return <figure className='logo'>
    <img className='logo__img' src={img} alt={alt}/>
    <figcaption>{alt}</figcaption>
</figure>
}