(this.webpackJsonpsamuraijs=this.webpackJsonpsamuraijs||[]).push([[3],{295:function(e,t,a){e.exports={desriptionBlock:"ProfileInfo_desriptionBlock__2qcyA",profileImg:"ProfileInfo_profileImg__3mXT7"}},296:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},297:function(e,t,a){e.exports={item:"Post_item__ihtu9"}},298:function(e,t,a){"use strict";a.r(t);var n=a(33),s=a(34),o=a(37),r=a(36),u=a(0),i=a.n(u),l=a(295),c=a.n(l),p=a(39),f=(i.a.Component,a(127)),m=function(e){var t=Object(u.useState)(!1),a=Object(f.a)(t,2),n=a[0],s=a[1],o=Object(u.useState)(e.status),r=Object(f.a)(o,2),l=r[0],c=r[1];Object(u.useEffect)((function(){c(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"no status")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,value:l,onBlur:function(){s(!1),e.updateStatus(l)}})))},d=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?i.a.createElement("div",null,i.a.createElement("div",{className:c.a.desriptionBlock},i.a.createElement("img",{src:t.photos.large}),i.a.createElement(m,{status:a,updateStatus:n}))):i.a.createElement(p.a,null)},_=a(94),b=a(40),h=a(296),E=a.n(h),g=a(297),v=a.n(g),j=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:v.a.item},i.a.createElement("img",{src:"https://res.cloudinary.com/teepublic/image/private/s--noMmjwIC--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1493565398/production/designs/1545694_1.jpg"}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"Likes: ",e.likesCount))))},P=a(88),O=a(126),k=a(56),S=a(31),w=Object(O.a)({form:"ProfileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(P.a,{name:"newPostText",component:S.b,placeholder:"Post message",validate:[k.b,I]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post"),i.a.createElement("button",null,"Remove")))})),y=i.a.memo((function(e){var t=Object(b.a)(e.posts).reverse().map((function(e){return i.a.createElement(j,{message:e.message,likesCount:e.likesCount})}));i.a.createRef();return i.a.createElement("div",{className:E.a.postsBlock},i.a.createElement("h1",null,"My posts"),i.a.createElement(w,{onSubmit:function(t){e.addPost(t.newPostText),t.newPostText=""}}),i.a.createElement("div",{className:E.a.posts},t))})),I=Object(k.a)(10),x=y,C=a(16),B=Object(C.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(_.a)(t))}}}))(x),T=function(e){return i.a.createElement("div",null,i.a.createElement(d,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(B,null))},A=a(28),M=a(8),N=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return i.a.createElement(T,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(i.a.Component);t.default=Object(M.d)(Object(C.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:_.d,getStatus:_.c,updateStatus:_.e}),A.f)(N)}}]);
//# sourceMappingURL=3.7156bc43.chunk.js.map