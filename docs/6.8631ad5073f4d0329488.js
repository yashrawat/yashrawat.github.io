(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7UCR":function(t,e,i){"use strict";i.r(e),i.d(e,"UserModule",(function(){return Q}));var r=i("ofXK"),o=i("3Pt+"),s=i("tyNb"),d=i("fXoL"),c=i("QTVi");const n=["closeEditAccountDetailsModal"];let b=(()=>{class t{constructor(t,e){this.fb=t,this.authService=e}onSaveChanges(){if(this.editAccountInfoDetails.invalid)return;const t=this.editAccountInfoDetails.get("name").value,e=this.editAccountInfoDetails.get("email").value,i=this.editAccountInfoDetails.get("mobileNumber").value,r=this.editAccountInfoDetails.get("address").value;this.authService.saveUserData(this.userId,t,e,i,r),this.closeEditAccountDetailsModal.nativeElement.click()}ngOnInit(){var t,e,i,r;this.userId=this.authService.getUserId(),this.authService.getUserById(this.userId),this.userInfo=this.authService.getUserData(),this.userInfoSubs=this.authService.getUserDataUpdated().subscribe(t=>{var e,i,r,s;this.userInfo=t,this.editAccountInfoDetails=this.fb.group({name:[null===(e=this.userInfo)||void 0===e?void 0:e.name,[o.m.required,o.m.minLength(3)]],email:[null===(i=this.userInfo)||void 0===i?void 0:i.email,[o.m.required,o.m.email]],mobileNumber:[null===(r=this.userInfo)||void 0===r?void 0:r.mobileNumber,[o.m.required]],address:[null===(s=this.userInfo)||void 0===s?void 0:s.address,[o.m.required]]})}),this.editAccountInfoDetails=this.fb.group({name:[null===(t=this.userInfo)||void 0===t?void 0:t.name,[o.m.required,o.m.minLength(3)]],email:[null===(e=this.userInfo)||void 0===e?void 0:e.email,[o.m.required,o.m.email]],mobileNumber:[null===(i=this.userInfo)||void 0===i?void 0:i.mobileNumber,[o.m.required]],address:[null===(r=this.userInfo)||void 0===r?void 0:r.address,[o.m.required]]})}ngOnDestroy(){this.userInfoSubs.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(d.Lb(o.b),d.Lb(c.a))},t.\u0275cmp=d.Fb({type:t,selectors:[["app-account-info"]],viewQuery:function(t,e){var i;1&t&&d.Gc(n,!0),2&t&&d.qc(i=d.cc())&&(e.closeEditAccountDetailsModal=i.first)},decls:70,vars:5,consts:[[1,"container"],[1,"row"],[1,"col"],[1,"display-4","my-4"],[1,"dropdown-divider","my-4"],["type","submit","data-toggle","modal","data-target","#exampleModal",1,"btn","btn-outline-primary","my-4"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[1,"col",3,"formGroup","ngSubmit"],[1,"form-group","mt-4"],["for","nameInput"],["type","text","formControlName","name","id","nameInput","placeholder","Name",1,"form-control"],["for","emailInput"],["type","email","id","emailInput","formControlName","email","placeholder","Email address",1,"form-control"],["for","mobileNumberInput"],["type","number","id","mobileNumberInput","formControlName","mobileNumber","placeholder","Mobile Number",1,"form-control"],[1,"form-group"],["for","addressInput"],["type","text","id","addressInput","formControlName","address","placeholder","Address",1,"form-control"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary","btn-block"],["closeEditAccountDetailsModal",""],["type","submit","id","closeModal",1,"btn","btn-primary","btn-block"],[1,"card","mb-4"],[1,"card-body"],[1,"row","m-4"]],template:function(t,e){1&t&&(d.Qb(0,"div",0),d.Qb(1,"div",1),d.Qb(2,"div",2),d.Qb(3,"div",3),d.Cc(4,"Account Info"),d.Pb(),d.Mb(5,"div",4),d.Qb(6,"button",5),d.Cc(7,"Edit Details"),d.Pb(),d.Qb(8,"div",6),d.Qb(9,"div",7),d.Qb(10,"div",8),d.Qb(11,"div",9),d.Qb(12,"h5",10),d.Cc(13,"Edit Details"),d.Pb(),d.Qb(14,"button",11),d.Qb(15,"span",12),d.Cc(16,"\xd7"),d.Pb(),d.Pb(),d.Pb(),d.Qb(17,"div",13),d.Qb(18,"form",14),d.bc("ngSubmit",(function(){return e.onSaveChanges()})),d.Qb(19,"div",15),d.Qb(20,"label",16),d.Cc(21,"Name"),d.Pb(),d.Mb(22,"input",17),d.Pb(),d.Qb(23,"div",15),d.Qb(24,"label",18),d.Cc(25,"Email address"),d.Pb(),d.Mb(26,"input",19),d.Pb(),d.Qb(27,"div",15),d.Qb(28,"label",20),d.Cc(29,"Mobile Number"),d.Pb(),d.Mb(30,"input",21),d.Pb(),d.Qb(31,"div",22),d.Qb(32,"label",23),d.Cc(33,"Address"),d.Pb(),d.Mb(34,"input",24),d.Pb(),d.Qb(35,"div",25),d.Qb(36,"button",26,27),d.Cc(38,"Cancel"),d.Pb(),d.Qb(39,"button",28),d.Cc(40,"Save changes"),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Qb(41,"div",29),d.Qb(42,"div",30),d.Qb(43,"div",31),d.Qb(44,"div",2),d.Qb(45,"p"),d.Cc(46," Name "),d.Mb(47,"br"),d.Qb(48,"strong"),d.Cc(49),d.Pb(),d.Pb(),d.Pb(),d.Qb(50,"div",2),d.Qb(51,"p"),d.Cc(52," Email Address "),d.Mb(53,"br"),d.Qb(54,"strong"),d.Cc(55),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Qb(56,"div",31),d.Qb(57,"div",2),d.Qb(58,"p"),d.Cc(59," Mobile Number "),d.Mb(60,"br"),d.Qb(61,"strong"),d.Cc(62),d.Pb(),d.Pb(),d.Pb(),d.Qb(63,"div",2),d.Qb(64,"p"),d.Cc(65," Delivery Address "),d.Mb(66,"br"),d.Qb(67,"strong"),d.Cc(68),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Mb(69,"div",4),d.Pb(),d.Pb(),d.Pb()),2&t&&(d.zb(18),d.kc("formGroup",e.editAccountInfoDetails),d.zb(31),d.Dc(null==e.userInfo?null:e.userInfo.name),d.zb(6),d.Dc(null==e.userInfo?null:e.userInfo.email),d.zb(7),d.Dc(null==e.userInfo?null:e.userInfo.mobileNumber),d.zb(6),d.Dc(null==e.userInfo?null:e.userInfo.address))},directives:[o.o,o.i,o.d,o.a,o.h,o.c,o.k],styles:[""]}),t})();var a=i("VDy/"),u=i("Xax0");function l(t,e){1&t&&(d.Qb(0,"div",4),d.Qb(1,"div",5),d.Cc(2," You have not ordered anything yet. Order now! "),d.Qb(3,"a",6),d.Cc(4," View Product List "),d.Pb(),d.Pb(),d.Pb())}function h(t,e){if(1&t&&(d.Qb(0,"div",11),d.Qb(1,"div",12),d.Qb(2,"div",2),d.Qb(3,"div",7),d.Mb(4,"img",13),d.Pb(),d.Qb(5,"div",7),d.Qb(6,"div"),d.Cc(7),d.Pb(),d.Pb(),d.Qb(8,"div",7),d.Cc(9),d.ec(10,"currency"),d.Pb(),d.Qb(11,"div",14),d.Qb(12,"div"),d.Cc(13),d.ec(14,"date"),d.Pb(),d.Qb(15,"div"),d.Cc(16),d.Pb(),d.Qb(17,"div"),d.Cc(18),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb()),2&t){const t=e.$implicit,i=d.dc(2);d.zb(4),d.kc("src",t.imagePath,d.tc),d.zb(3),d.Dc(t.productName),d.zb(2),d.Dc(d.hc(10,6,t.price,"INR",i.symbol,"0.0")),d.zb(4),d.Dc(d.fc(14,11,t.orderDate)),d.zb(3),d.Dc(t.deliveryAddress),d.zb(2),d.Dc(t.paymentMethod)}}function m(t,e){if(1&t&&(d.Qb(0,"div",7),d.Qb(1,"div",8),d.Cc(2,"Order History"),d.Pb(),d.Mb(3,"div",9),d.Ac(4,h,19,13,"div",10),d.Mb(5,"div",9),d.Pb()),2&t){const t=d.dc();d.zb(4),d.kc("ngForOf",t.ordersWithProduct)}}let p=(()=>{class t{constructor(t,e,i){this.userService=t,this.authService=e,this.productService=i,this.ordersWithProduct=[],this.ordersWithProductUnfiltered=[]}ngOnInit(){this.authUserId=this.authService.getUserId(),this.userService.getUserEssentialsData(this.authUserId),this.orderHistory=this.userService.getOrderHistory(),this.orderHistorySubs=this.userService.getOrderHistoryUpdated().subscribe(t=>{this.orderHistory=t,this.orderHistory.orderHistory.forEach(t=>{this.productId=t.productId,this.productData=this.productService.getProductById(this.productId),this.productDataSubs=this.productService.getProductDataUpdated().subscribe(e=>{this.productData=e.products,this.ordersWithProductUnfiltered.push({productId:t.productId,productName:e.products.productName,imagePath:e.products.imagePath,price:e.products.price,orderDate:t.orderDate,paymentMethod:t.paymentMethod,deliveryAddress:t.deliveryAddress}),this.ordersWithProduct=this.ordersWithProductUnfiltered.reduce((t,e)=>(t.some(t=>t.productId!==e.productId)||t.push(e),t),[])})})})}ngOnDestroy(){var t,e;null===(t=this.orderHistorySubs)||void 0===t||t.unsubscribe(),null===(e=this.productDataSubs)||void 0===e||e.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(d.Lb(a.a),d.Lb(c.a),d.Lb(u.a))},t.\u0275cmp=d.Fb({type:t,selectors:[["app-order-history"]],decls:4,vars:2,consts:[["class","container my-4 text-center",4,"ngIf"],[1,"container"],[1,"row"],["class","col",4,"ngIf"],[1,"container","my-4","text-center"],["role","alert",1,"alert","alert-primary"],["routerLink","/product/products-list"],[1,"col"],[1,"display-4","my-4"],[1,"dropdown-divider","my-4"],["class","card mb-4",4,"ngFor","ngForOf"],[1,"card","mb-4"],[1,"card-body"],[3,"src"],[1,"col-4"]],template:function(t,e){1&t&&(d.Ac(0,l,5,0,"div",0),d.Qb(1,"div",1),d.Qb(2,"div",2),d.Ac(3,m,6,1,"div",3),d.Pb(),d.Pb()),2&t&&(d.kc("ngIf",(null==e.ordersWithProduct?null:e.ordersWithProduct.length)<1),d.zb(3),d.kc("ngIf",(null==e.ordersWithProduct?null:e.ordersWithProduct.length)>0))},directives:[r.l,s.e,r.k],pipes:[r.c,r.e],styles:["img[_ngcontent-%COMP%]{height:6rem;width:8rem}"]}),t})();var v=i("02+D");function P(t,e){1&t&&(d.Qb(0,"div",2),d.Qb(1,"div",3),d.Cc(2," No products added to wishlist "),d.Pb(),d.Pb())}function f(t,e){if(1&t){const t=d.Rb();d.Qb(0,"div",10),d.Qb(1,"div",11),d.Qb(2,"div",5),d.Qb(3,"div",6),d.Mb(4,"img",12),d.Pb(),d.Qb(5,"div",6),d.Qb(6,"div"),d.Cc(7),d.Pb(),d.Qb(8,"div"),d.Cc(9),d.Pb(),d.Pb(),d.Qb(10,"div",6),d.Cc(11),d.ec(12,"currency"),d.Pb(),d.Qb(13,"div",6),d.Qb(14,"button",13),d.bc("click",(function(){d.sc(t);const i=e.$implicit;return d.dc(2).addProductToCartFromWishlist(i)})),d.Qb(15,"span",14),d.Cc(16," shopping_cart "),d.Pb(),d.Pb(),d.Qb(17,"button",15),d.bc("click",(function(){d.sc(t);const i=e.$implicit;return d.dc(2).removeProductFromWishlist(null==i?null:i.productId)})),d.Qb(18,"span",14),d.Cc(19," delete "),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb()}if(2&t){const t=e.$implicit,i=d.dc(2);d.zb(4),d.kc("src",null==t?null:t.imagePath,d.tc),d.zb(3),d.Dc(null==t?null:t.productName),d.zb(2),d.Dc(null==t?null:t.productContent),d.zb(2),d.Dc(d.hc(12,4,null==t?null:t.price,"INR",i.symbol,"0.0"))}}function g(t,e){if(1&t&&(d.Qb(0,"div",4),d.Qb(1,"div",5),d.Qb(2,"div",6),d.Qb(3,"div",7),d.Cc(4,"Wishlist"),d.Pb(),d.Mb(5,"div",8),d.Ac(6,f,20,9,"div",9),d.Mb(7,"div",8),d.Pb(),d.Pb(),d.Pb()),2&t){const t=d.dc();d.zb(6),d.kc("ngForOf",t.wishlistWithProduct)}}const y=[{path:"account-info",component:b},{path:"wishlist",component:(()=>{class t{constructor(t,e,i,r,o){this.userService=t,this.authService=e,this.productService=i,this.cartService=r,this.router=o,this.wishlistWithProduct=[],this.wishlistWithProductUnfiltered=[]}addProductToCartFromWishlist(t){console.log({_id:t.productId,productName:t.productName,productContent:t.productContent,imagePath:t.imagePath,price:t.price,quantity:t.quantity})}removeProductFromWishlist(t){}ngOnInit(){this.authUserId=this.authService.getUserId(),this.userService.getUserEssentialsData(this.authUserId),this.wishlist=this.userService.getWishlist(),this.wishlistSubs=this.userService.getWishlistDataUpdated().subscribe(t=>{this.wishlist=t,this.wishlist.wishlist.forEach(t=>{this.productId=t.productId,this.productData=this.productService.getProductById(this.productId),this.productDataSubs=this.productService.getProductDataUpdated().subscribe(e=>{this.productData=e.products,this.wishlistWithProductUnfiltered.push({productId:t.productId,productName:e.products.productName,productContent:e.products.productContent,imagePath:e.products.imagePath,price:e.products.price,quantity:t.quantity}),this.wishlistWithProduct=this.wishlistWithProductUnfiltered.reduce((t,e)=>(t.some(t=>t.productId!==e.productId)||t.push(e),t),[])})})})}ngOnDestroy(){var t,e;null===(t=this.wishlistSubs)||void 0===t||t.unsubscribe(),null===(e=this.productDataSubs)||void 0===e||e.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(d.Lb(a.a),d.Lb(c.a),d.Lb(u.a),d.Lb(v.a),d.Lb(s.b))},t.\u0275cmp=d.Fb({type:t,selectors:[["app-wishlist"]],decls:2,vars:2,consts:[["class","container my-4 text-center",4,"ngIf"],["class","container",4,"ngIf"],[1,"container","my-4","text-center"],["role","alert",1,"alert","alert-primary"],[1,"container"],[1,"row"],[1,"col"],[1,"display-4","my-4"],[1,"dropdown-divider","my-4"],["class","card mb-4",4,"ngFor","ngForOf"],[1,"card","mb-4"],[1,"card-body"],[3,"src"],["type","button","data-toggle","tooltip","data-placement","top","title","Add To Cart",1,"btn",3,"click"],[1,"material-icons"],["type","button","data-toggle","tooltip","data-placement","top","title","Delete From Wishlist",1,"btn",3,"click"]],template:function(t,e){1&t&&(d.Ac(0,P,3,0,"div",0),d.Ac(1,g,8,1,"div",1)),2&t&&(d.kc("ngIf",(null==e.wishlistWithProduct?null:e.wishlistWithProduct.length)<1),d.zb(1),d.kc("ngIf",(null==e.wishlistWithProduct?null:e.wishlistWithProduct.length)>0))},directives:[r.l,r.k],pipes:[r.c],styles:["img[_ngcontent-%COMP%]{height:6rem;width:8rem}"]}),t})()},{path:"order-history",component:p}];let I=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(e){return new(e||t)},imports:[[s.f.forChild(y)],s.f]}),t})(),Q=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(e){return new(e||t)},providers:[],imports:[[r.b,I,o.l]]}),t})()}}]);