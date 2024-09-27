import { useDispatch, useSelector } from 'react-redux';
import './Therapists.css'
import AnimatedItem from '../AnimatedItem'
import { useEffect } from 'react';
import { fetchTherapists } from '../../redux/slices/TherapistSlice';
import { Link } from 'react-router-dom';

function Therapists() {
  const dispatch = useDispatch();
  const { therapists, loading, error } = useSelector((state) => state.therapists);

  useEffect(() => {
    dispatch(fetchTherapists());
  }, [dispatch]);

  if (loading) return <section className='person'>Loading...</section>; 
  if (error) return <p>Error: {error}</p>;

  return (
    <main className='therapists-main'>
      <AnimatedItem>
            <h1 className='header'>Therapists</h1>
            </AnimatedItem>
            <AnimatedItem>
              <section className='therapists-list'>
             {
                therapists?.map((therapist,index) => (
                  <Link to={`/therapist/${therapist._id}`} key={index} className='person'>
                      <img src={therapist.Image} alt={"Image"} />
                      <h2>{therapist.Name}</h2>              
                      <p>{therapist.Description}</p>
                  </Link>
                ))
             }
              </section>
            </AnimatedItem>
    </main>
  )
}

export default Therapists