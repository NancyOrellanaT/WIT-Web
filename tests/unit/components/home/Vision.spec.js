import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Vision from '@/components/home/Vision.vue'

describe('Vision', () => {
  let wrapper = shallowMount(Vision)
  
  it('show vision message', () => {
    assert.equal(wrapper.find('#labelMessage').exists(), true)
  })
})
