import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export async function postData(url, formData) {
  try {
    const response = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      return errorData;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getData(url) {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(apiUrl + url, params);
    return data;
  } catch (error) {
    console.log(error);
    return {
      error: true,
      status: error.response?.status,
      message:
        error.response?.data?.message ||
        "Session expired. Please login again",
    };
  }
}

export async function uploadImage(url, updatedData) {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.put(apiUrl + url, updatedData, params);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function editData(url, updatedData) {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(apiUrl + url, updatedData, params);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteData(url) {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.delete(apiUrl + url, params);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadProductImages(url, formData) {
  try {
    const params = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(apiUrl + url, formData, params);
    return data;
  } catch (error) {
    console.log(error);
  }
}