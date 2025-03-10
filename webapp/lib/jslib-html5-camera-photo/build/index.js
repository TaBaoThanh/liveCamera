! function (e, t) {
	if ("object" === typeof exports && "object" === typeof module) module.exports = t();
	else if ("function" === typeof define && define.amd) define([], t);
	else {
		var n = t();
		for (var i in n)("object" === typeof exports ? exports : e)[i] = n[i]
	}
}(this, function () {
	return function (e) {
		function t(i) {
			if (n[i]) return n[i].exports;
			var r = n[i] = {
				i: i,
				l: !1,
				exports: {}
			};
			return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
		}
		var n = {};
		return t.m = e, t.c = n, t.d = function (e, n, i) {
			t.o(e, n) || Object.defineProperty(e, n, {
				configurable: !1,
				enumerable: !0,
				get: i
			})
		}, t.n = function (e) {
			var n = e && e.__esModule ? function () {
				return e.default
			} : function () {
				return e
			};
			return t.d(n, "a", n), n
		}, t.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, t.p = "", t(t.s = 4)
	}([function (e, t, n) {
		"use strict";
		n.d(t, "b", function () {
			return o
		}), n.d(t, "c", function () {
			return a
		});
		var i = n(1),
			r = n(7);
		n.d(t, "a", function () {
			return r.a
		}), n.d(t, "d", function () {
			return i.b
		});
		var o = i.a.FACING_MODES,
			a = i.a.IMAGE_TYPES
	}, function (e, t, n) {
		"use strict";
		var i = n(6);
		n.d(t, "a", function () {
			return i.a
		});
		var r = n(2);
		n.d(t, "b", function () {
			return r.a
		})
	}, function (e, t, n) {
		"use strict";

		function i(e, t) {
			if (!(t >= 0 && t <= 1)) throw new Error(t + " is invalid imageCompression, choose between: [0, 1]");
			if (!l.f.includes(e)) throw new Error(e + " is invalid imageType, choose between: " + l.f.join(", "));
			return !0
		}

		function r(e, t) {
			var n = {};
			try {
				i(e, t), n.imageType = e, n.imageCompression = t
			} catch (e) {
				console.error(e), console.error("default value of " + l.c.PNG + " is used"), n.imageType = l.c.PNG, n.imageCompression = null
			}
			return n
		}

		function o() {
			var e = window.navigator.platform,
				t = window.navigator.userAgent;
			return e || t
		}

		function a() {
			return "ontouchend" in document
		}

		function u(e, t, n) {
			var i = e * parseFloat(n);
			return {
				imageWidth: i,
				imageHeight: t / (e / i)
			}
		}

		function c(e, t, n) {
			return r(t, n).imageType === l.c.JPG ? n ? e.toDataURL(l.b[l.c.JPG], n) : e.toDataURL(l.b[l.c.JPG]) : e.toDataURL(l.b[t])
		}

		function s(e, t) {
			return e || t
		}

		function f() {
			var e = o();
			if (/iPad|iPhone|iPod/.test(e)) return !0;
			var t = a();
			return !(!/Mac/.test(e) || !t)
		}

		function d() {
			return {
				userAgent: window.navigator.userAgent,
				platform: window.navigator.platform,
				_getStringWithPlatform: o(),
				_getHasTouchEvents: a(),
				getIsIOS: f()
			}
		}
		t.c = u, t.b = c, t.e = s, t.d = f, t.a = d;
		var l = n(3)
	}, function (e, t, n) {
		"use strict";

		function i(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		n.d(t, "e", function () {
			return o
		}), n.d(t, "a", function () {
			return a
		}), n.d(t, "f", function () {
			return u
		}), n.d(t, "c", function () {
			return c
		}), n.d(t, "b", function () {
			return s
		}), n.d(t, "d", function () {
			return f
		});
		var r, o = ["user", "environment"],
			a = {
				USER: "user",
				ENVIRONMENT: "environment"
			},
			u = ["jpg", "png"],
			c = {
				PNG: "png",
				JPG: "jpg"
			},
			s = (r = {}, i(r, "jpg", "image/jpeg"), i(r, "png", "image/png"), r),
			f = {
				audio: !1,
				video: !0
			}
	}, function (e, t, n) {
		e.exports = n(5)
	}, function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = n(0);
		n.d(t, "FACING_MODES", function () {
			return i.b
		}), n.d(t, "IMAGE_TYPES", function () {
			return i.c
		}), n.d(t, "_getDebugPlatformInfo", function () {
			return i.d
		});
		var r = n(9);
		n.d(t, "downloadPhoto", function () {
			return r.a
		}), t.default = i.a
	}, function (e, t, n) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		n.d(t, "a", function () {
			return u
		});
		var r = n(2),
			o = n(3),
			a = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			u = function () {
				function e() {
					i(this, e)
				}
				return a(e, null, [{
					key: "getDataUri",
					value: function (e, t) {
						var n = t.sizeFactor,
							i = t.imageType,
							o = t.imageCompression,
							a = t.isImageMirror,
							u = e.videoWidth,
							c = e.videoHeight,
							s = Object(r.c)(u, c, n),
							f = s.imageWidth,
							d = s.imageHeight,
							l = document.createElement("canvas");
						l.width = f, l.height = d;
						var v = l.getContext("2d");
						return a && v.setTransform(-1, 0, 0, 1, l.width, 0), v.drawImage(e, 0, 0, f, d), Object(r.b)(l, i, o)
					}
				}, {
					key: "getWindowURL",
					value: function () {
						return window.URL || window.webkitURL || window.mozURL || window.msURL
					}
				}, {
					key: "getNavigatorMediaDevices",
					value: function () {
						var e = null,
							t = !(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia),
							n = !(!navigator.mozGetUserMedia && !navigator.webkitGetUserMedia);
						if (t) e = navigator.mediaDevices;
						else if (n) {
							var i = navigator.mozGetUserMedia || navigator.webkitGetUserMedia,
								r = {
									getUserMedia: function (e) {
										return new Promise(function (t, n) {
											i.call(navigator, e, t, n)
										})
									}
								};
							e = Object.assign(i, r)
						}
						return e
					}
				}, {
					key: "isSupportedFacingMode",
					value: function () {
						return e.getNavigatorMediaDevices().getSupportedConstraints().facingMode
					}
				}, {
					key: "getIdealConstraints",
					value: function (t, n) {
						if (!Object(r.e)(t, n)) return o.d;
						var i = e.getNavigatorMediaDevices().getSupportedConstraints();
						if (!i.width || !i.height) return console.error("Constraint width or height not supported! fallback to default resolution"),
							o.d;
						var a = void 0,
							u = void 0;
						if (t) {
							o.e.includes(t) ? a = t : u = {
								exact: t
							}
						}
						return {
							audio: !1,
							video: {
								facingMode: a,
								deviceId: u,
								width: n && n.width,
								height: n && n.height
							}
						}
					}
				}, {
					key: "getMaxResolutionConstraints",
					value: function () {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
							n = arguments[1];
						console.warn("getMaxResolutionConstraints() numberOfMaxResolutionTry:", n);
						var i = [{
								width: {
									min: 640
								}
							}, {
								width: {
									min: 800
								}
							}, {
								width: {
									min: 900
								}
							}, {
								width: {
									min: 1024
								}
							}, {
								width: {
									min: 1080
								}
							}, {
								width: {
									min: 1280
								}
							}, {
								width: {
									min: 1920
								}
							}, {
								width: {
									min: 2560
								}
							}, {
								width: {
									min: 3840
								}
							}],
							o = e.getIdealConstraints(t, {});
						if (0 === n) {
							if (Object(r.d)()) {
								console.warn("fallback to iOS constraints");
								return e.getIdealConstraints(t, {
									width: {
										min: 640,
										ideal: 3840
									},
									height: {
										min: 480,
										ideal: 2160
									}
								})
							}
							return o.video.advanced = i, o
						}
						if (n < i.length) {
							var a = i.slice(0, -n);
							return o.video.advanced = a, o
						}
						return null
					}
				}, {
					key: "FACING_MODES",
					get: function () {
						return o.a
					}
				}, {
					key: "IMAGE_TYPES",
					get: function () {
						return o.c
					}
				}]), e
			}()
	}, function (e, t, n) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		n.d(t, "a", function () {
			return c
		});
		var r = n(1),
			o = n(8),
			a = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function (t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}(),
			u = r.a.IMAGE_TYPES.PNG,
			c = function () {
				function e(t) {
					i(this, e), this.videoElement = t, this.stream = null, this.numberOfMaxResolutionTry = 0, this.settings = null, this.cameras = [],
						this.windowURL = r.a.getWindowURL(), this.mediaDevices = r.a.getNavigatorMediaDevices()
				}
				return a(e, [{
					key: "_getStreamDevice",
					value: function (e, t) {
						var n = this;
						return new Promise(function (i, o) {
							var a = r.a.getIdealConstraints(e, t);
							n.mediaDevices.getUserMedia(a).then(function (e) {
								n._gotStream(e), i(e)
							}).catch(function (e) {
								o(e)
							})
						})
					}
				}, {
					key: "_getStreamDeviceMaxResolution",
					value: function (e) {
						var t = this,
							n = r.a.getMaxResolutionConstraints(e, this.numberOfMaxResolutionTry);
						if (null == n) {
							var i = {};
							return this._getStreamDevice(e, i)
						}
						return new Promise(function (i, r) {
							t.mediaDevices.getUserMedia(n).then(function (e) {
								t._gotStream(e), i(e)
							}).catch(function (n) {
								setTimeout(function () {
									t.numberOfMaxResolutionTry += 1, t._getStreamDeviceMaxResolution(e).catch(function () {
										r(n)
									})
								}, 20)
							})
						})
					}
				}, {
					key: "_setVideoSrc",
					value: function (e) {
						if ("srcObject" in this.videoElement) this.videoElement.srcObject = e;
						else {
							var t = this.windowURL.createObjectURL(e);
							this.videoElement.src = t
						}
					}
				}, {
					key: "_setSettings",
					value: function (e) {
						this.settings = null;
						var t = e && e.getTracks ? e.getTracks() : [];
						t.length > 0 && t[0].getSettings && (this.settings = t[0].getSettings())
					}
				}, {
					key: "_enumerateCamerasPromise",
					value: function () {
						var e = this;
						return new Promise(function (t, n) {
							var i = [];
							e.mediaDevices.enumerateDevices().then(function (e) {
								e.forEach(function (e) {
									"videoinput" === e.kind && e.deviceId && i.push(e)
								}), t(i)
							}).catch(function (e) {
								n(e)
							})
						})
					}
				}, {
					key: "_gotStream",
					value: function (e) {
						this.stream = e, this._setSettings(e), this._setVideoSrc(e)
					}
				}, {
					key: "getCameraSettings",
					value: function () {
						return this.settings
					}
				}, {
					key: "enumerateCameras",
					value: function () {
						var e = this;
						return this.stream ? this._enumerateCamerasPromise() : this.stopCamera().then(function () {}).catch(function () {}).then(
							function () {
								var t = {
									video: !0
								};
								return e.mediaDevices.getUserMedia(t).then(function (e) {
									setTimeout(function () {
										e.getTracks().forEach(function (e) {
											e.stop()
										})
									}, 20)
								}).then(function () {}).catch(function () {}).then(function () {
									return e._enumerateCamerasPromise()
								})
							})
					}
				}, {
					key: "startCamera",
					value: function (e, t) {
						var n = this;
						return this.stopCamera().then(function () {}).catch(function () {}).then(function () {
							return n._getStreamDevice(e, t)
						})
					}
				}, {
					key: "startCameraMaxResolution",
					value: function () {
						var e = this,
							t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
						return this.numberOfMaxResolutionTry = 0, this.stopCamera().then(function () {}).catch(function () {}).then(function () {
							return e._getStreamDeviceMaxResolution(t)
						})
					}
				}, {
					key: "getDataUri",
					value: function (e) {
						var t = {
							sizeFactor: void 0 === e.sizeFactor ? o.c : e.sizeFactor,
							imageType: void 0 === e.imageType ? u : e.imageType,
							imageCompression: void 0 === e.imageCompression ? o.a : e.imageCompression,
							isImageMirror: void 0 === e.isImageMirror ? o.b : e.isImageMirror
						};
						return r.a.getDataUri(this.videoElement, t)
					}
				}, {
					key: "stopCamera",
					value: function () {
						var e = this;
						return new Promise(function (t, n) {
							e.stream && (e.stream.getTracks().forEach(function (e) {
								e.stop()
							}), e.videoElement.src = "", e.stream = null, e._setSettings(null), t()), n(Error("no stream to stop!"))
						})
					}
				}]), e
			}()
	}, function (e, t, n) {
		"use strict";
		n.d(t, "c", function () {
			return i
		}), n.d(t, "a", function () {
			return r
		}), n.d(t, "b", function () {
			return o
		});
		var i = 1,
			r = null,
			o = !1
	}, function (e, t, n) {
		"use strict";
		var i = n(10);
		n.d(t, "a", function () {
			return i.a
		})
	}, function (e, t, n) {
		"use strict";

		function i(e) {
			for (var t = atob(e.split(",")[1]), n = e.split(",")[0].split(":")[1].split(";")[0], i = new ArrayBuffer(t.length), r = new Uint8Array(
					i), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
			return new Blob([i], {
				type: n
			})
		}

		function r(e, t) {
			return e += "", e.length >= t ? e : new Array(t - e.length + 1).join("0") + e
		}

		function o(e) {
			var t = s.c.PNG;
			return "image/jpeg" === e && (t = s.c.JPG), t
		}

		function a(e, t, n) {
			return e + "-" + r(t, 4) + "." + o(n)
		}

		function u(e, t, n) {
			window.URL = window.webkitURL || window.URL;
			var i = document.createElement("a");
			i.download = a(t, n, e.type), i.href = window.URL.createObjectURL(e);
			var r = document.createEvent("MouseEvents");
			r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), i.dispatchEvent(r)
		}

		function c(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "photo",
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
			u(i(e), t, n)
		}
		t.a = c;
		var s = n(0)
	}])
});
//# sourceMappingURL=index.js.map