import { useState, useEffect } from 'react';
import axios from 'axios';

const useCorona = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetch = async () => {
            try{
                const res = await axios.get('https://covid19.mathdro.id/api');
                setData(res.data);
            }catch(error){
                console.log(error);
            }
        };
        fetch();
    }, []);
    return data;
};
export default useCorona;