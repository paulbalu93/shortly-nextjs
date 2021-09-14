import Image from "next/image";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
function Footer() {
  return (
    <div className="bg-very_dark_blue ">
      <div className="px-32 py-24 flex text-lg font-poppins">
        <div className="flex-col justify-start ">
          <Image src="/logo-footer.svg" width={150} height={40}></Image>
        </div>
        <div className="text-gray-400 ml-80">
          <h3 className="text-white  font-bold "> Features</h3>
          <div className="mt-5">
            <h3> Link Shortening</h3>
            <h3> Branded Links</h3>
            <h3> Analytics</h3>
          </div>
        </div>
        <div className="text-gray-400 ml-32">
          <h3 className="text-white  font-bold "> Features</h3>
          <div className="mt-5">
            <h3> Link Shortening</h3>
            <h3> Branded Links</h3>
            <h3> Analytics</h3>
          </div>
        </div>
        <div className="text-gray-400 ml-32">
          <h3 className="text-white  font-bold "> Features</h3>
          <div className="mt-5">
            <h3> Link Shortening</h3>
            <h3> Branded Links</h3>
            <h3> Analytics</h3>
            <h3> Contact</h3>
          </div>
        </div>
        <div className="text-white flex ml-32 ">
          <div>
            <FacebookIcon fontSize="large" />
          </div>
          <div className="ml-3">
            <TwitterIcon fontSize="large" />
          </div>
          <div className="ml-3">
            <PinterestIcon fontSize="large" />
          </div>
          <div className="ml-3">
            <InstagramIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
