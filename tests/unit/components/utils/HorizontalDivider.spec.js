import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HorizontalDivider from '@/components/utils/HorizontalDivider.vue'

describe('Horizontal divider', () => {
  let wrapper = shallowMount(HorizontalDivider)
  
  it('show horizontal divider', () => {
    assert.equal(wrapper.find('.block-divider').exists(), true)
  })
})
