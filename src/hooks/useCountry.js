import { useState, useEffect } from 'react';
import axios from 'axios';

const useCountry = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetch = async () => {
            try{
                const res = await axios.get('https://covid19.mathdro.id/api/confirmed');
                setData(res.data);
            }catch(error){
                console.log(error);
            }
        };
        fetch();
    }, []);
    return data;
};
export default useCountry;