export interface PersonalInfo {
	profilePicture: string;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	location: string;
	birthday: string;
  }
import profilePicture from '../../public/profile.jpg'
  
  export function usePersonalInfo(): PersonalInfo {
	return {
	  profilePicture: profilePicture,
	  firstName: 'Zakaria',
	  lastName: 'Makhkhas',
	  phone: '+212 61314-5086',
	  email: 'makhkhas.zakaria@gmail.com',
	  location: 'Khouribga, Morocco',
	  birthday: 'octobe 20, 1999',
	};
  }
  