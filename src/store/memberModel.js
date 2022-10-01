import { action, persist } from "easy-peasy";

const member = persist({
    member: [
        {
            name: 'Ariful Islam',
            education: 'Kamil Pass',
            age: 28
        },
        {
            name: 'Rasel Mahmud',
            education: 'HSC',
            age: 25
        }
      ],
    
      addMember: action((state, payload)=>{
        state.member = [...state.member, payload]
      }),
      deleteMember: action((state, payload)=>{
        const newMembers = state.member.filter(item=> item.age !== payload)
        state.member = newMembers
      })
})

export default member