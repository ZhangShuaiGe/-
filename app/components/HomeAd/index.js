/**
 * Created by z on 2017/7/17.
 */
import React from "react";
export default class HomeAd extends React.Component{

    constructor(){
        super();
        this.state = {
            news:"",
        }
    }

    componentWillMount() {
        // 请求数据
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + "top" + "&count=" + 10)
        .then(response => response.json())
        .then(json => this.setState({news: json}));
    }
    render(){
        const {news} = this.state;
        console.log(news);
        const dom = news.length?
        news.map((val,index) => (
            <li key={index}>
                <img src={val.thumbnail_pic_s02} alt=""/>
                {val.title}
            </li>
        ))
            :
        "没有加载到数据";
        console.log(dom);
        return (
            <ul>
                {dom}
            </ul>
        );
    }
}