import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Carousel from '@/components/home/Carousel.vue'

describe('Carousel', () => {
  let wrapper = shallowMount(Carousel)
  
  it('show images of friendly communities', () => {
    const CAROUSEL_IMAGES = wrapper.vm.images

    for(let i = 0; i < CAROUSEL_IMAGES.length; i++) {
      assert.equal(wrapper.find('#' + CAROUSEL_IMAGES[i].id).exists(), true)
    }
  })

  it('carousel button is visible in component and contain correct text', () => {
    assert.equal(wrapper.find('#buttonCarousel').exists(), true)
    assert.equal(wrapper.find('#buttonCarousel').text(), 'Lorem ipsum')
  })

})
