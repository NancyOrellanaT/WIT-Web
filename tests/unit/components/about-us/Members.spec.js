import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Members from '@/components/about-us/Members.vue'

describe('Members', () => {
  let wrapper = shallowMount(Members)
  
  it('information about members page', () => {
    assert.equal(wrapper.find('#labelMembersTitle').text(), 'Miembros')
    assert.equal(wrapper.find('#labelMembersDescription').exists(), true)
    assert.equal(wrapper.vm.members.length, 6)
  })
})
