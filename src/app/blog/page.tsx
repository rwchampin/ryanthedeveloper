

import PostInfiniteScroller from '@/components/PostInfiniteScroller'
import BasePage from '@/app/BasePage'
export default  function Page() {
  

    
    
  return (
    <BasePage
        title="Blog"
        subtitle="Web Development Blog, Tools, Tutorials, and more.  An amazing resource for web developers of all skill levels."

    >
        <PostInfiniteScroller />
        
    </BasePage>
  )
}
