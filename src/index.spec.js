const tape = require("tape");
const { line } = require("d3-shape");
const circleCorners = require("../dist/d3-curve-circlecorners");

tape("line.curve(circleCorners)(data) generates the expected path", test => {
  var l = line().curve(circleCorners);
  test.equal(l([]), null);
  test.equal(l([[0, 1]]), "M0,1");
  test.equal(
    l([
      [0, 1],
      [1, 3]
    ]),
    "M0,1L1,3"
  );
  test.equal(
    l([
      [0, 1],
      [1, 3],
      [2, 1]
    ]),
    "M0,1L0.10557280900008392,1.2111456180001683A1,1,0,0,0,1.8944271909999157,1.2111456180001683L2,1"
  );
  test.equal(
    l([
      [0, 1],
      [1, 3],
      [2, 1],
      [3, 3]
    ]),
    "M0,1L0.10557280900008392,1.2111456180001683A1,1,0,0,0,1.8944271909999157,1.2111456180001683L1.8944271909999157,1.2111456180001683A0.11803398874989496,0.11803398874989496,0,0,1,2.1055728090000843,1.2111456180001683L3,3"
  );
  // test.equal(l(POINTS), RADIUS1_FIXTURE);
  test.end();
});

tape(
  "line.curve(circleCorners.radius(r))(data) allows radii to be specified, with a default of 1",
  test => {
    test.equal(
      line().curve(circleCorners.radius(1))([
        [0, 1],
        [1, 3],
        [2, 1],
        [3, 3]
      ]),
      line().curve(circleCorners)([
        [0, 1],
        [1, 3],
        [2, 1],
        [3, 3]
      ])
    );
    test.equal(
      line().curve(circleCorners.radius(20))([
        [50, 50],
        [200, 50],
        [100, 100],
        [100, 250],
        [400, 100]
      ]),
      "M50,50L115.2786404500042,50A20,20,0,0,1,124.22291236000336,87.88854381999832L111.05572809000084,94.47213595499957A20,20,0,0,0,100,112.36067977499789L100,217.6393202250021A20,20,0,0,0,128.94427190999915,235.52786404500043L400,100"
    );
    test.end();
  }
);

// tape(
//   "line.curve(circleCorners)(data) should end the path into a closed shape",
//   test => {}
// );
