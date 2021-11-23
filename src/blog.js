import { useEffect, useState } from "react";
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import './blog.css'
dayjs.extend(relativeTime)

export default function Blog() {
    const parser = new DOMParser();
    const [data, setData] = useState(null)
    const [items, setItems] = useState([])

    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://blog.direktiv.io/feed";

    useEffect(()=>{
        async function getData() {
            let resp = await fetch(mediumURL)
            let json = await resp.json()
            let arr = []
            for(var i=0; i < 4; i++) {
                arr.push(json.items[i])
            }
            console.log(json)
            setData(json)
            setItems(arr)
        }
        if(data === null) {
            getData()
        }
    },[mediumURL, data])

    
    return(
        <div className="g" style={{paddingTop:"50px"}}>
            <h1 id="blog" style={{textAlign:"center"}}>Blog</h1>
            <div className="blog-container">
                
                    {items.map((obj)=>{
                        let t = parser.parseFromString(obj.title, 'text/html').body.textContent
                        return(
                            <div onClick={()=>{
                                window.open(obj.link, '_blank')
                            }} className="blog-card">
                            <div className="card__header" style={{height:"250px"}}>
                              <img src={obj.thumbnail} alt="card__image" class="card__image" width="400" style={{maxHeight:"250px"}}/>
                            </div>
                            <div className="card__body">
                              <h4>{t}</h4>
                              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p> */}
                            </div>
                            <div className="card__footer">
                              <div className="user">
                              <img src={data.feed.image} style={{width:"30px"}} alt="user__image" class="user__image"/>
                                <div className="user__info">
                                  <h5>{obj.author}</h5>
                                  <small>{dayjs(obj.pubDate).fromNow()}</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                    })}
            </div>
        </div>
    )
}