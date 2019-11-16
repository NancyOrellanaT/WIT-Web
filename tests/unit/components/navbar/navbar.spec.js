import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar/Navbar.vue'

describe('Navbar', () => {
  let wrapper = shallowMount(Navbar)

  it('check if all navbar elements are visible', () => {
    const OPTIONS = wrapper.vm.options

    for(let i = 0; i < OPTIONS.length; i++) {
      assert.equal(wrapper.find('#' + OPTIONS[i].id).exists(), true)
    }
  })
})
