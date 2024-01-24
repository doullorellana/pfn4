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

export function Paginas() {

  const [paginas, setPaginas] = useState(null);
  const url = 'http://127.0.0.1:8000/api/paginas';

  useEffect(() => {
    const getPaginas = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setPaginas(data)
    }
    getPaginas();
  }, [])

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Lista de Páginas registradas en el sistema
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["id", "URL", "Descripción", "Creación", "Modificación", "Acción"].map((el) => (
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
              {paginas && paginas.map(
                ({ id, url, nombre, descripcion, usuario_creacion, fecha_creacion, usuario_modificacion, fecha_modificacion }, key) => {
                  const className = `py-3 px-5 ${key === paginas.length - 1
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
                              {url}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {nombre}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {descripcion}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {usuario_creacion}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {fecha_creacion}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {usuario_modificacion}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {fecha_modificacion}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <Chip
                            variant="gradient"
                            color="green"
                            value="Edit"
                            className="py-0.5 px-2 text-[11px] font-medium w-fit"
                          />
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

export default Paginas;
