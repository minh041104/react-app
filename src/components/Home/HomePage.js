import video from '../../assets/video-homepage.mp4';

const Home = () => {
    return (
        <div className='homepage-container'>
            <video src={video} autoPlay loop muted type="video/mp4" />
            <div className='homepage-content'>
                <div className='title'>
                    The online quiz maker that’s simple, fun, and customizable
                </div>
                <div className='description'>
                    Typeform isn’t just any online quiz maker—it’s designed to help you create engaging, interactive quizzes that captivate your audience and drive results.
‍

Whether you’re generating leads, testing knowledge, or providing personalized product recommendations, our powerful quiz maker ensures every quiz you create gets completed. Get started for free
                </div>
                <div className='btn'>
                    <button className='btn-create'>Create a quiz</button>
                </div>
            </div>
        </div>
    )
}
export default Home;
