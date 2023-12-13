import { useEffect, useState } from "react";

const useDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
                setLoading(false)
            })
    }, [])

    return [doctors, loading];
}

export default useDoctor;