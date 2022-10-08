const Layout = (props: any) => {
    return (
        <div className = "flex">
            <div className = "max-w-3xl m-auto">{props.children}</div>
        </div>
    );
};

export default Layout;