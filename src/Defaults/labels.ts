export const ANDROID_LABEL_COLOR_PALETTE = ['#FF9485', '#64C4FF', '#FFD429', '#DFAEF0', '#99B6C1', '#55CCB3', '#FF9DFF', '#D3A91D', '#6D7CCE', '#D7E752', '#00D0E2', '#FFC5C7', '#93CEAC', '#F74848', '#00A0F2', '#83E422', '#FFAF04', '#B5EBFF', '#9BA6FF', '#9368CF']
export const IPHONE_LABEL_COLOR_PALETTE = ['#A62C71', '#90A841', '#C1A03F', '#792138', '#AE8774', '#F0B330', '#B6B327', '#C69FCC', '#8B6990', '#FF8A8C', '#54C265', '#FF7B6B', '#26C4DC', '#57C9FF', '#74676A', '#7E90A3', '#5696FF', '#6E257E', '#7ACBA5', '#243640']
export const getColorByIndex = (colorIndex: number, system: 'ANDROID'|'IPHONE' = 'ANDROID') => {
	if(system === 'IPHONE') {
		return IPHONE_LABEL_COLOR_PALETTE[colorIndex]
	}

	return ANDROID_LABEL_COLOR_PALETTE[colorIndex]
}
