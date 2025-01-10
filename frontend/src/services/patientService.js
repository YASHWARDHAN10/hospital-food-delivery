import axios from './axiosConfig';

const API_URL = '/patients';

export const getAllPatients = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createPatient = async (patient) => {
  const response = await axios.post(API_URL, patient);
  return response.data;
};

export const getPatientById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const updatePatient = async (id, patient) => {
  const response = await axios.patch(`${API_URL}/${id}`, patient);
  return response.data;
};

export const deletePatient = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};