import { useDispatch, useSelector } from 'react-redux';
import './Therapists.css'
import AnimatedItem from '../AnimatedItem'
import { useEffect } from 'react';
import { fetchTherapists } from '../../redux/slices/TherapistSlice';

function Therapists() {
  const dispatch = useDispatch();
  const { therapists, loading, error } = useSelector((state) => state.therapists);

  useEffect(() => {
    dispatch(fetchTherapists());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
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
                  <section key={index} className='person'>
                    <img src={therapist.image} alt={"Image"} />
                    <h2>{therapist.Name}</h2>              
                    <p>{therapist.Description}</p>
                  </section>
                ))
             }
              </section>
            </AnimatedItem>
    </main>
  )
}

export default Therapists