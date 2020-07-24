function umbrella(weather) {
	let homeUmbrellas = 0
	let workUmbrellas = 0
	const umbrellaWeather = ['rainy', 'thunderstorms']

	for (let i = 0; i < weather.length; i++) {
		if (umbrellaWeather.includes(weather[i])) {
			// home
			if (i % 2 === 0) {
				if (!homeUmbrellas) {
					workUmbrellas++
				} else {
					homeUmbrellas--
					workUmbrellas++
				}
				// work
			} else {
				if (!workUmbrellas) {
					homeUmbrellas++
				} else {
					workUmbrellas--
					homeUmbrellas++
				}
			}
		}
	}

	return homeUmbrellas + workUmbrellas
}

test('minimum numbers of umbrellas', () => {
	expect(umbrella(['rainy', 'rainy', 'rainy', 'rainy'])).toBe(1)
})
