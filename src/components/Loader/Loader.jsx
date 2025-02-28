import { ScaleLoader } from 'react-spinners';

const Loader = () => {
  const override = {
    display: 'block',
    margin: '0 auto',
    width: '50px',
  };

  return (
    <ScaleLoader
      color={'#3470ff'}
      cssOverride={override}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  );
};

export default Loader;
