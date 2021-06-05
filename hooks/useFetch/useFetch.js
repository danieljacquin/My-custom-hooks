import { useEffect, useRef, useState } from 'react';

const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({error: null, loading: true, data: null});

    useEffect(()=>{

        //para soluccionar el error de que el estado se intente actulizar cuando el compoenente esta desmontado,
        // usando el return del use effect, no se intenta actualizar el estado cuando el componente esta desmontado
        return () => {//
            isMounted.current = false;
        }
    },[])
    
    useEffect(()=>{

        setState({error: null, loading: true, data: null});

        fetch(url).then(res => res.json()).then(data => {
            if(isMounted.current){
                setState({
                    loading: false,
                    error: null,
                    data: data
                }) 
            }       
        })
        .catch(() =>{
            setState({error:'no se puede cargar la info', loading: true, data: null});
        })
    }, [url])

    return state;

}

export default useFetch;