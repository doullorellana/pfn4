import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { useEffect, useState } from "react";

export function Bitacoras() {

  const [bitacoras, setBitacoras] = useState(null);
  const url = 'http://127.0.0.1:8000/api/bitacoras';

  useEffect(() =>{
    const getBitacoras = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setBitacoras(data)
    }
    getBitacoras();
  },[])

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Registro de la bitacora de eventos en el sistema
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["id", "Bitacora", "id Usuario", "Usuario","Fecha", "Hora"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bitacoras && bitacoras.map(
                ({ id, bitacora, id_usuario, usuario_email, fecha, hora }, key) => {
                  const className = `py-3 px-5 ${
                    key === bitacoras.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={id}>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {id}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {bitacora}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {id_usuario}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {usuario_email}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {fecha}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {hora}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      
    </div>
  );
}

export default Bitacoras;
