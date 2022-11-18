import axios from "axios";


axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('Token');
        config.headers.Authorization = `Token ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export const getMaintenance = async (state) => {
    const res = await axios.get("http://localhost:8000/maintenance/", {
    });
    state(res.data);
}

export const createMaintenance = async (maintenance) => {
    axios.post("http://localhost:8000/maintenance/", {
          placa: maintenance.placa,
          descripcion: maintenance.descripcion,
          estado: maintenance.estado,
          servicio: maintenance.servicio,
          fecha: maintenance.fecha,
          kilometraje: maintenance.kilometraje,
          costo: maintenance.costo,
      }
    )
}

export const deleteMaintenance = async (maintenance) => {
    axios
      .delete("http://127.0.0.1:8000/maintenance/", {
        data: {"id": maintenance.id}
    })
}

export const editMaintenance = async (maintenance) => {
    axios
        .post("http://localhost:8000/edit_car/", {
            placa: values.placa,
            marca: values.marca,
            modelo: values.linea,
            año: values.modelo,
            combustible: values.combustible,
            kilometraje: values.kilometraje,
        })
    }




