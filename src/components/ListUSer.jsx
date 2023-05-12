import React, { useState, useEffect } from "react";

export default function ListUSer() {
  const [datas, setDatas] = useState([]);
  const [type, setType] = useState("posts");
  const tabs = ["posts", "comments", "users"];
  const [show, setShow] = useState(false);
  const [size, setSize] = useState(window.innerWidth)
  console.log(type);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => {
        setDatas(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return ()=>{
    window.removeEventListener("scroll", handleScroll);
      
    }
  }, []);
  // Sự kiện resize
  useEffect(()=>{
    const handleResize = ()=>{
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
  },[])
  // Function go to top
  const goToTop = ()=>{
    document.documentElement.scrollTop= 0
  }
  return (
    <div>
      <h2>LIST USER</h2>
      <h2>{size}</h2>
      {tabs.map((tab) => (
        <button
          onClick={() => {
            setType(tab);
          }}
          key={tab}
          style={
            type == tab
              ? {
                  backgroundColor: "#333",
                  color: "#fff",
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}
      {datas.map((data) => (
        <u key={data.id} l>
          <li>{data.title || data.name}</li>
        </u>
      ))}
      {show ? (
        <button
          onClick={goToTop}
          style={{
            position: "fixed",
            right: 20,
            bottom: 20
          }}
        >
          Go to top
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
