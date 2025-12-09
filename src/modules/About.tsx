import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="flex flex-col w-full gap-4 scroll-mt-16">
      <h2 className="inline-block border-b-2 border-white p-2 uppercase">
        ABOUT ME
      </h2>
      <div className="w-full flex flex-col justify-between items-center gap-4 lg:gap-0 lg:flex-row lg:mb-2.5">
        <div className="flex justify-center items-center w-3/4 h-[280px] lg:w-auto lg:h-[200px] xl:h-[230px] xl:ml-8">
          <Image
            alt="profile"
            src="https://avatars.githubusercontent.com/u/67266954?v=4"
            width={230}
            height={230}
            className="rounded-full h-full min-w-[200px] min-h-[200px] xl:min-w-[230px] xl:min-h-[230px] w-auto bg-white"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-2 md:items-end xl:items-center">
          <span className="w-[calc(100%-14px)] p-2 font-bold text-black bg-blue text-center lg:w-[83%]">
            FRONTEND DEVELOPER
          </span>
          <table className="w-full h-[100px] text-center border-spacing-2.5 border-separate lg:w-[85%]">
            <tbody>
              <tr>
                <td className="text-white w-1/2 p-2.5 border-2 border-white bg-dark-bg rounded font-bold shadow-card">
                  Artist
                </td>
                <td className="text-white w-1/2 p-2.5 border-2 border-white bg-dark-bg rounded font-bold shadow-card">
                  Musician
                </td>
              </tr>
              <tr>
                <td className="text-white w-1/2 p-2.5 border-2 border-white bg-dark-bg rounded font-bold shadow-card">
                  Writer
                </td>
                <td className="text-white w-1/2 p-2.5 border-2 border-white bg-dark-bg rounded font-bold shadow-card">
                  Tabletop Game Designer
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* OTHER SKILLS */}
      <h3 className="inline-block p-2 uppercase">OTHER SKILLS</h3>
      <table className="w-full h-[100px] text-center border-spacing-2.5 border-separate">
        <tbody>
          <tr>
            <td className="text-white w-1/2 p-4 bg-dark-bg border border-white rounded shadow-card">
              Illustration
            </td>
            <td className="text-white w-1/2 p-4 bg-dark-bg border border-white rounded shadow-card">
              Writing
            </td>
          </tr>
          <tr>
            <td className="text-white w-1/2 p-4 bg-dark-bg border border-white rounded shadow-card">
              Sound Engineering
            </td>
            <td className="text-white w-1/2 p-4 bg-dark-bg border border-white rounded shadow-card">
              Image Editing
            </td>
          </tr>
          <tr>
            <td className="text-white w-1/2 p-4 bg-dark-bg border border-white rounded shadow-card">
              Logic X
            </td>
            <td className="text-white w-1/2 p-4 bg-dark-bg border border-white rounded shadow-card">
              Ableton Live
            </td>
          </tr>
          <tr>
            <td className="text-white w-1/2 p-4 bg-dark-bg border border-white rounded shadow-card">
              Procreate
            </td>
            <td className="text-white w-1/2 p-4 bg-dark-bg border border-white rounded shadow-card">
              Photoshop
            </td>
          </tr>
        </tbody>
      </table>

      {/* INTERESTS */}
      <h3 className="inline-block p-2 uppercase">INTERESTS</h3>
      <table className="w-full h-[100px] text-center border-spacing-2.5 border-separate">
        <tbody>
          <tr>
            <td className="text-white w-full p-4 bg-dark-bg border border-white rounded shadow-card">
              Tabletop Games
            </td>
          </tr>
          <tr>
            <td className="text-white w-full p-4 bg-dark-bg border border-white rounded shadow-card">
              App Integration for Tabletop Games
            </td>
          </tr>
          <tr>
            <td className="text-white w-full p-4 bg-dark-bg border border-white rounded shadow-card">
              Videogames
            </td>
          </tr>
          <tr>
            <td className="text-white w-full p-4 bg-dark-bg border border-white rounded shadow-card">
              Music
            </td>
          </tr>
          <tr>
            <td className="text-white w-full p-4 bg-dark-bg border border-white rounded shadow-card">
              Sound Recording and Production
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
