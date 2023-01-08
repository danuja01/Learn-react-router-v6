import { useLoaderData } from 'react-router-dom';

const CareerDetails = () => {
  const career = useLoaderData();

  return (
    <div className='career-details'>
      <h2>Career Details for: {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className='details'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi
          facere porro laudantium quam consectetur alias cupiditate? Porro
          laudantium nisi necessitatibus. Voluptatum iusto quia facilis possimus
          nesciunt, doloremque soluta impedit?
        </p>
      </div>
    </div>
  );
};

//loader function

export const careerLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if (!res.ok) throw Error('Could not found that careers');

  return res.json();
};

export default CareerDetails;
