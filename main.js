const {
  list, vector, peek, pop, conj, map, assoc, zipmap,
  range, repeat, each, count, intoArray, toJs
} = mori;

const log = (...args) => {
	console.log(...args.map(toJs));
};

// canvas dimension
const [height, width] = [20,20];

const pixelSize = 10;

const to2D = (i) => vector(
	i % width,
	Math.floor(i/width)
);

const coords = map(to2D, range(height*width));

const colors = repeat('#fff');

const pixels = zipmap(coords, colors);