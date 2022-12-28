const serverImage = (id: number): string => {
	return `http://localhost:8000/api/components/${id}/image/`;
};

export default serverImage;
