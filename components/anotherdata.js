let details = [
    {
        id:1,
        role:"Enrolling students",
        hasAccess:1,
        summary:"View | Create | Edit | Delete",
        lastUpdated:1
    },
    {
        mainText:"All aspects in the financial details module",
        id:2,
        role:"Financial details",
        hasAccess:3,
        summary:"",
        lastUpdated:1,
        additionalData:{
            accessControls:{
                allAccess:{
                    title:"All access",
                    desc:"Can access all items"
                },
                restrictedAccess:{
                    title:"Restricted access",
                    desc:"Can access only assigned or created items"
                }
            },
            permissions:["View item in access","Edit item in access","Create item in access","Delete item in access"]
        }
    },
    {
        id:3,
        role:"Furniture order",
        hasAccess:2,
        summary:"View | Create ",
        lastUpdated:1
    },
    {
        id:4,
        role:"Technical equipment",
        hasAccess:2,
        summary:"View | Create ",
        lastUpdated:1
    },
    {
        id:5,
        role:"Organisational modification",
        hasAccess:1,
        summary:"View | Create | Edit | Delete",
        lastUpdated:1
    },
    {
        id:6,
        role:"Permissions and Access control",
        hasAccess:3,
        summary:"",
        lastUpdated:1
    }
]

export default details