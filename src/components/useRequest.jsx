// 实现类似ahooks中的useRequest，只考虑get请求
import {useState, useEffect} from 'react'
import axios from 'axios'

function useRequest(url){
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]= useState(null)

  useEffect(()=>{
    setLoading(true)
    const fetchData = async ()=>{
      try{
        const response = await axios.get(url)
        setData(response.data)
      }catch(error){
        setError(error)
      }finally{
        setLoading(false)
      }
    }
  }, [url])
  return {data, loading, error}

}