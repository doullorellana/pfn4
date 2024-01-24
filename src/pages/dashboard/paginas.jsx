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
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export function Paginas() {

  const [paginas, setPaginas] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [nombreURL, setNombreURL] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [usuarioCreacion, setUsuarioCreacion] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState('');
  const [usuarioModificacion, setUsuarioModificacion] = useState('');
  const [fechaModificacion, setFechaModificacion] = useState('');
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
          <div className="flex space-x-5">
            <div>
              <Typography variant="h6" color="white">
                Lista de Páginas registradas en el sistema
              </Typography>
            </div>
            <div>
              <button onClick={handleOpen}>
                <Chip
                  variant="gradient"
                  color="blue"
                  value="Agregar Paginas"
                  className="py-0.5 px-4 text-[13px] font-medium w-fit"
                /></button>
            </div>
          </div>

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

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Agregar Paginas
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Complete la siguiente información para agregar paginas
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="input-group mb-3">
                  <span className="input-group-text">URL: </span>
                  <input type="text" id="nombreURL" className="form-control" placeholder="URL" value={nombreURL} onChange={(e) => setNombreURL(e.target.value)} />
                </div>
              </Typography>
              <div className="input-group mb-3">
                <span className="input-group-text">Nompre URL: </span>
                <input type="text" id="nombre" className="form-control" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Descripción: </span>
                <input type="text" id="descripcion" className="form-control" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
              </div>

            </Box>
          </Modal>

        </CardBody>
      </Card>
    </div>
  );
}

export default Paginas;
