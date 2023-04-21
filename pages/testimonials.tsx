import Head from "next/head";
import Layout from "../components/layouts/layout";
import Testimonial from "../components/carousels/testimonial";
import { motion } from "framer-motion";
import { sweepRight } from "../components/animations";

export default function Testimonials() {
  return (
    <Layout>
      <Head>
        <title>Testimonials | Finance & Accounting Solutions | ArightCo</title>
      </Head>
      <div className="text-center text-white bg-gradient-to-r from-blue to-blue-light px-3 pt-32 lg:pt-44 lg:text-xl lg:px-32 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sweepRight}
        >
          <div className="font-bold text-6xl">Testimonials</div>
          <div className="px-20 py-6">See what they&apos;re saying</div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-3 xl:mx-32 pt-24">
        <Testimonial
          logo="/testimonials/logos/azure.png"
          logo_alt="Azure logo"
          quote="ArightCo has been providing payroll, accounting, and tax services to Azure Biosystems Inc since 2014. I have found Arightco personnel to be knowledgeable, diligent, and highly professional in providing these services to Azure Biosystems. It has been a pleasure working with Sushama and her team."
          avatar="/testimonials/avatars/azure.jpg"
          avatar_alt="Alnoor Shivji avatar"
          name="Alnoor Shivji"
          title="Azure Biosystems (CEO and Chairman)"
        />

        <Testimonial
          logo="/testimonials/logos/freed.jpg"
          logo_alt="Replay logo"
          quote="I worked with the ArightCo team closely for the last 4 years until Replay was acquired by Intel and I don’t think I ever encountered such a high level of professionalism and service from a financial service provider."
          avatar="/testimonials/avatars/freed.png"
          avatar_alt="Oren Yogev avatar"
          name="Oren Yogev"
          title="Replay Technologies (CEO)"
        />

        <Testimonial
          logo="/testimonials/logos/newt.png"
          logo_alt="Newt Global logo"
          quote="Newt Global has been working with Arightco for a long time. Everyone at Arightco has been exceptional, prompt, and cooperative. Arightco is much more than a service provider, they are a trusted advisor."
          avatar="/testimonials/avatars/newt.jpeg"
          avatar_alt="Satish Goel avatar"
          name="Satish Goel"
          title="Newt Global (Founder & COOMember)"
        />

        <Testimonial
          logo="/testimonials/logos/edge.jpg"
          logo_alt="Edgewood logo"
          quote="I have been working with Sushama and the ArightCo team for about a decade. It has been an amazing experience. The team is extremely professional and knowledgeable of complex structures."
          avatar="/testimonials/avatars/edge.jpg"
          avatar_alt="Vishal Verma avatar"
          name="Vishal Verma"
          title="Edgewood (Senior General Partner)"
        />

        <Testimonial
          logo="/testimonials/logos/green.png"
          logo_alt="Greenwire logo"
          quote="The ArightCo team shared their knowledge and expertise with us and we felt very secure to give them the work with our complicated financials."
          avatar="/testimonials/avatars/deffemale.png"
          avatar_alt="Default Female avatar"
          name="Hanna"
          title="Greenwire"
        />

        <Testimonial
          logo="/testimonials/logos/cloud.png"
          logo_alt="CloudApp logo"
          quote="We’ve loved working with the Arightco team. They’ve thought of things we didn’t, and were always ahead of where we needed to be."
          avatar="/testimonials/avatars/cloud.png"
          avatar_alt="Scott Smith avatar"
          name="Scott Smith"
          title="CloudApp (CEO)"
        />

        <Testimonial
          logo="/testimonials/logos/sf.png"
          logo_alt="49ers Academy logo"
          quote="We were working with another finance company that wasn’t as involved with us… (any) changes we wanted to make would go over our heads because they were technical and didn’t have the time to sit down with us. With ArightCo, that experience has been completely different."
          avatar="/testimonials/avatars/sf.jpg"
          avatar_alt="Tahisha Victor avatar"
          name="Tahisha Victor"
          title="49ers Academy (Executive Director)"
        />

        <Testimonial
          logo="/testimonials/logos/bev.jpg"
          logo_alt="Bevri logo"
          quote="Over the past years, Arightco has been a great partner to Bevri. The whole team is very professional and responsive to our requests. That's the service you expect."
          avatar="/testimonials/avatars/bev.jpg"
          avatar_alt="Pavel Sirotin avatar"
          name="Pavel Sirotin"
          title="Bevri (CEO)"
        />

        <Testimonial
          logo="/testimonials/logos/sage.png"
          logo_alt="Sagetech logo"
          quote="Utilizing ArightCo’s accounting and human resource services has created value for Sagetech Avionics in multiple dimensions: reducing costs, improving the breadth of skills available to our leadership team, and eliminating non-core tasks from our daily calendars."
          avatar="/testimonials/avatars/sage.jpg"
          avatar_alt="Tom Furey avatar"
          name="Tom Furey"
          title="Sagetech (CEO & Board Member)"
        />

        <Testimonial
          logo="/testimonials/logos/sv.png"
          logo_alt="SV Academy logo"
          quote="ArightCo has been an extended finance and accounting arm for SVAcademy from the day we started the business. They've helped us scale the business to significant revenue by providing end-to-end support, from accounting management and data reporting to financial advisory. I recommend them highly."
          avatar="/testimonials/avatars/defmale.png"
          avatar_alt="Default Male avatar"
          name="Rahim Fazal"
          title="SV Academy"
        />

        <Testimonial
          logo="/testimonials/logos/great.png"
          logo_alt="Great Schools logo"
          quote="GreatSchools contracted with Arightco after our Director of Finance left on short notice. Not only did they help fill the gap, but, they were integral to our movement off of an archaic accounting system that no longer supported our needs. They not only assisted with the migration to Quickbooks, but ensured that the system met all of our accounting policies and procedures. We’ve now been with Arightco for just over two years and all of our financial operations run like clockwork, including our audit, tax preparation, and financial reporting to the Board of Directors. We are exceptionally pleased with their work ethic and support."
          avatar="/testimonials/avatars/great.png"
          avatar_alt="Leann Stewart avatar"
          name="Leann Stewart"
          title="Great Schools (VP Operations)"
        />

        <Testimonial
          logo="/testimonials/logos/fazing.png"
          logo_alt="Fazing Labs logo"
          quote="Arightco has been a fantastic partner, which I rarely say about partners. While their core bookkeeping is what I started working with them on, they also have dealt with complicated international tax issues and financings. And, I really appreciate their speed, expertise and reasonable pricing. I’ve used them at three companies now, and I have recommended them to friends and companies where I’ve invested."
          avatar="/testimonials/avatars/fazing.png"
          avatar_alt="Noah Kindler avatar"
          name="Noah Kindler"
          title="Fazing Labs (Founding Board Member)"
        />

        <div className="md:col-span-2 col-span-1">
          <Testimonial
            logo="/testimonials/logos/wow.png"
            logo_alt="Wow logo"
            quote="We have been working with ArightCo for almost 4 years and it is always a pleasure to work with their team. During the COVID Pandemic, the ArightCo team was key to securing government relief. ArightCo is proactive about providing resources and is always available for us with answers and solutions."
            avatar="/testimonials/avatars/wow.jpeg"
            avatar_alt="Hanoch Rosenn avatar"
            name="Hanoch Rosenn"
            title="Wow (CEO)"
          />
        </div>
      </div>
    </Layout>
  );
}
