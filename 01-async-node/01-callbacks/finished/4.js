function singTo({
  name,
  adjective,
  verb,
  chorus = f => f
}) {
  console.log(`la la la ${name}`);
  console.log(`${name} you're so ${adjective}`);
  console.log(`Can we ${verb} together forever?`);
  console.log(`la la la`);
  chorus();
  console.log(`la la la ${name}`);
  console.log(`${name} you're so ${adjective}`);
  console.log(`Can we ${verb} together forever?`);
  console.log(`la la la`);
  chorus();
  chorus();
}

const flo = {
  name: "Florence",
  adjective: "beautiful",
  verb: "do paperwork",
  chorus() {
    console.log("Sha na na, you're a person I know!");
  }
};

singTo(flo);
