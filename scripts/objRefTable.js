const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.HTMLElement,
		C3.Plugins.HTMLElement.Cnds.OnClickedClass,
		C3.Plugins.HTMLElement.Acts.SetContent
	];
};
self.C3_JsPropNameTable = [
	{HTMLElement: 0}
];

self.InstanceType = {
	HTMLElement: class extends self.IHTMLElementInstance {}
}