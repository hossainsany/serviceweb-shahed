import { services } from '@constants';
import ImageCard from './ImageCard';

const Services = ({ bgColor, itemColor }) => {
    return (
        <section className={`${bgColor ? bgColor : 'bg-dark-gray'}`} id='services'>
            <div className='container mx-auto'>
                <div className='text-center text-dark-white mb-[50px] md:mb-[100px]'>
                    <h2 className='text-4xl font-semibold'>My Services</h2>
                    <p className='pt-2'>Empowering Your Online Presence</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    {services.map(({ id, title, body, src, link }) => (
                        <ImageCard
                            key={id}
                            id={id}
                            title={title}
                            body={body}
                            src={src}
                            link={link}
                            itemColor={itemColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
