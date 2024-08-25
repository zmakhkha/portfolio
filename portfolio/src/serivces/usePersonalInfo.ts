export interface PersonalInfo {
	profilePicture: string;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	location: string;
	birthday: string;
  }
  
  export function usePersonalInfo(): PersonalInfo {
	return {
	  profilePicture: 'https://via.placeholder.com/150',
	  firstName: 'Zakaria',
	  lastName: 'Makhkhas',
	  phone: '+212 61314-5086',
	  email: 'makhkhas.zakaria@gmail.com',
	  location: 'Khouribga, Beni-Mellal Khenifra, MA',
	  birthday: 'octobe',
	};
  }
  