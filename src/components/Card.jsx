import { Colors } from "./Colors";
import { getColor } from "../functions/Functions";
import PropTypes from 'prop-types';
import { FaCar } from 'react-icons/fa';

const Card = ({ item: { Color, Nombre, Apellidos, Destino, HoraCita, Placas, Modelo } }) => {
    return (
        <div className="mb-2">
            <div className="flex bg-white border border-gray-300 rounded-md shadow w-full">
                <div className="flex items-center justify-center w-20 min-h-full rounded-l-md border-r border-gray-300" style={{ backgroundColor: Colors[Color] }}>
                    <FaCar className={getColor(Color)} />
                </div>
                <div className="p-4 w-full my-auto text-left">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900">
                        {`${Nombre} ${Apellidos}`}
                    </h2>
                    <div className="flex justify-between items-center">
                        <h3 className="text-base text-gray-900 font-semibold">
                            Destino:
                            <span className="font-normal"> {Destino}</span>
                        </h3>
                        <h3 className="text-base text-gray-900 font-semibold">
                            Entrada:
                            <span className="font-normal"> {HoraCita}</span>
                        </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center">
                        <div className="border border-gray-300 p-2">
                            <p className="font-bold mb-2 border-b border-gray-300">Placas</p>
                            <p>{Placas}</p>
                        </div>
                        <div className="border border-gray-300 p-2">
                            <p className="font-bold mb-2 border-b border-gray-300">Modelo</p>
                            <p>{Modelo}</p>
                        </div>
                        <div className="border border-gray-300 p-2">
                            <p className="font-bold mb-2 border-b border-gray-300">Color</p>
                            <p>{Color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    item: PropTypes.shape({
        Color: PropTypes.string.isRequired,
        Nombre: PropTypes.string.isRequired,
        Apellidos: PropTypes.string.isRequired,
        Destino: PropTypes.string.isRequired,
        HoraCita: PropTypes.string.isRequired,
        Placas: PropTypes.string.isRequired,
        Modelo: PropTypes.string.isRequired,
    }).isRequired,
};


export default Card;