import React from 'react'
import HomeCar from '../components/HomeCar';

const Home = ({counter}) => {
  return (
    <div>
        <HomeCar counter={counter}/>
    </div>
  )
}

export default Home;