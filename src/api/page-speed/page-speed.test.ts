import { app } from "../../app";
import chai from "chai";
import request, { Response } from "supertest";

const { get } = request(app);
const expect = chai.expect;
const base: string = "/page-speed";

const returnBody = (res: Response) => res.body;
describe("Page Speed", () => {
  it("should get a valid page speed response when given a valid url", async () => {
    const request: Response = await get(`${base}?url=https://www.iosh.co.uk/`)
      .expect(200)
      .expect("Content-Type", /json/);

    const body: any = returnBody(request);

    expect(body).to.have.keys([
      "title",
      "responseCode",
      "speedScore",
      "siteUrl"
    ]);

    expect(body.title).to.be.a("string");
    expect(body.responseCode).to.be.a("number");
    expect(body.speedScore).to.be.a("number");
    expect(body.siteUrl).to.be.a("string");
  });

  it("should return an error message when no request sent", async () => {
    const request: Response = await get(`${base}`)
      .expect(400)
      .expect("Content-Type", /json/);

    const body: any = returnBody(request);

    expect(body).to.have.keys(["title", "message", "status"]);

    expect(body.title)
      .to.be.a("string")
      .and.to.equal("Bad request");

    expect(body.message)
      .to.be.a("string")
      .and.to.equal("No website url passed with request");

    expect(body.status)
      .to.be.a("number")
      .and.to.equal(400);
  });

  it("should return an error message bad url sent", async () => {
    const request: Response = await get(
      `${base}?url=this is a proper invalid url`
    )
      .expect(500)
      .expect("Content-Type", /json/);

    const body: any = returnBody(request);
    expect(body).to.have.keys(["title", "message", "status"]);

    expect(body.title)
      .to.be.a("string")
      .and.to.equal("Internal Error");

    expect(body.message)
      .to.be.a("string")
      .and.to.equal("Something went wrong with your request");

    expect(body.status)
      .to.be.a("number")
      .and.to.equal(500);
  });
});
