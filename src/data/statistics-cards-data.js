import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

let bitacoras = 'http://127.0.0.1:8000/api/bitacoras';
let usuarios = 'http://127.0.0.1:8000/api/usuarios';
let paginas = 'http://127.0.0.1:8000/api/paginas';
let personas = 'http://127.0.0.1:8000/api/personas';
let roles = 'http://127.0.0.1:8000/api/roles';


// Hacer la solicitud a la API BITACORAS
fetch(bitacoras)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener datos de la API Bitacoras');
    }
    return response.json();
  })
  .then(data => {
    // Contar los registros Bitacoras
    const numeroDeRegistrosBitacoras = data.length;
    //console.log('Número de registros Bitacoras:', numeroDeRegistrosBitacoras);

  })
  .catch(error => {
    console.error('Error:', error);
  });

// Hacer la solicitud a la API USUARIOS
fetch(usuarios)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener datos de la API Usuarios');
    }
    return response.json();
  })
  .then(data => {
    // Contar los registros Usuarios
    const numeroDeRegistrosUsuarios = data.length;
    //console.log('Número de registros Usuarios:', numeroDeRegistrosUsuarios);

  })
  .catch(error => {
    console.error('Error:', error);
  });

// Hacer la solicitud a la API PAGINAS
fetch(paginas)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener datos de la API Paginas');
    }
    return response.json();
  })
  .then(data => {
    // Contar los registros Paginas
    const numeroDeRegistrosPaginas = data.length;
    //console.log('Número de registros Paginas:', numeroDeRegistrosPaginas);

  })
  .catch(error => {
    console.error('Error:', error);
  });

// Hacer la solicitud a la API ROLES
fetch(roles)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener datos de la API Roles');
    }
    return response.json();
  })
  .then(data => {
    // Contar los registros Roles
    const numeroDeRegistrosRoles = data.length;
    //console.log('Número de registros Roles:', numeroDeRegistrosRoles);

  })
  .catch(error => {
    console.error('Error:', error);
  });

// Hacer la solicitud a la API PERSONAS
fetch(personas)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener datos de la API Personas');
    }
    return response.json();
  })
  .then(data => {
    // Contar los registros Personas
    const numeroDeRegistrosPersonas = data.length;
    //console.log('Número de registros Personas:', numeroDeRegistrosPersonas);

  })
  .catch(error => {
    console.error('Error:', error);
  });


export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Today's Money",
    value: "$53k",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Total Usuarios",
    value: '2,300',
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "New Clients",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Sales",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
