import Header from "@/components/landing/Header";

export default function landingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
    

  return(
    <div className="flex flex-col">
      <Header/>
             
        <main>{children}</main>
    </div>
  )
}
