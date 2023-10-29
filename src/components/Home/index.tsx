import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Welcome to the employee-management App</h1>
      <p className="home__employees">Number of activ Employees: {10} </p>
      <h4 className="homepage__text">Employees List</h4>
      <button type="submit">Go to List</button>
    </div>
  );
};
