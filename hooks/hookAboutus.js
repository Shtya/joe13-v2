import { api } from "@/services/api/axios";
import { useEffect , useState } from "react";

export function hookAboutus () {
	const [data, setdata] = useState([])
	const [loading , setloading] = useState(true)

	useEffect(()=> {
		
        api.get('aboutus/getAll')
            .then(res => setdata(res?.data?.data)) 
            .catch(error => console.error('Error:', error))
			.finally(() => setloading(false))
	},[])

	return { data, loading }
	
}
