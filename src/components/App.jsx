import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import moon from './moon.jpg';
import land from './land.jpg';
import cat from './cat.gif'

export const App = () => {
  const ref = useRef();
  return (
    <div >
      <Parallax pages={6} ref={ref} style={{backgroundColor:'black'}}>
    

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={4}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
       
          sticky={{ start: 0.9, end: 4.8 }}
          style={{ textAlign: 'center',
        height:'500px'}}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(5)}
        >
          <h2 style={{
            color:'white',
            textAlign:'center',
            fontSize:'90px',
            cursor:'pointer',
            textShadow: '3px 3px 6px black'
          }}>Welcome to my <br/> website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5.4}
          speed={4}
         
        >
          <h2 onClick={() => ref.current.scrollTo(0)} style={{
            
            color:'white',
            textAlign:'center',
            fontSize:'90px',
            cursor:'pointer'
          }} >TO THE MOON!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
