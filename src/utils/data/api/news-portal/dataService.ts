import axios from "axios";

// Axios config
const api = axios.create({
  // baseURL: `${process.env.NEXT_PUBLIC_NEWS_PORTAL_URL}`,
  baseURL: "https://jsugauta1.pythonanywhere.com",
});

// Class containing the REST methods
class DataService {
  async getData(endpoint: string) {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      console.error("Error retrieving data:", error);
      throw error;
    }
  }

  async postData(endpoint: string, data: any) {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  }

  async patchData(endpoint: string, data: any) {
    try {
      const response = await api.patch(endpoint, data);
      return response.data;
    } catch (error) {
      console.error("Error patching data:", error);
      throw error;
    }
  }

  async deleteData(endpoint: string) {
    try {
      const response = await api.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error;
    }
  }
}

// Create a instance of the class
const dataService = new DataService();

export default dataService;
