import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MisionParallax from '@/components/Home/MisionParallax.vue'

describe('MisionParallax', () => {
  let wrapper = shallowMount(MisionParallax)
  
  it('show mission parallax title', () => {
    assert.lengthOf(wrapper.find('#parallaxHometitle').text(), 21)
  })

  it('image parallax is visible', () => {
    assert.equal(wrapper.find('#parallaxHome').exists(), true)
  })

  it('check mission parallax description', () => {
    assert.isString(wrapper.find('#parallaxHomeDescription').text())
  })

})
