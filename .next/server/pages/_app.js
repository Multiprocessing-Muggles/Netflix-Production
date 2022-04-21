/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase.ts":
/*!*********************!*\
  !*** ./firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDfszJ1LNYx-2jHDANuClfqA5ojZHgtmeg\",\n    authDomain: \"netflix-79293.firebaseapp.com\",\n    projectId: \"netflix-79293\",\n    storageBucket: \"netflix-79293.appspot.com\",\n    messagingSenderId: \"153357598184\",\n    appId: \"1:153357598184:web:cde1dc667401077f2d385d\"\n};\n// Initialize Firebase\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDTTtBQUNaO0FBQ1Y7QUFFdkMsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1LLGNBQWMsR0FBRztJQUNuQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLCtCQUErQjtJQUMzQ0MsU0FBUyxFQUFFLGVBQWU7SUFDMUJDLGFBQWEsRUFBRSwyQkFBMkI7SUFDMUNDLGlCQUFpQixFQUFFLGNBQWM7SUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7Q0FDckQ7QUFFRCxzQkFBc0I7QUFDdEIsTUFBTUMsR0FBRyxHQUFHLENBQUNWLHFEQUFPLEVBQUUsQ0FBQ1csTUFBTSxHQUFHYiwyREFBYSxDQUFDSyxjQUFjLENBQUMsR0FBR0osb0RBQU0sRUFBRTtBQUN4RSxNQUFNYSxFQUFFLEdBQUdYLGdFQUFZLEVBQUU7QUFDekIsTUFBTVksSUFBSSxHQUFHWCxzREFBTyxFQUFFO0FBRXRCLGlFQUFlUSxHQUFHO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS50cz85MmY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgZ2V0QXBwLCBnZXRBcHBzIH0gZnJvbSAnZmlyZWJhc2UvYXBwJ1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xyXG5cclxuLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXHJcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5RGZzekoxTE5ZeC0yakhEQU51Q2xmcUE1b2paSGd0bWVnXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcIm5ldGZsaXgtNzkyOTMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwibmV0ZmxpeC03OTI5M1wiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJuZXRmbGl4LTc5MjkzLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxNTMzNTc1OTgxODRcIixcclxuICAgIGFwcElkOiBcIjE6MTUzMzU3NTk4MTg0OndlYjpjZGUxZGM2Njc0MDEwNzdmMmQzODVkXCJcclxufTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gIWdldEFwcHMoKS5sZW5ndGggPyBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSA6IGdldEFwcCgpXHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKClcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwXHJcbmV4cG9ydCB7IGF1dGgsIGRiIH0iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFwcCIsImdldEFwcHMiLCJnZXRGaXJlc3RvcmUiLCJnZXRBdXRoIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJsZW5ndGgiLCJkYiIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.ts\n");

/***/ }),

/***/ "./hooks/useAuth.tsx":
/*!***************************!*\
  !*** ./hooks/useAuth.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n    user: null,\n    signUp: async ()=>{},\n    signIn: async ()=>{},\n    logout: async ()=>{},\n    error: null,\n    loading: false\n});\nconst AuthProvider = ({ children  })=>{\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const { 0: initialLoading , 1: setInitialLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, (user)=>{\n            if (user) {\n                // Logged in...\n                setUser(user);\n                setLoading(false);\n            } else {\n                // Not logged in...\n                setUser(null);\n                setLoading(true);\n                router.push(\"/login\");\n            }\n            setInitialLoading(false);\n        })\n    , [\n        _firebase__WEBPACK_IMPORTED_MODULE_4__.auth\n    ]);\n    const signUp = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((error)=>alert(error.message)\n        ).finally(()=>setLoading(false)\n        );\n    };\n    const signIn = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((error)=>alert(error.message)\n        ).finally(()=>setLoading(false)\n        );\n    };\n    const logout = async ()=>{\n        setLoading(true);\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth).then(()=>{\n            setUser(null);\n        }).catch((error)=>alert(error.message)\n        ).finally(()=>setLoading(false)\n        );\n    };\n    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({\n            user: user1,\n            signUp,\n            error: error1,\n            signIn,\n            loading,\n            logout\n        })\n    , [\n        user1,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: memoedValue,\n        children: !initialLoading && children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\hooks\\\\useAuth.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7UUFBQSxDQUFDLENBQ3RDQyxPQUFPLENBQUMsSUFBTWIsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUFBLENBQUM7S0FDcEM7SUFFRCxNQUFNTixNQUFNLEdBQUcsVUFBWTtRQUN6Qk0sVUFBVSxDQUFDLElBQUksQ0FBQztRQUVoQmxCLHNEQUFPLENBQUNPLDJDQUFJLENBQUMsQ0FDVm1CLElBQUksQ0FBQyxJQUFNO1lBQ1ZULE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDZCxDQUFDLENBQ0RXLEtBQUssQ0FBQyxDQUFDZixLQUFLLEdBQUtnQixLQUFLLENBQUNoQixLQUFLLENBQUNpQixPQUFPLENBQUM7UUFBQSxDQUFDLENBQ3RDQyxPQUFPLENBQUMsSUFBTWIsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUFBLENBQUM7S0FDcEM7SUFFQyxNQUFNYyxXQUFXLEdBQUczQiw4Q0FBTyxDQUMzQixJQUFNLENBQUM7WUFBRUksSUFBSSxFQUFKQSxLQUFJO1lBQUVDLE1BQU07WUFBRUcsS0FBSyxFQUFMQSxNQUFLO1lBQUVGLE1BQU07WUFBRUcsT0FBTztZQUFFRixNQUFNO1NBQUUsQ0FBQztJQUFBLEVBQ3hEO1FBQUNILEtBQUk7UUFBRUssT0FBTztLQUFDLENBQ2hCO0lBRUMscUJBQ0EsOERBQUNOLFdBQVcsQ0FBQ3lCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFRixXQUFXO2tCQUNyQyxDQUFDWCxjQUFjLElBQUlMLFFBQVE7Ozs7O2lCQUNQLENBQ3hCO0NBQ0Y7QUFFYyxTQUFTbUIsT0FBTyxHQUFHO0lBQzlCLE9BQU9oQyxpREFBVSxDQUFDSyxXQUFXLENBQUM7Q0FDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VBdXRoLnRzeD9mYmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBzaWduT3V0LFxyXG4gIFVzZXIsXHJcbn0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZSdcclxuXHJcbmludGVyZmFjZSBJQXV0aCB7XHJcbiAgdXNlcjogVXNlciB8IG51bGxcclxuICBzaWduVXA6IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+XHJcbiAgc2lnbkluOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPlxyXG4gIGxvZ291dDogKCkgPT4gUHJvbWlzZTx2b2lkPlxyXG4gIGVycm9yOiBzdHJpbmcgfCBudWxsXHJcbiAgbG9hZGluZzogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUF1dGg+KHtcclxuICB1c2VyOiBudWxsLFxyXG4gIHNpZ25VcDogYXN5bmMgKCkgPT4ge30sXHJcbiAgc2lnbkluOiBhc3luYyAoKSA9PiB7fSxcclxuICBsb2dvdXQ6IGFzeW5jICgpID0+IHt9LFxyXG4gIGVycm9yOiBudWxsLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG59KVxyXG5cclxuaW50ZXJmYWNlIEF1dGhQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoe2NoaWxkcmVufTogQXV0aFByb3ZpZGVyUHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbClcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtpbml0aWFsTG9hZGluZywgc2V0SW5pdGlhbExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoXHJcbiAgICAoKSA9PlxyXG4gICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgLy8gTG9nZ2VkIGluLi4uXHJcbiAgICAgICAgICBzZXRVc2VyKHVzZXIpXHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBOb3QgbG9nZ2VkIGluLi4uXHJcbiAgICAgICAgICBzZXRVc2VyKG51bGwpXHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEluaXRpYWxMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KSxcclxuICAgIFthdXRoXVxyXG4gIClcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcblxyXG4gICAgYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyQ3JlZGVudGlhbC51c2VyKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvci5tZXNzYWdlKSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzaWduSW4gPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgICAgICBzZXRVc2VyKHVzZXJDcmVkZW50aWFsLnVzZXIpXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGFsZXJ0KGVycm9yLm1lc3NhZ2UpKVxyXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuXHJcbiAgICBzaWduT3V0KGF1dGgpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBzZXRVc2VyKG51bGwpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGFsZXJ0KGVycm9yLm1lc3NhZ2UpKVxyXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSlcclxuICB9XHJcblxyXG4gICAgY29uc3QgbWVtb2VkVmFsdWUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHsgdXNlciwgc2lnblVwLCBlcnJvciwgc2lnbkluLCBsb2FkaW5nLCBsb2dvdXQgfSksXHJcbiAgICBbdXNlciwgbG9hZGluZ11cclxuICApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bWVtb2VkVmFsdWV9PlxyXG4gICAgICB7IWluaXRpYWxMb2FkaW5nICYmIGNoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsImF1dGgiLCJBdXRoQ29udGV4dCIsInVzZXIiLCJzaWduVXAiLCJzaWduSW4iLCJsb2dvdXQiLCJlcnJvciIsImxvYWRpbmciLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFVzZXIiLCJzZXRMb2FkaW5nIiwicm91dGVyIiwic2V0RXJyb3IiLCJpbml0aWFsTG9hZGluZyIsInNldEluaXRpYWxMb2FkaW5nIiwicHVzaCIsImVtYWlsIiwicGFzc3dvcmQiLCJ0aGVuIiwidXNlckNyZWRlbnRpYWwiLCJjYXRjaCIsImFsZXJ0IiwibWVzc2FnZSIsImZpbmFsbHkiLCJtZW1vZWRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useAuth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.tsx\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_3__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 3\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sunam\\\\Desktop\\\\Folder\\\\Netflix-Production\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRWlCO0FBQ1o7QUFFbkMsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0UsOERBQUNILDhDQUFVO2tCQUliLDRFQUFDRCx3REFBWTtzQkFFWCw0RUFBQ0csU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBRVQ7Ozs7O1lBQ1IsQ0FDWjtDQUNGO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2hvb2tzL3VzZUF1dGgnXHJcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tICdyZWNvaWwnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuKCBcclxuICAgIDxSZWNvaWxSb290PlxyXG5cclxuICAgIFxyXG4gIFxyXG4gIDxBdXRoUHJvdmlkZXI+XHJcblxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG5cclxuICAgICAgICA8L0F1dGhQcm92aWRlcj4gXHJcbiAgPC9SZWNvaWxSb290PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIlJlY29pbFJvb3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();