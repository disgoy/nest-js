'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-ddb5a69a749a1a7a6f1372639555b959a960d0fa3870dfbc1c4e814375f62302b684912adb01a0db05f5e70e9982300bb5bf4ff5005252c2be75c712d1f34c36"' : 'data-bs-target="#xs-controllers-links-module-AppModule-ddb5a69a749a1a7a6f1372639555b959a960d0fa3870dfbc1c4e814375f62302b684912adb01a0db05f5e70e9982300bb5bf4ff5005252c2be75c712d1f34c36"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ddb5a69a749a1a7a6f1372639555b959a960d0fa3870dfbc1c4e814375f62302b684912adb01a0db05f5e70e9982300bb5bf4ff5005252c2be75c712d1f34c36"' :
                                            'id="xs-controllers-links-module-AppModule-ddb5a69a749a1a7a6f1372639555b959a960d0fa3870dfbc1c4e814375f62302b684912adb01a0db05f5e70e9982300bb5bf4ff5005252c2be75c712d1f34c36"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-ddb5a69a749a1a7a6f1372639555b959a960d0fa3870dfbc1c4e814375f62302b684912adb01a0db05f5e70e9982300bb5bf4ff5005252c2be75c712d1f34c36"' : 'data-bs-target="#xs-injectables-links-module-AppModule-ddb5a69a749a1a7a6f1372639555b959a960d0fa3870dfbc1c4e814375f62302b684912adb01a0db05f5e70e9982300bb5bf4ff5005252c2be75c712d1f34c36"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ddb5a69a749a1a7a6f1372639555b959a960d0fa3870dfbc1c4e814375f62302b684912adb01a0db05f5e70e9982300bb5bf4ff5005252c2be75c712d1f34c36"' :
                                        'id="xs-injectables-links-module-AppModule-ddb5a69a749a1a7a6f1372639555b959a960d0fa3870dfbc1c4e814375f62302b684912adb01a0db05f5e70e9982300bb5bf4ff5005252c2be75c712d1f34c36"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-5bf415a6edae44ddc48f5c168e2a862f610a917605262fdc2ce23e05e3a31819d360ead2cc946594e4c4af9a3ddb53090184c226a1692c3163e88f5f480dc4fa"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-5bf415a6edae44ddc48f5c168e2a862f610a917605262fdc2ce23e05e3a31819d360ead2cc946594e4c4af9a3ddb53090184c226a1692c3163e88f5f480dc4fa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-5bf415a6edae44ddc48f5c168e2a862f610a917605262fdc2ce23e05e3a31819d360ead2cc946594e4c4af9a3ddb53090184c226a1692c3163e88f5f480dc4fa"' :
                                            'id="xs-controllers-links-module-AuthModule-5bf415a6edae44ddc48f5c168e2a862f610a917605262fdc2ce23e05e3a31819d360ead2cc946594e4c4af9a3ddb53090184c226a1692c3163e88f5f480dc4fa"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-5bf415a6edae44ddc48f5c168e2a862f610a917605262fdc2ce23e05e3a31819d360ead2cc946594e4c4af9a3ddb53090184c226a1692c3163e88f5f480dc4fa"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-5bf415a6edae44ddc48f5c168e2a862f610a917605262fdc2ce23e05e3a31819d360ead2cc946594e4c4af9a3ddb53090184c226a1692c3163e88f5f480dc4fa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-5bf415a6edae44ddc48f5c168e2a862f610a917605262fdc2ce23e05e3a31819d360ead2cc946594e4c4af9a3ddb53090184c226a1692c3163e88f5f480dc4fa"' :
                                        'id="xs-injectables-links-module-AuthModule-5bf415a6edae44ddc48f5c168e2a862f610a917605262fdc2ce23e05e3a31819d360ead2cc946594e4c4af9a3ddb53090184c226a1692c3163e88f5f480dc4fa"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' :
                                            'id="xs-controllers-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' :
                                        'id="xs-injectables-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-2905f8d9b0df3a524cafb04df82b0870c693fb42d55c9cbce5a4f66cf1bb2e27e31188ec677c5cea7e4c1c4558b41255a99a6ffca27321cca9e9d88f4155e159"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-2905f8d9b0df3a524cafb04df82b0870c693fb42d55c9cbce5a4f66cf1bb2e27e31188ec677c5cea7e4c1c4558b41255a99a6ffca27321cca9e9d88f4155e159"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-2905f8d9b0df3a524cafb04df82b0870c693fb42d55c9cbce5a4f66cf1bb2e27e31188ec677c5cea7e4c1c4558b41255a99a6ffca27321cca9e9d88f4155e159"' :
                                            'id="xs-controllers-links-module-UsersModule-2905f8d9b0df3a524cafb04df82b0870c693fb42d55c9cbce5a4f66cf1bb2e27e31188ec677c5cea7e4c1c4558b41255a99a6ffca27321cca9e9d88f4155e159"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-2905f8d9b0df3a524cafb04df82b0870c693fb42d55c9cbce5a4f66cf1bb2e27e31188ec677c5cea7e4c1c4558b41255a99a6ffca27321cca9e9d88f4155e159"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-2905f8d9b0df3a524cafb04df82b0870c693fb42d55c9cbce5a4f66cf1bb2e27e31188ec677c5cea7e4c1c4558b41255a99a6ffca27321cca9e9d88f4155e159"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-2905f8d9b0df3a524cafb04df82b0870c693fb42d55c9cbce5a4f66cf1bb2e27e31188ec677c5cea7e4c1c4558b41255a99a6ffca27321cca9e9d88f4155e159"' :
                                        'id="xs-injectables-links-module-UsersModule-2905f8d9b0df3a524cafb04df82b0870c693fb42d55c9cbce5a4f66cf1bb2e27e31188ec677c5cea7e4c1c4558b41255a99a6ffca27321cca9e9d88f4155e159"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});