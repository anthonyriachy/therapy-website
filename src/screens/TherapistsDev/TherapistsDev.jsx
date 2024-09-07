    import { useState, useEffect } from 'react';
import axios from 'axios';
import './Therapists.css';

const API_URL = 'http://localhost:8080/therapists'; // Change this to your actual API URL

const TherapistPage = () => {
  const [therapists, setTherapists] = useState([]);
  const [form, setForm] = useState({ Name: '', Email: '', PhoneNumber: '', Specialization: '', Experience: '' });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchTherapists();
  }, []);

  const fetchTherapists = async () => {
    try {
      const response = await axios.get(API_URL);
      setTherapists(response.data.data);
    } catch (error) {
      console.error('Error fetching therapists:', error);
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await axios.put(`${API_URL}/${editing}`, form);
        setEditing(null);
      } else {
        console.log(form)
        await axios.post(API_URL, form);
      }
      setForm({ Name: '', Email: '', PhoneNumber: '', Specialization: '', Experience: '' });
      fetchTherapists();
    } catch (error) {
      console.error('Error saving therapist:', error);
    }
  };

  const handleEdit = (therapist) => {
    setForm(therapist);
    setEditing(therapist._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTherapists();
    } catch (error) {
      console.error('Error deleting therapist:', error);
    }
  };

  return (
    <div className="container">
      <h1>Therapists</h1>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="Name" placeholder="Name" value={form.Name} onChange={handleInputChange} required />
        <input type="email" name="Email" placeholder="Email" value={form.Email} onChange={handleInputChange} required />
        <input type="text" name="PhoneNumber" placeholder="Phone Number" value={form.PhoneNumber} onChange={handleInputChange} />
        <input type="text" name="Specialization" placeholder="Specialization" value={form.Specialization} onChange={handleInputChange} />
        <input type="number" name="Experience" placeholder="Experience" value={form.Experience} onChange={handleInputChange} />
        <button type="submit">{editing ? 'Update' : 'Add'}</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {therapists.map((therapist) => (
            <tr key={therapist._id}>
              <td>{therapist.Name}</td>
              <td>{therapist.Email}</td>
              <td>{therapist.PhoneNumber}</td>
              <td>{therapist.Specialization}</td>
              <td>{therapist.Experience}</td>
              <td>
                <button onClick={() => handleEdit(therapist)}>Edit</button>
                <button onClick={() => handleDelete(therapist._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TherapistPage;
