const { callBack } = require("./util.js");

const dummyRawMetadata = [
  {
    user_id: "user#2",
    FID: "dummy_FID",
    plant_date: "2020-07-01",
    harvest_date: "2020-08-01",
    area_cultivated: 10.0,
    length_cultivated: 5.0,
    harvest_authentication: "dummy_auth",
    emission_factor: 1.0,
    emission_reduction: 1.0,
    project: "dummy_project",
    image_filename_1: "qOjCYSr2omWH1mYyV4VehNQ7YZY2_2022_08_01_1.jpg",
    // image_filename_2: "qOjCYSr2omWH1mYyV4VehNQ7YZY2_2022_08_01_1.jpg",
    // image_filename_3: "qOjCYSr2omWH1mYyV4VehNQ7YZY2_2022_08_01_1.jpg",
    image_filename_2: "qOjCYSr2omWH1mYyV4VehNQ7YZY2_2023_02_18_1.jpg",
    // image_filename_3: "qOjCYSr2omWH1mYyV4VehNQ7YZY2_2023_02_19_1.jpg",
    // image_filename_4: "qOjCYSr2omWH1mYyV4VehNQ7YZY2_2023_02_19_2.jpg",
    // image_filename_5: "yl6ty40LT4hibm3ddHXVTwU4qkm1_2023_01_04_1.jpg",
  },
];

const main = async () => {
  const id = await callBack(dummyRawMetadata[0]);
  console.log("id: " + id);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
