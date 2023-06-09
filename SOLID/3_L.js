// Liskov substitution principle

// class Person {
//
// }
//
// class Member extends Person {
//     access() {
//         console.log('У тебя есть доступ')
//     }
// }
//
// class Guest extends Person {
//     isGuest = true
// }
//
// class Frontend extends Member {
//     canCreateFrontend() {}
// }
//
// class Backend extends Member {
//     canCreateBackend() {}
// }
//
// class PersonFromDifferentCompany extends Guest {
//     access() {
//         throw new Error('У тебя нет доступа! Иди к себе!')
//     }
// }
//
// function openSecureDoor(member) {
//     member.access()
// }
//
// openSecureDoor(new Frontend())
// openSecureDoor(new Backend())
// openSecureDoor(new PersonFromDifferentCompany()) // Here should be member

// ==============================================

class Component {
    isComponent = true
}

class ComponentWithTemplate {
    render() {
        return `<div>Component</div>`
    }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
    onInit(){}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    render() {
        throw new Error('Render is impossible here')
    }

    wrapComponent(component) {
        component.wrapped = true
        return component
    }
}

function renderComponent(component){
    console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())