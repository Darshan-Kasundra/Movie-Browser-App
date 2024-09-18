import Hero from './Hero';

const AboutPage = () => {
  return (
  
    <div>
        <Hero text="This is the about us page" />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <p className='lead'>
                <b>About us page: </b>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AboutPage;
