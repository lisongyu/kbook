import React from "react-router-dom";
import IndexView from '../view/index';
import AboutView from '../view/about';
import ListView from '../view/list';
import UndefinedView from '../view/404';

let routes = [
  {
    path: '/',
    exact: true,
    render(props) {
      return <IndexView {...props} />
    }
  },
  {
    path: '/about',
    exact: true,
    render(props) {
      return <AboutView {...props} />
    }
  },
  {
    path: ['/list', "/list/:page"],
    exact: true,
    render(props) {
      let { page = 1 } = props.match.params;
      // 解构页码,如果没有传递页面则默认值为1
      if (page >= 1) {
        return <ListView {...props} />
      }
      return <UndefinedView {...props} />
    }
  },
  {
    path: '',
    exact: false,
    render(props) {
      return <UndefinedView {...props} />
    }
  }
]


let navs = [
  {
    to: "/",
    exact: true,
    title: '首页'
  },
  {
    to: "/about",
    exact: true,
    title: '关于'
  },
  {
    to: "/list",
    exact: true,
    title: '课程列表',
    isActive(url) {
      let urlData = url.split("/");
      if (url === "list" || (urlData.length === 3 && urlData[1] === "list" && urlData[2] > 0)) {
        return true
      }
      return false
    }
  }

]

export { routes, navs }
