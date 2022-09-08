import ArrayBufferConverter, {getBuffer} from "../index";

test("метод load", () => {
  const converter = new ArrayBufferConverter();
  const buffer = getBuffer();
  converter.load(buffer);
  expect(converter.buffer).toEqual(buffer);
});
  
test("метод toString", () => {
  const converter = new ArrayBufferConverter();
  const buffer = getBuffer();
  converter.load(buffer);
  const converterString = converter.toString();
  expect(converterString).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});