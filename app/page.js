import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const listOfChallenges = ["/challenge1"];

  return (
    <div className="mt-10 ml-10">
      <h1 className="text-3xl font-bold">Figma Challanges</h1>
      <p className="font-light">
        Please click any challenge to visit it's own page
      </p>
      <hr className="my-5"></hr>
      <div className=" flex flex-row flex-wrap gap-5 mt-5">
        {listOfChallenges.map((challenge, index) => (
          <div className="border rounded-lg hover:shadow-2xl">
            <Link key={index} href={challenge} className="flex">
              <div>
                <Image
                  src="/ch1-main.png"
                  width={200}
                  height={140}
                  alt={`Challenge ${index}`}
                />
                <p className="p-2">Challenge {index + 1}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
