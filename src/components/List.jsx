import Card from "./Card";
import PropTypes from 'prop-types';

const List = ({ data }) => {

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-bold mb-8">Próximos Visitantes</h2>
          {data.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
};

export default List;
