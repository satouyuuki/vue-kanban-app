import Vue from 'vue'
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'
import { expect } from 'chai'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    expect(mount(HelloWorld).find('.hello h1').text())
      .to.equal('Welcome to Your Vue.js App')
  })
})
