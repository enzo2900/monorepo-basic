type navElement = {
    id: number;
    name: string;
};

const navElements: navElement[] = [
    {
        id: 0,
        name: "Films",
    },
];

export default function NavBar() {
    return (
        <div className="bg-amber-500">
            {navElements.map((element) => (
                <NavButton key={element.id} navElement={element} />
            ))}
        </div>
    );
}

function NavButton({ navElement }: { navElement: navElement }) {
    return (
        <div>
            <button>{navElement.name}</button>
        </div>
    );
}
