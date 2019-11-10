import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Metrics from '@/components/home/Metrics.vue'

describe('Metrics', () => {
  let wrapper = shallowMount(Metrics)
  
  it('show metric information: title, image, description', () => {
    const METRICS = wrapper.vm.components

    for(let i = 0; i < METRICS.length; i++) {
      assert.equal(wrapper.find('#label' + METRICS[i].id).exists(), true)
      assert.equal(wrapper.find('#image' + METRICS[i].id).exists(), true)
      assert.equal(wrapper.find('#description' + METRICS[i].id).exists(), true)
    }
  })
})
