import { title } from "@/components/primitives";
import SliderUser from "@/components/Slider";
import DefaultLayout from "@/layouts/default";

export default function ExplorePage() {
  return (
    <DefaultLayout>
      <div className="slider-container" style={{position:'relative',height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <SliderUser/>
      </div>
    </DefaultLayout>
  );
}
