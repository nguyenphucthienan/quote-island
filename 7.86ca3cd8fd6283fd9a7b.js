(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{BVmJ:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=function(){},u=t("pMnS"),a=t("kL22"),r=t("cyBs"),i=t("FzYP"),s=t("N07i"),d=t("Ip0R"),c=t("ZYCi"),p=t("4BPY"),h=t("jKJn"),g=t("7dP1"),m=t("lRKv"),f=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),v=function(){function n(n,l,t,e,o,u){this.sanitizer=n,this.moduleRef=l,this.modalService=t,this.authService=e,this.authorService=o,this.alertService=u,this.infoModalTitle="Author Info",this.quotePluralMapping={"=0":"0 quote",other:"# quotes"},this.headerClasss="blue-gradient",this.photoHover=!1}return n.prototype.ngOnInit=function(){var n=this;this.tokenSubscription=this.authService.decodedToken$.subscribe(function(l){l&&(n.currentUserId=l.id)}),this.updateValues()},n.prototype.getSanitizedImageUrl=function(){return this.sanitizer.bypassSecurityTrustStyle(this.photoHover?"url("+this.author.photoUrl+")":"linear-gradient(rgba(0, 0, 0, 0.4),\n        rgba(0, 0, 0, 0.4)),\n        url("+this.author.photoUrl+")")},n.prototype.loveAuthor=function(){var n=this;this.currentUserId?(this.isLoved?this.numOfLoves-=1:this.numOfLoves+=1,this.isLoved=!this.isLoved,this.authorService.loveAuthor(this.author._id).subscribe(function(l){n.author=l,n.updateValues()})):this.alertService.error("You need to login to love this author")},n.prototype.updateValues=function(){this.isLoved=this.currentUserId&&this.author.loves.includes(this.currentUserId),this.numOfLoves=this.author.loveCount||this.author.loves.length},n.prototype.openInfoModal=function(){this.modalService.open(f,{inputs:{title:this.infoModalTitle,hasBottomClose:!0,closeOnBackdrop:!0},childComponent:{inputs:{author:this.author}}},this.moduleRef)},n.prototype.ngOnDestroy=function(){this.tokenSubscription.unsubscribe()},n}(),b=t("ZYjt"),C=e["\u0275crt"]({encapsulation:0,styles:[[".card-shadow[_ngcontent-%COMP%]{box-shadow:0 6px 10px -4px rgba(0,0,0,.2),0 10px 12px 0 rgba(0,0,0,.14),0 4px 22px 0 rgba(0,0,0,.12);transition:box-shadow .2s cubic-bezier(.4,0,.2,1)}.card-shadow[_ngcontent-%COMP%]:hover{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.card-header[_ngcontent-%COMP%]{padding:5px}.card-body[_ngcontent-%COMP%]{min-height:220px;background-position:center;background-repeat:no-repeat;background-size:cover;user-select:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none}.card-body[_ngcontent-%COMP%]:hover{cursor:pointer}.fa.fa-star[_ngcontent-%COMP%]:hover{cursor:default}.fa.fa-heart[_ngcontent-%COMP%], .fa.fa-info-circle[_ngcontent-%COMP%]{color:#9e9e9e}.pink-color[_ngcontent-%COMP%]{color:#ff4081!important}.author-name[_ngcontent-%COMP%]{font-size:30px;font-weight:lighter}"]],data:{}});function x(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,6,"div",[["class","d-flex flex-column justify-content-center align-items-center white-text"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"p",[["class","author-name text-center"]],null,null,null,null,null)),(n()(),e["\u0275ted"](2,null,["",""])),(n()(),e["\u0275eld"](3,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),e["\u0275ted"](4,null,["",""])),e["\u0275ppd"](5,2),e["\u0275ppd"](6,1)],null,function(n,l){var t=l.component;n(l,2,0,t.author.fullName),n(l,4,0,e["\u0275unv"](l,4,0,n(l,6,0,e["\u0275nov"](l.parent,0),e["\u0275unv"](l,4,0,n(l,5,0,e["\u0275nov"](l.parent,1),t.author.quoteCount,t.quotePluralMapping)))))})}function S(n){return e["\u0275vid"](0,[e["\u0275pid"](0,d.UpperCasePipe,[]),e["\u0275pid"](0,d.I18nPluralPipe,[d.NgLocalization]),(n()(),e["\u0275eld"](2,0,null,null,13,"div",[["class","card card-shadow h-100"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,1,"div",[],null,null,null,null,null)),e["\u0275did"](4,278528,null,0,d.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngClass:[0,"ngClass"]},null),(n()(),e["\u0275eld"](5,0,null,null,4,"div",[["class","card-body d-flex justify-content-center align-items-center"]],[[4,"background-image",null]],[[null,"mouseover"],[null,"mouseleave"],[null,"click"]],function(n,l,t){var o=!0,u=n.component;return"click"===l&&(o=!1!==e["\u0275nov"](n,6).onClick()&&o),"mouseover"===l&&(o=0!=(u.photoHover=!0)&&o),"mouseleave"===l&&(o=0!=(u.photoHover=!1)&&o),o},null,null)),e["\u0275did"](6,16384,null,0,c.l,[c.k,c.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](7,2),(n()(),e["\u0275and"](16777216,null,null,1,null,x)),e["\u0275did"](9,16384,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](10,0,null,null,5,"div",[["class","card-footer"]],null,null,null,null,null)),(n()(),e["\u0275eld"](11,0,null,null,2,"a",[["class","btn-floating"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.loveAuthor()&&e),e},null,null)),(n()(),e["\u0275eld"](12,0,null,null,0,"i",[["class","fa fa-lg fa-heart"]],[[2,"pink-color",null]],null,null,null,null)),(n()(),e["\u0275ted"](13,null,[" "," "])),(n()(),e["\u0275eld"](14,0,null,null,1,"a",[["class","btn-floating float-right"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openInfoModal()&&e),e},null,null)),(n()(),e["\u0275eld"](15,0,null,null,0,"i",[["class","fa fa-lg fa-info-circle"]],null,null,null,null,null))],function(n,l){var t=l.component;n(l,4,0,"card-header white-text "+t.headerClasss),n(l,6,0,n(l,7,0,"/authors",t.author._id)),n(l,9,0,!t.photoHover)},function(n,l){var t=l.component;n(l,5,0,t.getSanitizedImageUrl()),n(l,12,0,t.isLoved),n(l,13,0,t.numOfLoves>0?t.numOfLoves:null)})}var y=t("nSOF"),O=t("biqx"),M=t("Fv9x"),P=t("kH4O"),k=t("9zbn"),I=t("NhFE"),w=t("AytR"),A=t("L7aT"),N=function(){function n(n,l){this.route=n,this.authorService=l,this.bannerImageUrl=w.a.bannerImageUrls.authorsPage,this.modalTitle="Sort Authors",this.modalSortOptions=[{name:"Alphabetical",iconClassName:"fa fa-sort-alpha-asc",sortMode:{sortBy:"fullName",isSortAscending:!0}},{name:"Latest",iconClassName:"fa fa-clock-o",sortMode:{sortBy:"createdAt",isSortAscending:!1}},{name:"Most Love",iconClassName:"fa fa-heart",sortMode:{sortBy:"loveCount",isSortAscending:!1}}],this.authors=[],this.sortMode={sortBy:"createdAt",isSortAscending:!1}}return n.prototype.ngOnInit=function(){var n=this;this.route.data.subscribe(function(l){n.authors=l.authors.items,n.pagination=l.authors.pagination})},n.prototype.getAuthors=function(){var n=this;this.authorService.getAuthors(this.pagination,this.sortMode).subscribe(function(l){n.authors=l.items,n.pagination=l.pagination})},n.prototype.onPageChanged=function(n){this.pagination.pageNumber=n,this.getAuthors()},n.prototype.onSortChanged=function(n){this.sortMode=n,this.getAuthors()},n.prototype.getColorClass=function(n){return A.a.getColorClass(n)},n}(),R=e["\u0275crt"]({encapsulation:0,styles:[[".authors-container[_ngcontent-%COMP%]{padding:30px 30px 10px}.banner-text[_ngcontent-%COMP%]{font-size:50px}"]],data:{}});function L(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","col-xl-3 col-lg-4 col-md-6 pt-3 pb-3"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"app-author-card",[],null,null,null,S,C)),e["\u0275did"](2,245760,null,0,v,[b.c,e.NgModuleRef,p.a,g.a,m.a,h.a],{headerClasss:[0,"headerClasss"],author:[1,"author"]},null)],function(n,l){n(l,2,0,l.component.getColorClass(l.context.index),l.context.$implicit)},null)}function q(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"app-banner",[],null,null,null,y.b,y.a)),e["\u0275did"](1,114688,null,0,O.a,[b.c],{imageUrl:[0,"imageUrl"]},null),(n()(),e["\u0275eld"](2,0,null,0,2,"div",[["class","d-flex justify-content-center align-items-center"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,1,"h1",[["class","banner-text text-center"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Authors"])),(n()(),e["\u0275eld"](5,0,null,null,10,"div",[["class","authors-container container-fluid"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,1,"app-sort-bar",[],null,[[null,"sortChanged"]],function(n,l,t){var e=!0;return"sortChanged"===l&&(e=!1!==n.component.onSortChanged(t)&&e),e},M.b,M.a)),e["\u0275did"](7,114688,null,0,P.a,[p.a],{modalTitle:[0,"modalTitle"],modalSortOptions:[1,"modalSortOptions"]},{sortChanged:"sortChanged"}),(n()(),e["\u0275eld"](8,0,null,null,0,"div",[["class","dropdown-divider"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,L)),e["\u0275did"](11,278528,null,0,d.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](12,0,null,null,0,"div",[["class","dropdown-divider"]],null,null,null,null,null)),(n()(),e["\u0275eld"](13,0,null,null,2,"div",[["class","d-flex flex-column justify-content-center align-items-center mt-4"]],null,null,null,null,null)),(n()(),e["\u0275eld"](14,0,null,null,1,"app-pagination",[],null,[[null,"pageChanged"]],function(n,l,t){var e=!0;return"pageChanged"===l&&(e=!1!==n.component.onPageChanged(t)&&e),e},k.b,k.a)),e["\u0275did"](15,638976,null,0,I.a,[],{totalItems:[0,"totalItems"],itemsPerPage:[1,"itemsPerPage"]},{pageChanged:"pageChanged"})],function(n,l){var t=l.component;n(l,1,0,t.bannerImageUrl),n(l,7,0,t.modalTitle,t.modalSortOptions),n(l,11,0,t.authors),n(l,15,0,t.pagination.totalItems,t.pagination.pageSize)},null)}var _=e["\u0275ccf"]("app-authors",N,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-authors",[],null,null,null,q,R)),e["\u0275did"](1,114688,null,0,N,[c.a,m.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),F=t("63mm"),z=t("HBl4"),U=t("CeUF"),T=function(){function n(n,l){this.route=n,this.quoteService=l,this.modalTitle="Sort Quotes",this.modalSortOptions=[{name:"Alphabetical",iconClassName:"fa fa-sort-alpha-asc",sortMode:{sortBy:"text",isSortAscending:!0}},{name:"Latest",iconClassName:"fa fa-clock-o",sortMode:{sortBy:"createdAt",isSortAscending:!1}},{name:"Most Love",iconClassName:"fa fa-heart",sortMode:{sortBy:"loveCount",isSortAscending:!1}}],this.quotes=[],this.sortMode={sortBy:"createdAt",isSortAscending:!0}}return n.prototype.ngOnInit=function(){var n=this;this.route.data.subscribe(function(l){n.author=l.author,n.quotes=l.quotes.items,n.pagination=l.quotes.pagination})},n.prototype.getQuotes=function(){var n=this;this.quoteService.getQuotes(this.pagination,this.sortMode,{author:this.author._id}).subscribe(function(l){n.quotes=l.items,n.pagination=l.pagination})},n.prototype.onPageChanged=function(n){this.pagination.pageNumber=n,this.getQuotes()},n.prototype.onSortChanged=function(n){this.sortMode=n,this.getQuotes()},n.prototype.getColorClass=function(n){return A.a.getColorClass(n)},n}(),j=e["\u0275crt"]({encapsulation:0,styles:[[".quotes-container[_ngcontent-%COMP%]{padding:30px 30px 10px}.banner-text[_ngcontent-%COMP%]{font-size:50px}"]],data:{}});function B(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","col-xl-3 col-lg-4 col-md-6"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"app-quote-card",[],null,null,null,F.b,F.a)),e["\u0275did"](2,245760,null,0,z.a,[g.a,U.a,h.a],{headerClasss:[0,"headerClasss"],quote:[1,"quote"]},null)],function(n,l){n(l,2,0,l.component.getColorClass(l.context.index),l.context.$implicit)},null)}function V(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"app-banner",[],null,null,null,y.b,y.a)),e["\u0275did"](1,114688,null,0,O.a,[b.c],{imageUrl:[0,"imageUrl"]},null),(n()(),e["\u0275eld"](2,0,null,0,2,"div",[["class","d-flex justify-content-center align-items-center"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,1,"h1",[["class","banner-text text-center"]],null,null,null,null,null)),(n()(),e["\u0275ted"](4,null,["",""])),(n()(),e["\u0275eld"](5,0,null,null,10,"div",[["class","quotes-container container-fluid"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,1,"app-sort-bar",[],null,[[null,"sortChanged"]],function(n,l,t){var e=!0;return"sortChanged"===l&&(e=!1!==n.component.onSortChanged(t)&&e),e},M.b,M.a)),e["\u0275did"](7,114688,null,0,P.a,[p.a],{modalTitle:[0,"modalTitle"],modalSortOptions:[1,"modalSortOptions"]},{sortChanged:"sortChanged"}),(n()(),e["\u0275eld"](8,0,null,null,0,"div",[["class","dropdown-divider"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,B)),e["\u0275did"](11,278528,null,0,d.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](12,0,null,null,0,"div",[["class","dropdown-divider"]],null,null,null,null,null)),(n()(),e["\u0275eld"](13,0,null,null,2,"div",[["class","d-flex flex-column justify-content-center align-items-center mt-4"]],null,null,null,null,null)),(n()(),e["\u0275eld"](14,0,null,null,1,"app-pagination",[],null,[[null,"pageChanged"]],function(n,l,t){var e=!0;return"pageChanged"===l&&(e=!1!==n.component.onPageChanged(t)&&e),e},k.b,k.a)),e["\u0275did"](15,638976,null,0,I.a,[],{totalItems:[0,"totalItems"],itemsPerPage:[1,"itemsPerPage"]},{pageChanged:"pageChanged"})],function(n,l){var t=l.component;n(l,1,0,t.author.photoUrl),n(l,7,0,t.modalTitle,t.modalSortOptions),n(l,11,0,t.quotes),n(l,15,0,t.pagination.totalItems,t.pagination.pageSize)},function(n,l){n(l,4,0,l.component.author.fullName)})}var Y=e["\u0275ccf"]("app-author-detail",T,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-author-detail",[],null,null,null,V,j)),e["\u0275did"](1,114688,null,0,T,[c.a,U.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),Q=e["\u0275crt"]({encapsulation:0,styles:[[".author-info-modal[_ngcontent-%COMP%]{width:70vw;max-width:500px;min-height:100px}"]],data:{}});function H(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","author-info-modal container"]],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,[" ","\n"]))],null,function(n,l){n(l,1,0,l.component.author.description)})}var D=e["\u0275ccf"]("app-author-info-modal",f,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-author-info-modal",[],null,null,null,H,Q)),e["\u0275did"](1,114688,null,0,f,[],null,null)],function(n,l){n(l,1,0)},null)},{author:"author"},{},[]),J=t("gIcY"),E=t("3zx5"),Z=t("4obl"),K=t("F/XL"),X=t("9Z1F"),$=function(){function n(n,l){this.authorService=n,this.alertService=l,this.defaultPagination={pageNumber:1,pageSize:8}}return n.prototype.resolve=function(n){var l=this;return this.authorService.getAuthors(this.defaultPagination).pipe(Object(X.a)(function(n){return l.alertService.error("Problem retrieving data"),Object(K.a)(null)}))},n}(),G=function(){function n(n,l,t){this.router=n,this.authorService=l,this.alertService=t}return n.prototype.resolve=function(n){var l=this,t=n.paramMap.get("id");return this.authorService.getAuthor(t).pipe(Object(X.a)(function(n){return l.alertService.error("Problem retrieving data"),l.router.navigate(["/authors"]),Object(K.a)(null)}))},n}(),W=function(){function n(n,l){this.quoteService=n,this.alertService=l,this.defaultPagination={pageNumber:1,pageSize:8},this.defaultSortMode={sortBy:"createdAt",isSortAscending:!0}}return n.prototype.resolve=function(n){var l=this,t=n.paramMap.get("id");return this.quoteService.getQuotes(this.defaultPagination,this.defaultSortMode,{author:t}).pipe(Object(X.a)(function(n){return l.alertService.error("Problem retrieving data"),Object(K.a)(null)}))},n}(),nn=t("QpxQ"),ln=t("S6T7"),tn=t("6bkY"),en=t("eF4m"),on=t("PCNd"),un=function(){};t.d(l,"AuthorsModuleNgFactory",function(){return an});var an=e["\u0275cmf"](o,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,a.a,r.a,r.c,r.d,r.n,r.e,r.b,i.a,s.a,_,Y,D]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[e.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,J.r,J.r,[]),e["\u0275mpd"](4608,J.d,J.d,[]),e["\u0275mpd"](4608,E.bb,E.bb,[]),e["\u0275mpd"](4608,E.k,E.k,[]),e["\u0275mpd"](4608,E.J,E.J,[]),e["\u0275mpd"](4608,E.gb,E.gb,[]),e["\u0275mpd"](4608,E.fb,E.fb,[e.ComponentFactoryResolver,e.NgZone,e.Injector,E.gb,e.ApplicationRef]),e["\u0275mpd"](4608,E.f,E.f,[]),e["\u0275mpd"](4608,E.w,E.w,[E.fb,e.ElementRef,e.ViewContainerRef,e.Renderer2]),e["\u0275mpd"](4608,E.T,E.T,[]),e["\u0275mpd"](4608,E.P,E.P,[]),e["\u0275mpd"](4608,Z.a,Z.a,[]),e["\u0275mpd"](4608,$,$,[m.a,h.a]),e["\u0275mpd"](4608,G,G,[c.k,m.a,h.a]),e["\u0275mpd"](4608,W,W,[U.a,h.a]),e["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),e["\u0275mpd"](1073742336,J.p,J.p,[]),e["\u0275mpd"](1073742336,J.g,J.g,[]),e["\u0275mpd"](1073742336,J.n,J.n,[]),e["\u0275mpd"](1073742336,c.o,c.o,[[2,c.u],[2,c.k]]),e["\u0275mpd"](1073742336,nn.c,nn.c,[]),e["\u0275mpd"](1073742336,ln.FileUploadModule,ln.FileUploadModule,[]),e["\u0275mpd"](1073742336,tn.a,tn.a,[]),e["\u0275mpd"](1073742336,E.h,E.h,[]),e["\u0275mpd"](1073742336,E.S,E.S,[]),e["\u0275mpd"](1073742336,E.X,E.X,[]),e["\u0275mpd"](1073742336,E.t,E.t,[]),e["\u0275mpd"](1073742336,E.O,E.O,[]),e["\u0275mpd"](1073742336,E.r,E.r,[]),e["\u0275mpd"](1073742336,E.l,E.l,[]),e["\u0275mpd"](1073742336,E.m,E.m,[]),e["\u0275mpd"](1073742336,E.q,E.q,[]),e["\u0275mpd"](1073742336,E.M,E.M,[]),e["\u0275mpd"](1073742336,E.V,E.V,[]),e["\u0275mpd"](1073742336,E.R,E.R,[]),e["\u0275mpd"](1073742336,E.s,E.s,[]),e["\u0275mpd"](1073742336,E.i,E.i,[]),e["\u0275mpd"](1073742336,E.o,E.o,[]),e["\u0275mpd"](1073742336,E.Y,E.Y,[]),e["\u0275mpd"](1073742336,E.a,E.a,[]),e["\u0275mpd"](1073742336,E.x,E.x,[]),e["\u0275mpd"](1073742336,en.a,en.a,[]),e["\u0275mpd"](1073742336,on.a,on.a,[]),e["\u0275mpd"](1073742336,un,un,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](256,nn.d,nn.e,[]),e["\u0275mpd"](256,E.b,{autoClose:!0},[]),e["\u0275mpd"](1024,c.i,function(){return[[{path:"",component:N,resolve:{authors:$}},{path:":id",component:T,resolve:{author:G,quotes:W}}]]},[])])})}}]);