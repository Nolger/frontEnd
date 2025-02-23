const domain = import.meta.env.VITE_WP_DOMAIN;
const apiURL = `${domain}wp-json/wp/v2`;

export const getPageInfo = async (slug) => {
  try {
    const response = await fetch(`${apiURL}/pages?slug=${slug}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch page info: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener la información de la página:", error);
    throw error;
  }
};