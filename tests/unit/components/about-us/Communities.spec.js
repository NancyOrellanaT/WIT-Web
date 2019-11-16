import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Communities from '@/components/about-us/Communities.vue'

describe('Communities', () => {
  let wrapper = shallowMount(Communities)
  
  it('show images of friendly communities', () => {
    const COMMUNITY_IMAGES = wrapper.vm.images
    
    for(let i = 0; i < COMMUNITY_IMAGES.length; i++) {
      assert.equal(wrapper.find('#imageCommunity' + i).exists(), true)
    }
  })
})
