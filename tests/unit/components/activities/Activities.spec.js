import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Activities from '@/components/activities/Activity.vue'

describe('Activities', () => {
  let wrapper = shallowMount(Activities)
  
  it('check images of activities', () => {
    const ACTIVITIES = wrapper.vm.activities
    
    for(let i = 0; i < ACTIVITIES.length; i++) {
      assert.equal(wrapper.find('#imageActivity' + i).exists(), true)
    }
  })
  
})